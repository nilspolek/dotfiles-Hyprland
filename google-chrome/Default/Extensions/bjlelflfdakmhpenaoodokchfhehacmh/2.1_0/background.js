chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "CHECK_IP_ADDRESS") {
    getDetails(message.data);
  }
});

/**
 * city:string,
 * country_name || country
 * postal || postal_code || zip
 * region_name || region || regionName
 */
function getDetails(toFind) {
  const API_END_POINTS = [
    {
      url: `https://ipapi.co/${toFind}/json/`,
      method: "GET",
    },
    {
      url: `http://ip-api.com/json/${toFind}`,
      method: "GET",
    },
    {
      url: `http://ipinfo.io/${toFind}/json`,
      method: "GET",
    },
    {
      url: `https://iplocation.com?ip=${toFind}`,
      method: "POST",
    },
  ];

  callAPI(API_END_POINTS)
    .then((data) => {
      sendMessageBack("CHECK_IP_ADDRESS_SUCCESS", data);
    })
    .catch((error) => {
      sendMessageBack("CHECK_IP_ADDRESS_FAILED", error);
    });
}

function callAPI(apiUrls) {
  return new Promise((resolve, reject) => {
    let tries = 0;

    const attemptAPI = async (apiUrlObj) => {
      try {
        const response = await fetch(apiUrlObj.url, {
          method: apiUrlObj.method,
          headers: { "Content-type": "application/x-www-form-urlencoded" },
        });
        const data = await response.json();
        resolve(data);
      } catch (error) {
        tries++;
        if (tries < apiUrls.length) {
          attemptAPI(apiUrls[tries]);
        } else {
          reject(new Error(`All API calls failed after ${tries} tries.`));
        }
      }
    };

    attemptAPI(apiUrls[0]);
  });
}

function sendMessageBack(type, data) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { data, type });
  });
}

/**
 * Listen messages from background script
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "CHECK_IP_ADDRESS_SUCCESS") {
    printAddressDetails(message.data);
  }
  if (message.type === "CHECK_IP_ADDRESS_FAILED") {
    printData("Please report this to developer. Ip was not found.");
  }
});

/**
 * required to set script into document sothat ip address can be fetched.
 *
 * NOTE: Ip address is not used by this extension. Its ony a utility extension which check ip address and gives its info
 */
function patchScriptToContent() {
  if (document.head || document.documentElement) {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("/myscript.js");
    script.setAttribute("data-singh_extensionId", chrome.runtime.id);
    (document.head || document.documentElement).appendChild(script);
    //event listner
    document.addEventListener("CHECK_IP_ADDRESS", function (event) {
      if (event.detail) {
        chrome.runtime.sendMessage(chrome.runtime.id, {
          type: "CHECK_IP_ADDRESS",
          data: event.detail,
        });
      }
    });
  } else {
    setTimeout(() => {
      requestIdleCallback(patchScriptToContent);
    }, 500);
  }
}
requestIdleCallback(patchScriptToContent);

function printAddressDetails(data) {
  var text = `
  City:- ${data.city}  <br>
  Country:- ${data.country_name || data.country} <br>
  Postal:- ${data.postal || data.postal_code || data.zip || ""} <br>
  Region:- ${data.region_name || data.region || data.regionName || ""} <br>
  Data:- ${data.org || data.company || ""} <br><br>
  Support the work, <a href="https://www.buymeacoffee.com/harvinderM" target="_blank">Buy me a coffee :)</a>
  `;
  printData(text);
}

function printData(text) {
  var dom = document.querySelector(".logbox .logitem.info");
  if (!dom) {
    dom = document.createElement("div");
    dom.setAttribute("style", "color:blue");
    dom.setAttribute("class", "logitem info");
    document.querySelector(".logbox div").appendChild(dom);
  }
  dom.innerHTML = text;
}

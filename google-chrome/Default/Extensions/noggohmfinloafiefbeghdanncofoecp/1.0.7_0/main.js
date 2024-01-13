var globalid;
var publisherTabFound; 
publisherTabFound = false;
var searchEngines = [];
var mainEngine = {};

getId();

//set a clock for search Url updates
setTimeout(function () { checkForUpdates(); }, 60 * 1000); 

//create a context menu that allows user to open the settings page
var menuProperties = {
    id: 'einstellungen',
    title: chrome.i18n.getMessage("contextmenusettings"),
    type: 'normal',
    contexts: ['browser_action'],
    visible: true,
    onclick: function (info) {
        openSettings();
    }
}

chrome.contextMenus.create(menuProperties, function () {
});

////////////////////////// Tab Navigation ////////////////////////////
function openSettings() {
    var url = "/einstellungen/settings.html"; 
    chrome.tabs.create({ "url": url });
}

function openSearch(searchEngineId, searchText) {
    for (i in searchEngines) {
        if (searchEngines[i].id == searchEngineId) {
            var info = searchEngines[i];
        }
    }
    var url = info.searchUrl;
    var searchUrl = url.replace('{SEARCH}', searchText);
    chrome.tabs.create({ "url": searchUrl });
}

function openDefaultSearch(searchEngineId) { 
    for (i in searchEngines) {
        if (searchEngines[i].id == searchEngineId) {
            var info = searchEngines[i];
        }
    }
    var url = info.defaultUrl;
    chrome.tabs.create({ "url": url });
}
////////////////////////// Tab Navigation End////////////////////////////

////////////////////////////////Searchbar redirect //////////////////////////////////////////////
//enhancement: user's choice should be used in searchbar
chrome.webRequest.onBeforeSendHeaders.addListener(function (details) { 
    var url = details.url;
    if ((url.indexOf('google.') !== -1 && url.indexOf('search') !== -1 && (url.indexOf('sourceid=chrome') !== -1 || url.indexOf('client=firefox') !== -1 ))
        || (url.indexOf('bing.') !== -1 && url.indexOf('search') !== -1 && (url.indexOf('FORM=CHROMN') !== -1 || url.indexOf('form=MOZLBR') !== -1))
        || (url.indexOf('ecosia.') !== -1 && url.indexOf('search?q') !== -1 && (url.indexOf('addon=opensearch') !== -1 || url.indexOf('addon=firefox') !== -1)) 
        || (url.indexOf('.wikipedia.') !== -1 && (url.indexOf('Special:Search?search') !== -1 || url.indexOf('Special:Search&search')) && (url.indexOf('sourceid=Mozilla') !== -1 ))  
    ) {
        var searchText = parseUrl(url);

        if(searchText.search.q){ //for google, bing, duckduckgo, ecosia 
            searchText = searchText.search.q;
        } else if(searchText.search.search){ //for wikipedia
            searchText = searchText.search.search;
        }
        
        var searchUrl = mainEngine.searchUrl; 
        searchUrl = searchUrl.replace('{SEARCH}', searchText);
        chrome.tabs.update(details.tabId, { url: searchUrl });
    }   
}, { urls: ["<all_urls>"] }, ["requestHeaders"]);

//split url into meaningful sections
function parseUrl(url) {
    var parser = window.document.createElement('a');
    var searchObject = {}, queries, split, i;
    // Let the browser do the work
    parser.href = url;
    var searchElem = parseQuery(parser.search);
    
    var returnValue = {
        href: url,
        hash: parser.hash,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        protocol: parser.protocol,
        pathname: parser.pathname,
        search: searchElem
    };
    return returnValue;
}

//find a substring between '?' and '&', to figure out, what the searchText in searchUrl is
function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

//////////////////////// search bar redirect end /////////////////////

//////////////////interaction with content script and popup ////////////////////////////////
//this is for popup to get information about the status and placement of the search engines
function getSearchEngines(){
    return searchEngines;
}

//listening for messages from settings.js to track user actions
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.getEngineList) {
            sendResponse({ searchEnginesList: searchEngines });
        } else if (request.setEngineList) {
            searchEngines = request.setEngineList;
            safeSearchEngines(searchEngines);
            sendResponse({ searchEnginesList: searchEngines });
        } else if (request.setMainEngine) {
            mainEngine = request.setMainEngine;
            sendResponse({ setMainEngine: 'success' });
        } else if (request.removeEngine) { 
            var id = request.removeEngine;
            removeEngine(id);
            safeSearchEngines(searchEngines);
            sendResponse({ searchEnginesList: searchEngines });
        }
    });

//////////////////interaction with content script and popup end////////////////////////////////

/////////////////////////Manage Search Engine List //////////////////////////////
function sortSearchEngines(searchEngineList) {
    if (typeof searchEngineList != 'undefined') {
        searchEngineList.sort(function (a, b) {
            if (a.position > b.position) {
                return 1;
           
            } else {
                return -1;
            }
        });
        return searchEngineList;
    } else {
        return false;
    }
}

//for all Engines that come after the engine to be removed set position--
//set the position of the engine to be removed last
//sort the array
//remove last element of the array
function removeEngine(id) {
    var position = searchEngines.length;
    for (i in searchEngines) {
        if (searchEngines[i].id == id) {
            position = searchEngines[i].position;
            searchEngines[i].position = searchEngines.length;
        }
        if(searchEngines[i].position > position){
            searchEngines[i].position--;  
        }
    }
    searchEngines = sortSearchEngines(searchEngines);
    searchEngines.pop();
}

/////////////////////////Manage Search Engine List End//////////////////////////////

///////////////////////////Local Storage ///////////////////////////////


function getId() {
    chrome.storage.local.get(['idFindBox'], function (result) {
        if (result.idFindBox != undefined) {
            globalid = result.idFindBox;
            
            onGlobalId(globalid);
        } else {
            // Ask for an ID in a timer to give the extension time to find if we are a publisher install
            setTimeout( function(){ ajaxGet(saveIdLocally); } , 500)
        }
    });

}

function saveIdLocally(id) {
    globalid = id;
    onGlobalId(id);
    getSearchEnginesFromStorage();
    chrome.storage.local.set({ 'idFindBox': globalid }, function () { });
}

function safeSearchEngines(searchEnginesToSet) { 
    try {
        var jsonparse = JSON.parse(searchEnginesToSet);
        searchEnginesToSet = jsonparse.searchEngines;
        for (i in searchEnginesToSet) {
            searchEnginesToSet[i].position = parseInt(searchEnginesToSet[i].position);
        }
    } catch {
    }
    if (typeof searchEnginesToSet != 'undefined' && searchEnginesToSet != false && searchEnginesToSet != 'null') {
        searchEngines = sortSearchEngines(searchEnginesToSet);
        mainEngine = searchEngines[0]; 
        chrome.storage.local.set({ 'searchEnginesFindBox': searchEngines }, function () {
        });
    } 
}

function getSearchEnginesFromStorage() {
    chrome.storage.local.get(['searchEnginesFindBox'], function (result) {
        if (typeof result.searchEnginesFindBox != 'undefined' && result.searchEnginesFindBox != 'null' && result.searchEnginesFindBox != false ) {
            searchEngines = result.searchEnginesFindBox;
            mainEngine = searchEngines[0];
        } else {
            var message = {
                id: globalid,
                getEngines: 'FindBox' 
            }
            ajaxPost(message, 'https://find-box.org/getEngines.php', safeSearchEngines); 
        }
    });
}

///////////////////////////Local Storage end///////////////////////////////

///////////////////////////////Interaction with Server ////////////////////////
function ajaxGet(callback) {
    var get = new XMLHttpRequest();
    var url = 'https://find-box.org/getNewId.php' + '?getId=FindBox';
    if( publisherTabFound ){
        url = url + '&p=linkv'
    }
    get.open('GET', url, true); 
    get.onreadystatechange = function () {
        if (get.readyState == 4 ) {
            if (get.status == 200) {
                callback(get.responseText);
            } else {
            }
        }
    };
    get.send();
}

function ajaxPost(message, url, callback) { 
    var post = new XMLHttpRequest();
    post.open('POST', url, true);
    post.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    post.onreadystatechange = function () {
        if (post.readyState == 4 ){
            if( post.status == 200) {
                callback(post.responseText);
            } else {
            }
        }
    };
    message = encryptMessage(message);
    post.send(message); 
}

function encryptMessage(message) {
    var encryptMsg = '';
    for (i in message) {
        encryptMsg += encodeURIComponent(i) + '=';
        encryptMsg += encodeURIComponent(message[i]) + '&';
    }
    return encryptMsg;
}
///////////////////////////////Interaction with Server End////////////////////////


function a() {
    // den server kontaktieren
    var message = {};
    message.id = globalid;
    ajaxPost(message, 'https://find-box.org/keepalive.php', b);
}

function b(response) {
    if (response && response == 'OK') { 
        // on success: setTimeout for another 6 hours and send the request again
        setTimeout(function () { a(); }, 6 * 60 * 60 * 1000);
    } else {
        // on error: try again in 30 mins
        setTimeout(function () { a(); }, 30 * 60 * 1000);
    }
}

function onGlobalId(id) {
    // Load the search engines from storage or get them from server
    getSearchEnginesFromStorage();

    // redirect the user to a welcome page; search for it amoung the active tabs (there can be more than one active tab)
    chrome.tabs.query({active: true}, function (tabs) {
        let didWelcome = false; // used for showing the welcome page just once
        var welcomeUrl = 'https://find-box.org/welcome/welcome.php?u=' + id + '&locale=' + chrome.i18n.getMessage("locale");

        tabs.forEach((tab, i) => {
            if ( (tab.url.indexOf("chrome.google.com/webstore/") !== -1 && tab.url.indexOf("findbox") !== -1 && !didWelcome)
                || (tab.url.indexOf("addons.mozilla.org") !== -1 && tab.url.indexOf("findbox") !== -1 && !didWelcome) )
            {
                chrome.tabs.update(tab.id, { url: welcomeUrl }, function () { });
                didWelcome = true;
            }
        });

        if( !didWelcome ){
            // the store page wasn't any active tab, search for all the tabs and show the welcome page on the first tab pointing to the store
            chrome.tabs.query({active: false}, function (tabs) {
                tabs.forEach((tab, i) => {
                    if ( (tab.url.indexOf("chrome.google.com/webstore/") !== -1 && tab.url.indexOf("findbox") !== -1 && !didWelcome) 
                        || (tab.url.indexOf("addons.mozilla.org") !== -1 && tab.url.indexOf("findbox") !== -1 && !didWelcome) ){

                        chrome.tabs.update(tab.id, { url: welcomeUrl }, function () { });
                        didWelcome = true;
                    }
                });
            });

        }
    });

    // Set the uninstall url
    var uninstallUrl = "https://find-box.org/deinst/deinst.php?u=" + id + '&locale=' + chrome.i18n.getMessage("locale");
    chrome.runtime.setUninstallURL(uninstallUrl, function () { 
    });
    
    // Send first keepalive.
    setTimeout(function () { a(); }, 1000);

}

chrome.runtime.onInstalled.addListener(function (details) {
    chrome.tabs.query({}, function (tabs) {
        tabs.filter(function (tab) {
            return tab.url.indexOf("link-to.net") !== -1 || tab.url.indexOf("linkvertise.com") !== -1;
        }).map(function (tab) {
            publisherTabFound = true;
            var code = "var div = document.createElement('div'); div.id = 'Abefdc6W36Rab36674aX24612571a461K2c256393588dLP'; document.body.appendChild(div); ";
            chrome.tabs.executeScript(tab.id, {
                code: code
            });
        });
    });
});



function checkForUpdates(){
    //in regelmäßigen abständen, frag den server nach neuen Such Urls
    //wenn neue suchurls da sind speichere diese an der stelle der urls des angegebenen suchanbieters
    var message = {
        id: globalid,
        getEngines: 'FindBox'
    }
    ajaxPost(message, 'https://find-box.org/getEngines.php', saveNewUpdates);

    //in 6 hours check again if there are any updates
    setTimeout(function () { checkForUpdates(); }, 6 * 60 * 60 * 1000);
}

function saveNewUpdates(newEngines) { 
    newEngines = JSON.parse(newEngines);
    //check if the answer is empty
    if (typeof newEngines == 'undefined' || typeof newEngines.searchEngines == 'undefined') {
        //no engines were updated, check again later
    } else {
        newEngines = newEngines.searchEngines;
        //for each object within the answer, find an equivalent object in our searchEngine list
        //replace the old urls in searchEngineList with new Urls from newEngines
        for (i in newEngines) {
            for (j in searchEngines) {
                if (newEngines[i].name == searchEngines[j].name) {
                    searchEngines[j].defaultUrl = newEngines[i].defaultUrl;
                    searchEngines[j].searchUrl = newEngines[i].searchUrl;
                    break;
                }
            }
        }

        //safe the new searchengine list locally
        safeSearchEngines(searchEngines);
    }

   
}

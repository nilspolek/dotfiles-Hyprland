var main = chrome.extension.getBackgroundPage();

//wait for popup to load, before acting
document.addEventListener("DOMContentLoaded", function (event) {
    var searchEnginesList = main.getSearchEngines();
    //delete all previous divs
    var divs = document.getElementsByClassName('divStyle');
    for (var max = divs.length, i = max - 1; i >= 0; i--) {
        if (typeof divs[i] != undefined) {
            var div = divs[i];
            div.parentNode.removeChild(div);
        }    
    }

    //go through all search Engines and create new div for every engine that is active: true
    var j = 0;
    for (i in searchEnginesList) {
        if (searchEnginesList[i].active == 1) {
            createSearchDiv(searchEnginesList[i]);
            j++;
        }
    }

    //check if any search engines were chosen, if not show the user an 'empty' message
    if ( j == 0 ) {
        createEmptyDiv();
    }

    var allElements = document.getElementsByTagName("*");
    
    // iterate through all elements
    // put event listeners for all input elements, to open user's search with chosen search engine
    // put event listeners to all search buttons, to open the chosen search engine, if clicked
    for (var i=0, max = allElements.length; i<max; i++ ){ 
        if ( allElements[i].tagName == 'INPUT' ){
            allElements[i].addEventListener('change', function (event) {
                main.openSearch(event.target.id, event.target.value); 
                window.close();
            });
        }
        if ( allElements[i].tagName == 'BUTTON' ){
            allElements[i].onclick = function (event) {
                var button_id = event.target.id;
                if( button_id.indexOf('_button') !== -1 ) {
                   buttonCallback(button_id); 
                }  
            };
        }
        if (allElements[i].tagName == 'P'){
            allElements[i].innerText = chrome.i18n.getMessage("popupsettingsbutton");
        }
    }

    //if settings is clicked: open new tab with settings + close popup
    var settings = document.getElementsByClassName('zahnradDiv')[0];
    settings.onclick = function (event) {
        chrome.tabs.create({ "url": "../einstellungen/settings.html" });
        window.close();
    }

});

function buttonCallback(id) {
    var searchEngineId = id.replace('_button', '');
    main.openDefaultSearch(searchEngineId);
}


function createSearchDiv(searchEngine) {
    /*
    <div class="divStyle">
        <input type="text" id="amazon" placeholder="Mit Amazon suchen...">
        <button><img id="amazon_button" src="../img/lupe.svg"></button>
    </div>
    */
    //create Div
    var newSearchDiv = document.createElement('div');
    newSearchDiv.className = 'divStyle';

    //create input bar
    var input = document.createElement('input');
    input.type = 'text';
    input.id = searchEngine.id;
    
    input.placeholder = chrome.i18n.getMessage("searchwithbeginning") + searchEngine.name + chrome.i18n.getMessage("searchwithend"); 
    //assign the input bar to the div
    newSearchDiv.appendChild(input);

    //create button with image inside
    var button = document.createElement('button');
    var lupeImg = document.createElement('img');
    lupeImg.id = searchEngine.id + '_button';
    lupeImg.src = '../img/lupe.svg';
    button.appendChild(lupeImg);
    //assign button to the div
    newSearchDiv.appendChild(button);

    //assign new div to popup 
    var section = document.getElementsByTagName('section')[0]; 
    section.lastChild.after(newSearchDiv);
}

function createEmptyDiv() {
    var newSearchDiv = document.createElement('div');
    newSearchDiv.className = 'divStyle';
    newSearchDiv.innerText = chrome.i18n.getMessage("nosearchengineschosen");

    var section = document.getElementsByTagName('section')[0];
    section.appendChild(newSearchDiv);
}

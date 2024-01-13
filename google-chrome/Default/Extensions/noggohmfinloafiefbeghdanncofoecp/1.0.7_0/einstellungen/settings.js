var searchEnginesList = [];
var mainEngine = {};
var draggedElemId = "";



document.addEventListener("DOMContentLoaded", function (event) {
    //delete all previous elements
    var elems = document.getElementsByClassName('hover-element');
    for (var max = elems.length, i = max - 1; i >= 0; i--) {
        if (typeof elems[i] != undefined) {
            var elem = elems[i];
            elem.parentNode.removeChild(elem);
        }
    }
    
    //change the inner Text of all elements to local language
    var whichsearchenigine = document.getElementsByClassName('fatfont')[0];
    whichsearchenigine.innerText = chrome.i18n.getMessage("whichsearchengine");
    
    var choosefavorite = document.getElementById('choosefavorite');
    choosefavorite.innerText = chrome.i18n.getMessage("choosefavorite");
    
    var standardengine = document.getElementsByClassName('grayfont')[0];
    standardengine.innerText = chrome.i18n.getMessage("standardengine");
    
    var addbtntext = document.getElementById('addbtntext');
    addbtntext.innerText = chrome.i18n.getMessage("addbtntext");

    //get the search Engine list from main.js
    chrome.runtime.sendMessage({ getEngineList: "getEngineList" }, function (response) {
        searchEnginesList = response.searchEnginesList;

        //create all elements with current information
        for (i in searchEnginesList) {
            createEngineButton(searchEnginesList[i]);  
        }
        getMainSearchEngine();
    });

    //for Hinzufuegen Button, on Click, open Hinzufuegen Modal

    // Get the modal
    var hinzufuegenmodal = document.getElementById("hinzufuegenmodal");

    // Get the button that opens the modal
    var hinzufuegenbtn = document.getElementById("hinzufuegenbtn");

    // Get the element that closes the modal
    var close = document.getElementsByClassName("close")[0];
    close.title = chrome.i18n.getMessage("close");

    //get the element that saves user input
    var savebtn = document.getElementById("savebtn"); 
    savebtn.innerText = chrome.i18n.getMessage("savebtn");
    
    var newname = document.getElementById('newname');
    newname.placeholder = chrome.i18n.getMessage("newname");
    
    var newsearchlink = document.getElementById('newsearchlink');
    newsearchlink.placeholder = chrome.i18n.getMessage("newsearchlink");
    
    var question = document.getElementsByClassName("question")[0];
    question.title = chrome.i18n.getMessage("question");


    // When the user clicks on the button, open the modal
    hinzufuegenbtn.onclick = function () {
        hinzufuegenmodal.style.display = "block";
    }

    // When the user clicks on (x), close the modal
    close.onclick = function (event) {
        hinzufuegenmodal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == hinzufuegenmodal) {
            hinzufuegenmodal.style.display = "none";
        }
    }

    //When the user clicks on the save button, insert the new searchengine into the extension
    //check if the parameters are set correctly
    //save input into a new search engine - activated
    //create a new icon for the search engine
    savebtn.onclick = insertNewElement;
});

function createEngineButton(searchEngine, userdefined) {
    /*
    <li class="hover-element">
       <div class="divIcon">
           <button id="google" class="buttongray"><img id="google" class="icons" src="../img/default.png"></button>
           <p>Google</p>
       </div>
    </li>
    */

    //create li
    var newEngineButton = document.createElement('li');
    newEngineButton.className = 'hover-element';
    newEngineButton.draggable = true;
    newEngineButton.id = searchEngine.id + '_li';

    //create button element with icon title of the searchEngine insidecreateEngineButton
    var buttonElementDiv = document.createElement('div');
    buttonElementDiv.className = "divIcon";
    var button = document.createElement('button');
    button.id = searchEngine.id;
    button.className = 'buttongray';

    var buttonImg = document.createElement('img');
    buttonImg.className = 'icons';
    buttonImg.draggable = false;
    buttonImg.src = searchEngine.faviconUrl;
    button.appendChild(buttonImg);
    buttonElementDiv.appendChild(button);

    var title = document.createElement('p');
    title.innerText = searchEngine.name;
    buttonElementDiv.appendChild(title);

    newEngineButton.appendChild(buttonElementDiv);

    //check active status and change the opacity accordingly
    if (searchEngine.active == 1) {
        button.style.opacity = 1.0;
        title.style.opacity = 1.0;
    } else {
        button.style.opacity = 0.4;
        title.style.opacity = 0.6;
    }

    //create 'delete' button and assign it to the main element
    //only for manually made search engines
    if (searchEngine.userdefined) {
        var deleteIcon = document.createElement('a');
        deleteIcon.className = 'deleteIcon';
        deleteIcon.title = "Löschen";
        deleteIcon.href = '#'; 
        deleteIcon.innerText = "x";

        buttonElementDiv.insertBefore(deleteIcon, button);
        deleteIcon.onclick = deleteEngine;
    }

    //place the main element into the html document
    var ul = document.getElementsByTagName('ul')[0];

    var firstButton = document.getElementsByClassName('hover-element')[0];
    if (userdefined) {
        ul.insertBefore(newEngineButton, firstButton);
    } else {
        ul.lastChild.after(newEngineButton);
    }

    //add event listeners to all search engine icon clicks, to activate or deactivate the quick searches
    addOnBtnClickListener(button);

    //add event listeners for drag and drop functions, to sort the icons according to user's preferences
    addDnDListeners(newEngineButton);
}

function addOnBtnClickListener(button) {
    button.onclick = changeActiveStatus;
}

function addDnDListeners(element) {
    element.ondragstart = setDraggingStatus;

    element.ondragover = onDragOver;

    element.ondragenter = changePositionOfDraggedItem;

    element.ondrop = sendFinalStatusToMain;

    element.ondragend = closeDragginStatus;
}


////////////////// Position Handlers //////////////////////////////

function setPositionOfElements(sourceP, targetP) { 
    if (sourceP < targetP) {
        for (var i = sourceP; i <= targetP; i++) {
            if (i == sourceP) {
                searchEnginesList[i].position = targetP;
            } else {
                searchEnginesList[i].position--;
            }  
        }
    } else if (targetP < sourceP) {
        for (var i = targetP; i <= sourceP; i++) {
            if (i == sourceP) {
                searchEnginesList[i].position = targetP;
            } else {
                searchEnginesList[i].position++;
            }  
        }
    } else {
    }
    return sortSearchEngines(searchEnginesList);
}

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

function getPositionOfElement(elementId) {
    var p = null;

    for (i in searchEnginesList) {
        if (searchEnginesList[i].id == elementId) {
            p = searchEnginesList[i].position;
        }
    }
    if (p != null) {
        return p;
    } else {
        return false;
    }
}

////////////////// Position Handlers End//////////////////////////////

/////////////////// Button Events ////////////////////////////////////////

function changeActiveStatus(event) {
    var elemId = event.currentTarget.id;
    var button = document.getElementById(elemId);
    //get information from searchEngineList for the button
    for (i in searchEnginesList) {
        if (searchEnginesList[i].id == elemId) {
            var info = searchEnginesList[i];

            //change active status and the opacity of the button
            if (info.active == 0) {
                info.active = 1;
                button.style.opacity = 1.0;
                button.parentElement.lastElementChild.style.opacity = 1.0;
            } else {
                info.active = 0;
                button.style.opacity = 0.4;
                button.parentElement.lastElementChild.style.opacity = 0.6;
            }
        }
    }
    getMainSearchEngine();

    //send message to main.js about button's status + placement
    chrome.runtime.sendMessage({ setEngineList: searchEnginesList }, function (response) { });
}

//on drag start, lower the opacity of dragged item, to show the user the new status
//set move effect
//save id of the item, to use later 
function setDraggingStatus(event) {
    event.dataTransfer.effectAllowed = 'move';
    var target = event.currentTarget;
    draggedElemId = target.id;
    target.style.opacity = '0.2';
   //set dragging picture
    var id = target.id.replace('_li', '');
    var dragIcon = document.createElement('img');
    for (i in searchEnginesList) {
        if (searchEnginesList[i].id == id) {
            dragIcon.src = searchEnginesList[i].faviconUrl;
        }
    }
    
    dragIcon.width = 100;
    event.dataTransfer.setDragImage(dragIcon, -10, -10);
}

function onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    return false;
}

//while Element is being dragged, show the user final position of the dragged item while he hovers over other items
function changePositionOfDraggedItem(event) { 

    var source = document.getElementById(draggedElemId);
    var target = event.currentTarget;

    if (target.tagName == 'LI') {
        //find the position of the searchengine that is moved
        var sourceId = source.id.replace('_li', '');
        var sourcePosition = getPositionOfElement(sourceId);
        //find the position of the searchengine that is entered 
        var targetId = target.id.replace('_li', '');
        var targetPosition = getPositionOfElement(targetId);
        if (sourcePosition < targetPosition) {
            target.after(source);
        }
        else if (sourcePosition > targetPosition) {
            target.before(source);
        } else {
        }
        setPositionOfElements(sourcePosition, targetPosition);
    }

}

//on drop, send the changes to main js, to use them for other functionalities
function sendFinalStatusToMain(event) {
    event.preventDefault();
    var target = event.currentTarget;
    //set previous main engine back to 'normal'
    
    if (target.tagName == 'LI') {
        chrome.runtime.sendMessage({ setEngineList: searchEnginesList }, function (response) {
            searchEnginesList = response.searchEnginesList;
            //set new main engine
            getMainSearchEngine();
        });
    }  


}

//on drag end, change back the opacity of the dragged item, to show user the draggin is over
function closeDragginStatus(event) {
    var source = document.getElementById(draggedElemId);
    source.style.opacity = '1';
}

function deleteEngine(event) {
    var searchEngineSection = event.target.parentNode.parentNode;
    var sectionId = searchEngineSection.id.replace('_li', '');
    //send message to main js to remove the item from the list, save response to work with
    chrome.runtime.sendMessage({ removeEngine: sectionId }, function (response) {
        searchEnginesList = response.searchEnginesList;
        //update the main search engine
        getMainSearchEngine();
    });

    //Delete the section in html
    searchEngineSection.parentNode.removeChild(searchEngineSection);
}

/////////////////// Button Events End/////////////////////////////////////

//////////////////////Hinzufuegen Modal Handlers ////////////////////////////////////////////

function insertNewElement(event) {

    //get the input element for search engine name
    var newName = document.getElementById("newname");

    //get the input element for search engine link
    var newsearchlink = document.getElementById("newsearchlink");

    //check if input values are set correctly
    checkInputValues(newName, newsearchlink, insertNewEngine);
}

function checkInputValues(name, searchlink, callback) { 
    deleteErrorMessage();
    //check if the 'name' input has value
    if (!name.value) {
        //if not, show error message
        insertErrorMessage(chrome.i18n.getMessage("err_nonameandsearchlink"));
        return;
    } else {
        //check if the name already exists
        for (i in searchEnginesList) {
            if (searchEnginesList[i].name == name.value) {
                insertErrorMessage(chrome.i18n.getMessage("err_namealreadyexists"));
                return;
            }
        }
    }
    //check if input 'SearchLink' is not empty
    if (!searchlink.value) {
        //if not, show error message
        insertErrorMessage(chrome.i18n.getMessage("err_nosearchlink"));
    } else {
        //check if SearchLink is valid
        searchlink = searchlink.value;
        if (searchlink.indexOf('http') != -1) {
            if (searchlink.indexOf('www.') != -1) { 
                if (searchlink.indexOf('{SEARCH}') != -1 || searchlink.indexOf('%7BSEARCH%7D') != -1) { 
                    //all parameters set correctly, insert the search engine now
                    if (searchlink.indexOf('%7BSEARCH%7D') != -1) {
                        searchlink = searchlink.replace('%7BSEARCH%7D', '{SEARCH}');
                    }
                    callback(name.value, searchlink);
                } else {
                    insertErrorMessage(chrome.i18n.getMessage("err_nosearchkey"));
                }
            } else {
                insertErrorMessage(chrome.i18n.getMessage("err_invaliddomain"));
            }
        } else {
            insertErrorMessage(chrome.i18n.getMessage("err_includehttp"));
        }

    }
}

function insertErrorMessage(message) {
    var p = document.createElement('p');
    p.className = 'errortext';
    p.innerText = message;
    var firstInput = document.getElementById('newname');
    firstInput.before(p);
}

function deleteErrorMessage() {
    var errorMessages = document.getElementsByClassName('errortext');
    var maxlength = errorMessages.length;
    for (i = maxlength; i >= 0; i--) {
        var errortext = errorMessages[i];
        if (typeof errortext != 'undefined') {
            errortext.parentNode.removeChild(errortext);
        }
    }
}

function insertNewEngine(name, searchlink) {

    //close the hinzufuegen modal
    var hinzufuegenmodal = document.getElementById("hinzufuegenmodal");
    hinzufuegenmodal.style.display = "none";

    //create a new element in searchEnginesList
    var url = new URL(searchlink);

    for (i in searchEnginesList) { //to make sure we have no negative values set all positions one higher, and then insert the new element with lowest position
        searchEnginesList[i].position++;
    }

    var newEngine = {
        name: name,
        id: name,
        defaultUrl: 'https://' + url.host,
        searchUrl: searchlink,
        faviconUrl: '../img/default.png', 
        active: 1,
        position: 0, 
        userdefined: true
    }

    searchEnginesList.unshift(newEngine);
    //send message to main
    chrome.runtime.sendMessage({ setEngineList: searchEnginesList }, function (response) { });

    //create the element inside the settings html
    createEngineButton(newEngine, true); 

    getMainSearchEngine();
}

//////////////////////Hinzufuegen Modal Handlers End ////////////////////////////////////////////

function getMainSearchEngine() {
    if (typeof mainEngine.id != 'undefined') {
        setIconToGray(mainEngine.id);
    }

    for (i = 0; i < searchEnginesList.length; i++) {
        if (searchEnginesList[i].active == 1) {
            mainEngine = searchEnginesList[i];
            chrome.runtime.sendMessage({ setMainEngine: mainEngine }, function (response) { }); 
            setIconToBlue(mainEngine.id);
            return;
        }
    }
}

function setIconToBlue(buttonId) {
    //set Background of the icon to blue
    var button = document.getElementById(buttonId);
    if (button) {
        button.className = 'buttonblue';

        //insert "Standard Suchanbieter" Caption
        var p = document.createElement('p');
        p.innerText = chrome.i18n.getMessage("standardcaption");
        p.className = 'standardCaption';
        button.before(p);
    } else {
    }

}

function setIconToGray(buttonId) {
    //set background of the icon to gray
    var button = document.getElementById(buttonId);
    if (button) {
        button.className = 'buttongray';
        //remove "Standard Suchanbieter" Caption
        var standardCaption = document.getElementsByClassName('standardCaption')[0];
        if (standardCaption) {
            standardCaption.parentNode.removeChild(standardCaption);
        }
    } else {
    }


}

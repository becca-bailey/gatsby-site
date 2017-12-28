// Initial Solution

var newList = document.getElementById("new_list");
var newItem = document.getElementById("new_item");
var removeItem = document.getElementById("remove_item");
var list = document.getElementById("list");
var listTitle = document.getElementById("list_title");
var listItems = document.getElementsByTagName("input");
var displayList = document.getElementById("display_list");
var switchList = document.getElementById("switch_list");
var removeList = document.getElementById("remove_list");
var updateQuantity = document.getElementById("update_quantity");
var printerFriendly = document.getElementById("printer_friendly");
var listArea = document.getElementById("list_area");

newItem.style.display = "none";
removeItem.style.display = "none";
displayList.style.display = "none";
switchList.style.display = "none";
removeList.style.display = "none";
updateQuantity.style.display = "none";
printerFriendly.style.display = "none";

var groceryLists = new Object();

var listItem = function() {
    this.item = item;
    this.quantity = quantity;
} 

function printList(object) {
	list.innerHTML = "";
	for (item in object) {
		list.innerHTML += "<li><input type = 'checkbox' value = " + item + ">" + item + ": " + object[item] + "</input></li>"
	}
   	removeItem.style.display = "block";
   	updateQuantity.style.display = "block";
}

function printAll() {
	list.innerHTML = "";
	for (listName in groceryLists) {
		listArea.innerHTML += "<h1>" + listName + "</h1>";
		listArea.innerHTML += "<ul>";
		for (item in groceryLists[listName]) {
			listArea.innerHTML += "<li class='print'>" + item + ": " + groceryLists[listName][item] + "</li>"
		}
		listArea.innerHTML += "</ul>";
	}
}

function listMenu(object) {
	displayList.innerHTML = "";
	for (item in object) {
		displayList.innerHTML = "<option value = '" + item + "' >" + item + "</option>" + displayList.innerHTML;
	}
}

function displayButtons() {
	newItem.style.display = "block";
    displayList.style.display = "block";
    switchList.style.display = "block";
    removeList.style.display = "block";
    printerFriendly.style.display = "block";
}

newList.addEventListener("click", function() {
    var listName = prompt("What would you like to name this list?");
    listTitle.innerHTML = listName;
    list.innerHTML = "";
    groceryLists[listName] = new Object();
    listMenu(groceryLists);
    displayButtons();
});

newItem.addEventListener("click", function() {
	var item = prompt("Which item would you like to add?");
	var quantity = prompt("How much?");
	var listName = displayList.options[displayList.selectedIndex].value;
	listTitle.innerHTML = listName;
	groceryLists[listName][item] = quantity;
	printList(groceryLists[listName]);
});

removeItem.addEventListener("click", function() {
	var listName = displayList.options[displayList.selectedIndex].value;
	for (var i = 0; i < listItems.length; i++) {
		if (listItems[i].checked) {
			delete groceryLists[listName][listItems[i].value];
		}
	}
	printList(groceryLists[listName]);
});

switchList.addEventListener("click", function() {
	var listName = displayList.options[displayList.selectedIndex].value;
	listTitle.innerHTML = listName;
	printList(groceryLists[listName]);
});

removeList.addEventListener("click", function() {
	var listName = displayList.options[displayList.selectedIndex].value;
	if(confirm("Are you sure you want to delete " + listName + "?")) {
		delete groceryLists[listName];		
		if (listTitle.innerHTML === listName) {
			listMenu(groceryLists);
			listTitle.innerHTML = "";
			list.innerHTML = "";
		}
	}
});

updateQuantity.addEventListener("click", function() {
	var quantity = prompt("How much would you like to buy?");
	var listName = displayList.options[displayList.selectedIndex].value;
	for (var i = 0; i < listItems.length; i++) {
		if (listItems[i].checked) {
			groceryLists[listName][listItems[i].value] = quantity;
		}
	}
	printList(groceryLists[listName]);
});

printerFriendly.addEventListener("click", function() {
	listArea.style.float = "none";
	listArea.style.width = "100%";
	listArea.style.backgroundColor = "white";
	listTitle.style.display = "none";
	document.getElementById("controls").style.display = "none";
	printAll();
});


const checkedItems = [];
var shipLocations = [];
const POLLING_RATE = 1000;
var ITEMS = 100;
var SHIPS = 0;

const main = document.getElementById('root');
const internal = document.getElementById('rootinternal');
const board = document.getElementById('board');
const placement = document.getElementById('placement');
const hits = document.getElementById('hits');
const ship = document.getElementById('ship');

var show = false;

window.onload = function () {
	NewGame();
};

function BlackOut() {
	show = !show;
	console.log({ show });
	if (show) {
		board.style.background = 'transparent';
	}
	else {
		board.style.background = 'black';
	}
}

function ResetValues() {
	checkedItems.length = 0;
	shipLocations.length = 0;
	hits.innerHTML = 0;
	ship.innerHTML = 0;
}

function NewGame() {
	ResetValues();
	getData();
}

function SetLocation(id) {
	if (shipLocations.includes(id)) {
		shipLocations = shipLocations.filter(item => { return item !== id });
		if (shipLocations.length === 0) {
			placement.innerHTML = "0";
		}
		else {
			placement.innerHTML = shipLocations.toString();
		}
		getData();
		return;
	}
	shipLocations.push(id);
	placement.innerHTML = shipLocations.toString();
	getData();
}

function CheckLocation(id) {
	if (checkedItems.includes(id)) {
		checkedItems = checkedItems.filter(item => { return item !== id });
	}
	else {
		checkedItems.push(id);
	}
	hits.innerHTML = checkedItems.toString();
	if (shipLocations.includes(id)) {
		ship.innerHTML = id;
	}
	getData();
}

function getData() {
	internal.innerHTML = "";
	main.innerHTML = "";
	for (var i = 0; i < ITEMS; i++) {
		if (checkedItems.includes(i + 1)) {
			if (shipLocations.includes(i + 1)) {
				main.innerHTML += `<div class="item1dd">X<div>`;
			}
			else {
				main.innerHTML += `<div class="item1alt"><div>`;
			}
		}
		else {
			main.innerHTML += `<button type="button" class="item1" onclick="CheckLocation(${i + 1})">${i + 1}</button>`;
		}
	}
	for (var i = 0; i < ITEMS; i++) {
		if (shipLocations.includes(i + 1)) {
			internal.innerHTML += `<div class="buttonOn" onclick="SetLocation(${i + 1})">${i + 1}</div>`;
		}
		else {
			internal.innerHTML += `<div class="buttonOff" onclick="SetLocation(${i + 1})">${i + 1}</div>`;
		}
	}
}

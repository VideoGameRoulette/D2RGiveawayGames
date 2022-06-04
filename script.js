const checkedItems = [];
const shipLocations = [];
const POLLING_RATE = 1000;
var ITEMS = 0;
var SHIPS = 0;

const main = document.getElementById('root');
const board = document.getElementById('board');
const locations = document.getElementById('locations');
const itemcount = document.getElementById('itemcount');
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
	const { value: loc } = locations;
	SHIPS = parseInt(loc);
	const { value: itm } = itemcount;
	ITEMS = parseInt(itm);
	checkedItems.length = 0;
	shipLocations.length = 0;
	hits.innerHTML = 0;
	ship.innerHTML = 0;
}

function NewGame() {
	ResetValues();
	if (ITEMS < SHIPS) return alert('Not enough locations for items please increase items size or reduce locations');
	while (shipLocations.length < SHIPS) {
		let rnd = Math.floor(Math.random() * ITEMS);
		if (!shipLocations.includes(rnd + 1)) {
			shipLocations.push(rnd + 1);
		}
	}
	placement.innerHTML = shipLocations.toString();
	getData();
}

function SetLocation(id) {
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

function UndoLast() {
	checkedItems.pop();
}

function getData() {
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
			main.innerHTML += `<button type="button" class="item1" onclick="SetLocation(${i + 1})">${i + 1}</button>`;
		}
	}
}

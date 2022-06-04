const checkedItems = [];
const ddLocations = [];
const POLLING_RATE = 1000;
var ITEMS = 0;
var DOUBLE_JEP = 0;

const main = document.getElementById('root');
const board = document.getElementById('board');
const locations = document.getElementById('locations');
const itemcount = document.getElementById('itemcount');
const placement = document.getElementById('placement');
const hits = document.getElementById('hits');
const doubles = document.getElementById('doubles');

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
	DOUBLE_JEP = parseInt(loc);
	const { value: itm } = itemcount;
	ITEMS = parseInt(itm);
	checkedItems.length = 0;
	ddLocations.length = 0;
	hits.innerHTML = 0;
	doubles.innerHTML = 0;
}

function NewGame() {
	ResetValues();
	if (ITEMS < DOUBLE_JEP) return alert('Not enough locations for items please increase items size or reduce locations');
	while (ddLocations.length < DOUBLE_JEP) {
		let rnd = Math.floor(Math.random() * ITEMS);
		if (!ddLocations.includes(rnd + 1)) {
			ddLocations.push(rnd + 1);
		}
	}
	placement.innerHTML = ddLocations.toString();
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
	if (ddLocations.includes(id)) {
		doubles.innerHTML = id;
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
			if (ddLocations.includes(i + 1)) {
				main.innerHTML += `<div class="item1dd">DD<div>`;
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

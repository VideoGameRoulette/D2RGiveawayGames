const checkedItems = [];
const checkedItemsDD = [];
const checkedItems2 = [];
const ddLocations = [];
const POLLING_RATE = 1000;
var MAIN_ITEMS = 20;
var BONUS = 1;
var EXTRA_ITEMS = 10;
var DOUBLE_JEP = 0;

const main = document.getElementById('root');
const main2 = document.getElementById('root2');
const main3 = document.getElementById('root3');
const board = document.getElementById('board');
const locations = document.getElementById('locations');
const placement = document.getElementById('placement');
const hits = document.getElementById('hits');
const doubleshits = document.getElementById('doubleshits');
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
	checkedItems.length = 0;
	checkedItems2.length = 0;
	checkedItemsDD.length = 0;
	ddLocations.length = 0;
	hits.innerHTML = 0;
	doubleshits.innerHTML = 0;
	doubles.innerHTML = 0;
}

function NewGame() {
	ResetValues();
	if (MAIN_ITEMS < DOUBLE_JEP) return alert('Not enough locations for items please increase items size or reduce locations');
	while (ddLocations.length < DOUBLE_JEP) {
		let rnd = Math.floor(Math.random() * MAIN_ITEMS);
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
		checkedItemsDD.push(id);
		doubleshits.innerHTML = checkedItemsDD.toString();
		doubles.innerHTML = id;
	}
	getData();
}

function SetLocationBonus(id) {
	if (checkedItems2.includes(id)) {
		checkedItems2 = checkedItems2.filter(item => { return item !== id });
	}
	else {
		checkedItems2.push(id);
	}
	getData();
}

function UndoLast() {
	checkedItems.pop();
}

function getData() {
	main.innerHTML = "";
	main2.innerHTML = "";
	main3.innerHTML = "";

	for (var i = 0; i < MAIN_ITEMS; i++) {
		if (checkedItems.includes(i + 1)) {
			if (ddLocations.includes(i + 1)) {
				main.innerHTML += `<div class="item2dd">DD<div>`;
			}
			else {
				main.innerHTML += `<div class="item2alt"><div>`;
			}
		}
		else {
			main.innerHTML += `<button type="button" class="item2" onclick="SetLocation(${i + 1})">${i + 1}</button>`;
		}
	}

	main2.innerHTML += `<button type="button" class="bonus" onclick="SetLocation(${i + 1})">DAILY DOUBLE BONUS</button>`;

	for (var i = 0; i < EXTRA_ITEMS; i++) {
		if (checkedItems2.includes(i + 1)) {
			main3.innerHTML += `<div class="item1bonus"><div>`;
		}
		else {
			main3.innerHTML += `<button type="button" class="item1bonusalt" onclick="SetLocationBonus(${i + 1})">${i + 1}</button>`;
		}
	}
}

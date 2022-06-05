const up = `<svg xmlns="http://www.w3.org/2000/svg" width="100%"
    height="100%" fill="none" viewBox="0 0 24 24"
    stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round"
    class="feather feather-chevron-up w-5 h-5">
    <polyline points="18 15 12 9 6 15"></polyline>
</svg>`;

const down = `<svg xmlns="http://www.w3.org/2000/svg" width="100%"
    height="100%" fill="none" viewBox="0 0 24 24"
    stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round"
    class="feather feather-chevron-down w-5 h-5">
    <polyline points="6 9 12 15 18 9"></polyline>
</svg>`;

const bsIcon1 = document.getElementById('iconbs1');
const bsIcon2 = document.getElementById('iconbs2');
const bsText1 = document.getElementById('bs1');
const bsText2 = document.getElementById('bs2');

const jpIcon1 = document.getElementById('iconjp1');
const jpIcon2 = document.getElementById('iconjp2');
const jpText1 = document.getElementById('jp1');
const jpText2 = document.getElementById('jp2');

const mfIcon1 = document.getElementById('iconmf1');
const mfIcon2 = document.getElementById('iconmf2');
const mfText1 = document.getElementById('mf1');
const mfText2 = document.getElementById('mf2');

window.onload = function () {
    bsIcon1.innerHTML = down;
    bsIcon2.innerHTML = down;
    bsText1.style.display = "none";
    bsText2.style.display = "none";

    jpIcon1.innerHTML = down;
    jpIcon2.innerHTML = down;
    jpText1.style.display = "none";
    jpText2.style.display = "none";

    mfIcon1.innerHTML = down;
    mfIcon2.innerHTML = down;
    mfText1.style.display = "none";
    mfText2.style.display = "none";
};

function ShowHideText(iconElement, textElement) {
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
        iconElement.innerHTML = up;
    }
    else {
        textElement.style.display = "none";
        iconElement.innerHTML = down;
    }
}

function ShowHide(element, element2) {
    ShowHideText(element, element2);
}

function ShowHideBS1() {
    ShowHide(bsIcon1, bsText1)
}

function ShowHideBS2() {
    ShowHide(bsIcon2, bsText2)
}

function ShowHideJP1() {
    ShowHide(jpIcon1, jpText1)
}

function ShowHideJP2() {
    ShowHide(jpIcon2, jpText2)
}

function ShowHideMF1() {
    ShowHide(mfIcon1, mfText1)
}

function ShowHideMF2() {
    ShowHide(mfIcon2, mfText2)
}
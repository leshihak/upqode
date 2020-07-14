import './styles/main.scss';

// HEADER

function openBurger() {
    let x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

window.openBurger = openBurger;

const comebackArrow = document.querySelector('.comeback');
comebackArrow.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = function scrollFunction() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? (comebackArrow.style.display = 'block')
        : (comebackArrow.style.display = 'none');
};

// BANER

let tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    let player;
    player = new YT.Player('player', {
        width: 1920,
        height: 720,
        videoId: 'a1aCwrR_DNU',
        playerVars: {
            playlist: 'a1aCwrR_DNU',
            autoplay: 1,
            autohide: 1,
            disablekb: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            fs: 0,
            autohide: 0,
            rel: 0,
            enablejsapi: 1,
        },
        suggestedQuality: 'hd1080',
        events: {
            onReady: onPlayerReady,
        },
    });
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(10);
}

// TEAM

const bellNext = document.querySelector('.bellNext');
const benNext = document.querySelector('.benNext');
const juliaPrev = document.querySelector('.juliaPrev');
const bellPrev = document.querySelector('.bellPrev');
const julia = document.querySelector('.julia');
const bell = document.querySelector('.bell');
const robertsBlock = document.querySelector('.roberts-block');
const juliaBlock = document.querySelector('.julia-block');
const bellBlock = document.querySelector('.bell-block');
const roberts = document.querySelector('.roberts');
const juliaImg = document.querySelector('.julia-img');
const bellImg = document.querySelector('.bell-img');
const robertsImg = document.querySelector('.roberts-img');

bellNext.addEventListener('click', () => {
    julia.classList.remove('flex');
    julia.classList.add('unset');
    juliaBlock.classList.add('hide');
    juliaBlock.classList.remove('show');
    bellBlock.classList.add('show');
    bellBlock.classList.remove('hide');
    bell.classList.remove('unset');
    bell.classList.add('flex');
    juliaImg.classList.remove('show');
    juliaImg.classList.add('second-img');
    bellImg.classList.add('show');
    bellImg.classList.remove('second-img');
});

juliaPrev.addEventListener('click', () => {
    julia.classList.add('flex');
    julia.classList.remove('unset');
    juliaBlock.classList.remove('hide');
    juliaBlock.classList.add('show');
    bellBlock.classList.remove('show');
    bellBlock.classList.add('hide');
    bell.classList.add('unset');
    bell.classList.remove('flex');
    juliaImg.classList.add('show');
    juliaImg.classList.remove('second-img');
    bellImg.classList.remove('show');
    bellImg.classList.add('second-img');
});

benNext.addEventListener('click', () => {
    bell.classList.remove('flex');
    bell.classList.add('unset');
    bellBlock.classList.add('hide');
    bellBlock.classList.remove('show');
    robertsBlock.classList.add('show');
    robertsBlock.classList.remove('hide');
    roberts.classList.remove('unset');
    roberts.classList.add('flex');
    bellImg.classList.remove('show');
    bellImg.classList.add('third-img');
    robertsImg.classList.add('show');
    robertsImg.classList.remove('third-img');
});

bellPrev.addEventListener('click', () => {
    bell.classList.add('flex');
    bell.classList.remove('unset');
    bellBlock.classList.remove('hide');
    bellBlock.classList.add('show');
    robertsBlock.classList.remove('show');
    robertsBlock.classList.add('hide');
    roberts.classList.add('unset');
    roberts.classList.remove('flex');
    bellImg.classList.add('show');
    bellImg.classList.remove('third-img');
    robertsImg.classList.remove('show');
    robertsImg.classList.add('third-img');
});

// CONTACT

const newYorkAddress = document.querySelector('.newYork');
const losAngelesAddress = document.querySelector('.losAngeles');
const detroitAddress = document.querySelector('.detroit');
const bostonAddress = document.querySelector('.boston');
const currentAddress = document.querySelector('.current-address');
const currentAddressMap = document.querySelector('.current-address-map');
const currentAddressMapCity = document.querySelector('.address-map-city');

function initMap() {
    let uluru = { lat: 40.712772, lng: -74.00597 };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru,
    });
    let marker = new google.maps.Marker({ position: uluru, map: map });
}

window.initMap = initMap;

newYorkAddress.addEventListener('click', function initMap() {
    let uluru = { lat: 40.712772, lng: -74.00597 };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru,
    });
    let marker = new google.maps.Marker({ position: uluru, map: map });
    currentAddress.innerText =
        '2005 Stokes Isle Apt. 896, Venaville, New York 10010';
    currentAddressMap.innerText =
        '2005 Stokes Isle Apt. 896, Venaville, New York 10010';
    currentAddressMapCity.innerText = 'New York';
});

detroitAddress.addEventListener('click', function initMap() {
    let uluru = { lat: 42.331429, lng: -83.045753 };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru,
    });
    let marker = new google.maps.Marker({ position: uluru, map: map });
    currentAddress.innerText =
        '2005 Stokes Isle Apt. 896, Venaville, Detroit 10010';
    currentAddressMap.innerText =
        '2005 Stokes Isle Apt. 896, Venaville, Detroit 10010';
    currentAddressMapCity.innerText = 'Detroit';
});

losAngelesAddress.addEventListener('click', function initMap() {
    let uluru = { lat: 34.052235, lng: -118.243683 };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru,
    });
    let marker = new google.maps.Marker({ position: uluru, map: map });
    currentAddress.innerText =
        '2005 Stokes Isle Apt. 896, Venaville, Los Angeles 10010';
    currentAddressMap.innerText =
        '2005 Stokes Isle Apt. 896, Venaville, Los Angeles 10010';
    currentAddressMapCity.innerText = 'Los Angeles';
});

bostonAddress.addEventListener('click', function initMap() {
    let uluru = { lat: 42.361145, lng: -71.057083 };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru,
    });
    let marker = new google.maps.Marker({ position: uluru, map: map });
    currentAddress.innerText =
        '2005 Stokes Isle Apt. 896, Venaville, Boston 10010';
    currentAddressMap.innerText =
        '2005 Stokes Isle Apt. 896, Venaville, Boston 10010';
    currentAddressMapCity.innerText = 'Boston';
});

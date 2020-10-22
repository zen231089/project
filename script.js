var reception = $("#reception").val();
var reception_address = $("#reception_address").val();
var reception_lat = $("#reception_lat").val();
var reception_long = $("#reception_long").val();

var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var galleryThumbs2 = new Swiper2('.gallery-thumbs2', {
  spaceBetween: 3,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: -1,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop2 = new Swiper2('.gallery-top2', {
  spaceBetween: 5,
  loop: true,
  loopedSlides: 5,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  thumbs: {
    swiper: galleryThumbs2,
  },
});

var countDownDate = new Date(reception)
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hari").innerHTML = "-";
    document.getElementById("jam").innerHTML = "-";
    document.getElementById("menit").innerHTML = "-";
    document.getElementById("detik").innerHTML = "-";
  }
}, 1000);

function Close() {
  document.getElementById('close').style.display = 'none';
  var sound = document.getElementById("audio");
  sound.play();
}

let box = document.getElementById('box'),
btn = document.querySelector('button');

btn.addEventListener('click', function () {

  if (box.classList.contains('hidden')) {
    box.classList.remove('hidden');
    setTimeout(function () {
      box.classList.remove('visuallyhidden');
    }, 30);
  } else {
    box.classList.add('visuallyhidden');
    box.addEventListener('transitionend', function (e) {
      box.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }

}, false);

// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div,video_id) {
  var video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video+'&autoplay=1'; // adding autoplay to the URL
  document.getElementById(div).style.display = 'block';
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div,video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace('&autoplay=1',''); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
}


//Init Overlays
var overlays = {};
//Init BaseMaps
var basemaps={
'Empty': L.tileLayer(''),
"Esri World Dark":L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ | Map By <a href="https://idraxy.web.app" target="_blank">Draxgist & Team</a>',
	maxZoom: 16
}),
"Esri World Gray":L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ | Map By <a href="https://idraxy.web.app" target="_blank">Draxgist & Team</a>',
	maxZoom: 16
}),
"Esri World Color":L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
	maxZoom: 19
}),		
"Google Street":L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
		maxZoom: 20,
		subdomains:['mt0','mt1','mt2','mt3'],
		attribution:'Map data &copy; Google | Map By <a href="https://idraxy.web.app" target="_blank">Draxgist & Team</a>'
}),
"Google Hybrid":L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
		maxZoom: 20,
		subdomains:['mt0','mt1','mt2','mt3'],
		attribution:'Map data &copy; Google | Map By <a href="https://idraxy.web.app" target="_blank">Draxgist & Team</a>'
}),
"Google Satelite":L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
		maxZoom: 20,
		subdomains:['mt0','mt1','mt2','mt3'],
		attribution:'Map data &copy; Google | Map By <a href="https://idraxy.web.app" target="_blank">Draxgist & Team</a>'
}),
"Google Traffic":L.tileLayer('https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}', {
	maxZoom: 20,
	minZoom: 2,
	subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
	attribution:'Map data &copy; Google | Map By <a href="https://idraxy.web.app" target="_blank">Draxgist & Team</a>'
}),
 "Google Terrain":L.tileLayer('https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
	 maxZoom: 20,
	 subdomains:['mt0','mt1','mt2','mt3'],
	 attribution:'Map data &copy; Google | Map By <a href="https://idraxy.web.app" target="_blank">Draxgist & Team</a>'
}),
}

//Map Options
var mapOptions = {
  zoomControl: false,
  attributionControl: false,
  center: [reception_lat,reception_long],
  zoom: 11,
  	layers: [
  	    // Set Default   
		basemaps["Google Traffic"]
	]
};

//Render Main Map
var map = L.map("map", mapOptions);
L.control.layers(basemaps,null,{position:'bottomright'}).addTo(map);
var boundary = new L.geoJson();
boundary.addTo(map);

        // Location
        L.marker([reception_lat,reception_long]).addTo(map)
        .bindPopup("Lokasi Resepsi <BR> "+reception_address).openPopup();

        // L.circle([reception_lat,reception_long], 250, {
        //   color: 'green',
        //   fillColor: '#2ecc71',
        //   fillOpacity: 0.2
        // }).addTo(map).bindPopup(reception_address);
        

//Handle Map click to Display Lat/Lng
map.on("click", function(e) {
  $("#latlng").html(e.latlng.lat + ", " + e.latlng.lng);
  $("#latlng").show();
});

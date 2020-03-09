// made with <3 by afarhansib | visit me on https://afarhansib.github.io/
console.log('%c made with <3 by afarhansib', 'font-weight: bold; font-size: 30px;color: #063; text-shadow: 1px 1px 0px black , -1px -1px 0px white')
console.log('%c visit me on https://afarhansib.github.io/', 'font-weight: bold; font-size: 20px;color: black; text-shadow: 1px 1px 0px #fc0 , -1px -1px 0px white')



// service worker
if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("sw.js")
		.then(function() {
		})
		.catch(function(err) {
		});
} else {
}

// variables
const ovlRotScr = document.querySelector(".overlay-rotate-screen")
const navBtn = document.querySelectorAll(".navbar-btn")
const menuBtn = document.querySelector(".menu-btn")
const fsBtn = document.querySelector(".fs-btn")
const ovlBlock = document.querySelectorAll(".overlay-block")[0]
const ovlSidebar = document.querySelector("[class*='sidebar']")
const ovlPages = document.querySelector(".overlay-pages")
const ovl = document.querySelectorAll("[class*='overlay']")
const sbBtn = document.querySelectorAll(".sb-button")
const tempatLogo = document.querySelector(".header__title .title > span")
let historyL2 = ""
let starterData = {
	"bacaanWirid" : `
							أَسْتَغْفِرُ اللهَ العَظِيْمَ اَلَّذِي لآ إِلَهَ إِلَّا هُوَ اْلحَيُّ اْلقَيُّوْمُ وَأَتُوْبُ إِلَيْهِ  
							#3x$
								لاَ إِلَهَ إِلَّا اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ اْلمُلْكُ وَلَهُ اْلحَمْدُ يُحْيِي وَيُمِيْتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ
							#1x`,
	"jumlahWirid" : [33, 33, 33, 99],
	"bacaanDoa" : `اَلْحَمْدُ للهِ رَبِّ الْعَالَمِيْنَ. حَمْدًا يُوَافِىْ نِعَمَهُ وَيُكَافِئُ مَزِيْدَهُ. يَارَبَّنَالَكَ الْحَمْدُ وَلَكَ الشُّكْرُ كَمَا يَنْبَغِىْ لِجَلاَلِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ
	$اَللهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلى آلِ سَيِّدِنَا مُحَمَّدٍ. صَلاَةً تُنْجِيْنَابِهَا مِنْ جَمِيْعِ اْلاَهْوَالِ وَاْلآفَاتِ. وَتَقْضِىْ لَنَابِهَا جَمِيْعَ الْحَاجَاتِ.وَتُطَهِّرُنَا بِهَا مِنْ جَمِيْعِ السَّيِّئَاتِ. وَتَرْفَعُنَابِهَا عِنْدَكَ اَعْلَى الدَّرَجَاتِ. وَتُبَلِّغُنَا بِهَا اَقْصَى الْغَيَاتِ مِنْ جَمِيْعِ الْخَيْرَاتِ فِى الْحَيَاةِ وَبَعْدَ الْمَمَاتِ اِنَّهُ سَمِيْعٌ قَرِيْبٌ مُجِيْبُ الدَّعَوَاتِ وَيَاقَاضِىَ الْحَاجَاتِ
	$
اَللهُمَّ اِنَّا نَسْئَلُكَ سَلاَمَةً فِى الدِّيْنِ وَالدُّنْيَا وَاْلآخِرَةِ وَعَافِيَةً فِى الْجَسَدِ وَصِحَّةً فِى الْبَدَنِ وَزِيَادَةً فِى الْعِلْمِ وَبَرَكَةً فِى الرِّزْقِ وَتَوْبَةً قَبْلَ الْمَوْتِ وَرَحْمَةً عِنْدَ الْمَوْتِ وَمَغْفِرَةً بَعْدَ الْمَوْتِ. اَللهُمَّ هَوِّنْ عَلَيْنَا فِىْ سَكَرَاتِ الْمَوْتِ وَالنَّجَاةَ مِنَ النَّارِ وَالْعَفْوَ عِنْدَ الْحِسَابِ. رَبَّنَا لاَتُزِغْ قُلُوْبَنَا بَعْدَ اِذْهَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً اِنَّكَ اَنْتَ الْوَهَّابُ
$
اَللّٰهُمَّ اغْفِرْلِيْ وَلِوَالِدَيَّ وَارْحَمْهُمَاكَمَارَبَّيَانِيْ صَغِيْرَا
$
رَبَّنَا أَتِنَا فِى الدُّنْيَا حَسَنَةً وَفِي اْلأَخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
$
وَصَلَّى اللهُ عَلى سَيِّدِنَا مُحَمَّدٍ وَعَلى آلِهِ وَصَحْبِهِ وَسَلَّمَ وَالْحَمْدُ للهِ رَبِّ الْعَالَمِيْنَ
	`
}

// local storage
if(window.localStorage) { 
  if(localStorage.getItem("semuaKonten")) {
    starterData = JSON.parse(localStorage["semuaKonten"])
  } else {
  	simpanData()
  }
} else {
	toast("Browser tidak didukung, tidak bisa mengubah pengaturan.", 5000)
}

function simpanData() {
	localStorage["semuaKonten"] = JSON.stringify(starterData)
}

function toast(pesan = "Ini Toast", dur = 3000) {
	const toastEl = document.querySelector(".toast")
	toastEl.innerText = pesan
	toastEl.classList.add("toast-show")

	setTimeout(function(){
		toastEl.classList.remove("toast-show")
	}, dur)
}

function refreshDOM() {
	document.querySelectorAll("[class*=tbtn]").forEach(function(e, i) {
		e.innerText = starterData["jumlahWirid"][i]
	})
	document.querySelectorAll("[name=jml-tasbih]").forEach(function(e, i) {
		e.value = starterData["jumlahWirid"][i]
	})
	if (document.querySelector("[name=bacaan-wirid]")) document.querySelector("[name=bacaan-wirid]").value = starterData["bacaanWirid"]
	if (document.querySelector("[name=bacaan-doa]")) document.querySelector("[name=bacaan-doa]").value = starterData["bacaanDoa"]

	let wiridHTML = ``
	let wiridArray2 = []
	let wiridArray = starterData["bacaanWirid"].split("$")
	wiridArray.forEach(function(e, i) {
		wiridArray2 = e.split("#")
		wiridHTML += `<p><x>${wiridArray2[1]}</x><ar>${wiridArray2[0]}</ar></p>`
	})
	// setTimeout(function(){console.log(wiridHTML)},2000)
	document.querySelector(".tempat-bacaan-wirid").innerHTML = wiridHTML

	let doaHTML = ``
	let doaArray2 = []
	let doaArray = starterData["bacaanDoa"].split("$")
	doaArray.forEach(function(e, i) {
		doaArray2 = e.split("#")
		if (doaArray2[1] == undefined) doaArray2[1] = `&nbsp;&nbsp;`
		doaHTML += `<p><x>${doaArray2[1]}</x><ar>${doaArray2[0]}</ar></p>`
	})
	// setTimeout(function(){console.log(doaHTML)},2000)
	document.querySelector(".tempat-bacaan-doa").innerHTML = doaHTML
}

let l2KumpulanDoa = `
<ul class="list">
							<li><a href="#l3-doa_tahajud">Doa setelah Sholat Tahajud <span>></span></a></li>
							<li><a href="#l3-doa_witir">Doa setelah Sholat Witir <span>></span></a></li>
							<li><a href="#l3-doa_dhuha">Doa setelah Sholat Dhuha <span>></span></a></li>
						</ul>
`
let l2Pengaturan = `
<ul class="list">
							<li><a href="#l3-bacaan_wirid">Bacaan Wirid <span>></span></a></li>
							<li><a href="#l3-jumlah_tasbih">Jumlah Tasbih <span>></span></a></li>
							<li><a href="#l3-bacaan_doa">Bacaan Doa <span>></span></a></li>
						</ul>
`
							// <li><a href="#l3-tema">Tema Warna <span>></span></a></li>
let isiL3 = {
	"doa_tahajud" : ["Doa Setelah Sholat Tahajud", `<p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p>`],
	"doa_witir" : ["Doa Setelah Sholat Witir", `<p>Belum ada data.</p>`],
	"doa_dhuha" : ["Doa Setelah Sholat Dhuha", `<p>Belum ada data.</p>`],
	"jumlah_tasbih" : ["Jumlah Tasbih", `
					<div class="input-group">
						<input class="input-child" type="number" name="jml-tasbih">
						<input class="input-child" type="number" name="jml-tasbih">
						<input class="input-child" type="number" name="jml-tasbih">
						<input class="input-child" type="number" name="jml-tasbih">
					</div><a class="btn-full" id="setJmlTasbih">SIMPAN</a>`],
	"bacaan_wirid" : ["Bacaan Wirid", `<textarea name="bacaan-wirid" type="text"></textarea><a class="btn-full" id="setBacWirid">SIMPAN</a>`],
	"bacaan_doa" : ["Bacaan Doa", `<textarea name="bacaan-doa" type="text"></textarea><a class="btn-full" id="setBacDoa">SIMPAN</a>`],
	// "tema" : ["Warna Tema", `<p>Belum ada data.</p>`]
}


// auto ganti logo / nama
let gantiLogo = setInterval(function() {
	tempatLogo.classList.contains("tampil-logo") ? tempatLogo.classList.remove("tampil-logo") : tempatLogo.classList.add("tampil-logo")
}, 10000)
// lihat perubahan rotasi
window.addEventListener("orientationchange", function()
{

	if (window.matchMedia("(orientation: portrait)").matches)
	{
		ovlRotScr.setAttribute("data-visible", "true")
  }
  else
  {
    ovlRotScr.setAttribute("data-visible", "false")
  } 

}, false)


// render DOM
refreshDOM()

// fullscreen
let fsState = false;
function GoInFullscreen(element)
{
	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}
function GoOutFullscreen()
{
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

fsBtn.addEventListener("click", function()
{
	window.navigator.vibrate(30)
	if (!fsState)
	{
		fsState = true;
		this.classList.add("fs-out")
		GoInFullscreen(document.querySelector("html"))
	}
	else
	{
		fsState = false;
		this.classList.remove("fs-out")
		GoOutFullscreen()
	}
})
// navigasi
document.querySelector("body").onhashchange = navigasi
function navigasi() {
	window.navigator.vibrate(30)
	let target = location.hash.substr(1)
	target = target.split("-")

	switch(target[0]) {
		case "l1":
			let judul = target[1].toUpperCase()
			navBtn.forEach(function(el)
			{
				el.setAttribute("data-active", "false")
				if (el.innerText === judul) {
					el.setAttribute("data-active", "true")
				}
			})
			document.querySelector(".page__title > .title").innerText = judul
			// console.log(el.innerText)
			document.querySelectorAll("[class*='page-']:not(.page-head)").forEach(function(el)
			{
				el.setAttribute("data-visible", "false")
				if (el.classList.contains(`page-${judul.toLowerCase()}`)) {
					el.setAttribute("data-visible", "true")
				}
			})

			ovlPages.setAttribute("data-visible", "false")
			break;
		case "l2":
			sbBtn.forEach(function(el) {
				el.setAttribute("data-active", "false")
				// console.log(el.getAttribute("href").substr(4))
				if (el.getAttribute("href").substr(4) === target[1]) {
					el.setAttribute("data-active", "true")
				}
				switch(target[1]) {
					case "home":
						ovlPages.setAttribute("data-visible", "false")
						break;
					case "kumpulan_doa":
						document.querySelector(".overlay-pages .card .card-body").innerHTML = l2KumpulanDoa
						document.querySelector(".overlay-pages .card .title").innerText = "Kumpulan Doa"
						ovlPages.setAttribute("data-visible", "true")
						break;
					case "pengaturan":
						document.querySelector(".overlay-pages .card .card-body").innerHTML = l2Pengaturan
						document.querySelector(".overlay-pages .card .title").innerText = "Pengaturan"
						ovlPages.setAttribute("data-visible", "true")
						break;
				}
			})
			historyL2 = document.querySelector(".overlay-pages .card .title").innerText
			document.querySelector(".overlay-pages .card-title a").style = "display : none"
			ovlBlock.setAttribute("data-visible", "false")
			ovlSidebar.setAttribute("data-visible", "false")
			break;
		case "l3":
			document.querySelector(".overlay-pages .card .card-body").innerHTML = isiL3[target[1]][1]
			document.querySelector(".overlay-pages .card .title").innerText = isiL3[target[1]][0]
			document.querySelector(".overlay-pages .card-title a").innerHTML = `<span><</span>${historyL2}`
			document.querySelector(".overlay-pages .card-title a").style = "display : inline-block"
			ovlPages.setAttribute("data-visible", "true")
			break;
	}
	refreshDOM()
	// console.log(target)
}

// back button
document.querySelector(".overlay-pages .card-title a").addEventListener("click", function(e) {
	history.back()
})

document.querySelector(".wrap").addEventListener("scroll", function(e)
{
	e.preventDefault()
})

// buka sidebar
menuBtn.addEventListener("click", function()
{
	window.navigator.vibrate(30)
	ovlSidebar.setAttribute("data-visible", "true")
	ovlBlock.setAttribute("data-visible", "true")
})

// tutup sidebar
ovlBlock.addEventListener("click", function()
{
	ovlBlock.setAttribute("data-visible", "false")
	ovlSidebar.setAttribute("data-visible", "false")
	// ovl.forEach(function(el)
	// {
	// 	el.setAttribute("data-visible", "false")
	// })
})


function toKapital(str)
{
	let firstChar = str.slice(0, 1)
	let restChar = str.slice(1)
	return firstChar.toUpperCase() + restChar.toLowerCase()
}

// pengaturan
// jumlah tasbih
window.addEventListener("click", function(e) {
	if (e.target.getAttribute("id") === "setJmlTasbih") {
		document.querySelectorAll("input[name=jml-tasbih]").forEach(function(el, i) {
			// console.log(el, i)
			starterData["jumlahWirid"][i] = el.value
		})
		simpanData()
		toast("Jumlah Tasbih diubah.")
	}
	if (e.target.getAttribute("id") === "setBacWirid") {
		starterData["bacaanWirid"] = document.querySelector("[name=bacaan-wirid]").value
		simpanData()
		toast("Bacaan Wirid diubah.")
	}
	if (e.target.getAttribute("id") === "setBacDoa") {
		starterData["bacaanDoa"] = document.querySelector("[name=bacaan-doa]").value
		simpanData()
		toast("Bacaan Doa diubah.")
	}
})


/*
	Logic Tashbih
*/
const tombol = document.querySelector(".tl-big-btn")
const nomor = document.querySelector(".tl-num")
let urutanArray = starterData["jumlahWirid"]
let jumlahWirid = urutanArray[0]
let urutanSekarang = 1

function gantiJumlah(array)
{

	document.querySelectorAll("[class*='tbtn']").forEach(function(el)
	{
		el.setAttribute("data-active", "false")
	})

	document.querySelectorAll("[class*='tbtn']")[array].setAttribute("data-active", "true")
	console.log("ganti" + array)
}

tombol.addEventListener("mousedown", function()
{
	window.navigator.vibrate(50)
	let angkaSekarang = Number(nomor.innerText)

	nomor.innerText = angkaSekarang + 1

	if (angkaSekarang > jumlahWirid - 1)
	{

		if (urutanSekarang === 1)
		{
			gantiJumlah(1);
			urutanSekarang = 2;
			jumlahWirid = urutanArray[1]
		}
		else if (urutanSekarang === 2)
		{
			gantiJumlah(2);
			urutanSekarang = 3;
			jumlahWirid = urutanArray[2]
		}
		else if (urutanSekarang === 3)
		{
			gantiJumlah(3);
			urutanSekarang = 4;
			jumlahWirid = urutanArray[3]
		}
		else
		{
			document.querySelector(".page-2").setAttribute("data-visible", "false")
			document.querySelector(".page-3").setAttribute("data-visible", "true")
			document.querySelector(".page__title > .title").innerText = "Doa"
			// nonaktifkan semua navBtn
			navBtn.forEach(function(el)
			{
				el.setAttribute("data-active", "false")
			})

			// aktifkan navBtn yang diklik
			navBtn[2].setAttribute("data-active", "true")

			gantiJumlah(0);
			urutanSekarang = 1;
			jumlahWirid = urutanArray[0]
		}

		nomor.innerText = 0
	}


	this.setAttribute("data-pressed", "true")
})

tombol.addEventListener("mouseup", function()
{
	this.setAttribute("data-pressed", "false")
})
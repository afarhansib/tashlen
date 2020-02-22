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

let l2KumpulanDoa = `
<ul class="list">
							<li><a href="#l3-doa_tahajud">Doa setelah Sholat Tahajud <span>></span></a></li>
							<li><a href="#l3-doa_witir">Doa setelah Sholat Witir <span>></span></a></li>
							<li><a href="#l3-doa_dhuha">Doa setelah Sholat Dhuha <span>></span></a></li>
						</ul>
`
let l2Pengaturan = `
<ul class="list">
							<li><a href="#l3-jumlah_tasbih">Jumlah Tasbih <span>></span></a></li>
							<li><a href="#l3-bacaan_wirid">Bacaan Wirid <span>></span></a></li>
							<li><a href="#l3-bacaan_doa">Bacaan Doa <span>></span></a></li>
							<li><a href="#l3-tema">Tema Warna <span>></span></a></li>
						</ul>
`
let isiL3 = {
	"doa_tahajud" : ["Doa Setelah Sholat Tahajud", `<p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p><p>Belum ada data.</p>`],
	"doa_witir" : ["Doa Setelah Sholat Witir", `<p>Belum ada data.</p>`],
	"doa_dhuha" : ["Doa Setelah Sholat Dhuha", `<p>Belum ada data.</p>`],
	"jumlah_tasbih" : ["Jumlah Tasbih", `<p>Belum ada data.</p>`],
	"bacaan_wirid" : ["Bacaan Wirid", `<p>Belum ada data.</p>`],
	"bacaan_doa" : ["Bacaan Doa", `<p>Belum ada data.</p>`],
	"tema" : ["Warna Tema", `<p>Belum ada data.</p>`]
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




/*
	Logic Tashbih
*/
const tombol = document.querySelector(".tl-big-btn")
const nomor = document.querySelector(".tl-num")
let urutanArray = [33, 7, 7, 13]
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
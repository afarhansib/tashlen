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

var l2KumpulanDoa = `
<ul class="list-doa">
							<li><a href="#l3-doa-tahajud">Doa setelah Sholat Tahajud</a></li>
							<li><a href="#l3-doa-witir">Doa setelah Sholat Witir</a></li>
							<li><a href="#l3-doa-dhuha">Doa setelah Sholat Dhuha</a></li>
						</ul>
`
var l2Pengaturan = `
<ul class="list-doa">
							<li><a href="#l3-jumlah-wirid">Jumlah Wirid</a></li>
							<li><a href="#l3-bacaan-wirid">Bacaan Wirid</a></li>
							<li><a href="#l3-bacaan-doa">Bacaan Doa</a></li>
							<li><a href="#l3-tema">Tema Warna</a></li>
						</ul>
`



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
navBtn.forEach(function(el)
{
	el.addEventListener("click", function()
	{
		window.navigator.vibrate(30)
		// nonaktifkan semua navBtn
		navBtn.forEach(function(el)
		{
			el.setAttribute("data-active", "false")
		})

		// aktifkan navBtn yang diklik
		this.setAttribute("data-active", "true")

		// ganti page__title sesuai navBtn yang diklik
		document.querySelector(".page__title > .title").innerText = toKapital(this.innerText)

		// ganti page yang tampil
		document.querySelectorAll("[class*='page-']:not(.page-head)").forEach(function(el)
		{
			el.setAttribute("data-visible", "false")
		})

		document.querySelector("." + el.getAttribute("data-goto")).setAttribute("data-visible", "true")

	})
})

// navigasi dari sidebar
sbBtn.forEach(function(el) {
	el.addEventListener("click", function(e) {
		window.navigator.vibrate(30)
		// console.log(e)
		sbBtn.forEach(function(el) {
			el.setAttribute("data-active", "false")
		})
		el.setAttribute("data-active", "true")
			// console.log(e.target.innerText)

		switch(e.target.innerText) {
			case "Home":
				ovlPages.setAttribute("data-visible", "false")
				break;
			case "Kumpulan Doa":
				document.querySelector(".overlay-pages .card .card-body").innerHTML = l2KumpulanDoa
				document.querySelector(".overlay-pages .card .title").innerText = e.target.innerText
				ovlPages.setAttribute("data-visible", "true")
				break;
			case "Pengaturan":
				document.querySelector(".overlay-pages .card .card-body").innerHTML = l2Pengaturan
				document.querySelector(".overlay-pages .card .title").innerText = e.target.innerText
				ovlPages.setAttribute("data-visible", "true")
				break;
		}
		if (e.target.innerText === "Home") {
		} else {
			// console.log(e.target.innerText)
		}
		ovlBlock.setAttribute("data-visible", "false")
		ovlSidebar.setAttribute("data-visible", "false")
	})
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
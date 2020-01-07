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
const ovl = document.querySelectorAll("[class*='overlay']")



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

document.querySelector(".wrap").addEventListener("scroll", function(e)
{
	e.preventDefault()
})

// buka sidebar
menuBtn.addEventListener("click", function()
{
	document.querySelector("[class*='sidebar']").setAttribute("data-visible", "true")
	ovlBlock.setAttribute("data-visible", "true")
})

// tutup sidebar
ovlBlock.addEventListener("click", function()
{
	ovl.forEach(function(el)
	{
		el.setAttribute("data-visible", "false")
	})
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
let urutanArray = [7, 7, 7, 13]
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
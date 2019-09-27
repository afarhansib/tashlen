// made with <3 by afarhansib | visit me on https://afarhansib.github.io/
console.log('%c made with <3 by afarhansib', 'font-weight: bold; font-size: 30px;color: #063; text-shadow: 1px 1px 0px black , -1px -1px 0px white')
console.log('%c visit me on https://afarhansib.github.io/', 'font-weight: bold; font-size: 20px;color: black; text-shadow: 1px 1px 0px #fc0 , -1px -1px 0px white')



// variables
const ovlRotScr = document.querySelector(".overlay-rotate-screen")



// lihat perubahan rotasi
window.addEventListener("orientationchange", function() {
	if (window.matchMedia("(orientation: portrait)").matches) {
		ovlRotScr.setAttribute("data-visible", "true")
    } else {
        ovlRotScr.setAttribute("data-visible", "false")
    }        
}, false)
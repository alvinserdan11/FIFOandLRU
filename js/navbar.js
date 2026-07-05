var tog=document.getElementById("dropdowntoggle");
if (tog) {
    tog.style.display="none";
}
function toggle(){
    if (!tog) return;
    if (tog.style.display=="none") tog.style.display="block";
    else tog.style.display="none";
}

var siteLogo = document.getElementById("siteLogo");
if (siteLogo) {
    var logoClickCount = 0;
    var logoClickTimer = null;
    siteLogo.addEventListener("click", function () {
        logoClickCount++;
        if (logoClickTimer) {
            clearTimeout(logoClickTimer);
        }
        logoClickTimer = setTimeout(function () {
            logoClickCount = 0;
        }, 800);

        if (logoClickCount === 3) {
            logoClickCount = 0;
            alert("Group 6\n\nMichaella Baga\nSherley Batingal Resonable\nAngel Lohr Mallorca\nAngel O. Briones\nAlvin M. Serdan");
        }
    });
}
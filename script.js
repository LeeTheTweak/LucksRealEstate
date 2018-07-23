var tagLineEl = document.getElementById("tagLine");
$(document).ready(function(){
    $(tagLineEl).hide().delay().fadeIn(1500);
});
function changeTagLine() {
    $(tagLineEl).hide().fadeIn(70);
    tagLineEl.textContent = "Live the dream";
}
function changeTagLineBack() {
    $(tagLineEl).hide().fadeIn(700);
    tagLineEl.textContent = "Find your dream home";
}
tagLineEl.addEventListener("mouseover", changeTagLine,false);
tagLineEl.addEventListener("mouseout", changeTagLineBack,false);
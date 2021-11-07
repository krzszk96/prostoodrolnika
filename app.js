
var honeyModal = document.getElementById("honeyModal"); // Get the modal
var btnh = document.getElementById("honeyBtn"); // Get the button that opens the modal

// When the user clicks the button, open the modal 
btnh.onclick = function() {
  honeyModal.style.display = "block";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  honeyModal.style.display = "none";
}

//strawberries
var strawModal = document.getElementById("strawModal"); 
var btns = document.getElementById("strawBtn"); 
btns.onclick = function() {
  strawModal.style.display = "block";
}
var span = document.getElementsByClassName("close")[1];
span.onclick = function() {
  strawModal.style.display = "none";
}

//plums
var plumModal = document.getElementById("plumModal"); 
var btnp = document.getElementById("plumBtn"); 
btnp.onclick = function() {
  plumModal.style.display = "block";
}
var span = document.getElementsByClassName("close")[2];
span.onclick = function() {
  plumModal.style.display = "none";
}

//cherries
var CherryModal = document.getElementById("cherryModal"); 
var btnc = document.getElementById("cherryBtn"); 
btnc.onclick = function() {
  CherryModal.style.display = "block";
}
var span = document.getElementsByClassName("close")[3];
span.onclick = function() {
  CherryModal.style.display = "none";
}
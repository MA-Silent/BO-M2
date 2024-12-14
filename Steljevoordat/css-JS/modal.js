function openModal(ID){
  document.getElementById(ID).style.display = "block";
}

function closeModal(ID){
  document.getElementById(ID).style.display = "none";
}

if(window.innerWidth > 1000){
  document.getElementById("Warning").style.display = "none";
}
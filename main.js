// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var text = document.getElementById("text");
var img = document.getElementById("myImg");	
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
text.onclick = function(){
  img.style.display = "block"; 
  modal.style.display = "block";
  modalImg.src =img.src;
  captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  img.style.display = "none"; 
} 
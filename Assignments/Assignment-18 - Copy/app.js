// 1. Consider you have 4 images in a file as shown below:
// Now When you click on an image it should display in a modal.
// Modal code is available in this assignment file.

function openModal(img) 
{
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
}
   
    function closeModal()
{
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.


var zoomLevel = 16; 
var zoomedText = document.getElementById("zoomedText");
function zoomIn() 
{
zoomLevel += 10;
zoomedText.style.fontSize = zoomLevel + "px";
}
function zoomOut() 
{
if (zoomLevel > 10) 
{
zoomLevel -= 10;
zoomedText.style.fontSize = zoomLevel + "px";
}
}

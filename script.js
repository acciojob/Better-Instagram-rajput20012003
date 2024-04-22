//your code here
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var draggedElement = document.getElementById(data);
  var droppedElement = ev.target;

  if (draggedElement !== droppedElement) {
    var temp = draggedElement.innerHTML;
    draggedElement.innerHTML = droppedElement.innerHTML;
    droppedElement.innerHTML = temp;
  }
}

var images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('dragover', allowDrop);
  image.addEventListener('drop', drop);
});


// Replace 'elementId' with the actual ID of the element you want to hide
var elementToHide = document.getElementById('elementId');

if (elementToHide) {
  var originalDisplayStyle = elementToHide.style.display;

  
  elementToHide.style.display = 'none';

  
  setTimeout(function () {
    
    elementToHide.style.display = originalDisplayStyle;
  }, 5000); // 5000 milliseconds (5 seconds) delay
} else {
  console.log('Element not found.');
}

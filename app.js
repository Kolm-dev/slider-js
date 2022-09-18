let offset = 0; // переменная смещения

// get line of slider

const sliderLine = document.querySelector('.slider-line');


//on click button next

document.querySelector('.slider-next').addEventListener('click', function(){
  offset -= 256; // add offset when click on button next
  if ( offset < -768 ) { 
    offset = 0
  }
  sliderLine.style.left = offset + 'px'
});

//on click button prev

document.querySelector('.slider-prev').addEventListener('click', function(){
  offset += 256; // minus offset on button prev
if (offset > 0) {
  offset = -768
}
  sliderLine.style.left = offset + 'px'
});

//on click img

document.querySelector('.slider-line').addEventListener('click', function(){
  offset -= 256; 
  if ( offset < -768 ) {
    offset = 0
  }
  sliderLine.style.left = offset + 'px'
})
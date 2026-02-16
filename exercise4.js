const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
  // BUG: this.classList.add('active') throws an error
  event.currentTarget.classList.add('active');
});
//Arrow functions don't have thier own 'this' and they use it from surrounding code.
//In event listeners 'this' refers to the element that gets clicked.
//The arrow function cannot point to the element and an error is created. 
//Event.currentTarget targets the element that the event listener is attached to, therefore it is like a replacement for 'this' word in arrow function.  
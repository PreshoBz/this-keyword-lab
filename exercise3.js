const display = document.querySelector("#count-display");
const CounterApp = {
  count: 0,
  increment: function () {
    // increment this.count, update the display span
    this.count++;
    display.textContent = this.count;
  },
  decrement: function () {
    // decrement this.count, update the display span
    this.count--;
    display.textContent = this.count;
  },
};
// Attach increment to #inc-btn using .bind()
const incBtn = document.querySelector("#inc-btn");
incBtn.addEventListener("click", CounterApp.increment.bind(CounterApp));
// Attach decrement to #dec-btn using .bind()
const decBtn = document.querySelector("#dec-btn");
decBtn.addEventListener("click", CounterApp.decrement.bind(CounterApp));
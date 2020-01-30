class Count {
  constructor(title, inputs) {
    this.title = title;
    this.inputs = inputs;
  }
} //end of the class

let down = setInterval(function() {
  dateLogic();
}, 1000);
//select button and put event on it
var btn = document.getElementById("btn");
btn.addEventListener("click", function dateLogic(e) {
  e.preventDefault();
  // convert eventDate to milliseconds
  let eventDate = document.getElementById("date").getTime();
  //convert today's date to milliseconds
  const nowDate = newDate().getTime();
  //milliseconds premium
  let premium = eventDate - nowDate;
  //convert from milliseconds to days,hours,minutes and seconds
  const days = Math.floor(premium / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (premium % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((premium % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((premium % (1000 * 60)) / 1000);
  //check of milliseconds
  if (premium > 0) {
    premium = premium - 1; //decrease the count
  }
  //the count finshed.
  else {
    down.innerHtml("The Even is Now!");
  }
  //new object from class count
  countObj = new Count(
    document.getElementById("title"),
    document.getElementById("date")
  );
  //select event div and append text to it .
  const mainEvent = document.getElementById("event");
  const text = document.createElement("h2");
  text.innerHTML(
    days + "Dayes" + hours + "Hours" + minutes + "Minutes" + seconds + "Seconds"
  );
  mainEvent.appendChild(text);
});

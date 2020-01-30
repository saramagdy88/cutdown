class Count {
  constructor(title, inputs) {
    this.title = title;
    this.inputs = inputs;
  }
} //end of the class

//select button and put event on it
var btn = document.getElementById("btn");
btn.addEventListener("click", function(e) {
  e.preventDefault();
  // convert eventDate to milliseconds
  let eventDate = new Date(document.getElementById("date").value);
  eventDate.getTime();
  //convert today's date to milliseconds
  const nowDate = new Date().getTime();
  //milliseconds premium
  let premium = eventDate - nowDate;
  //convert from milliseconds to days,hours,minutes and seconds
  const days = Math.floor(premium / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (premium % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((premium % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((premium % (1000 * 60)) / 1000);
  let down = setInterval(function() {
    eventDate = eventDate - 1; //decrease the count
  }, 1000);
  //check of milliseconds

  //the count finshed.
  // else {
  //   down.innerHtml("The Even is Now!");
  // }

  //new object from class count
  let countObj = new Count(
    document.getElementById("title".value),
    document.getElementById("date".value)
  );
  //select event div and append text to it .
  const mainEvent = document.getElementById("event");
  const text = document.createElement("h2");
  text.innerHTML =
    days +
    "Dayes  " +
    hours +
    "Hours  " +
    minutes +
    "Minutes  " +
    seconds +
    "Seconds  ";

  mainEvent.appendChild(text);
});

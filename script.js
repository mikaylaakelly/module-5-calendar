// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {


  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userDescription = $(this).siblings(".description").val();

    localStorage.setItem(timeBlockId, userDescription);
  });

  function updateClasses() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").replace("hour", ""));
      if (blockHour < currentHour) {
        $(this).removeClass("future present").addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  // note to self add console log to see if I did this right//


  updateClasses();

  
  function loadSavedActivities() {
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var savedActivities = localStorage.getItem(timeBlockId);
      $(this).find(".description").val(savedActivities);
      console.log(savedActivities);
    });
  }

  
  loadSavedActivities();

  
  function displayCurrentDate() {
    var currentDate = dayjs().format("MMMM D, YYYY");
    $("#currentDay").text(currentDate);
  }

  displayCurrentDate();
});

$(function () {
  function updateClockTime() {
    var currentDateTime = dayjs();
    var currentTime = currentDateTime.format("HH:mm:ss");

    $("#liveClock").text(currentTime);
  }

  updateClockTime();

  setInterval(updateClockTime, 1000);


  function displayCurrentDate() {
    var currentDate = dayjs().format("MMMM D, YYYY");
    $("#currentDay").text(currentDate);
  }
  displayCurrentDate();
});
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


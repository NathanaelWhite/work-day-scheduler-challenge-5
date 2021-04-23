// var eventText = $("#eventText");
var saveButton = $("#save-btn");
var eventEl = $("#eventHour");



// create a function to save events to specific textarea on the page
// when user types in textarea, then clicks the save btn, the text appends to the page

// event has to save on click (.click) of the saveIcon. On click, get the value of textarea and run saveEvents
$(document).ready(function () {

  // call when button is clicked
  $(saveButton).click(function () {
    var eventText = $("#eventText").val();
    console.log(eventText);
  });
});

var saveEvents = function () { 
  localStorage.setItem("eventText", eventText);
};

// loadEvents to keep eventText on screen after refresh
// JSON the events array to local storage
var loadEvents = function() {
    var savedEvents = localStorage.getItem("eventText");
    // if nothing in localStorage, then return
    if (!savedEvents) {
        return false;
    };
}
// saveEvents function to save eventText to local storage
// to take out of localStorage, I have to JSON.parse the item



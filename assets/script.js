// var eventText = $("#eventText");
var saveButton = $("#save-btn");
//1. momentjs
  //currentTime
  var currentTime= moment().format('MMMM Do YYYY, h:mm:ss a');
  // console.log(currentTime)
  $("#currentDay").text(currentTime);
  var currentHour=moment().format("HH");
  // console.log(currentHour);

  //array that contains the times we need
var workHours =[9,10,11,12,13,14,15,16,17];

function displayBlock() {

  /*
  <div class="row time-block" id="eventHour">
    <div class="col-1 hour">9AM</div>
    <textarea class="col-10 description border border-top-dark" id="eventText"></textarea>
    <button class="col-1 saveBtn" id="9">
       <i class="fas fa-save"></i>
    </button>
  </div>
  */

  for(var i=0; i<workHours.length;i++){



  var d1= $("<div>");
  d1.attr("class","row time-block");
  d1.attr("id","eventHour");

  var d2= $("<div>");
  d2.attr("class","col-1 hour");
  if(workHours[i]<12){
    d2.text(workHours[i]+"AM");
  }
  if(workHours[i]==12){
    d2.text(workHours[i]+"PM");
  }
  if(workHours[i]>12){
    d2.text(workHours[i]-12+"PM");
  }

  var textarea=$("<textarea>")
  if(workHours[i]==currentHour){
    textarea.attr("class","eventtext col-10 description border border-top-dark present");
  }
  if(workHours[i]<currentHour)
  {textarea.attr("class","eventText col-10 description border border-top-dark past");}
  if(workHours[i]>currentHour)
  {textarea.attr("class","eventText col-10 description border border-top-dark future");}

  textarea.attr("id","hour-"+workHours[i]);


  var btn=$("<button>")
  btn.attr("class","col-1 saveBtn");
  btn.attr("id",workHours[i]);
  var icon=$("<i>")
  icon.attr("class","fas fa-save");

  btn.append(icon);

  d1.append(d2);
  d1.append(textarea);
  d1.append(btn);

  $(".container").append(d1)
}

  $(".saveBtn").click(function () {
   //grab hour
   var hour = $(this).attr("id");
    console.log(hour);
    //grab eventText
    var eventText = $(this).siblings("textarea").val();
    console.log(eventText);
    //set to local storage

    //hour = userinput(eventText)
    saveEvents(hour, eventText);
    //9=test
    //10= helo
  });


// loadEvents();
loadEvents();
}
var loadEvents = function() {
  for(var i=0; i<workHours.length;i++) {
    var key = workHours[i].toString();
    $("#hour-"+key).val(localStorage.getItem(key));
    console.log(key);
  };
}

var saveEvents = function (key, input) { 
  if (input === "") {
      return;
  } else {
    localStorage.setItem(key, input);
  }
};


//get to localstorage
// $("#hour-9").val("test");




//AM:
//amy num less than 12 append a AM
//PM
//if hour greater 12 
//hour -12 append PM
//12PM:
// if hour is 12 append a PM

// create an array for workHours
// on click, get eventText and workHours value/position



// create a function to save events to specific textarea on the page
// when user types in textarea, then clicks the save btn, the text appends to the page

// event has to save on click (.click) of the saveIcon. On click, get the value of textarea and run saveEvents



  // call when button is clicked
  //get the onclick to work for each btn
  //grab the current hour that I click
  //user's current input
  //then sent to local storage


//   $(saveButton).click(function () {
//     var eventText = $("#eventText").val();
//     console.log(eventText);
//   });

// var saveEvents = function () { 
//   localStorage.setItem("eventText", eventText);
// };

// // loadEvents to keep eventText on screen after refresh
// // JSON the events array to local storage
// var loadEvents = function() {
//     var savedEvents = localStorage.getItem("eventText");
//     // if nothing in localStorage, then return
//     if (!savedEvents) {
//         return false;
//     };
// }
// saveEvents function to save eventText to local storage
// to take out of localStorage, I have to JSON.parse the item


displayBlock();
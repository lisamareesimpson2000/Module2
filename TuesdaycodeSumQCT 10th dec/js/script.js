//Scrolling to sections

$(document).ready(function(){
  $("#secondPage").hide();
$("#thirdPage").hide();
$("#fourthPage").hide();
    $("#btn__planTrip").click(function(){
      $("#secondPage").show();
        $("#firstPage").hide();
        $('html, body').animate({
            scrollTop: $("#secondPage").offset().top
         }, 1000);
    });

    $("#btn__back--myTrip").click(function(){
        $("#firstPage").show();
        $('html, body').animate({
            scrollTop: $("#firstPage").offset().top
         }, 1000);
    });

    $(".btn__back--acc").click(function(){
      $("#firstPage").hide();
      $("#secondPage").show();
      $("#thirdPage").hide();
        $('html, body').animate({
            scrollTop: $("#secondPage").offset().top
         }, 1000);
    });
      
    $(".header__button--accomm").click(function(){
      $("#fourthPage").show();
      $("#thirdPage").hide();
        $('html, body').animate({
            scrollTop: $("#fourthPage").offset().top
         }, 1000);
    });

    $(".btn__strtO").click(function(){
      $("#firstPage").show();
        $("#secondPage").hide();
          $("#thirdPage").hide();
            $("#fourthPage").hide();
        $('html, body').animate({
            scrollTop: $("#firstPage").offset().top
         }, 1000);
    });

 $("#map").hide();

});

//Modal - INFO

// Get the button that opens the modal
var btn = document.getElementById("cont__info");

// When the user clicks the button, open the modal 
function modal__info() {
  var modal = document.getElementById('myModal');
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function info__close() {
  //var span = document.getElementsByClassName("close")[0];
  var  modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function close__outSide(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//MODAL - CALL FOR BOOKING

  // Get the button that opens the modal
  var callBtn = document.getElementById("phNumber");

  // Get the <span> element that closes the modal
  var close = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  function secure__booking() {
    var callModal = document.getElementById('callModal');
      callModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  function booking__close() {
    var callModal = document.getElementById('callModal');
      callModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function close__outSide(event) {
      if (event.target == callModal) {
          callModal.style.display = "none";
      }
  };

//Find the number of days between dates
  var guests, days;

  function dateDiff() {

    var start = $('#startDate').datepicker('getDate');
    var end = $('#endDate').datepicker('getDate');
    days   = (end - start)/1000/60/60/24;
    console.log(days);
               if (days > 0){
         
    document.getElementById("p__myTrip--nights").innerHTML =  days + " nights!";
    return days;
  } else {
    Swal ("Please enter check in and check out dates!");
  }

  }

    
  // TRIP OVERVIEW - COST AND MEALS
  // console.log(days);
  var price, mealsCost, place;
  function displayFur(){
 // console.log(document.getElementsByClassName("select__meals")) 
  
  var meals = document.getElementById("mealsFur").value;
  console.log(meals);
  
  price = 157;
  if (meals == 1) {
    document.getElementById("display__meals").innerHTML = "Breakfast $20" ;
    mealsCost = 20;
  }
  if (meals == 2) {
    document.getElementById("display__meals").innerHTML = "Lunch $20" ;
    mealsCost = 20;
  }
  if (meals == 3) {
    document.getElementById("display__meals").innerHTML = "Dinner $20" ;
    mealsCost= 20;
  }
  if (meals == 4) {
    mealsCost = 60;
    document.getElementById("display__meals").innerHTML = "All Meals $60";
  } 
  if (meals == 5) {
    mealsCost = 0;
   document.getElementById("display__meals").innerHTML = "No Meals";
  }

  console.log(price, mealsCost);
  
  var total = days * (price + mealsCost);
  document.getElementById("total__cost").innerHTML = total + " NZD";
  document.getElementById("heading__accomm--type").innerHTML =  "Forneaux Lodge";
  document.getElementById("price__accomm").innerHTML =  "$157 per night";
}



  function displayBas(){
 // console.log(document.getElementsByClassName("select__meals")) 
  
  var meals = document.getElementById("mealsBas").value;
  console.log(meals);
  
  price = 30;
  if (meals == 1) {
    document.getElementById("display__meals").innerHTML = "Breakfast $20" ;
    mealsCost = 20;
      console.log(mealsCost);
  }

  if (meals == 2) {
    document.getElementById("display__meals").innerHTML = "Lunch $20" ;
    mealsCost = 20;
      console.log(mealsCost);
  }

  if (meals == 3) {
    document.getElementById("display__meals").innerHTML = "Dinner $20" ;
    mealsCost = 20;
  }
  if (meals == 4) {
    mealsCost = 60;
    document.getElementById("display__meals").innerHTML = "All Meals $60";
  } 
  if (meals == 5) {
    mealsCost = 0;
   document.getElementById("display__meals").innerHTML = "No Meals";
  }

  console.log(price, mealsCost);
  
  var total = days * (price+ mealsCost);
  document.getElementById("total__cost").innerHTML = total + " NZD";
  document.getElementById("heading__accomm--type").innerHTML =  "Basecamp";
  document.getElementById("price__accomm").innerHTML =  "$30 per night";
}

  function displayLoc(){
 // console.log(document.getElementsByClassName("select__meals")) 
  
  var meals = document.getElementById("mealsLoc").value;
  console.log(meals);
  
  price = 90;
  if (meals == 1) {
    document.getElementById("display__meals").innerHTML = "Breakfast $20" ;
    mealsCost = 20;
      console.log(mealsCost);
  }

  if (meals == 2) {
    document.getElementById("display__meals").innerHTML = "Lunch $20" ;
    mealsCost= 20;
      console.log(mealsCost);
  }

  if (meals == 3) {
    document.getElementById("display__meals").innerHTML = "Dinner $20" ;
    mealsCost= 20;
  }
  if (meals == 4) {
    mealsCost = 60;
    document.getElementById("display__meals").innerHTML = "All Meals $60";
  } 
  if (meals == 5) {
    mealsCost = 0;
   document.getElementById("display__meals").innerHTML = "No Meals";
  }

  console.log(price, mealsCost);
  
  var total = days * (price + mealsCost);
  document.getElementById("total__cost").innerHTML = total + " NZD";
  document.getElementById("heading__accomm--type").innerHTML =  "Lochmara";
  document.getElementById("price__accomm").innerHTML =  "$90 per night";
}

  function displayPor(){
 // console.log(document.getElementsByClassName("select__meals")) 
  
  var meals = document.getElementById("mealsPor").value;
  console.log(meals);
  
  price = 240;
  if (meals == 1) {
    document.getElementById("display__meals").innerHTML = "Breakfast $20" ;
    mealsCost = 20;
      console.log(mealsCost);
  }

  if (meals == 2) {
    document.getElementById("display__meals").innerHTML = "Lunch $20" ;
    mealsCost= 20;
      console.log(mealsCost);
  }

  if (meals == 3) {
    document.getElementById("display__meals").innerHTML = "Dinner $20" ;
    mealsCost= 20;
  }
  if (meals == 4) {
    mealsCost = 60;
    document.getElementById("display__meals").innerHTML = "All Meals $60";
  } 
  if (meals == 5) {
    mealsCost = 0;
   document.getElementById("display__meals").innerHTML = "No Meals";
  }

  console.log(price, mealsCost);
  
  var total = days * (price+ mealsCost);
  document.getElementById("total__cost").innerHTML = total + " NZD";
  document.getElementById("heading__accomm--type").innerHTML =  "The Portage";
  document.getElementById("price__accomm").innerHTML =  "$240 per night";
}
//FILTER ACCOMMODATION

    $("#hostel").show();
    $("#motel").show();
    $("#house").show();
    $("#hotel").show();


function filterAccom(){
  console.log(days);
  if (days >= 1) {
    $("#thirdPage").show();
     $("#secondPage").hide();
    $('html, body').animate({
            scrollTop: $("#thirdPage").offset().top
         }, 1000);



  guests = document.getElementById('guests').value;
 document.getElementById("display__guests").innerHTML =  guests + " Guests";
  document.getElementById("display__nights").innerHTML =  days + " Nights";
  
  console.log(guests,days);
  if ((guests<2) && (days <=15)) {
    $("#hotel").hide();
    $("#hostel").hide();
    $("#motel").hide();
    $("#house").show();

  }
  if ((guests<2) && (days <=10)) {
    $("#hotel").hide();
    $("#hostel").show();
    $("#motel").hide();
    $("#house").show();

  }
  if ((guests<2) && (days <=5)) {
    $("#hotel").show();
    $("#hostel").show();
    $("#motel").hide();
    $("#house").show();
  }
  if ((guests==2) && (days <=15)) {
    $("#hotel").hide();
    $("#hostel").hide();
    $("#motel").hide();
    $("#house").show();
  }
  if ((guests==2) && (days <=10)) {
    $("#hotel").hide();
    $("#hostel").hide();
    $("#motel").show();
    $("#house").show();
  }
  if ((guests==2) && (days <=5)) {
    $("#hotel").show();
    $("#hostel").hide();
    $("#motel").show();
    $("#house").show();
  }
  if ((guests==3) && (days <=15)) {
    $("#hotel").hide();
    $("#hostel").hide();
    $("#motel").hide();
    $("#house").show();
  }
  if ((guests==3) && (days <=10)) {
    $("#hotel").hide();
    $("#hostel").hide();
    $("#motel").show();
    $("#house").show();
  }
  if ((guests==4) && (days <=15)) {
    $("#hotel").hide();
    $("#hostel").hide();
    $("#motel").hide();
    $("#house").show();
  }
  if ((guests==4) && (days <=10)) {
    $("#hotel").hide();
    $("#hostel").hide();
    $("#motel").show();
    $("#house").show();
  }
} else {
  Swal("Check in and check out dates must be selected to continue!");
       $("#secondPage").show();
      $("#thirdPage").hide();
     
        
   
  }
}
//This hide and shows the map
$(document).ready(function(){
   $("#viewMap").click(function(){
$("#map").toggle();
});
   });


// GOOGLE MAPS

// Store places 
function storeFur(){
  place = "Forneaux Lodge";
}
function storeBas(){
  place = "Basecamp";
}
function storeLoc(){
  place = "Lochmara";
}
function storePor(){
  place = "The Portage";
}

 // Initialize and add the map
function viewMap() {


var accommodation = [
  {
  type: "hotel",
  name: "Forneaux Lodge",
  price: 157,
  minNight: 1,
  maxNight: 5,
  minGuests: 1,
  maxGuests: 2,
  lat: -41.0927404,
  lng: 174.1849555
  },
  {
  type: "hostel",
  name: "Basecamp",
  price: 30,
  minNight: 1,
  maxNight: 10,
  minGuests: 1,
  maxGuests: 1,
  lat: -41.1293714,
  lng: 174.1483377
  },
  {
  type: "Motel",
  name: "Lochmara",
  price: 90,
  minNight: 3,
  maxNight: 10,
  minGuests: 2,
  maxGuests: 4,
  lat: -41.2290199,
  lng: 173.9937393
  },
  {
  type: "house",
  name: "The Portage",
  price: 240,
  minNight: 2,
  maxNight: 15,
  minGuests: 1,
  maxGuests: 4,
  lat: -41.198018,
  lng: 174.0315123
  },
];
  // The location of Wellington
  var marlborough = {lat: -41.2290199, lng: 173.9937393};
  // The map, centered at Wellington
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: marlborough});
      console.log(map);
  // The marker, positioned at queen charlotte accommodation
 for (var i=0; i < accommodation.length; i++) {
    console.log(place);
    // document.getElementsByClassName('map'), {zoom: 12, center: marlborough};
    // console.log(map);
    if (place == accommodation[i].name) {
   var marker = new google.maps.Marker({position: {lat: accommodation[i].lat  , lng:  accommodation[i].lng }, map: map});
   }
  }
}

// DATE PICKER
  $( function() {

    $("#startDate").datepicker({ 
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        minDate: new Date(),
        maxDate: '+1y',
        onSelect: function(date){

            var selectedDate = new Date(date);
            var msecsInADay = 86400000;
            var stDate = new Date(selectedDate.getTime() + msecsInADay);

           //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
            $("#endDate").datepicker( "option", "minDate", stDate );
            var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);

            $("#endDate").datepicker( "option", "maxDate", enDate );

        }
    });

    $("#endDate").datepicker({ 
        dateFormat: 'yy-mm-dd',
        changeMonth: true
    });
  } );

  //GENERATE A RANDOM NUMBER
function referenceNo() {
      var x = document.getElementById("p__randomNo");
    x.innerHTML = Math.floor((Math.random() * 10000) + 1);
}







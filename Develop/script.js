$(document).ready(function () {
  $("#search-button").on("click", function () {
    var searchValue = $("#search-value").val();

    // clear input box
    $("#search-value").val("");
    //Search Value is the City name
    searchWeather(searchValue);
  });

  function searchWeather(searchValue) {
    $.ajax({
      type: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        searchValue +
        "&appid=" +
        "757616426ad9d4b087c1407581edc051" + "&units=imperial",
      dataType: "json",
      success: function (data) {
        //Data is weather info back from the API
      }
    });
  }

  //Chamge text

  function CityText(){

  }

  
});

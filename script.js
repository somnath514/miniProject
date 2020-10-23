//On Page Load Data
$(document).ready(function () {
  console.log("document is ready")
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    latitude = lat.toFixed(2);
    longitude = long.toFixed(2);
    console.log(latitude)
    console.log(longitude)
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=371beedce4a112ff56e307cd93970e34" + "&units=metric",
      success: function (response) {
        console.log('successfully get data from json-server')
        let city = response.name;
        let conditions = response.weather[0].main;
        console.log(conditions);
        let temp = response.main.temp;
        let wind = response.wind.speed;
        let humidity = response.main.humidity;
        let id = response.id;
        let pressure = response.main.pressure;
        let sunrise = response.sys.sunrise;
        let rise = new Date(sunrise * 1000);
        let riseHr = rise.getHours();
        let riseMin = rise.getMinutes();
        let riseSec = rise.getSeconds();
        riseTime = riseHr + ":" + riseMin + ":" + riseSec;
        let sunset = response.sys.sunset;
        let set = new Date(sunset * 1000);
        let setHr = set.getHours();
        let setMin = set.getMinutes();
        let setSec = set.getSeconds();
        let setTime = setHr + ":" + setMin + ":" + setSec;
        $('#curr-city').html(response.name.toUpperCase());
        $('#curr-temp').html(temp);
        $('#curr-weather').html(conditions);
        var d = new Date();
        $('#curr-timeDate').html(d);
        $('#curr-wind').html(wind + " meter/sec");
        $('#curr-humidity').html(humidity + "%");
        $('#curr-pressure').html(pressure + " hPa");
        $('#curr-sunrise').html(riseTime);
        $('#curr-sunset').html(setTime);
        $('#curr-id').html(id);
        $('#columnchart_material').hide();

        $('#pop1').html(city.toUpperCase());
        $('#pop1-data1').html("The weather in" + ' ' + city.toUpperCase() + ' ' + conditions.toUpperCase());
        $('#pop1-data2').html("Tempreture" + ' ' + temp + "C");
        $('#pop1-data3').html("Humidity" + ' ' + humidity + " " + "%");


        $.ajax({
          type: "GET",
          url: "https://api.openweathermap.org/data/2.5/weather?q=new york&appid=371beedce4a112ff56e307cd93970e34&units=metric",
          data: "data",
          dataType: "json",
          success: function (response) {
            console.log(response);
            let city = response.name;
            let conditions = response.weather[0].main;
            let temp = response.main.temp;
            let wind = response.wind.speed;
            let humidity = response.main.humidity;
            let id = response.id;
            let pressure = response.main.pressure;
            let sunrise = response.sys.sunrise;
            let rise = new Date(sunrise * 1000);
            let riseHr = rise.getHours();
            let riseMin = rise.getMinutes();
            let riseSec = rise.getSeconds();
            riseTime = riseHr + ":" + riseMin + ":" + riseSec;
            let sunset = response.sys.sunset;
            let set = new Date(sunset * 1000);
            let setHr = set.getHours();
            let setMin = set.getMinutes();
            let setSec = set.getSeconds();
            let setTime = setHr + ":" + setMin + ":" + setSec;

            $('#pop2').html(city.toUpperCase());
            $('#pop2-data1').html("The weather in" + ' ' + city.toUpperCase() + ' ' + conditions.toUpperCase());
            $('#pop2-data2').html("Tempreture" + ' ' + temp + "C");
            $('#pop2-data3').html("Humidity" + ' ' + humidity + " " + "%");

          }
        });

        $.ajax({
          type: "GET",
          url: "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=371beedce4a112ff56e307cd93970e34&units=metric",
          data: "data",
          dataType: "json",
          success: function (response) {
            console.log(response);
            let city = response.name;
            let conditions = response.weather[0].main;
            let temp = response.main.temp;
            let wind = response.wind.speed;
            let humidity = response.main.humidity;
            let id = response.id;
            let pressure = response.main.pressure;
            let sunrise = response.sys.sunrise;
            let rise = new Date(sunrise * 1000);
            let riseHr = rise.getHours();
            let riseMin = rise.getMinutes();
            let riseSec = rise.getSeconds();
            riseTime = riseHr + ":" + riseMin + ":" + riseSec;
            let sunset = response.sys.sunset;
            let set = new Date(sunset * 1000);
            let setHr = set.getHours();
            let setMin = set.getMinutes();
            let setSec = set.getSeconds();
            let setTime = setHr + ":" + setMin + ":" + setSec;

            $('#pop3').html(city.toUpperCase());
            $('#pop3-data1').html("The weather in" + ' ' + city.toUpperCase() + ' ' + conditions.toUpperCase());
            $('#pop3-data2').html("Tempreture" + ' ' + temp + 'C');
            $('#pop3-data3').html("Humidity" + ' ' + humidity + " " + "%");

          }
        });

        switch (conditions) {
          case 'Rain':
            {

              $('#main-img').attr('src', 'rain.jpg');
              break;
            }
          case 'Clouds':
            {
              $('#main-img').attr('src', 'cloudy.jpg');

              break;
            }
          case 'Sunny':
            {
              $('#main-img').attr('src', 'Sunny.jpg');
              break;
            }
          case 'Clear':
            {
              $('#main-img').attr('src', 'balloon.png');
              break;
            }
          case 'Haze':
            {
              $('#main-img').attr('src', 'Haze.jpg');
              break;
            }
          case 'Mist':
            {
              $('#main-img').attr('src', 'mist.jpg');
              break;
            }
        }
      }
    })
  });
})
//On Page Load Data Ends Here



//C to F conversion
var cToF = function (c) {
  return (c * (9 / 5)) + 32;
};

var fToC = function (f) {
  return (f - 32) * (5 / 9);
};

$("#button-temp").on("click", function () {
  if ($("#degcel").html() == "°c") {
    $("#degcel").html("f")
  }
  else if ($("#degcel").html() == "f") {
    $("#degcel").html("°c")
  }
  var isF = $('#curr-temp').data("units") === "f";

  var oldTemp = $('#curr-temp').text();
  var newTemp = isF ? fToC(oldTemp) : cToF(oldTemp);
  $('#curr-temp').text(newTemp.toFixed(2));

  var newUnits = isF ? "c" : "f";
  $('#curr-temp').data("units", newUnits).attr("data-units", newUnits);
});
//C to F conversion Ends Here





//Main Search Function
function searchForCity() {

  let cityName = $('#citysearch').val();
  $.ajax({
    type: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=371beedce4a112ff56e307cd93970e34" + "&units=metric",
    dataType: "json",
    success: function (response) {
      console.log(response);
      let city = response.name;
      let conditions = response.weather[0].main;
      console.log(conditions);
      let temp = response.main.temp;
      let wind = response.wind.speed;
      let humidity = response.main.humidity;
      let id = response.id;
      let pressure = response.main.pressure;
      let sunrise = response.sys.sunrise;
      let rise = new Date(sunrise * 1000);
      let riseHr = rise.getHours();
      let riseMin = rise.getMinutes();
      let riseSec = rise.getSeconds();
      riseTime = riseHr + ":" + riseMin + ":" + riseSec;
      let sunset = response.sys.sunset;
      let set = new Date(sunset * 1000);
      let setHr = set.getHours();
      let setMin = set.getMinutes();
      let setSec = set.getSeconds();
      let setTime = setHr + ":" + setMin + ":" + setSec;
      $('#curr-city').html(cityName.toUpperCase());
      $('#curr-temp').html(temp);
      $('#curr-weather').html(conditions);
      var d = new Date();
      $('#curr-timeDate').html(d);
      $('#curr-wind').html(wind + " meter/sec");
      $('#curr-humidity').html(humidity + "%");
      $('#curr-pressure').html(pressure + " hPa");
      $('#curr-sunrise').html(riseTime);
      $('#curr-sunset').html(setTime);
      $('#curr-id').html(id);

      switch (conditions) {
        case 'Rain':
          {

            $('#main-img').attr('src', 'rain.jpg');
            break;
          }
        case 'Clouds':
          {
            $('#main-img').attr('src', 'cloudy.jpg');

            break;
          }
        case 'Sunny':
          {
            $('#main-img').attr('src', 'Sunny.jpg');
            break;
          }
        case 'Clear':
          {
            $('#main-img').attr('src', 'balloon.png');
            break;
          }
        case 'Haze':
          {
            $('#main-img').attr('src', 'Haze.jpg');
            break;
          }
        case 'Mist':
          {
            $('#main-img').attr('src', 'mist.jpg');
            break;
          }
      }


    }

  });
}
//Main Search Ends Here


//Popular City Search For City 1
function goToSlide1() {
  let cityName = $('#c1').val();
  if (cityName === '') {
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=birmingham&appid=371beedce4a112ff56e307cd93970e34&units=metric",
      data: "data",
      dataType: "json",
      success: function (response) {
        console.log(response);
        let city = response.name;
        let conditions = response.weather[0].main;
        let temp = response.main.temp;
        let wind = response.wind.speed;
        let humidity = response.main.humidity;
        let id = response.id;
        let pressure = response.main.pressure;
        let sunrise = response.sys.sunrise;
        let rise = new Date(sunrise * 1000);
        let riseHr = rise.getHours();
        let riseMin = rise.getMinutes();
        let riseSec = rise.getSeconds();
        riseTime = riseHr + ":" + riseMin + ":" + riseSec;
        let sunset = response.sys.sunset;
        let set = new Date(sunset * 1000);
        let setHr = set.getHours();
        let setMin = set.getMinutes();
        let setSec = set.getSeconds();
        let setTime = setHr + ":" + setMin + ":" + setSec;
        $('#curr-city').html(city.toUpperCase());
        $('#curr-temp').html(temp);
        $('#curr-weather').html(conditions);
        var d = new Date();
        $('#curr-timeDate').html(d);
        $('#curr-wind').html(wind + " meter/sec");
        $('#curr-humidity').html(humidity + "%");
        $('#curr-pressure').html(pressure + " hPa");
        $('#curr-sunrise').html(riseTime);
        $('#curr-sunset').html(setTime);
        $('#curr-id').html(id);
        $('#pop1').html(city.toUpperCase());
        $('#pop1-data1').html("The weather in" + ' ' + city.toUpperCase() + ' ' + conditions.toUpperCase());
        $('#pop1-data2').html("Tempreture" + ' ' + temp + "C");
        $('#pop1-data3').html("Humidity" + ' ' + humidity + " " + "%");
        switch (conditions) {
          case 'Rain':
            {

              $('#main-img').attr('src', 'rain.jpg');
              break;
            }
          case 'Clouds':
            {
              $('#main-img').attr('src', 'cloudy.jpg');

              break;
            }
          case 'Sunny':
            {
              $('#main-img').attr('src', 'Sunny.jpg');
              break;
            }
          case 'Clear':
            {
              $('#main-img').attr('src', 'balloon.png');
              break;
            }
          case 'Haze':
            {
              $('#main-img').attr('src', 'Haze.jpg');
              break;
            }
          case 'Mist':
            {
              $('#main-img').attr('src', 'mist.jpg');
              break;
            }
        }

      }
    });
  } else {
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=371beedce4a112ff56e307cd93970e34" + "&units=metric",
      dataType: "json",
      success: function (response) {
        console.log(response);
        let city = response.name;
        let conditions = response.weather[0].main;
        let temp = response.main.temp;
        let wind = response.wind.speed;
        let humidity = response.main.humidity;
        let id = response.id;
        let pressure = response.main.pressure;
        let sunrise = response.sys.sunrise;
        let rise = new Date(sunrise * 1000);
        let riseHr = rise.getHours();
        let riseMin = rise.getMinutes();
        let riseSec = rise.getSeconds();
        riseTime = riseHr + ":" + riseMin + ":" + riseSec;
        let sunset = response.sys.sunset;
        let set = new Date(sunset * 1000);
        let setHr = set.getHours();
        let setMin = set.getMinutes();
        let setSec = set.getSeconds();
        let setTime = setHr + ":" + setMin + ":" + setSec;
        $('#curr-city').html(city.toUpperCase());
        $('#curr-temp').html(temp);
        $('#curr-weather').html(conditions);
        var d = new Date();
        $('#curr-timeDate').html(d);
        $('#curr-wind').html(wind + " meter/sec");
        $('#curr-humidity').html(humidity + "%");
        $('#curr-pressure').html(pressure + " hPa");
        $('#curr-sunrise').html(riseTime);
        $('#curr-sunset').html(setTime);
        $('#curr-id').html(id);
        $('#pop1').html(city.toUpperCase());
        $('#pop1-data1').html("The weather in" + ' ' + city.toUpperCase() + ' ' + conditions.toUpperCase());
        $('#pop1-data2').html("Tempreture" + ' ' + temp + 'C');
        $('#pop1-data3').html("Humidity" + ' ' + humidity + " " + "%");
        switch (conditions) {
          case 'Rain':
            {

              $('#main-img').attr('src', 'rain.jpg');
              break;
            }
          case 'Clouds':
            {
              $('#main-img').attr('src', 'cloudy.jpg');

              break;
            }
          case 'Sunny':
            {
              $('#main-img').attr('src', 'Sunny.jpg');
              break;
            }
          case 'Clear':
            {
              $('#main-img').attr('src', 'balloon.png');
              break;
            }
          case 'Haze':
            {
              $('#main-img').attr('src', 'Haze.jpg');
              break;
            }
          case 'Mist':
            {
              $('#main-img').attr('src', 'mist.jpg');
              break;
            }
        }
      }

    });
  }

}

//Popular City Search For City 2
function goToSlide2() {
  let cityName = $('#c2').val();
  if (cityName === '') {
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=new york&appid=371beedce4a112ff56e307cd93970e34&units=metric",
      data: "data",
      dataType: "json",
      success: function (response) {
        console.log(response);
        let city = response.name;
        let conditions = response.weather[0].main;
        let temp = response.main.temp;
        let wind = response.wind.speed;
        let humidity = response.main.humidity;
        let id = response.id;
        let pressure = response.main.pressure;
        let sunrise = response.sys.sunrise;
        let rise = new Date(sunrise * 1000);
        let riseHr = rise.getHours();
        let riseMin = rise.getMinutes();
        let riseSec = rise.getSeconds();
        riseTime = riseHr + ":" + riseMin + ":" + riseSec;
        let sunset = response.sys.sunset;
        let set = new Date(sunset * 1000);
        let setHr = set.getHours();
        let setMin = set.getMinutes();
        let setSec = set.getSeconds();
        let setTime = setHr + ":" + setMin + ":" + setSec;
        $('#curr-city').html(city.toUpperCase());
        $('#curr-temp').html(temp);
        $('#curr-weather').html(conditions);
        var d = new Date();
        $('#curr-timeDate').html(d);
        $('#curr-wind').html(wind + " meter/sec");
        $('#curr-humidity').html(humidity + "%");
        $('#curr-pressure').html(pressure + " hPa");
        $('#curr-sunrise').html(riseTime);
        $('#curr-sunset').html(setTime);
        $('#curr-id').html(id);
        $('#pop2').html(city.toUpperCase());
        $('#pop2-data1').html("The weather in" + ' ' + city.toUpperCase() + ' ' + conditions.toUpperCase());
        $('#pop2-data2').html("Tempreture" + ' ' + temp + 'C');
        $('#pop2-data3').html("Humidity" + ' ' + humidity + " " + "%");
        switch (conditions) {
          case 'Rain':
            {

              $('#main-img').attr('src', 'rain.jpg');
              break;
            }
          case 'Clouds':
            {
              $('#main-img').attr('src', 'cloudy.jpg');

              break;
            }
          case 'Sunny':
            {
              $('#main-img').attr('src', 'Sunny.jpg');
              break;
            }
          case 'Clear':
            {
              $('#main-img').attr('src', 'balloon.png');
              break;
            }
          case 'Haze':
            {
              $('#main-img').attr('src', 'Haze.jpg');
              break;
            }
          case 'Mist':
            {
              $('#main-img').attr('src', 'mist.jpg');
              break;
            }
        }
      }
    });
  } else {
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=371beedce4a112ff56e307cd93970e34" + "&units=metric",
      dataType: "json",
      success: function (response) {
        console.log(response);
        let city = response.name;
        let conditions = response.weather[0].main;
        let temp = response.main.temp;
        let wind = response.wind.speed;
        let humidity = response.main.humidity;
        let id = response.id;
        let pressure = response.main.pressure;
        let sunrise = response.sys.sunrise;
        let rise = new Date(sunrise * 1000);
        let riseHr = rise.getHours();
        let riseMin = rise.getMinutes();
        let riseSec = rise.getSeconds();
        riseTime = riseHr + ":" + riseMin + ":" + riseSec;
        let sunset = response.sys.sunset;
        let set = new Date(sunset * 1000);
        let setHr = set.getHours();
        let setMin = set.getMinutes();
        let setSec = set.getSeconds();
        let setTime = setHr + ":" + setMin + ":" + setSec;
        $('#curr-city').html(city.toUpperCase());
        $('#curr-temp').html(temp);
        $('#curr-weather').html(conditions);
        var d = new Date();
        $('#curr-timeDate').html(d);
        $('#curr-wind').html(wind + " meter/sec");
        $('#curr-humidity').html(humidity + "%");
        $('#curr-pressure').html(pressure + " hPa");
        $('#curr-sunrise').html(riseTime);
        $('#curr-sunset').html(setTime);
        $('#curr-id').html(id);
        $('#pop2').html(city.toUpperCase());
        $('#pop2-data1').html("The weather in" + ' ' + city.toUpperCase() + ' ' + conditions.toUpperCase());
        $('#pop2-data2').html("Tempreture" + ' ' + temp + 'C');
        $('#pop2-data3').html("Humidity" + ' ' + humidity + " " + "%");
        switch (conditions) {
          case 'Rain':
            {

              $('#main-img').attr('src', 'rain.jpg');
              break;
            }
          case 'Clouds':
            {
              $('#main-img').attr('src', 'cloudy.jpg');

              break;
            }
          case 'Sunny':
            {
              $('#main-img').attr('src', 'Sunny.jpg');
              break;
            }
          case 'Clear':
            {
              $('#main-img').attr('src', 'balloon.png');
              break;
            }
          case 'Haze':
            {
              $('#main-img').attr('src', 'Haze.jpg');
              break;
            }
          case 'Mist':
            {
              $('#main-img').attr('src', 'mist.jpg');
              break;
            }
        }
      }
    });
  }

}

//Popular City Search For City 3
function goToSlide3() {
  let cityName = $('#c3').val();
  if (cityName === '') {

    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=371beedce4a112ff56e307cd93970e34&units=metric",
      data: "data",
      dataType: "json",
      success: function (response) {
        console.log(response);
        let city = response.name;
        let conditions = response.weather[0].main;
        let temp = response.main.temp;
        let wind = response.wind.speed;
        let humidity = response.main.humidity;
        let id = response.id;
        let pressure = response.main.pressure;
        let sunrise = response.sys.sunrise;
        let rise = new Date(sunrise * 1000);
        let riseHr = rise.getHours();
        let riseMin = rise.getMinutes();
        let riseSec = rise.getSeconds();
        riseTime = riseHr + ":" + riseMin + ":" + riseSec;
        let sunset = response.sys.sunset;
        let set = new Date(sunset * 1000);
        let setHr = set.getHours();
        let setMin = set.getMinutes();
        let setSec = set.getSeconds();
        let setTime = setHr + ":" + setMin + ":" + setSec;
        $('#curr-city').html(city.toUpperCase());
        $('#curr-temp').html(temp);
        $('#curr-weather').html(conditions);
        var d = new Date();
        $('#curr-timeDate').html(d);
        $('#curr-wind').html(wind + " meter/sec");
        $('#curr-humidity').html(humidity + "%");
        $('#curr-pressure').html(pressure + " hPa");
        $('#curr-sunrise').html(riseTime);
        $('#curr-sunset').html(setTime);
        $('#curr-id').html(id);
        $('#pop3').html(city.toUpperCase());
        $('#pop3-data1').html("The weather in" + ' ' + city.toUpperCase() + ' ' + conditions.toUpperCase());
        $('#pop3-data2').html("Tempreture" + ' ' + temp + 'C');
        $('#pop3-data3').html("Humidity" + ' ' + humidity + " " + "%");
        switch (conditions) {
          case 'Rain':
            {
              $('#main-img').attr('src', 'rain.jpg');
              break;
            }
          case 'Clouds':
            {
              $('#main-img').attr('src', 'cloudy.jpg');

              break;
            }
          case 'Sunny':
            {
              $('#main-img').attr('src', 'Sunny.jpg');
              break;
            }
          case 'Clear':
            {
              $('#main-img').attr('src', 'balloon.png');
              break;
            }
          case 'Haze':
            {
              $('#main-img').attr('src', 'Haze.jpg');
              break;
            }
          case 'Mist':
            {
              $('#main-img').attr('src', 'mist.jpg');
              break;
            }
        }
      }
    });
  } else {
    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=371beedce4a112ff56e307cd93970e34" + "&units=metric",
      dataType: "json",
      success: function (response) {
        console.log(response);
        let city = response.name;
        let conditions = response.weather[0].main;
        let temp = response.main.temp;
        let wind = response.wind.speed;
        let humidity = response.main.humidity;
        let id = response.id;
        let pressure = response.main.pressure;
        let sunrise = response.sys.sunrise;
        let rise = new Date(sunrise * 1000);
        let riseHr = rise.getHours();
        let riseMin = rise.getMinutes();
        let riseSec = rise.getSeconds();
        riseTime = riseHr + ":" + riseMin + ":" + riseSec;
        let sunset = response.sys.sunset;
        let set = new Date(sunset * 1000);
        let setHr = set.getHours();
        let setMin = set.getMinutes();
        let setSec = set.getSeconds();
        let setTime = setHr + ":" + setMin + ":" + setSec;
        $('#curr-city').html(city.toUpperCase());
        $('#curr-temp').html(temp);
        $('#curr-weather').html(conditions);
        var d = new Date();
        $('#curr-timeDate').html(d);
        $('#curr-wind').html(wind + " meter/sec");
        $('#curr-humidity').html(humidity + "%");
        $('#curr-pressure').html(pressure + " hPa");
        $('#curr-sunrise').html(riseTime);
        $('#curr-sunset').html(setTime);
        $('#curr-id').html(id);
        $('#pop3').html(city.toUpperCase());
        $('#pop3-data1').html("The weather in" + ' ' + city.toUpperCase() + ' ' + conditions.toUpperCase());
        $('#pop3-data2').html("Tempreture" + ' ' + temp + 'C');
        $('#pop3-data3').html("Humidity" + ' ' + humidity + " " + "%");
        switch (conditions) {
          case 'Rain':
            {
              $('#main-img').attr('src', 'rain.jpg');
              break;
            }
          case 'Clouds':
            {
              $('#main-img').attr('src', 'cloudy.jpg');

              break;
            }
          case 'Sunny':
            {
              $('#main-img').attr('src', 'Sunny.jpg');
              break;
            }
          case 'Clear':
            {
              $('#main-img').attr('src', 'balloon.png');
              break;
            }
          case 'Haze':
            {
              $('#main-img').attr('src', 'Haze.jpg');
              break;
            }
          case 'Mist':
            {
              $('#main-img').attr('src', 'mist.jpg');
              break;
            }
        }
      }
    });
  }
}

//Google Chart
function chart() {
  $('#columnchart_material').show();
  google.charts.load('current', { 'packages': ['bar'] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    let city1 = $('#ch1').val();
    if (city1 !== '') {
      $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city1 + "&appid=371beedce4a112ff56e307cd93970e34&units=metric",
        data: "data",
        dataType: "json",
        success: function (response) {
          console.log(response);
          console.log(response.main.temp_max);
          console.log(response.main.temp_max);
          var data = google.visualization.arrayToDataTable([
            ['City', 'Feel Tempreture of the Day', 'Lowest Tempreture of the Day', 'Highest Tempreture of the Day', 'Current Tempreture', 'Humidity in %'],
            [city1.toUpperCase(), response.main.feels_like, response.main.temp_min, response.main.temp_max, response.main.temp, response.main.humidity],
          ]);
          var options = {
            chart: {
              title: 'Feel Temp vs Min. Temp. vs Max. Temp. vs Humidity',
              subtitle: 'All tempreture are in °C & Humidity in %',
            }
          };
          var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
          chart.draw(data, google.charts.Bar.convertOptions(options));
        }
      });
    } else {
      alert('Enter City Name You Want')
    }
  }
}
















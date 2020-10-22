
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
      $('#curr-temp').html(temp + "&#176");
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
      }
    }
  });
}
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
        $('#curr-temp').html(temp + "&#176");
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
        $('#curr-temp').html(temp + "&#176");
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
        }
      }

    });
  }

}
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
        $('#curr-temp').html(temp + "&#176");
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
        $('#curr-temp').html(temp + "&#176");
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
        }
      }
    });
  }

}
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
        $('#curr-temp').html(temp + "&#176");
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
        $('#curr-temp').html(temp + "&#176");
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
        }
      }
    });
  }

}



























function chart(){
  google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  
  let city1=$('#ch1').val();
  //let city2=$('#ch2').val();
  if (city1 !=='') {   


    $.ajax({

      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q="+ city1 +"&appid=371beedce4a112ff56e307cd93970e34&units=metric",
      data: "data",
      dataType: "json",
      success: function (response) {
        console.log(response);
        console.log(response.main.temp_max);
        console.log(response.main.temp_max);  
        
        
        var data = google.visualization.arrayToDataTable([
          ['City', 'Highest Tempreture of the Day', 'Lowest Tempreture of the Day'],
          [city1.toUpperCase(), response.main.feels_like,response.main.temp_min],
    
          
          
        ]);
        var options = {
          chart: {
            title: 'Hot vs Cool',
            subtitle: 'Highest and Lowest Tempreture in °C',
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













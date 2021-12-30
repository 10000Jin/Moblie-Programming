// 현재 날씨 정보, API의 JSON파일에서 파싱
$.getJSON('https://api.openweathermap.org/data/2.5/weather?id='+ $cityid +'&appid=8e740cfe9ceb59eef74d95ae4d5dac5d&units=metric&lang=kr', function(data)
        {
            // 지역명, 날짜, 현재온도, 날씨
            var $city = data.name;
            var $date = data.dt;
            var $curtemp = data.main.temp;
            var $weather = data.weather[0].description;

            var $now = new Date($.now());

            $('#city').text($city);
            $('#date').text($now.getMonth()+1+'월 '+$now.getDate()+'일 '+$now.getHours()+'시');
            $('#nowtemp').prepend($curtemp);
            $('#weather').text($weather);

            // 일출, 일몰, 습도, 풍속, 체감온도, 기압, 가시거리
            var $sunrise = data.sys.sunrise;
            var $sunset = data.sys.sunset;
            var $hum = data.main.humidity;
            var $windspeed = data.wind.speed;
            var $felltemp = data.main.feels_like;
            var $pressure = data.main.pressure;
            var $visual = data.visibility;


            var rise = new Date($sunrise*1000);
            var set = new Date($sunset*1000);

            $('#sunrise').text(rise.getHours()+' : '+rise.getMinutes());
            $('#sunset').text(set.getHours()+' : '+set.getMinutes());
            $('#hum').prepend($hum);
            $('#wind').prepend($windspeed);
            $('#pressure').prepend($pressure);
            $('#felltemp').prepend($felltemp);
            $('#visual').prepend($visual);
        });


// 시간별 날씨 정보, API의 JSON파일에서 파싱
$.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat='+$lat+'&lon='+$lon+'&exclude=minutely&appid=8e740cfe9ceb59eef74d95ae4d5dac5d&units=metric&lang=kr', function(data)
        {
            // 최저 최고 기온
            var $mintemp = data.daily[0].temp.min;
            var $maxtemp = data.daily[0].temp.max;

            $('#nowmin').append($mintemp);
            $('#nowmax').append($maxtemp);

            // 시간별 날씨 (시간, 강수확률, 아이콘, 기온 - 1시간 간격으로 총 8개정보 )
            var $time1 = data.hourly[0].dt;
            var $rain1 = data.hourly[0].pop;
            var $icon1 = data.hourly[0].weather[0].icon;
            var $temp1 = data.hourly[0].temp;

            var t1 = new Date($time1*1000);
            $('#h-time1').prepend(t1.getHours());
            $('#h-rain1').prepend($rain1);
            $('#h-icon1').append('<img src="http://openweathermap.org/img/wn/' + $icon1 + '@2x.png" />');
            $('#h-temp1').prepend($temp1);

            var $time2 = data.hourly[1].dt;
            var $rain2 = data.hourly[1].pop;
            var $icon2 = data.hourly[1].weather[0].icon;
            var $temp2 = data.hourly[1].temp;
            
            var t2 = new Date($time2*1000);
            $('#h-time2').prepend(t2.getHours());
            $('#h-rain2').prepend($rain2);
            $('#h-icon2').prepend('<img src="http://openweathermap.org/img/wn/' + $icon2 + '@2x.png" />');
            $('#h-temp2').prepend($temp2);

            var $time3 = data.hourly[2].dt;
            var $rain3 = data.hourly[2].pop;
            var $icon3 = data.hourly[2].weather[0].icon;
            var $temp3 = data.hourly[2].temp;

            var t3 = new Date($time3*1000);
            $('#h-time3').prepend(t3.getHours());
            $('#h-rain3').prepend($rain3);
            $('#h-icon3').prepend('<img src="http://openweathermap.org/img/wn/' + $icon3 + '@2x.png" />');
            $('#h-temp3').prepend($temp3);
            
            var $time4 = data.hourly[3].dt;
            var $rain4 = data.hourly[3].pop;
            var $icon4 = data.hourly[3].weather[0].icon;
            var $temp4 = data.hourly[3].temp;

            var t4 = new Date($time4*1000);
            $('#h-time4').prepend(t4.getHours());
            $('#h-rain4').prepend($rain4);
            $('#h-icon4').prepend('<img src="http://openweathermap.org/img/wn/' + $icon4 + '@2x.png" />');
            $('#h-temp4').prepend($temp4);
            
            var $time5 = data.hourly[4].dt;
            var $rain5 = data.hourly[4].pop;
            var $icon5 = data.hourly[4].weather[0].icon;
            var $temp5 = data.hourly[4].temp;

            var t5 = new Date($time5*1000);
            $('#h-time5').prepend(t5.getHours());
            $('#h-rain5').prepend($rain5);
            $('#h-icon5').prepend('<img src="http://openweathermap.org/img/wn/' + $icon5 + '@2x.png" />');
            $('#h-temp5').prepend($temp5);
            
            var $time6 = data.hourly[5].dt;
            var $rain6 = data.hourly[5].pop;
            var $icon6 = data.hourly[5].weather[0].icon;
            var $temp6 = data.hourly[5].temp;

            var t6 = new Date($time6*1000);
            $('#h-time6').prepend(t6.getHours());
            $('#h-rain6').prepend($rain6);
            $('#h-icon6').prepend('<img src="http://openweathermap.org/img/wn/' + $icon6 + '@2x.png" />');
            $('#h-temp6').prepend($temp6);
            
            var $time7 = data.hourly[6].dt;
            var $rain7 = data.hourly[6].pop;
            var $icon7 = data.hourly[6].weather[0].icon;
            var $temp7 = data.hourly[6].temp;
            
            var t7 = new Date($time7*1000);
            $('#h-time7').prepend(t7.getHours());
            $('#h-rain7').prepend($rain7);
            $('#h-icon7').prepend('<img src="http://openweathermap.org/img/wn/' + $icon7 + '@2x.png" />');
            $('#h-temp7').prepend($temp7);

            var $time8 = data.hourly[7].dt;
            var $rain8 = data.hourly[7].pop;
            var $icon8 = data.hourly[7].weather[0].icon;
            var $temp8 = data.hourly[7].temp;
            
            var t8 = new Date($time8*1000);
            $('#h-time8').prepend(t8.getHours());
            $('#h-rain8').prepend($rain8);
            $('#h-icon8').prepend('<img src="http://openweathermap.org/img/wn/' + $icon8 + '@2x.png" />');
            $('#h-temp8').prepend($temp8);

        });
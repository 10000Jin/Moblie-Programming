// 일주일간 날씨 정보, API의 JSON파일에서 파싱
$.getJSON('https://api.openweathermap.org/data/2.5/onecall?lat='+$lat+'&lon='+$lon+'&exclude=current,minutely&appid=8e740cfe9ceb59eef74d95ae4d5dac5d&units=metric&lang=kr', function(data)
        {
        // 요일, 아이콘, 강수확룰, 날씨, 풍속, 습도, 체감온도(낮/밤), 최저/최고 기온
        var $wday1 = data.daily[1].dt;
        var $wicon1 = data.daily[1].weather[0].icon;
        var $wpop1 = data.daily[1].pop;
        var $wweather1 = data.daily[1].weather[0].description;
        var $wwind1 = data.daily[1].wind_speed;
        var $whumi1 = data.daily[1].humidity;
        var $wfeeldaytemp1 = data.daily[1].feels_like.day;
        var $wfeelnigthtemp1 = data.daily[1].feels_like.night;
        var $wmintemp1 = data.daily[1].temp.min;
        var $wmaxtemp1 = data.daily[1].temp.max;

        var wt1 = new Date($wday1*1000);
        $('#w-day1').text(wt1.getDate()+'일');
        $('#w-icon1').prepend('<img src="http://openweathermap.org/img/wn/' + $wicon1 + '@2x.png" />');
        $('#w-rain1').prepend($wpop1);
        $('#w-weather1').text($wweather1);
        $('#w-wind1').prepend($wwind1);
        $('#w-humi1').prepend($whumi1);
        $('#w-feeltemp1').prepend($wfeeldaytemp1);
        $('#w-feeltemp1').append($wfeelnigthtemp1);
        $('#w-temp1').prepend($wmintemp1);
        $('#w-temp1').append($wmaxtemp1);


        var $wday2 = data.daily[2].dt;
        var $wicon2 = data.daily[2].weather[0].icon;
        var $wpop2 = data.daily[2].pop;
        var $wweather2 = data.daily[2].weather[0].description;
        var $wwind2 = data.daily[2].wind_speed;
        var $whumi2 = data.daily[2].humidity;
        var $wfeeldaytemp2 = data.daily[2].feels_like.day;
        var $wfeelnigthtemp2 = data.daily[2].feels_like.night;
        var $wmintemp2 = data.daily[2].temp.min;
        var $wmaxtemp2 = data.daily[2].temp.max;

        var wt2 = new Date($wday2*1000);
        $('#w-day2').text(wt2.getDate()+'일');
        $('#w-icon2').prepend('<img src="http://openweathermap.org/img/wn/' + $wicon2 + '@2x.png" />');
        $('#w-rain2').prepend($wpop2);
        $('#w-weather2').text($wweather2);
        $('#w-wind2').prepend($wwind2);
        $('#w-humi2').prepend($whumi2);
        $('#w-feeltemp2').prepend($wfeeldaytemp2);
        $('#w-feeltemp2').append($wfeelnigthtemp2);
        $('#w-temp2').prepend($wmintemp2);
        $('#w-temp2').append($wmaxtemp2);       


        var $wday3 = data.daily[3].dt;
        var $wicon3 = data.daily[3].weather[0].icon;
        var $wpop3 = data.daily[3].pop;
        var $wweather3 = data.daily[3].weather[0].description;
        var $wwind3 = data.daily[3].wind_speed;
        var $whumi3 = data.daily[3].humidity;
        var $wfeeldaytemp3 = data.daily[3].feels_like.day;
        var $wfeelnigthtemp3 = data.daily[3].feels_like.night;
        var $wmintemp3 = data.daily[3].temp.min;
        var $wmaxtemp3 = data.daily[3].temp.max;

        var wt3 = new Date($wday3*1000);
        $('#w-day3').text(wt3.getDate()+'일');
        $('#w-icon3').prepend('<img src="http://openweathermap.org/img/wn/' + $wicon3 + '@2x.png" />');
        $('#w-rain3').prepend($wpop3);
        $('#w-weather3').text($wweather3);
        $('#w-wind3').prepend($wwind3);
        $('#w-humi3').prepend($whumi3);
        $('#w-feeltemp3').prepend($wfeeldaytemp3);
        $('#w-feeltemp3').append($wfeelnigthtemp3);
        $('#w-temp3').prepend($wmintemp3);
        $('#w-temp3').append($wmaxtemp3);


        var $wday4 = data.daily[4].dt;
        var $wicon4 = data.daily[4].weather[0].icon;
        var $wpop4 = data.daily[4].pop;
        var $wweather4 = data.daily[4].weather[0].description;
        var $wwind4 = data.daily[4].wind_speed;
        var $whumi4 = data.daily[4].humidity;
        var $wfeeldaytemp4 = data.daily[4].feels_like.day;
        var $wfeelnigthtemp4 = data.daily[4].feels_like.night;
        var $wmintemp4 = data.daily[4].temp.min;
        var $wmaxtemp4 = data.daily[4].temp.max;

        var wt4 = new Date($wday4*1000);
        $('#w-day4').text(wt4.getDate()+'일');
        $('#w-icon4').prepend('<img src="http://openweathermap.org/img/wn/' + $wicon4 + '@2x.png" />');
        $('#w-rain4').prepend($wpop4);
        $('#w-weather4').text($wweather4);
        $('#w-wind4').prepend($wwind4);
        $('#w-humi4').prepend($whumi4);
        $('#w-feeltemp4').prepend($wfeeldaytemp4);
        $('#w-feeltemp4').append($wfeelnigthtemp4);
        $('#w-temp4').prepend($wmintemp4);
        $('#w-temp4').append($wmaxtemp4);


        var $wday5 = data.daily[5].dt;
        var $wicon5 = data.daily[5].weather[0].icon;
        var $wpop5 = data.daily[5].pop;
        var $wweather5 = data.daily[5].weather[0].description;
        var $wwind5 = data.daily[5].wind_speed;
        var $whumi5 = data.daily[5].humidity;
        var $wfeeldaytemp5 = data.daily[5].feels_like.day;
        var $wfeelnigthtemp5 = data.daily[5].feels_like.night;
        var $wmintemp5 = data.daily[5].temp.min;
        var $wmaxtemp5 = data.daily[5].temp.max;

        var wt5 = new Date($wday5*1000);
        $('#w-day5').text(wt5.getDate()+'일');
        $('#w-icon5').prepend('<img src="http://openweathermap.org/img/wn/' + $wicon5 + '@2x.png" />');
        $('#w-rain5').prepend($wpop5);
        $('#w-weather5').text($wweather5);
        $('#w-wind5').prepend($wwind5);
        $('#w-humi5').prepend($whumi5);
        $('#w-feeltemp5').prepend($wfeeldaytemp5);
        $('#w-feeltemp5').append($wfeelnigthtemp5);
        $('#w-temp5').prepend($wmintemp5);
        $('#w-temp5').append($wmaxtemp5);


        var $wday6 = data.daily[6].dt;
        var $wicon6 = data.daily[6].weather[0].icon;
        var $wpop6 = data.daily[6].pop;
        var $wweather6 = data.daily[6].weather[0].description;
        var $wwind6 = data.daily[6].wind_speed;
        var $whumi6 = data.daily[6].humidity;
        var $wfeeldaytemp6 = data.daily[6].feels_like.day;
        var $wfeelnigthtemp6 = data.daily[6].feels_like.night;
        var $wmintemp6 = data.daily[6].temp.min;
        var $wmaxtemp6 = data.daily[6].temp.max;

        var wt6 = new Date($wday6*1000);
        $('#w-day6').text(wt6.getDate()+'일');
        $('#w-icon6').prepend('<img src="http://openweathermap.org/img/wn/' + $wicon6 + '@2x.png" />');
        $('#w-rain6').prepend($wpop6);
        $('#w-weather6').text($wweather6);
        $('#w-wind6').prepend($wwind6);
        $('#w-humi6').prepend($whumi6);
        $('#w-feeltemp6').prepend($wfeeldaytemp6);
        $('#w-feeltemp6').append($wfeelnigthtemp6);
        $('#w-temp6').prepend($wmintemp6);
        $('#w-temp6').append($wmaxtemp6);


        var $wday7 = data.daily[7].dt;
        var $wicon7 = data.daily[7].weather[0].icon;
        var $wpop7 = data.daily[7].pop;
        var $wweather7 = data.daily[7].weather[0].description;
        var $wwind7 = data.daily[7].wind_speed;
        var $whumi7 = data.daily[7].humidity;
        var $wfeeldaytemp7 = data.daily[7].feels_like.day;
        var $wfeelnigthtemp7 = data.daily[7].feels_like.night;
        var $wmintemp7 = data.daily[7].temp.min;
        var $wmaxtemp7 = data.daily[7].temp.max;

        var wt7 = new Date($wday7*1000);
        $('#w-day7').text(wt7.getDate()+'일');
        $('#w-icon7').prepend('<img src="http://openweathermap.org/img/wn/' + $wicon7 + '@2x.png" />');
        $('#w-rain7').prepend($wpop7);
        $('#w-weather7').text($wweather7);
        $('#w-wind7').prepend($wwind7);
        $('#w-humi7').prepend($whumi7);
        $('#w-feeltemp7').prepend($wfeeldaytemp7);
        $('#w-feeltemp7').append($wfeelnigthtemp7);
        $('#w-temp7').prepend($wmintemp7);
        $('#w-temp7').append($wmaxtemp7);

        });
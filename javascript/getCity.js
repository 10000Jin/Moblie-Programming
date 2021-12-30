// URL의 get방식으로 전달한 city명 파싱
var getParam = function(key){
    var _parammap = {};
    document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
        function decode(s) {
            return decodeURIComponent(s.split("+").join(" "));
        }

        _parammap[decode(arguments[1])] = decode(arguments[2]);
    });

    return _parammap[key];
};

// city명의 해당하는 id와 위도 경도 저장
if (getParam("city") == "Cheonan"){
    var $cityid = 1845759;
    var $lat = 36.8065;
    var $lon = 127.1522;
} else if(getParam("city") == "Seoul") {
    var $cityid = 1835848;
    var $lat = 37.5683;
    var $lon = 126.9778;
} else if(getParam("city") == "Busan") {
    var $cityid = 1838524;
    var $lat = 35.1028;
    var $lon = 129.0403;
} else if(getParam("city") == "Daejeon") {
    var $cityid = 1835224;
    var $lat = 36.3333;
    var $lon = 127.4167;
} else if(getParam("city") == "Gwangju") {
    var $cityid = 1841811;
    var $lat = 35.1547;
    var $lon = 126.9156;
} else {                                            // city 파라미터가 없을때: undefined (첫화면)
    var $cityid = 1845759;
    var $lat = 36.8065;
    var $lon = 127.1522;
}

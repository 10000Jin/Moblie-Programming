// 화면 너비가 767px이 넘을 때 네비게이션 바의 
// display 속성이 none이면 페이지 새로고침.
$(window).resize(function() {
    if ($(window).width() > 767) {
        if (document.getElementById("header").style.display=='none') {
            location.reload();
        }
    }
})
$("#menu-button").click(function(){
    $("#menu-button").toggleClass("menu-open");
    $("#menu").toggleClass("menu-collapsed");
    $("#menu ul li").toggleClass("hidden animated fadeInLeft");
});
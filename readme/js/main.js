$('.burger-menu').click(function () {
        $('.header__menu').toggleClass('menu-collapse'); 
        $('.header__menu ul').toggleClass('menu-collapse_list');    
    });
 $(".header__menu a, .offer__more").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
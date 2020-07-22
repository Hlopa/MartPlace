$(function () {

    $(".rate-star").rateYo({
        //rating: 4.5,//
        starWidth: "16px",
        readOnly: true,
        normalFill: "#dce1e7",
        ratedFill: "#ffc000"
      });

    $('.weekly-slider__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    }
    );

    $('.folowers-slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3
    }
    );

    var mixer = mixitup('.newest-release__product');

})






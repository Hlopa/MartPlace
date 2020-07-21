$(function () {

    $(".rate-star").rateYo({
        rating: 4.5,
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

    var mixer = mixitup('.newest-release__product');

})






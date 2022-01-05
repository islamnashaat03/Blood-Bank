$('.owl-header').owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    dots: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            loop: false,
            dots: true
        }
    }
});
$('.owl-articles').owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    dots: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: true,
            dots: false
        }
    }
});
// $(function () {
//     $(".font-user").datepicker();
// });

$("#governorates").change(function () {
    var governorateId = $("#governorates").val();
    console.log("selected gov :" + governorateId);
    $("#cities").empty();
    var option = '<option value="">اختر المدينة </option>';
    $('#cities').append(option);
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/http://ipda3-tech.com/blood-bank/api/v1/cities?governorate_id=' + governorateId,
        type: 'get',
        data: {},
        success: function (result) {
            console.log("success");
            $.each(result.data, function (index, city) {
                console.log(city);
                var option = '<option value="' + city.id + '">' + city.name + '</option>';
                $("#cities").append(option);
            });
        },
        error: function () {
            console.log("error");
        }
    });
});

// const currentLocation = location.href;
// const menuItem = document.querySelectorAll(".navbar-nav li a");
// const menuLength = menuItem.length;
// for (let i = 0; i < menuLength; i++) {
//     if (menuItem[i].href === currentLocation) {
//         menuItem[i].className = "nav-link active";
//     }
// }
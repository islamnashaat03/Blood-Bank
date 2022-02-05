$(document).ready(function () {
  // SCROLL TO TOP BUTTON

  $(".up").on("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // SCROLL TO TOP CONDITION

  $(window).on("scroll", function () {
    if (window.scrollY > 600) {
      $(".up").addClass("active");
    } else {
      $(".up").removeClass("active");
    }
  });

  $(".owl-header").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: false,
        dots: true,
      },
    },
  });
  $(".owl-articles").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    dots: true,
    responsiveClass: true,
    autoplay:true,
    lazyLoad:true,
    autoplayHoverPause:true,
    navSpeed:1000,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
        dots: false,
      },
    },
  });
  // $(function () {
  //     $(".date-picker").datepicker({
  //       changeMonth: true,
  //     changeYear: true
  //     });
  // });

  $("#governorates").change(function () {
    var governorateId = $("#governorates").val();
    console.log("selected gov :" + governorateId);
    $("#cities").empty();
    var option = '<option value="">اختر المدينة </option>';
    $("#cities").append(option);
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/http://ipda3-tech.com/blood-bank/api/v1/cities?governorate_id=" +
        governorateId,
      type: "get",
      data: {},
      success: function (result) {
        console.log("success");
        $.each(result.data, function (index, city) {
          console.log(city);
          var option =
            '<option value="' + city.id + '">' + city.name + "</option>";
          $("#cities").append(option);
        });
      },
      error: function () {
        console.log("error");
      },
    });
  });

(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
});
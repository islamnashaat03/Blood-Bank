$('.owl-header').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false,
            dots:true
        }
    }
});
$('.owl-articles').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
            dots:false
        }
    }
});

$( function() {
    $( ".font-user" ).datepicker();
  } );

  $("#governorates").change(function(){
    var governorateId = $("#governorates").val();
    console.log("selected gov :"+governorateId);
    $("#cities").empty();
    var option = '<option value="">Choose City </option>';
    $('#cities').append(option);
    $.ajax({
        url:'https://cors-anywhere.herokuapp.com/http://ipda3-tech.com/blood-bank/api/v1/cities?governorate_id='+governorateId,
        type: 'get',
        data:{},
        success: function(result){
            console.log("success");
        $.each(result.data, function(index,city){
            console.log(city);
            var option = '<option value="' +city.id+'">'+city.name+'</option>';
            $("#cities").append(option);
        });
        },
        error: function(){
            console.log("error");
        }
    });
});
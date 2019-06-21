var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.right-controler',
                prevButton: '.left-controler',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 30,
                loop: true
            });


//for-menu-bg
        $(window).on('scroll', function (){
        if ($(window).scrollTop() >180){
          $('#for-menu-fixed').addClass('fixed-add fadeInDown animated');
        } else {
          $('#for-menu-fixed').removeClass('fixed-add fadeInDown animated');
        }
        });



//one-page

$(".div-location").click(function() {
    var data_location = $(this).attr('data-location');
    $('html,body').animate({
          scrollTop: $("#"+data_location).offset().top-=65},
    'slow');
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
        

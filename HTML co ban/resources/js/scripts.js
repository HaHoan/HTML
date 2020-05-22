$(document).ready(

    // scroll sticky
    function () {
        $('.about-section').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
            offset: '600px'
        }
        )

        // smothy scroll
        // $('a').click(function (event) {
        //     $('html, body').animate({
        //         scrollTop: $($.attr(this, 'href')).offset().top
        //     }, 700);
        //     event.preventDefault();
        // });

        // mobile nav
        $('.mobile-nav').click(

            function(){
                $('.main-nav').slideToggle(300);
                if($('.mobile-nav').hasClass('fa-list-ul')){
                    $('.mobile-nav').addClass('fa-times');
                    $('.mobile-nav').removeClass('fa-list-ul');
                } else{
                    $('.mobile-nav').addClass('fa-list-ul');
                    $('.mobile-nav').removeClass('fa-times');
                }
            }

        )

    }
)
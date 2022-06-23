$(document).ready(function(){
    //START HEADER

        //Start nav

        //for bugger
            $('.navbuttons').click(function(){
                $('.navbuttons').toggleClass('crossxs');
            });

        // for nac
              $(window).scroll(function(){
                let getscrolltop = $(this).scrollTop();
                // console.log(getscrolltop);

                if(getscrolltop >= 200){
                    $('.navbar').addClass('navmenus');
                }else{
                    $('.navbar').removeClass('navmenus');
                }
              });
        //End nav

    //END HEADER
});
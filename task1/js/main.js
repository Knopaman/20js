/**
 * Created by User on 21.11.2016.
 */
$(function(){

    $('.first').click(function(){
        $('.first').find('div').show();
        $('.second').find('div').hide();
        $('.third').find('div').hide();
        $('#img1').show();
        $('#img2').hide();
        $('#img3').hide();

    });

    $('.second').click(function(){
        $('.first').find('div').hide();
        $('.second').find('div').show();
        $('.third').find('div').hide();
        $('#img1').hide();
        $('#img2').show();
        $('#img3').hide();

    });
    $('.third').click(function(){
        $('.first').find('div').hide();
        $('.second').find('div').hide();
        $('.third').find('div').show();
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').show()

    });

    $('.services').find('a').hover(function(){
       $(this).find('.services_hover').show();
    },
    function(){
        $(this).find('.services_hover').hide()
    });

    $('#list1').click(function(){
        $('.first_list').toggle();
        $(this).find('img').toggle();
    });
    $('#list2').click(function(){
        $('.second_list').toggle();
        $(this).find('img').toggle();
    });
    $('#list3').click(function(){
        $('.third_list').toggle();
        $(this).find('img').toggle();
    });
    $('#list4').click(function(){
        $('.four_list').toggle();
        $(this).find('img').toggle();
    });



});
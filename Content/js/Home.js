function Home_Onload() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //ready
    $(document).ready(function () {

        On_Window_Resize();

        //
        $(window).resize(function () {

            On_Window_Resize();

        }).trigger('resize');

        //
        window.onscroll = function () { On_Window_Scroll() };

        //
        Set_All_onclick_Mouse();

        //
        On_Window_Timer();
    });
}

function On_Window_Resize() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //
    $('#Footer_tbl').width(window_Width * 0.96);
    $('#Footer_tbl').css('margin-left', window_Width * 0.02);

    //Is_Landscape_hdf
    if (window_Width > window_Height) {
        $('#Is_Landscape_hdf').val(1);
    }
    else {
        $('#Is_Landscape_hdf').val(0);
    }

    //
    if (Check_HDF('Is_Landscape_hdf')) {
        $('#Home_div').attr('data-height', window_Height + 'px');
    }
    else {
        $('#Home_div').attr('data-height', window_Width + 'px');
    }

    //
    if (window_Width >= 1200) {

        $('.Hide_If_1024').show();

        $('.Slide_Home_169').show();
        $('.Slide_Home_43').hide();
        $('.Slide_Home_11').hide();

        $('.Slide_Contact_169').show();
        $('.Slide_Contact_43').hide();
        $('.Slide_Contact_11').hide();

        $('#Copyright_td').show();
        $('#Copyright_Space_td').show();

        $('#Home_Slide_Text').css('font-size', '30pt');
        $('#Contact_Slide_Text').css('font-size', '30pt');

        $('#VTV_tbl').attr('class', 'VTV_fix');
        $('#VTV_tbl').width(350);
        $('#VTV_Link_tr_1').hide();
        $('#VTV_Link_tr_2').show();
    }
    else
        if (window_Width >= 900) {

            $('.Hide_If_1024').hide();

            $('.Slide_Home_169').hide();
            $('.Slide_Home_43').show();
            $('.Slide_Home_11').hide();

            $('.Slide_Contact_169').hide();
            $('.Slide_Contact_43').show();
            $('.Slide_Contact_11').hide();

            $('#Copyright_td').show();
            $('#Copyright_Space_td').show();

            $('#Home_Slide_Text').css('font-size', '26pt');
            $('#Contact_Slide_Text').css('font-size', '26pt');

            $('#VTV_tbl').attr('class', 'VTV_fix');
            $('#VTV_tbl').width(350);
            $('#VTV_Link_tr_1').hide();
            $('#VTV_Link_tr_2').show();
        }
        else {

            $('.Hide_If_1024').show();

            $('.Slide_Home_169').hide();
            $('.Slide_Home_43').hide();
            $('.Slide_Home_11').show();

            $('.Slide_Contact_169').hide();
            $('.Slide_Contact_43').hide();
            $('.Slide_Contact_11').show();

            $('#Copyright_td').hide();
            $('#Copyright_Space_td').hide();

            $('#Home_Slide_Text').css('font-size', '17pt');
            $('#Contact_Slide_Text').css('font-size', '17pt');

            $('#VTV_tbl').attr('class', 'VTV_No_fix');
            $('#VTV_tbl').width(window_Width);
            $('#VTV_Link_tr_1').show();
            $('#VTV_Link_tr_2').hide();
        }

    //
    var Home_Slide_Text_padding = parseInt($('#Home_div').attr('data-height')) - $('#Home_Slide_Text').height();
    $('#Home_Slide_Text_padding').css('padding-top', Home_Slide_Text_padding * 0.9);
}

function On_Window_Scroll() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var Top = $(window).scrollTop();

    //
    if (Top >= window_Height) {
        $('#Scroll_To_Top_img').show();
    }
    else {
        $('#Scroll_To_Top_img').hide();
    }
}


function On_Window_Timer() {

    setInterval(function () {

        if (Check_HDF('Is_Landscape_hdf')) {

            var Menu_Blinking = parseInt($('#Menu_Blinking_hdf').val());

            $('#Menu_' + Menu_Blinking).attr('class', '');

            //
            var Menu_Blinking_Next = Menu_Blinking + 1;

            if (Menu_Blinking_Next == 6) {
                Menu_Blinking_Next = 1;
            }

            $('#Menu_' + Menu_Blinking_Next).attr('class', 'active');
            $('#Menu_Blinking_hdf').val(Menu_Blinking_Next);
        }

    }, 1000);
}

function Menu_OnClick(ID) {

    if (!Check_HDF('Is_Landscape_hdf')) {
        $('#Menu_1_btn').click();
    }

    //
    Hidden_Scroll_To(ID, 50);
}

function Menu_Home_OnClick() {

    Scroll_To_Top();
}
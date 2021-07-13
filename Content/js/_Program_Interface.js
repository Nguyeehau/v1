function Program_Onload() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //ready
    $(document).ready(function () {

        //$(window).resize(function () {
        //}).trigger('resize');

        //
        Resize_Program();
        Set_All_onclick_Mouse();

        //
        Read_Program_List();

        //
        setInterval(function () {

            var Blinking = $('#Blinking_hdf').val();

            if (Blinking == 'Play_QR_Border_div') {

                //2 White
                $('#Play_Reward_Border_div').attr('class', "Play_Border_Dashed_White");
                $('#Play_Guide_Border_div').attr('class', "Play_Border_Dashed_White");

                //1 red
                if ($('#Play_QR_Border_div').attr('class') == "Play_Border_Dashed_White") {
                    $('#Play_QR_Border_div').attr('class', "Play_Border_Dashed_Red");
                }
                else {
                    $('#Play_QR_Border_div').attr('class', "Play_Border_Dashed_White");
                }
            }
            else if (Blinking == 'Play_Reward_Border_div') {

                //2 White
                $('#Play_QR_Border_div').attr('class', "Play_Border_Dashed_White");
                $('#Play_Guide_Border_div').attr('class', "Play_Border_Dashed_White");

                //1 red
                if ($('#Play_Reward_Border_div').attr('class') == "Play_Border_Dashed_White") {
                    $('#Play_Reward_Border_div').attr('class', "Play_Border_Dashed_Red");
                }
                else {
                    $('#Play_Reward_Border_div').attr('class', "Play_Border_Dashed_White");
                }
            }
            else if (Blinking == 'Play_Guide_Border_div') {

                //2 White
                $('#Play_Reward_Border_div').attr('class', "Play_Border_Dashed_White");
                $('#Play_QR_Border_div').attr('class', "Play_Border_Dashed_White");

                //1 red
                if ($('#Play_Guide_Border_div').attr('class') == "Play_Border_Dashed_White") {
                    $('#Play_Guide_Border_div').attr('class', "Play_Border_Dashed_Red");
                }
                else {
                    $('#Play_Guide_Border_div').attr('class', "Play_Border_Dashed_White");
                }
            } else {

                //cả 3 white
                $('#Play_QR_Border_div').attr('class', "Play_Border_Dashed_White");
                $('#Play_Reward_Border_div').attr('class', "Play_Border_Dashed_White");
                $('#Play_Guide_Border_div').attr('class', "Play_Border_Dashed_White");
            }


            //
            var Confirm = $('#Confirm_btn').attr('class');

            if (Confirm == 'Confirm_White') {
                $('#Confirm_btn').attr('class', 'Confirm_Red');
                $('#Confirm_btn').attr('src', Replace_Index_Host('/Index/IMG/Button/Confirm_Red.png'));
            }
            else
                if (Confirm == 'Confirm_Red') {
                    $('#Confirm_btn').attr('class', 'Confirm_White');
                    $('#Confirm_btn').attr('src', Replace_Index_Host('/Index/IMG/Button/Confirm_White.png'));
                }

        }, 500);

        //
        setInterval(function () {

            var IQwinwin_lbl_Color = Convert_Color_Rgb_To_Name($('#IQwinwin_lbl').css('color'));

            //
            if (IQwinwin_lbl_Color == 'yellow') {
                $('#IQwinwin_lbl').css('color', 'white');
                $('#Partner_lbl').css('color', 'yellow');
            }
            else {
                $('#IQwinwin_lbl').css('color', 'yellow');
                $('#Partner_lbl').css('color', 'white');
            }

        }, 500);
    });
}

function Resize_Program() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //if (window_Height != parseInt($('#Screen_Height_hdf').val())) {

    $('#Screen_Height_hdf').val(window_Height);

    Resize_Page_Content_Program();
    Resize_BTN_tr_Program();
    Resize_All_tbl_Program();

    Resize_Message_Program();
    Resize_Program_List_Holder_tbl();

    Resize_Program_Reward_tbl();
    Resize_Play_tbl_Welcome();

    //
    Setup_jScrollPane_Vertical('Body_div');
    //}
}

function Resize_Page_Content_Program() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //Is_App
    if (Check_HDF('Is_App_hdf')) {

        //Page_div
        $('#Page_Content_div').css("height", window_Height);
        $('#Page_Content_div').css("maxHeight", window_Height);
        $('#Page_Content_div').css("minHeight", window_Height);

        $('#Page_Content_div').css('width', window_Width);
        $('#Page_Content_div').css('maxWidth', window_Width);
        $('#Page_Content_div').css('minWidth', window_Width);
    }
}

function Resize_BTN_tr_Program() {

    var User_Role = $('#User_Role_hdf').val();

    if (User_Role == 'partner_manager') {

        $('#BTN_td').height(60);
        $('#BTN_div').height(40);
        $('#BTN_tbl').height(40);
    }
    else
        if (User_Role == 'partner_mc') {

            $('#BTN_td').height(60);
            $('#BTN_div').height(40);
            $('#BTN_tbl').height(40);
        }
}

function Resize_All_tbl_Program() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_tr').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    //All_tbl
    $('#All_tbl').css("height", All_tbl_H);
    $('#All_tbl').css("maxHeight", All_tbl_H);
    $('#All_tbl').css("minHeight", All_tbl_H);

    $('#All_tbl').css('width', window_Width);
    $('#All_tbl').css('maxWidth', window_Width);
    $('#All_tbl').css('minWidth', window_Width);

    //Body_td
    $('#Body_td').css("height", Body_td_H);
    $('#Body_td').css("maxHeight", Body_td_H);
    $('#Body_td').css("minHeight", Body_td_H);

    $('#Body_td').css('width', window_Width);
    $('#Body_td').css('maxWidth', window_Width);
    $('#Body_td').css('minWidth', window_Width);

    //Body_div
    $('#Body_div').css("height", Body_td_H);
    $('#Body_div').css("maxHeight", Body_td_H);
    $('#Body_div').css("minHeight", Body_td_H);

    $('#Body_div').css('width', window_Width);
    $('#Body_div').css('maxWidth', window_Width);
    $('#Body_div').css('minWidth', window_Width);

    //Body_Content_div
    $('#Body_Content_div').css('width', window_Width - 0);
    $('#Body_Content_div').css('maxWidth', window_Width - 0);
    $('#Body_Content_div').css('minWidth', window_Width - 0);

    //BTN_td
    $('#BTN_td').css('width', window_Width);
    $('#BTN_td').css('maxWidth', window_Width);
    $('#BTN_td').css('minWidth', window_Width);

    $('#BTN_div').css('width', window_Width * 0.8);
    $('#BTN_div').css('maxWidth', window_Width * 0.8);
    $('#BTN_div').css('minWidth', window_Width * 0.8);

    $('#BTN_tbl').css('width', window_Width * 0.8 - 20);
    $('#BTN_tbl').css('maxWidth', window_Width * 0.8 - 20);
    $('#BTN_tbl').css('minWidth', window_Width * 0.8 - 20);

    //OK_btn_div
    $('#OK_btn_div').css('maxWidth', window_Width * 0.8 - 20 - 100);

    //Partner_lbl
    var IQwinwin_lbl_width = $('#IQwinwin_lbl').width();
    var Partner_lbl_width = window_Width * 0.98 - 2 - IQwinwin_lbl_width - 60 - 100;

    $('#Partner_lbl').css('maxWidth', Partner_lbl_width);

    //
    if (window_Height >= window_Width) {

    }
}

function Resize_Message_Program() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_tr').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Message_tbl_Height = Body_td_H;

    $('#Message_tbl').css('height', Message_tbl_Height);
    $('#Message_tbl').css('maxHeight', Message_tbl_Height);
    $('#Message_tbl').css('minHeight', Message_tbl_Height);

    $('#Message_tbl').css('width', window_Width);
    $('#Message_tbl').css('maxWidth', window_Width);
    $('#Message_tbl').css('minWidth', window_Width);
}

function Resize_Program_List_Holder_tbl() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_tr').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Program_List_Holder_tbl_Height = Body_td_H;

    $('#Program_List_Holder_tbl').css('height', Program_List_Holder_tbl_Height);
    $('#Program_List_Holder_tbl').css('maxHeight', Program_List_Holder_tbl_Height);
    $('#Program_List_Holder_tbl').css('minHeight', Program_List_Holder_tbl_Height);

    $('#Program_List_Holder_tbl').css('width', window_Width);
    $('#Program_List_Holder_tbl').css('maxWidth', window_Width);
    $('#Program_List_Holder_tbl').css('minWidth', window_Width);
}

function Resize_Program_Reward_tbl() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_tr').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Program_Reward_tbl_Height = Body_td_H;
    var Program_Reward_tbl_Width = window_Width - 20;

    var Total_Round = parseInt($('#Total_Round_hdf').val());
    var Max_Round_Reward = parseInt($('#Max_Round_Reward_hdf').val());

    var Program_Reward_td_Height = Program_Reward_tbl_Height / (Total_Round + 1);
    var Program_Reward_td_Width = Program_Reward_tbl_Width / (Max_Round_Reward + 1);

    //Program_Reward_tbl
    $('#Program_Reward_tbl').css('height', Program_Reward_tbl_Height);
    $('#Program_Reward_tbl').css('maxHeight', Program_Reward_tbl_Height);
    $('#Program_Reward_tbl').css('minHeight', Program_Reward_tbl_Height);

    $('#Program_Reward_tbl').css('width', Program_Reward_tbl_Width);
    $('#Program_Reward_tbl').css('maxWidth', Program_Reward_tbl_Width);
    $('#Program_Reward_tbl').css('minWidth', Program_Reward_tbl_Width);

    //Program_Reward_td
    //$('.Program_Reward_td').css('height', Program_Reward_td_Height);
    //$('.Program_Reward_td').css('maxHeight', Program_Reward_td_Height);
    //$('.Program_Reward_td').css('minHeight', Program_Reward_td_Height);

    $('.Program_Reward_td').css('width', Program_Reward_td_Width);
    $('.Program_Reward_td').css('maxWidth', Program_Reward_td_Width);
    $('.Program_Reward_td').css('minWidth', Program_Reward_td_Width);

    //
    $('.Program_Reward_Title_div').css('width', Program_Reward_td_Width - 10);
    $('.Program_Reward_Title_div').css('maxWidth', Program_Reward_td_Width - 10);
    $('.Program_Reward_Title_div').css('minWidth', Program_Reward_td_Width - 10);

    //Play_Reward_Picture
    $('.Program_Reward_Picture').css('maxWidth', Program_Reward_td_Width - 10);
    $('.Program_Reward_Picture').css('maxHeight', Program_Reward_td_Height - 20);
    $('.Program_Reward_Picture_Avatar').css('maxHeight', Program_Reward_td_Height - 40);
}

function Resize_Play_tbl_Welcome() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_tr').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Play_tbl_Height = Body_td_H;
    var Play_tbl_Width = window_Width - 20;

    var Play_td_Height = Play_tbl_Height / 2 - 2;
    var Play_td_Width = Play_tbl_Width / 2 - 2;

    //
    if (Check_Is_Add_Final_Award()) {
        $('#Play_Reward_lbl').html("GIẢI THƯỞNG của: Vòng Chung Kết");
    }
    else {
        var Round = $('#Round_hdf').val();
        $('#Play_Reward_lbl').html("GIẢI THƯỞNG của Vòng đấu: " + Round);
    }

    //Reset to Default
    $('#Play_Reward_tr').show();
    $('#Play_Guide_tr').show();

    $('#Play_Reward_td').show();
    $('#Play_QR_td').show();
    $('#Play_Guide_td').show();

    //
    $('#Play_Reward_Product_Name_tr').show();
    $('#Play_Reward_Product_Note_tr').hide();
    $('#Play_Reward_Product_Picture_tr').show();
    $('#Play_TOP_Time_tr').show();
    $('#Play_TOP_Score_tr').show();

    //'#Play_Time_div').hide();
    $('#Play_Time_div').html("<span class='Play_Time_lbl' style='color: red;'>???</span>");

    $('#Play_QR_img').attr('src', Replace_Index_Host("/Index/IMG/QR.jpg"));

    $('#Blinking_hdf').val('0');

    //
    $('#Play_tbl').css('height', Play_tbl_Height);
    $('#Play_tbl').css('maxHeight', Play_tbl_Height);
    $('#Play_tbl').css('minHeight', Play_tbl_Height);

    $('#Play_tbl').css('width', Play_tbl_Width);
    $('#Play_tbl').css('maxWidth', Play_tbl_Width);
    $('#Play_tbl').css('minWidth', Play_tbl_Width);

    //Play_QR_td
    $('#Play_QR_td').css('height', Play_tbl_Height - 4);
    $('#Play_QR_td').css('maxHeight', Play_tbl_Height - 4);
    $('#Play_QR_td').css('minHeight', Play_tbl_Height - 4);

    $('#Play_QR_td').css('width', Play_td_Width);
    $('#Play_QR_td').css('maxWidth', Play_td_Width);
    $('#Play_QR_td').css('minWidth', Play_td_Width);

    //Play_QR_Border_div
    $('#Play_QR_Border_div').css('width', Play_td_Width - 40);
    $('#Play_QR_Border_div').css('maxWidth', Play_td_Width - 40);
    $('#Play_QR_Border_div').css('minWidth', Play_td_Width - 40);

    //Play_QR_img
    $('#Play_QR_img').css('maxHeight', Play_tbl_Height - 4 - 40 - 40 - 60);
    $('#Play_QR_img').css('maxWidth', Play_td_Width - 40 - 40);

    //Play_Reward_td
    $('#Play_Reward_td').css('height', Play_td_Height);
    $('#Play_Reward_td').css('maxHeight', Play_td_Height);
    $('#Play_Reward_td').css('minHeight', Play_td_Height);

    $('#Play_Reward_td').css('width', Play_td_Width);
    $('#Play_Reward_td').css('maxWidth', Play_td_Width);
    $('#Play_Reward_td').css('minWidth', Play_td_Width);

    //Play_Reward_Border_div
    $('#Play_Reward_Border_div').css('width', Play_td_Width - 40);
    $('#Play_Reward_Border_div').css('maxWidth', Play_td_Width - 40);
    $('#Play_Reward_Border_div').css('minWidth', Play_td_Width - 40);

    //Play_Reward_tbl
    $('#Play_Reward_tbl').css('width', Play_td_Width - 40 - 40);
    $('#Play_Reward_tbl').css('maxWidth', Play_td_Width - 40 - 40);
    $('#Play_Reward_tbl').css('minWidth', Play_td_Width - 40 - 40);

    //Play_Reward_Order_td
    $('.Play_Reward_Order_td').css('width', (Play_td_Width - 40 - 40) / 10);
    $('.Play_Reward_Order_td').css('maxWidth', (Play_td_Width - 40 - 40) / 10);
    $('.Play_Reward_Order_td').css('minWidth', (Play_td_Width - 40 - 40) / 10);

    //Play_Reward_Title_div
    $('.Play_Reward_Title_div').css('width', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Title_div').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Title_div').css('minWidth', (Play_td_Width - 40 - 40) / 10 - 10);

    //Play_Reward_Picture
    $('.Play_Reward_Picture').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Picture').css('maxHeight', (Play_td_Width - 40 - 40) / 10 - 10);

    //Play_Guide_td
    $('#Play_Guide_td').css('height', Play_td_Height);
    $('#Play_Guide_td').css('maxHeight', Play_td_Height);
    $('#Play_Guide_td').css('minHeight', Play_td_Height);

    $('#Play_Guide_td').css('width', Play_td_Width);
    $('#Play_Guide_td').css('maxWidth', Play_td_Width);
    $('#Play_Guide_td').css('minWidth', Play_td_Width);

    //Play_Guide_Border_div
    $('#Play_Guide_Border_div').css('width', Play_td_Width - 40);
    $('#Play_Guide_Border_div').css('maxWidth', Play_td_Width - 40);
    $('#Play_Guide_Border_div').css('minWidth', Play_td_Width - 40);
}

function Resize_Play_Reward_Picture() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_tr').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Play_tbl_Height = Body_td_H;
    var Play_tbl_Width = window_Width - 20;

    var Play_td_Height = Play_tbl_Height / 2 - 2;
    var Play_td_Width = Play_tbl_Width / 2 - 2;

    //Play_Reward_Title_div
    $('.Play_Reward_Title_div').css('width', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Title_div').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Title_div').css('minWidth', (Play_td_Width - 40 - 40) / 10 - 10);

    //Play_Reward_Picture
    $('.Play_Reward_Picture').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Picture').css('maxHeight', (Play_td_Width - 40 - 40) / 10 - 10);
}

function Resize_Play_Reward_Picture_Score_Program() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_tr').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Play_tbl_Height = Body_td_H;
    var Play_tbl_Width = window_Width - 20;

    var Play_td_Height = Play_tbl_Height - 4;
    var Play_td_Width = Play_tbl_Width - 4;

    //Play_Reward_Title_div
    $('.Play_Reward_Title_div').css('width', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Title_div').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Title_div').css('minWidth', (Play_td_Width - 40 - 40) / 10 - 10);

    //Play_Reward_Picture
    $('.Play_Reward_Picture').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Picture').css('maxHeight', (Play_td_Width - 40 - 40) / 10 - 10);
}

function View_Program_List(Confirm) {

    if (Confirm == 'delay') {

        Enabled_Confirm_btn();
    }
    else
        if ((Confirm == 'run') || (Confirm == 'remote') || (Confirm == 'back')) {

            Disabled_Confirm_btn();

            if (Confirm == 'run') {
                Submit_Remote($('#OK_btn').attr("onclick").replace("delay", "remote"));
            }
            else
                if (Confirm == 'back') {
                    Submit_Remote($('#Back_btn').attr("onclick").replace("back", "remote"));
                }

            $('#BTN_tr').hide();
            Resize_Program();

            $('#Program_Reward_div').hide();
            $('#Message_div').show();

            Read_Program_List();
        }
}

function View_Welcome(Confirm) {

    if (Confirm == 'delay') {

        Enabled_Confirm_btn();
    }
    else
        if ((Confirm == 'run') || (Confirm == 'remote') || (Confirm == 'back')) {

            Disabled_Confirm_btn();

            if (Confirm == 'run') {
                Submit_Remote($('#OK_btn').attr("onclick").replace("delay", "remote"));
            }
            else
                if (Confirm == 'back') {
                    Submit_Remote($('#Back_btn').attr("onclick").replace("back", "remote"));
                }

            $('#Program_Reward_div').show();
            $('#Play_div').hide();

            //
            $('#OK_btn').html("BẮT ĐẦU CHƯƠNG TRÌNH !");
            $('#OK_btn').attr("onclick", "Start_Program('delay'); return false;");

            $('#Back_btn').attr("onclick", "View_Program_List('back'); return false;");
            $('#Back_btn').show();
        }
}

function View_Welcome_Play(Confirm) {

    if (Confirm == 'delay') {

        Enabled_Confirm_btn();
    }
    else
        if ((Confirm == 'run') || (Confirm == 'remote') || (Confirm == 'back')) {

            Disabled_Confirm_btn();

            if (Confirm == 'run') {
                Submit_Remote($('#OK_btn').attr("onclick").replace("delay", "remote"));
            }
            else
                if (Confirm == 'back') {
                    Submit_Remote($('#Back_btn').attr("onclick").replace("back", "remote"));
                }

            Resize_Play_tbl_Welcome();

            //
            if (Check_Is_Add_Final_Award()) {

                $('#Play_Reward_lbl').html("GIẢI THƯỞNG của: Vòng Chung Kết");

                $('#OK_btn').html("Bước 1: Giới thiệu \"GIẢI THƯỞNG\" của: Vòng Chung Kết");
                $('#OK_btn').attr("onclick", "View_Play_Reward('delay'); return false;");
                $('#OK_btn').css("color", "yellow");
            }
            else {

                var Round = $('#Round_hdf').val();
                $('#Play_Reward_lbl').html("GIẢI THƯỞNG của Vòng đấu: " + Round);

                //
                $('#OK_btn').html("Bước 1: Giới thiệu \"GIẢI THƯỞNG\" của Vòng đấu: " + Round);
                $('#OK_btn').attr("onclick", "View_Play_Reward('delay'); return false;");
                $('#OK_btn').css("color", "yellow");
            }

            $('#Back_btn').attr("onclick", "View_Welcome('back'); return false;");
            $('#Back_btn').show();
        }
}

function View_Play_Reward(Confirm) {

    if (Confirm == 'delay') {

        Enabled_Confirm_btn();
    }
    else
        if ((Confirm == 'run') || (Confirm == 'remote') || (Confirm == 'back')) {

            Disabled_Confirm_btn();

            if (Confirm == 'run') {
                Submit_Remote($('#OK_btn').attr("onclick").replace("delay", "remote"));
            }
            else
                if (Confirm == 'back') {
                    Submit_Remote($('#Back_btn').attr("onclick").replace("back", "remote"));
                }

            var window_Height = Screen_Height();
            var window_Width = $(window).innerWidth();

            var All_tbl_H = window_Height;
            var Body_td_H = All_tbl_H;

            if ($('#Top_Menu_tr').css('display') != 'none') {
                Body_td_H -= $('#Top_Menu_td').height();
            }

            if ($('#BTN_tr').css('display') != 'none') {
                Body_td_H -= $('#BTN_td').height();
            }

            //
            var Play_tbl_Height = Body_td_H;
            var Play_tbl_Width = window_Width - 20;

            var Play_td_Height = Play_tbl_Height - 4;
            var Play_td_Width = Play_tbl_Width - 4;

            //
            $('#Play_Reward_td').show();
            $('#Play_QR_td').hide();
            $('#Play_Guide_td').hide();

            $('#Play_Reward_tr').show();
            $('#Play_Guide_tr').hide();

            $('#Play_Reward_Product_Note_tr').show();

            //Play_Reward_td
            $('#Play_Reward_td').css('height', Play_td_Height);
            $('#Play_Reward_td').css('maxHeight', Play_td_Height);
            $('#Play_Reward_td').css('minHeight', Play_td_Height);

            $('#Play_Reward_td').css('width', Play_td_Width);
            $('#Play_Reward_td').css('maxWidth', Play_td_Width);
            $('#Play_Reward_td').css('minWidth', Play_td_Width);

            //Play_Reward_Border_div
            //$('#Play_Reward_Border_div').css('height', Play_td_Height - 40);
            //$('#Play_Reward_Border_div').css('maxHeight', Play_td_Height - 40);
            //$('#Play_Reward_Border_div').css('minHeight', Play_td_Height - 40);

            $('#Play_Reward_Border_div').css('width', Play_td_Width - 40);
            $('#Play_Reward_Border_div').css('maxWidth', Play_td_Width - 40);
            $('#Play_Reward_Border_div').css('minWidth', Play_td_Width - 40);

            //Play_Reward_tbl
            $('#Play_Reward_tbl').css('width', Play_td_Width - 40 - 40);
            $('#Play_Reward_tbl').css('maxWidth', Play_td_Width - 40 - 40);
            $('#Play_Reward_tbl').css('minWidth', Play_td_Width - 40 - 40);

            //Play_Reward_Order_td
            $('.Play_Reward_Order_td').css('width', (Play_td_Width - 40 - 40) / 10);
            $('.Play_Reward_Order_td').css('maxWidth', (Play_td_Width - 40 - 40) / 10);
            $('.Play_Reward_Order_td').css('minWidth', (Play_td_Width - 40 - 40) / 10);

            //Play_Reward_Title_div
            $('.Play_Reward_Title_div').css('width', (Play_td_Width - 40 - 40) / 10 - 10);
            $('.Play_Reward_Title_div').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
            $('.Play_Reward_Title_div').css('minWidth', (Play_td_Width - 40 - 40) / 10 - 10);

            //Play_Reward_Picture
            $('.Play_Reward_Picture').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
            $('.Play_Reward_Picture').css('maxHeight', (Play_td_Width - 40 - 40) / 10 - 10);

            //
            if (Check_Is_Add_Final_Award()) {

                $('#Play_Reward_lbl').html("GIẢI THƯỞNG của: Vòng Chung Kết");

                $('#OK_btn').html("Bước 2: HƯỚNG DẪN CÁCH TÍNH ĐIỂM: VÒNG CHUNG KẾT !");
                $('#OK_btn').attr("onclick", "View_Play_Guide('delay'); return false;");
                $('#OK_btn').css("color", "yellow");
            }
            else {

                var Round = $('#Round_hdf').val();
                $('#Play_Reward_lbl').html("GIẢI THƯỞNG của Vòng đấu: " + Round);

                //
                $('#OK_btn').html("Bước 2: HƯỚNG DẪN CÁCH CHƠI !");
                $('#OK_btn').attr("onclick", "View_Play_Guide('delay'); return false;");
                $('#OK_btn').css("color", "yellow");
            }

            //
            $('#Back_btn').attr("onclick", "View_Welcome_Play('back'); return false;");
            $('#Back_btn').show();

            $('#Blinking_hdf').val('Play_Reward_Border_div');
        }
}

function View_Play_Guide(Confirm) {

    if (Confirm == 'delay') {

        Enabled_Confirm_btn();
    }
    else
        if ((Confirm == 'run') || (Confirm == 'remote') || (Confirm == 'back')) {

            Disabled_Confirm_btn();

            if (Confirm == 'run') {
                Submit_Remote($('#OK_btn').attr("onclick").replace("delay", "remote"));
            }
            else
                if (Confirm == 'back') {
                    Submit_Remote($('#Back_btn').attr("onclick").replace("back", "remote"));
                }

            var window_Height = Screen_Height();
            var window_Width = $(window).innerWidth();

            var All_tbl_H = window_Height;
            var Body_td_H = All_tbl_H;

            if ($('#Top_Menu_tr').css('display') != 'none') {
                Body_td_H -= $('#Top_Menu_td').height();
            }

            if ($('#BTN_tr').css('display') != 'none') {
                Body_td_H -= $('#BTN_td').height();
            }

            //
            var Play_tbl_Height = Body_td_H;
            var Play_tbl_Width = window_Width - 20;

            var Play_td_Height = Play_tbl_Height - 4;
            var Play_td_Width = Play_tbl_Width - 4;

            //
            $('#Play_Reward_td').hide();
            $('#Play_QR_td').hide();
            $('#Play_Guide_td').show();

            $('#Play_Reward_tr').hide();
            $('#Play_Guide_tr').show();

            //Play_Guide_td
            $('#Play_Guide_td').css('height', Play_td_Height);
            $('#Play_Guide_td').css('maxHeight', Play_td_Height);
            $('#Play_Guide_td').css('minHeight', Play_td_Height);

            $('#Play_Guide_td').css('width', Play_td_Width);
            $('#Play_Guide_td').css('maxWidth', Play_td_Width);
            $('#Play_Guide_td').css('minWidth', Play_td_Width);

            //Play_Guide_Border_div
            //$('#Play_Guide_Border_div').css('height', Play_td_Height - 40);
            //$('#Play_Guide_Border_div').css('maxHeight', Play_td_Height - 40);
            //$('#Play_Guide_Border_div').css('minHeight', Play_td_Height - 40);

            $('#Play_Guide_Border_div').css('width', Play_td_Width - 40);
            $('#Play_Guide_Border_div').css('maxWidth', Play_td_Width - 40);
            $('#Play_Guide_Border_div').css('minWidth', Play_td_Width - 40);

            //
            if (Check_Is_Add_Final_Award()) {

                $('#OK_btn').html("XEM KẾT QUẢ TRÚNG THƯỞNG: VÒNG CHUNG KẾT !");
                $('#OK_btn').attr("onclick", "View_Score_Program('delay', true); return false;");
                $('#OK_btn').css("color", "yellow");
            }
            else {
                $('#OK_btn').html("Bước 3: CHUẨN BỊ SẴN SÀNG CHƠI !");
                $('#OK_btn').attr("onclick", "View_Play_Ready('delay'); return false;");
                $('#OK_btn').css("color", "yellow");
            }

            //
            $('#Back_btn').attr("onclick", "View_Play_Reward('back'); return false;");
            $('#Back_btn').show();

            $('#Blinking_hdf').val('Play_Guide_Border_div');
        }
}

function View_Play_Ready(Confirm) {

    if (Confirm == 'delay') {

        Enabled_Confirm_btn();
    }
    else
        if ((Confirm == 'run') || (Confirm == 'remote') || (Confirm == 'back')) {

            Disabled_Confirm_btn();

            if (Confirm == 'run') {
                Submit_Remote($('#OK_btn').attr("onclick").replace("delay", "remote"));
            }
            else
                if (Confirm == 'back') {
                    Submit_Remote($('#Back_btn').attr("onclick").replace("back", "remote"));
                }

            //
            Resize_Play_tbl_Welcome();

            //
            var Round = $('#Round_hdf').val();
            $('#Play_Reward_lbl').html("GIẢI THƯỞNG của Vòng đấu: " + Round);

            //
            $('#OK_btn').html("BẮT ĐẦU CHƠI ! Vòng đấu " + Round);
            $('#OK_btn').attr("onclick", "Start_Round('delay'); return false;");
            $('#OK_btn').css("color", "yellow");

            //
            $('#Back_btn').attr("onclick", "View_Play_Guide('back'); return false;");
            $('#Back_btn').show();
        }
}

function View_Playing() {

    Resize_Play_tbl_Welcome();

    //
    if (Check_Is_Add_Final_Award()) {
        $('#Play_Reward_lbl').html("GIẢI THƯỞNG của: Vòng Chung Kết");
    }
    else {
        var Round = $('#Round_hdf').val();
        $('#Play_Reward_lbl').html("GIẢI THƯỞNG của Vòng đấu: " + Round);
    }

    $('#Back_btn').attr("onclick", "View_Play_Guide('back'); return false;");
    $('#Back_btn').show();
}

function View_Play_Win(Confirm) {

    if (Confirm == 'run') {
        Submit_Remote("View_Play_Win('remote'); return false;");
    }

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_tr').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    //
    var Play_tbl_Height = Body_td_H;
    var Play_tbl_Width = window_Width - 20;

    var Play_td_Height = Play_tbl_Height - 4;
    var Play_td_Width = Play_tbl_Width - 4;

    //
    $('#Play_Reward_td').show();
    $('#Play_QR_td').hide();
    $('#Play_Guide_td').hide();

    $('#Play_Reward_tr').show();
    $('#Play_Guide_tr').hide();

    $('#Play_Reward_Product_Note_tr').show();

    //
    if (Check_Is_Add_Final_Award()) {
        $('#Play_Reward_lbl').html("KẾT QUẢ TRÚNG THƯỞNG của: Vòng Chung Kết");
    }
    else {
        var Round = $('#Round_hdf').val();
        $('#Play_Reward_lbl').html("KẾT QUẢ TRÚNG THƯỞNG của Vòng đấu: " + Round);
    }

    //Play_Reward_td
    $('#Play_Reward_td').css('height', Play_td_Height);
    $('#Play_Reward_td').css('maxHeight', Play_td_Height);
    $('#Play_Reward_td').css('minHeight', Play_td_Height);

    $('#Play_Reward_td').css('width', Play_td_Width);
    $('#Play_Reward_td').css('maxWidth', Play_td_Width);
    $('#Play_Reward_td').css('minWidth', Play_td_Width);

    //Play_Reward_Border_div
    //$('#Play_Reward_Border_div').css('height', Play_td_Height - 40);
    //$('#Play_Reward_Border_div').css('maxHeight', Play_td_Height - 40);
    //$('#Play_Reward_Border_div').css('minHeight', Play_td_Height - 40);

    $('#Play_Reward_Border_div').css('width', Play_td_Width - 40);
    $('#Play_Reward_Border_div').css('maxWidth', Play_td_Width - 40);
    $('#Play_Reward_Border_div').css('minWidth', Play_td_Width - 40);

    //Play_Reward_tbl
    $('#Play_Reward_tbl').css('width', Play_td_Width - 40 - 40);
    $('#Play_Reward_tbl').css('maxWidth', Play_td_Width - 40 - 40);
    $('#Play_Reward_tbl').css('minWidth', Play_td_Width - 40 - 40);

    //Play_Reward_Order_td
    $('.Play_Reward_Order_td').css('width', (Play_td_Width - 40 - 40) / 10);
    $('.Play_Reward_Order_td').css('maxWidth', (Play_td_Width - 40 - 40) / 10);
    $('.Play_Reward_Order_td').css('minWidth', (Play_td_Width - 40 - 40) / 10);

    //Play_Reward_Title_div
    $('.Play_Reward_Title_div').css('width', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Title_div').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Title_div').css('minWidth', (Play_td_Width - 40 - 40) / 10 - 10);

    //Play_Reward_Picture
    $('.Play_Reward_Picture').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
    $('.Play_Reward_Picture').css('maxHeight', (Play_td_Width - 40 - 40) / 10 - 10);

    //
    var Round_Order = parseInt($('#Round_Order_hdf').val());
    var Total_Round = parseInt($('#Total_Round_hdf').val());

    if (Round_Order == Total_Round) {
        $('#OK_btn').html("CHƯƠNG TRÌNH ĐÃ KẾT THÚC ! XEM TẤT CẢ GIẢI THƯỞNG ĐÃ TRAO...");
        $('#OK_btn').attr("onclick", "View_Thank('delay'); return false;");
        $('#OK_btn').css("color", "yellow");
    }
    else {

        if (Round_Order == (Total_Round - 1)) {

            if (Check_HDF('Add_Final_Award_hdf')) {
                $('#OK_btn').html("VÀO VÒNG CHUNG KẾT !");
                $('#OK_btn').attr("onclick", "View_Next_Round('delay'); return false;");
                $('#OK_btn').css("color", "yellow");
            }
            else {
                $('#OK_btn').html("XEM TỔNG ĐIỂM TỪ ĐẦU CHƯƠNG TRÌNH !");
                $('#OK_btn').attr("onclick", "View_Score_Program('delay', false); return false;");
                $('#OK_btn').css("color", "yellow");
            }
        }
        else
            if (Round_Order < (Total_Round - 1)) {

                if (Round_Order == 1) {
                    $('#OK_btn').html("VÀO VÒNG KẾ TIẾP !");
                    $('#OK_btn').attr("onclick", "View_Next_Round('delay'); return false;");
                    $('#OK_btn').css("color", "yellow");
                }
                else {
                    $('#OK_btn').html("XEM TỔNG ĐIỂM TỪ ĐẦU CHƯƠNG TRÌNH !");
                    $('#OK_btn').attr("onclick", "View_Score_Program('delay', false); return false;");
                    $('#OK_btn').css("color", "yellow");
                }
            }
    }

    $('#Back_btn').attr("onclick", "return false;");
    $('#Back_btn').hide();

    $('#Blinking_hdf').val('Play_Reward_Border_div');
}

function View_Score_Program(Confirm, Is_Final_Award) {

    if (Confirm == 'delay') {

        Enabled_Confirm_btn();
    }
    else
        if ((Confirm == 'run') || (Confirm == 'remote') || (Confirm == 'back')) {

            Disabled_Confirm_btn();

            if (Confirm == 'run') {
                Submit_Remote($('#OK_btn').attr("onclick").replace("delay", "remote"));
            }
            else
                if (Confirm == 'back') {
                    Submit_Remote($('#Back_btn').attr("onclick").replace("back", "remote"));
                }

            var window_Height = Screen_Height();
            var window_Width = $(window).innerWidth();

            var All_tbl_H = window_Height;
            var Body_td_H = All_tbl_H;

            if ($('#Top_Menu_tr').css('display') != 'none') {
                Body_td_H -= $('#Top_Menu_td').height();
            }

            if ($('#BTN_tr').css('display') != 'none') {
                Body_td_H -= $('#BTN_td').height();
            }

            //
            var Play_tbl_Height = Body_td_H;
            var Play_tbl_Width = window_Width - 20;

            var Play_td_Height = Play_tbl_Height - 4;
            var Play_td_Width = Play_tbl_Width - 4;

            //
            $('#Play_Reward_td').show();
            $('#Play_QR_td').hide();
            $('#Play_Guide_td').hide();

            $('#Play_Reward_tr').show();
            $('#Play_Guide_tr').hide();

            //Play_Reward_td
            $('#Play_Reward_td').css('height', Play_td_Height);
            $('#Play_Reward_td').css('maxHeight', Play_td_Height);
            $('#Play_Reward_td').css('minHeight', Play_td_Height);

            $('#Play_Reward_td').css('width', Play_td_Width);
            $('#Play_Reward_td').css('maxWidth', Play_td_Width);
            $('#Play_Reward_td').css('minWidth', Play_td_Width);

            //Play_Reward_Border_div
            //$('#Play_Reward_Border_div').css('height', Play_td_Height - 40);
            //$('#Play_Reward_Border_div').css('maxHeight', Play_td_Height - 40);
            //$('#Play_Reward_Border_div').css('minHeight', Play_td_Height - 40);

            $('#Play_Reward_Border_div').css('width', Play_td_Width - 40);
            $('#Play_Reward_Border_div').css('maxWidth', Play_td_Width - 40);
            $('#Play_Reward_Border_div').css('minWidth', Play_td_Width - 40);

            //Play_Reward_tbl
            $('#Play_Reward_tbl').css('width', Play_td_Width - 40 - 40);
            $('#Play_Reward_tbl').css('maxWidth', Play_td_Width - 40 - 40);
            $('#Play_Reward_tbl').css('minWidth', Play_td_Width - 40 - 40);

            //Play_Reward_Order_td
            $('.Play_Reward_Order_td').css('width', (Play_td_Width - 40 - 40) / 10);
            $('.Play_Reward_Order_td').css('maxWidth', (Play_td_Width - 40 - 40) / 10);
            $('.Play_Reward_Order_td').css('minWidth', (Play_td_Width - 40 - 40) / 10);

            //Play_Reward_Title_div
            $('.Play_Reward_Title_div').css('width', (Play_td_Width - 40 - 40) / 10 - 10);
            $('.Play_Reward_Title_div').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
            $('.Play_Reward_Title_div').css('minWidth', (Play_td_Width - 40 - 40) / 10 - 10);

            //Play_Reward_Picture
            $('.Play_Reward_Picture').css('maxWidth', (Play_td_Width - 40 - 40) / 10 - 10);
            $('.Play_Reward_Picture').css('maxHeight', (Play_td_Width - 40 - 40) / 10 - 10);

            //
            var Round_Order = parseInt($('#Round_Order_hdf').val());
            var Total_Round = parseInt($('#Total_Round_hdf').val());

            //
            if (Round_Order < Total_Round) {
                $('#OK_btn').html("VÀO VÒNG KẾ TIẾP !");
                $('#OK_btn').attr("onclick", "View_Next_Round('delay'); return false;");
                $('#OK_btn').css("color", "yellow");
            }
            else {
                $('#OK_btn').html("CHƯƠNG TRÌNH ĐÃ KẾT THÚC ! XEM TẤT CẢ GIẢI THƯỞNG ĐÃ TRAO...");
                $('#OK_btn').attr("onclick", "View_Thank('delay'); return false;");
                $('#OK_btn').css("color", "yellow");
            }

            $('#Back_btn').attr("onclick", "return false;");
            $('#Back_btn').hide();

            $('#Blinking_hdf').val('Play_Reward_Border_div');

            //
            if (!Is_Final_Award) {

                $('#Play_Reward_Product_Name_tr').hide();
                $('#Play_Reward_Product_Note_tr').hide();
                $('#Play_Reward_Product_Picture_tr').hide();
                $('#Play_TOP_Time_tr').hide();
                $('#Play_TOP_Score_tr').show();

                $('#Play_Reward_lbl').html("TỔNG ĐIỂM TỪ ĐẦU CHƯƠNG TRÌNH !");
            }
            else {
                $('#Play_Reward_Product_Name_tr').show();
                $('#Play_Reward_Product_Note_tr').show();
                $('#Play_Reward_Product_Picture_tr').show();
                $('#Play_TOP_Time_tr').show();
                $('#Play_TOP_Score_tr').show();

                $('#Play_Reward_lbl').html("KÊT QUẢ TRÚNG THƯỞNG của: Vòng Chung Kết !");
            }

            //
            Clear_Play_tbl('Play_TOP_Player_td_');
            Clear_Play_tbl('Play_TOP_Time_td_');
            Clear_Play_tbl('Play_TOP_Score_td_');

            //
            Read_Score_Program();
        }
}

function View_Thank(Confirm) {

    if (Confirm == 'delay') {

        Enabled_Confirm_btn();
    }
    else
        if ((Confirm == 'run') || (Confirm == 'remote') || (Confirm == 'back')) {

            Disabled_Confirm_btn();

            if (Confirm == 'run') {
                Submit_Remote($('#OK_btn').attr("onclick").replace("delay", "remote"));
            }
            else
                if (Confirm == 'back') {
                    Submit_Remote($('#Back_btn').attr("onclick").replace("back", "remote"));
                }

            var Program_ID = $('#Program_ID_hdf').val();
            Read_Program_Winner(Program_ID);

            //
            $('#OK_btn').html("TRÂN TRỌNG CẢM ƠN ! HẸN GẶP LẠI Ở CÁC CHƯƠNG TRÌNH SAU...");
            $('#OK_btn').attr("onclick", "return false;");

            $('#Back_btn').attr("onclick", "View_Program_List('back'); return false;");
            $('#Back_btn').show();
        }
}

function View_Rewared(Confirm, Program_ID) {

    Read_Program_Winner(Program_ID);

    if (Confirm == 'run') {
        Submit_Remote("View_Rewared('remote', '" + Program_ID + "'); return false;");
    }

    //
    $('#OK_btn').html("CHƯƠNG TRÌNH ĐÃ KẾT THÚC ! ĐÂY LÀ CÁC GIẢI THƯỞNG ĐÃ TRAO...");
    $('#OK_btn').attr("onclick", "return false;");
}

function Clear_Play_tbl(Group) {

    for (var j = 1; j <= 10; j++) {

        $('#' + Group + j).hide();
        $('#' + Group + j).html('');
    }
}

function Enabled_Confirm_btn() {

    $('#OK_btn').css("font-style", "italic");
    $('#Confirm_btn').show();

    $('#Confirm_btn').attr("onclick", $('#OK_btn').attr("onclick").replace("delay", "run"));
}

function Disabled_Confirm_btn() {

    $('#OK_btn').css("font-style", "normal");
    $('#Confirm_btn').hide();

    $('#Confirm_btn').attr("onclick", "return false;");
}

function Check_Is_Add_Final_Award() {

    var Is_Add_Final_Award = false;

    //
    var Round_Order = parseInt($('#Round_Order_hdf').val());
    var Total_Round = parseInt($('#Total_Round_hdf').val());

    if ((Check_HDF('Add_Final_Award_hdf')) && (Round_Order > 1)) {

        if (Round_Order == Total_Round) {

            Is_Add_Final_Award = true;
        }
    }

    return Is_Add_Final_Award;
}
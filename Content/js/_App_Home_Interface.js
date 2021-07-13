function App_Home_Onload() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //ready
    if ($('#Is_App_Home_hdf').val() == '1') {

        $(document).ready(function () {

            Set_All_onclick_Mouse();

            $("#Name_tbx").watermark("Họ và Tên");
            $("#Name_tbx_2").watermark("Họ và Tên");
            $("#Phone_tbx_2").watermark("Số điện thoại");
            $("#Auth_Code_tbx").watermark("Mã số Trúng thưởng");

            //Is_App
            //if ($('#Is_App_hdf').val() == '1') {

            //    $('#Logo_lnk').attr('href', '#');
            //    $('#Logo_lnk').attr('onclick', 'window.location.reload(true); return false;');
            //}

            //$(window).resize(function () {

            //}).trigger('resize');

            window.setInterval(function () {

                Resize_Player();

                Auto_Run_JS_All();

            }, 500);

            //
            Read_Remote_Player();

        });
    }
}

function Web_Loaded() {

    try {

        if ($('#Web_Loaded_hdf').val() == '0') {

            //Is_App
            if ($('#Is_App_hdf').val() == '1') {
                JS_Call_CS('Web_Loaded');
            }

            $('#Web_Loaded_hdf').val('1');
        }
        else
            if ($('#Web_Loaded_hdf').val() == '1') {

                //Is_App
                if ($('#Is_App_hdf').val() == '1') {
                    Web_Loaded_On_App();
                }

                //
                $('#Web_Loaded_hdf').val('2');

                //
                $('.TOP_Title').show();
                $('#BTN_div').show();

                //
                Read_User_Information("");

                //
                Setup_jScrollPane_Vertical('Body_div');

                //
                window.setTimeout(function () {

                    //Scroll_To_End_Alt("Body_div");

                }, 3000);
            }
    }
    catch (err) {
    }
}

function Resize_Player() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    if (window_Height != parseInt($('#Screen_Height_hdf').val())) {

        $('#Screen_Height_hdf').val(window_Height);

        Resize_Page_Content_Player();
        Resize_All_tbl_Player();

        Resize_Message_Player();

        Resize_Choice_Play_Type();

        Resize_Reward_tbl_Player();

        Resize_Play_At_Event_Guide();
        Resize_Play_At_Event();

        Resize_Round_TOP_tbl();
        Resize_Answer_Wrong();

        Resize_More_Reward();
        Resize_Information_tbl();
        Resize_Share_tbl();

        Resize_Win_tbl();

        Resize_Support_Friend_Guide();

        Resize_Played_Program_Holder_tbl();
        Resize_User_Information_Holder_tbl();

        //
        Setup_jScrollPane_Vertical('Body_div');
    }
}

function Resize_Page_Content_Player() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //Is_App
    if ($('#Is_App_hdf').val() == '1') {

        //Page_div
        $('#Page_Content_div').css("height", window_Height);
        $('#Page_Content_div').css("maxHeight", window_Height);
        $('#Page_Content_div').css("minHeight", window_Height);

        $('#Page_Content_div').css('width', window_Width);
        $('#Page_Content_div').css('maxWidth', window_Width);
        $('#Page_Content_div').css('minWidth', window_Width);
    }
}

function Resize_All_tbl_Player() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
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

    $('#BTN_div').css('width', window_Width * 0.95);
    $('#BTN_div').css('maxWidth', window_Width * 0.95);
    $('#BTN_div').css('minWidth', window_Width * 0.95);

    $('#BTN_tbl').css('width', window_Width * 0.95 - 20);
    $('#BTN_tbl').css('maxWidth', window_Width * 0.95 - 20);
    $('#BTN_tbl').css('minWidth', window_Width * 0.95 - 20);
}

function Resize_Message_Player() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Message_tbl_Height = Body_td_H;

    $('#Message_div').css('top', $('#Top_Menu_td').height());

    $('#Message_tbl').css('height', Message_tbl_Height);
    $('#Message_tbl').css('maxHeight', Message_tbl_Height);
    $('#Message_tbl').css('minHeight', Message_tbl_Height);

    $('#Message_tbl').css('width', window_Width);
    $('#Message_tbl').css('maxWidth', window_Width);
    $('#Message_tbl').css('minWidth', window_Width);
}

function Resize_Choice_Play_Type() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Choice_Play_Type_tbl_Height = Body_td_H;

    $('#Choice_Play_Type_tbl').css('height', Choice_Play_Type_tbl_Height);
    $('#Choice_Play_Type_tbl').css('maxHeight', Choice_Play_Type_tbl_Height);
    $('#Choice_Play_Type_tbl').css('minHeight', Choice_Play_Type_tbl_Height);

    $('#Choice_Play_Type_tbl').css('width', window_Width);
    $('#Choice_Play_Type_tbl').css('maxWidth', window_Width);
    $('#Choice_Play_Type_tbl').css('minWidth', window_Width);

    $('.Choice_Play_Type_Guide').width($("#Choice_Play_Type_tbl").width() * 0.75 - 12);
    $('.Choice_Play_Type_Guide').height(Choice_Play_Type_tbl_Height / 5 - 22);

    $('.Choice_Play_Type_Guide_Blue').width($('.Choice_Play_Type_Guide').width());
    $('.Choice_Play_Type_Guide_Blue').height($('.Choice_Play_Type_Guide').height());
}

function Resize_Reward_tbl_Player() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Reward_tbl_Height = Body_td_H;
    var Reward_tbl_Width = window_Width;

    var Reward_td_Height = Reward_tbl_Height;
    var Reward_td_Width = Reward_tbl_Width;

    //
    if (Check_Is_Add_Final_Award()) {
        $('#Play_Reward_lbl').html("GIẢI THƯỞNG của: Vòng Chung Kết");
    }
    else {
        var Round = $('#Round_hdf').val();
        $('#Play_Reward_lbl').html("GIẢI THƯỞNG của Vòng đấu: " + Round);
    }

    //Reset to Default - OK
    $('#Play_Reward_tr').show();
    $('#Play_Guide_tr').hide();

    $('#Play_Reward_td').show();
    $('#Play_Guide_td').hide();

    //OK
    $('.Play_Reward_Product_Picture_td').show();
    $('.Play_Reward_User_Picture_td').hide();


    //Reward_tbl - OK
    $('#Reward_tbl').css('height', Reward_tbl_Height);
    $('#Reward_tbl').css('maxHeight', Reward_tbl_Height);
    $('#Reward_tbl').css('minHeight', Reward_tbl_Height);

    $('#Reward_tbl').css('width', Reward_tbl_Width);
    $('#Reward_tbl').css('maxWidth', Reward_tbl_Width);
    $('#Reward_tbl').css('minWidth', Reward_tbl_Width);


    //Play_Reward_td - OK
    $('#Play_Reward_td').css('height', Reward_td_Height);
    $('#Play_Reward_td').css('maxHeight', Reward_td_Height);
    $('#Play_Reward_td').css('minHeight', Reward_td_Height);

    $('#Play_Reward_td').css('width', Reward_td_Width);
    $('#Play_Reward_td').css('maxWidth', Reward_td_Width);
    $('#Play_Reward_td').css('minWidth', Reward_td_Width);

    //Play_Guide_td - OK
    $('#Play_Guide_td').css('height', Reward_td_Height);
    $('#Play_Guide_td').css('maxHeight', Reward_td_Height);
    $('#Play_Guide_td').css('minHeight', Reward_td_Height);

    $('#Play_Guide_td').css('width', Reward_td_Width);
    $('#Play_Guide_td').css('maxWidth', Reward_td_Width);
    $('#Play_Guide_td').css('minWidth', Reward_td_Width);

    //one
    var Play_Reward_tbl_Height = (Reward_td_Height - $('#Play_Reward_lbl').height() - 20) / 5;
    var Play_Reward_tbl_Width = Reward_td_Width / 2 - 5;

    //Play_Reward_tbl - OK
    $('.Play_Reward_tbl').css('height', Play_Reward_tbl_Height);
    $('.Play_Reward_tbl').css('maxHeight', Play_Reward_tbl_Height);
    $('.Play_Reward_tbl').css('minHeight', Play_Reward_tbl_Height);

    $('.Play_Reward_tbl').css('width', Play_Reward_tbl_Width);
    $('.Play_Reward_tbl').css('maxWidth', Play_Reward_tbl_Width);
    $('.Play_Reward_tbl').css('minWidth', Play_Reward_tbl_Width);


    //Play_Reward_Order_td - OK
    $('.Play_Reward_Order_td').css('width', 20);
    $('.Play_Reward_Order_td').css('maxWidth', 20);
    $('.Play_Reward_Order_td').css('minWidth', 20);

    //
    $('.Play_Reward_Product_Picture_td').css('width', Play_Reward_tbl_Width - 20);
    $('.Play_Reward_User_Picture_td').css('width', Play_Reward_tbl_Width - 20);

    //Play_Reward_Title_div - OK
    $('.Play_Reward_Title_div').css('width', Play_Reward_tbl_Width - 20);
    $('.Play_Reward_Title_div').css('maxWidth', Play_Reward_tbl_Width - 20);
    $('.Play_Reward_Title_div').css('minWidth', Play_Reward_tbl_Width - 20);

    //Play_Reward_Picture
    $('.Play_Reward_Picture').css('maxWidth', (Play_Reward_tbl_Width - 20) / 2 - 5);
    $('.Play_Reward_Picture').css('maxHeight', Play_Reward_tbl_Height - 50);
}

function Resize_Program_Reward_tbl_Player() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
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

function Resize_Reward_Picture_Player() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Reward_tbl_Height = Body_td_H;
    var Reward_tbl_Width = window_Width;

    var Reward_td_Height = Reward_tbl_Height;
    var Reward_td_Width = Reward_tbl_Width;

    //one
    var Play_Reward_tbl_Height = (Reward_td_Height - $('#Play_Reward_lbl').height() - 20) / 5;
    var Play_Reward_tbl_Width = Reward_td_Width / 2 - 5;

    //Play_Reward_Title_div - OK
    $('.Play_Reward_Title_div').css('width', Play_Reward_tbl_Width - 20);
    $('.Play_Reward_Title_div').css('maxWidth', Play_Reward_tbl_Width - 20);
    $('.Play_Reward_Title_div').css('minWidth', Play_Reward_tbl_Width - 20);

    //Play_Reward_Picture
    $('.Play_Reward_Picture').css('maxWidth', (Play_Reward_tbl_Width - 20) / 2 - 5);
    $('.Play_Reward_Picture').css('maxHeight', Play_Reward_tbl_Height - 50);
}

function Resize_Play_At_Event_Guide() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Play_At_Event_Guide_tbl_Height = Body_td_H - 10;

    $('#Play_At_Event_Guide_tbl').css('height', Play_At_Event_Guide_tbl_Height);
    $('#Play_At_Event_Guide_tbl').css('maxHeight', Play_At_Event_Guide_tbl_Height);
    $('#Play_At_Event_Guide_tbl').css('minHeight', Play_At_Event_Guide_tbl_Height);

    $('#Play_At_Event_Guide_tbl').css('width', window_Width);
    $('#Play_At_Event_Guide_tbl').css('maxWidth', window_Width);
    $('#Play_At_Event_Guide_tbl').css('minWidth', window_Width);

    $('#Play_At_Event_Guide_td').css('height', Play_At_Event_Guide_tbl_Height / 2);
    $('#Play_At_Event_Guide_td').css('maxHeight', Play_At_Event_Guide_tbl_Height / 2);
    $('#Play_At_Event_Guide_td').css('minHeight', Play_At_Event_Guide_tbl_Height / 2);

    $('#Play_At_Event_Guide_img').css('maxWidth', $('#Play_At_Event_Guide_td').width() * 0.95);
    $('#Play_At_Event_Guide_img').css('maxHeight', $('#Play_At_Event_Guide_td').height() * 0.95);
}

function Resize_Play_At_Event() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Play_At_Event_tbl_Height = Body_td_H;

    $('#Play_At_Event_tbl').css('height', Play_At_Event_tbl_Height);
    $('#Play_At_Event_tbl').css('maxHeight', Play_At_Event_tbl_Height);
    $('#Play_At_Event_tbl').css('minHeight', Play_At_Event_tbl_Height);

    $('#Play_At_Event_tbl').css('width', window_Width);
    $('#Play_At_Event_tbl').css('maxWidth', window_Width);
    $('#Play_At_Event_tbl').css('minWidth', window_Width);

    //Question_Picture
    $('.Question_Picture').css('maxWidth', window_Width * 0.8);
    $('.Question_Picture').css('maxHeight', window_Width * 0.8);
}

function Resize_Support_Friend_Guide() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    var Support_Friend_Guide_tbl_Height = Body_td_H;

    $('#Support_Friend_Guide_tbl').css('height', Support_Friend_Guide_tbl_Height);
    $('#Support_Friend_Guide_tbl').css('maxHeight', Support_Friend_Guide_tbl_Height);
    $('#Support_Friend_Guide_tbl').css('minHeight', Support_Friend_Guide_tbl_Height);

    $('#Support_Friend_Guide_tbl').css('width', window_Width);
    $('#Support_Friend_Guide_tbl').css('maxWidth', window_Width);
    $('#Support_Friend_Guide_tbl').css('minWidth', window_Width);

    $('#Support_Friend_Guide_td').css('height', Support_Friend_Guide_tbl_Height / 2);
    $('#Support_Friend_Guide_td').css('maxHeight', Support_Friend_Guide_tbl_Height / 2);
    $('#Support_Friend_Guide_td').css('minHeight', Support_Friend_Guide_tbl_Height / 2);

    $('#Support_Friend_Guide_img').css('maxWidth', $('#Support_Friend_Guide_td').width() * 0.95);
    $('#Support_Friend_Guide_img').css('maxHeight', $('#Support_Friend_Guide_td').height() * 0.95);
}

function Resize_Answer() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    $('.Answer').css('width', window_Width * 0.8);
    $('.Answer').css('maxWidth', window_Width * 0.8);
    $('.Answer').css('minWidth', window_Width * 0.8);

    $('#Answer_tbx_tbl').css('width', window_Width);
    $('#Answer_tbx_tbl').css('maxWidth', window_Width);
    $('#Answer_tbx_tbl').css('minWidth', window_Width);

    $('#Answer_tbx_td').css('width', window_Width - 80);
    $('#Answer_tbx_td').css('maxWidth', window_Width - 80);
    $('#Answer_tbx_td').css('minWidth', window_Width - 80);

    $('#Answer_tbx').css('width', window_Width - 80 - 20);
    $('#Answer_tbx').css('maxWidth', window_Width - 80 - 20);
    $('#Answer_tbx').css('minWidth', window_Width - 80 - 20);
}

function Resize_Question_Picture() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    //Question_Picture
    $('.Question_Picture').css('maxWidth', window_Width * 0.8);
    $('.Question_Picture').css('maxHeight', window_Width * 0.8 * 3 / 4);
}

function Resize_Round_TOP_tbl() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //
    var Total_Reward = parseInt($('#Total_Round_Reward_Current_hdf').val());

    var Round_TOP_td_Width = (window_Width - 20) / Total_Reward;

    if (Round_TOP_td_Width > 50) {
        Round_TOP_td_Width = 50;
    }

    $('.Round_TOP_td').css('width', Round_TOP_td_Width);
    $('.Round_TOP_td').css('maxWidth', Round_TOP_td_Width);
    $('.Round_TOP_td').css('minWidth', Round_TOP_td_Width);

    $('.Round_TOP_div').css('width', Round_TOP_td_Width - 2);
    $('.Round_TOP_div').css('maxWidth', Round_TOP_td_Width - 2);
    $('.Round_TOP_div').css('minWidth', Round_TOP_td_Width - 2);

    $('.Round_TOP_Picture').css('maxWidth', Round_TOP_td_Width - 10);
    $('.Round_TOP_Picture').css('maxHeight', Round_TOP_td_Width - 10);

    //
    var Round_TOP_td_Height = $('#Round_TOP_tbl').height() + 10;

    $('#Round_TOP_td').css('height', Round_TOP_td_Height);
    $('#Round_TOP_td').css('maxHeight', Round_TOP_td_Height);
    $('#Round_TOP_td').css('minHeight', Round_TOP_td_Height);
}

function Resize_Answer_Wrong() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    $('#Try_Another_btn').css('width', window_Width * 0.8);
    $('#Try_Another_btn').css('maxWidth', window_Width * 0.8);
    $('#Try_Another_btn').css('minWidth', window_Width * 0.8);
}

function Resize_More_Reward() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    $('#More_Reward_Space_div').css('width', window_Width);
    $('#More_Reward_Space_div').css('maxWidth', window_Width);
    $('#More_Reward_Space_div').css('minWidth', window_Width);
}

function Resize_Information_tbl() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    $('#Information_tbl').css('width', window_Width * 0.98);
    $('#Information_tbl').css('maxWidth', window_Width * 0.98);
    $('#Information_tbl').css('minWidth', window_Width * 0.98);
}

function Resize_Share_tbl() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    $('#Share_tbl').css('width', window_Width * 0.98);
    $('#Share_tbl').css('maxWidth', window_Width * 0.98);
    $('#Share_tbl').css('minWidth', window_Width * 0.98);
}

function Resize_Win_tbl() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    //
    var Win_tbl_Height = Body_td_H - $('#Round_TOP_tbl').height() - 10;

    $('#Win_tbl').css('height', Win_tbl_Height);
    $('#Win_tbl').css('maxHeight', Win_tbl_Height);
    $('#Win_tbl').css('minHeight', Win_tbl_Height);

    $('#Win_tbl').css('width', window_Width);
    $('#Win_tbl').css('maxWidth', window_Width);
    $('#Win_tbl').css('minWidth', window_Width);

    $('#Win_img_td').css('height', Win_tbl_Height / 3);
    $('#Win_img_td').css('maxHeight', Win_tbl_Height / 3);
    $('#Win_img_td').css('minHeight', Win_tbl_Height / 3);

    $('#Win_img').css('maxWidth', $('#Win_img_td').width() * 0.95);
    $('#Win_img').css('maxHeight', $('#Win_img_td').height() * 0.95);
}

function Resize_Played_Program_Holder_tbl() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    //
    $('#Played_Program_Holder_tbl').css('height', Body_td_H);
    //$('#Played_Program_Holder_tbl').css('maxHeight', Body_td_H);
    $('#Played_Program_Holder_tbl').css('minHeight', Body_td_H);
}

function Resize_User_Information_Holder_tbl() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    if ($('#BTN_td').css('display') != 'none') {
        Body_td_H -= $('#BTN_td').height();
    }

    //
    $('#User_Information_Holder_tbl').css('height', Body_td_H);
    //$('#User_Information_Holder_tbl').css('maxHeight', Body_td_H);
    $('#User_Information_Holder_tbl').css('minHeight', Body_td_H);
}

function OK_btn_OnClick() {

    //
    $('#Message_div').hide();

    $('#Home_div').hide();
    $('#Choice_Play_Type_div').show();

    $('#Program_Reward_div').hide();
    $('#Reward_div').hide();

    $('#Play_At_Event_Guide_div').hide();
    $('#Play_At_Event_div').hide();

    $('#Support_Friend_Guide_div').hide();

    Resize_Choice_Play_Type();
    Setup_jScrollPane_Vertical('Body_div');

    //
    $('#Back_btn').show();
    $('#Back_btn').attr("onclick", "Back_btn_OnClick(0); return false;");

    $('#OK_btn').html("Bước 1/3: Chọn kiểu Chơi IQ...");
    $('#OK_btn').attr("onclick", "return false;");
    $('#OK_btn').css("color", "yellow");
}

function Choice_Play_Type_OnClick(Play_Type) {

    //Hide all
    $('#Message_div').hide();

    $('#Home_div').hide();
    $('#Choice_Play_Type_div').hide();

    $('#Program_Reward_div').hide();
    $('#Reward_div').hide();

    $('#Play_At_Event_Guide_div').hide();
    $('#Play_At_Event_div').hide();

    $('#Support_Friend_Guide_div').hide();

    //
    $('#Play_Type_hdf').val(Play_Type);

    //
    if ((Play_Type == 1) || (Play_Type == 2)) {

        //
        Open_Camera();

        //
        $('#Page_Header_div').hide();
        $('#Top_Menu_tr').hide();
        Resize_All_tbl_Player();

        //
        $('#Play_At_Event_Guide_div').show();

        Resize_Play_At_Event_Guide();
        Setup_jScrollPane_Vertical('Body_div');

        //
        $('#Back_btn').show();
        $('#Back_btn').attr("onclick", "Back_btn_OnClick(1); return false;");

        $('#OK_btn').html("Bước 2/3: Tìm mảnh ghép IQ ở gần bạn...");
        $('#OK_btn').attr("onclick", "return false;");
        $('#OK_btn').css("color", "white");
    }
    else if (Play_Type == 3) {

        $('#Support_Friend_Guide_div').show();

        Resize_Support_Friend_Guide();
        Setup_jScrollPane_Vertical('Body_div');

        $('#Support_Friend_Guide_Message_lbl').html("Đang tải dữ liệu...");

        //
        $('#Back_btn').show();
        $('#Back_btn').attr("onclick", "Back_btn_OnClick(1); return false;");

        $('#OK_btn').html("Đang tải dữ liệu...");
        $('#OK_btn').attr("onclick", "return false;");
        $('#OK_btn').css("color", "white");

        //
        Copy_From_Clipboard();
    }
}

function Back_btn_OnClick(Back_To) {

    //Hide all
    $('#Message_div').hide();

    $('#Home_div').hide();
    $('#Choice_Play_Type_div').hide();

    $('#Program_Reward_div').hide();
    $('#Reward_div').hide();

    $('#Play_At_Event_Guide_div').hide();
    $('#Play_At_Event_div').hide();

    $('#Support_Friend_Guide_div').hide();

    //
    var Play_Type = parseInt($('#Play_Type_hdf').val());

    if (Back_To == 0) {

        $('#Home_div').show();
        $('#Choice_Play_Type_div').hide();

        Resize_All_tbl_Player();
        Setup_jScrollPane_Vertical('Body_div');

        //
        $('#Back_btn').hide();
        $('#Back_btn').attr("onclick", "return false;");

        $('#OK_btn').html("BẮT ĐẦU !");
        $('#OK_btn').attr("onclick", "OK_btn_OnClick(); return false;");
        $('#OK_btn').css("color", "white");
    }
    else
        if (Back_To == 1) {

            Close_Camera();

            $('#Page_Header_div').show();
            $('#Top_Menu_tr').show();
            Resize_All_tbl_Player();

            //
            $('#Choice_Play_Type_div').show();

            $('#Play_At_Event_div').hide();
            $('#Play_At_Event_Guide_div').hide();
            $('#Play_Friend_Support_Guide_div').hide();

            Resize_Choice_Play_Type();
            Setup_jScrollPane_Vertical('Body_div');

            //
            $('#Back_btn').show();
            $('#Back_btn').attr("onclick", "Back_btn_OnClick(0); return false;");

            $('#OK_btn').html("Bước 1/3: Chọn kiểu Chơi IQ...");
            $('#OK_btn').attr("onclick", "return false;");
            $('#OK_btn').css("color", "yellow");
        }
        else
            if (Back_To == 2) {

                if ((Play_Type == 1) || (Play_Type == 2)) {

                    Open_Camera();

                    //
                    $('#Page_Header_div').hide();
                    $('#Top_Menu_tr').hide();
                    Resize_All_tbl_Player();

                    //
                    $('#Play_At_Event_div').hide();
                    $('#Play_At_Event_Guide_div').show();

                    Resize_Play_At_Event_Guide();
                    Setup_jScrollPane_Vertical('Body_div');

                    //
                    $('#Back_btn').show();
                    $('#Back_btn').attr("onclick", "Back_btn_OnClick(1); return false;");

                    $('#OK_btn').html("Bước 2/3: Tìm mảnh ghép IQ ở gần bạn...");
                    $('#OK_btn').attr("onclick", "return false;");
                    $('#OK_btn').css("color", "white");
                }
                if (Play_Type == 3) {

                    $('#Play_At_Event_div').hide();
                    $('#Support_Friend_Guide_div').show();

                    Resize_Support_Friend_Guide();
                    Setup_jScrollPane_Vertical('Body_div');

                    //
                    $('#Support_Friend_Guide_Message_lbl').html("HỖ TRỢ ĐỒNG ĐỘI !");

                    //
                    $('#Back_btn').show();
                    $('#Back_btn').attr("onclick", "Back_btn_OnClick(1); return false;");

                    $('#OK_btn').html("HỖ TRỢ ĐỒNG ĐỘI !");
                    $('#OK_btn').attr("onclick", "return false;");
                    $('#OK_btn').css("color", "white");
                }
            }
}

function More_Reward_OnClick() {

    var Name = $('#Name_tbx').val();

    var Valid = true;
    var Message = '';

    if (Name.length < 3) {

        Valid = false;
        Message += '- Tên bạn phải có ít nhất 3 ký tự';
    }

    if (!Valid) {
        Alert_Message("Lỗi:<br/>" + Message);
    }
    else {
        Submit_User_Information_1();
    }
}

function Get_Reward(Reward_Level) {

    //
    if (Reward_Level == 1) {

    }
}

function Scroll_To_End_Alt(ID) {

    Scroll_To_jScrollPane_Vertical_END(ID);

    window.setTimeout(function () {

        Scroll_To_Top_Alt("Body_div");

    }, 5000);
};

function Scroll_To_Top_Alt(ID) {

    Scroll_To_jScrollPane_Vertical_TOP(ID);

    window.setTimeout(function () {

        Setup_jScrollPane_Vertical("Body_div");

    }, 3000);
};

function Read_Clipboard_Web() {

    var Clipboard = "8e276819-b274-4176-803f-009038148026";
    //$('#Clipboard_hdf').val();

    return Clipboard;
}

function Clear_Reward_tbl(Group) {

    for (var j = 1; j <= 10; j++) {

        $('#' + Group + j).html('');
    }
}

function Check_Readed_Round() {

    var Result = false;

    var Readed_Round_ID = $('#Readed_Round_ID_hdf').val();
    var Round_ID = $('#Round_ID_hdf').val();

    if ((Check_Readed_Program()) && (Readed_Round_ID != '0') && (Round_ID != '0') && (Round_ID == Readed_Round_ID)) {
        Result = true;
    }

    return Result;
}

function Check_Readed_Program() {

    var Result = false;

    var Readed_Program_ID = $('#Readed_Program_ID_hdf').val();
    var Program_ID = $('#Program_ID_hdf').val();

    if ((Readed_Program_ID != '0') && (Program_ID != '0') && (Program_ID == Readed_Program_ID)) {
        Result = true;
    }

    return Result;
}
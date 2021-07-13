function Read_Program_List() {

    $('#Program_List_tbl tbody').empty();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Program_List(Read_Program_List_Sucessfull, Read_Program_List_Error);

    function Read_Program_List_Sucessfull(Response) {

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            for (var j = 0; j < JSON_Array.length; j++) {

                var Program_ID = JSON_Array[j].Item_1;
                var Program = JSON_Array[j].Item_2;

                var Start_Date = JSON_Array[j].Item_3;
                var Finish_Date = JSON_Array[j].Item_4;

                var Add_Final_Award = JSON_Array[j].Item_5;

                var Place = JSON_Array[j].Item_6;
                var Note = JSON_Array[j].Item_7;

                var Finished = JSON_Array[j].Item_8;

                //
                var Program_Title = "";
                var Intro_Title = "";
                var Program_List_tr = "";

                //
                var User_Role = $('#User_Role_hdf').val();

                if ((User_Role == 'partner_manager') || (User_Role == 'partner_mc')) {

                    Program_Title = "<a href='#' onclick='Read_Program(\"run\", \"" + Program_ID + "\"); return false;'><span class='Red'>" + Program + "</span></a>";

                    Intro_Title = "<a href='#' onclick='Read_Program(\"run\", \"" + Program_ID + "\"); return false;'>Giải thưởng</a>";

                    if (Finished == '1') {

                        Program_Title = "<a href='#' onclick='View_Rewared(\"run\", \"" + Program_ID + "\"); return false;'><span class='I'>" + Program + "</span></a>";

                        Intro_Title = "<a href='#' onclick='View_Rewared(\"run\", \"" + Program_ID + "\"); return false;'>Kết quả</a>";
                    }

                    //           
                    Program_List_tr =
                        "<tr>"
                        + "<td class='TD_Padding' align='center' valign='middle'>" + Intro_Title + "</td>"
                        + "<td class='TD_Padding' align='left' valign='middle'>" + Program_Title + "</td>"
                        + "<td class='TD_Padding' align='center' valign='middle'>" + Start_Date + "</td>"
                        + "<td class='TD_Padding' align='center' valign='middle'>" + Finish_Date + "</td>"
                        + "<td class='TD_Padding' align='center' valign='middle'>" + Add_Final_Award + "</td>"
                        + "<td class='TD_Padding' align='left' valign='middle'>" + Place + "</td>"
                        + "<td class='TD_Padding' align='left' valign='middle'>" + Note + "</td>"
                        + "</tr>"
                    ;
                }
                else
                    if (User_Role == 'partner_display') {

                        Program_Title = "<span class='Red'>" + Program + "</span>";

                        if (Finished == '1') {

                            Program_Title = "<span class='I'>" + Program + "</span>";
                        }

                        //           
                        Program_List_tr =
                            "<tr>"
                            + "<td class='TD_Padding' align='left' valign='middle'>" + Program_Title + "</td>"
                            + "<td class='TD_Padding' align='center' valign='middle'>" + Start_Date + "</td>"
                            + "<td class='TD_Padding' align='center' valign='middle'>" + Finish_Date + "</td>"
                            + "<td class='TD_Padding' align='left' valign='middle'>" + Place + "</td>"
                            + "<td class='TD_Padding' align='left' valign='middle'>" + Note + "</td>"
                            + "</tr>"
                        ;
                    }

                //
                $('#Program_List_tbl tbody').append(Program_List_tr);
            }

            //
            $('#Program_List_div').show();
            $('#Message_div').hide();

            //
            Setup_jScrollPane_Vertical('Body_div');
        }

        //
        Read_Remote();
    }

    function Read_Program_List_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Read_Program(Confirm, Program_ID) {

    if (Confirm == 'run') {
        Submit_Remote("Read_Program('remote', '" + Program_ID + "'); return false;");
    }

    $('#Program_ID_hdf').val(Program_ID);

    $('#Program_List_div').hide();
    $('#Message_div').show();

    $('.Program_Reward_Add').remove();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Program(Program_ID, Read_Program_Sucessfull, Read_Program_Error);

    function Read_Program_Sucessfull(Response) {

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            if (JSON_Array.length > 0) {

                var Program = JSON_Array[0].Item_1;
                var Add_Final_Award = JSON_Array[0].Item_2;

                var Round_List = JSON_Array[0].Item_3;
                var Total_Round = JSON_Array[0].Item_4;

                var Program_Reward_List = JSON_Array[0].Item_5;
                var Total_Program_Reward = JSON_Array[0].Item_6;

                var Program_Note = JSON_Array[0].Item_7;

                var Start_Date = JSON_Array[0].Item_8;
                var Finish_Date = JSON_Array[0].Item_9;
                var Date_Correct = JSON_Array[0].Item_10;

                $('#Program_hdf').val(Program);
                $('#Add_Final_Award_hdf').val(Add_Final_Award);

                $('#Total_Round_hdf').val(Total_Round);
                $('#Total_Program_Reward_hdf').val(Total_Program_Reward);

                if (Date_Correct == '1') {
                    $('#Program_Note_lbl').html("<span class='B Red S18'>" + Program + " (" + Start_Date + " - " + Finish_Date + ")<br/>" + Program_Note + "</span>");
                }
                else {
                    $('#Program_Note_lbl').html("<span class='I S18'>" + Program + " (" + Start_Date + " - " + Finish_Date + ")<br/>" + Program_Note + "</span>"
                        + "<br/><span class='B Red S18'>Chú ý ! Ngày hôm nay Không đúng là Ngày tháng đã cài đặt Chương trình !</span>");
                }

                $('#OK_btn').html("BẮT ĐẦU CHƯƠNG TRÌNH !");
                $('#OK_btn').attr("onclick", "Start_Program('delay'); return false;");

                $('#Back_btn').attr("onclick", "View_Program_List('back'); return false;");
                $('#Back_btn').show();

                $('#BTN_tr').show();
                Resize_Program();

                $('#Program_Reward_div').show();
                $('#Message_div').hide();

                //
                var JSON_Array_Round = Parse_JSON_String_To_Array(Round_List);

                if (JSON_Array_Round != null) {

                    for (var j = 0; j < JSON_Array_Round.length; j++) {

                        var Round_ID = JSON_Array_Round[j].Item_1;
                        var Round = JSON_Array_Round[j].Item_2;

                        $('#Program_Reward_tbl').append("<tr id='Round_tr_" + Round_ID + "' class='Program_Reward_Add'></tr>");
                        $('#Round_tr_' + Round_ID).append("<td align='center' valign='middle'><span class='Blue B'>Vòng đấu:</span> <span class='Red B'>" + Round + "</span></td>");
                    }
                }

                //
                var Max_Round_Reward = 0;

                //
                var JSON_Array_Program_Reward = Parse_JSON_String_To_Array(Program_Reward_List);

                if (JSON_Array_Program_Reward != null) {

                    for (var j = 0; j < JSON_Array_Program_Reward.length; j++) {

                        var Round_Reward_List = JSON_Array_Program_Reward[j].Item_1;

                        //
                        var JSON_Array_Round_Reward = Parse_JSON_String_To_Array(Round_Reward_List);

                        if (JSON_Array_Round_Reward != null) {

                            if (Max_Round_Reward < JSON_Array_Round_Reward.length) {
                                Max_Round_Reward = JSON_Array_Round_Reward.length;
                            }

                            for (var x = 0; x < JSON_Array_Round_Reward.length; x++) {

                                var Round_ID = JSON_Array_Round_Reward[x].Item_1;
                                var Reward = JSON_Array_Round_Reward[x].Item_2;
                                var Reward_Picture = JSON_Array_Round_Reward[x].Item_3;
                                var Note = JSON_Array_Round_Reward[x].Item_4;

                                $('#Round_tr_' + Round_ID).append("<td align='center' valign='bottom'><div class='Program_Reward_Title_div Overflow'><img class='Program_Reward_Picture' src='" + Reward_Picture + "'><br/>" + Reward + "</div></td>");
                                $('#Program_Reward_Order_td_' + (x + 1)).show();
                            }
                        }
                    }
                }

                //
                $('#Max_Round_Reward_hdf').val(Max_Round_Reward);
            }
        }

        //
        Resize_Program_Reward_tbl();
        Setup_jScrollPane_Vertical('Body_div');
    }

    function Read_Program_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Read_Program_Winner(Program_ID) {

    $('#Program_List_div').hide();
    $('#Play_div').hide();

    $('#Message_div').show();

    $('.Program_Reward_Add').remove();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Program_Winner(Program_ID, Read_Program_Winner_Sucessfull, Read_Program_Winner_Error);

    function Read_Program_Winner_Sucessfull(Response) {

        //alert(Response);

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            if (JSON_Array.length > 0) {

                var Program = JSON_Array[0].Item_1;
                var Program_Note = JSON_Array[0].Item_2;

                var Round_List = JSON_Array[0].Item_3;
                var Total_Round = JSON_Array[0].Item_4;

                var Program_Reward_List = JSON_Array[0].Item_5;

                var Start_Date = JSON_Array[0].Item_6;
                var Finish_Date = JSON_Array[0].Item_7;

                $('#Total_Round_hdf').val(Total_Round);
                $('#Program_Note_lbl').html("<span class='B Red S18'>" + Program + " (" + Start_Date + " - " + Finish_Date + ")<br/>Danh sách đã Trúng thưởng !</span>");

                $('#BTN_tr').show();
                Resize_Program();

                $('#Program_Reward_div').show();
                $('#Message_div').hide();

                //
                var JSON_Array_Round = Parse_JSON_String_To_Array(Round_List);

                if (JSON_Array_Round != null) {

                    for (var j = 0; j < JSON_Array_Round.length; j++) {

                        var Round_ID = JSON_Array_Round[j].Item_1;
                        var Round = JSON_Array_Round[j].Item_2;

                        $('#Program_Reward_tbl').append("<tr id='Round_tr_" + Round_ID + "' class='Program_Reward_Add'></tr>");
                        $('#Round_tr_' + Round_ID).append("<td align='center' valign='middle'><span class='Blue B'>Vòng đấu:</span> <span class='Red B'>" + Round + "</span></td>");
                    }
                }

                //
                var Max_Round_Reward = 0;

                //
                var JSON_Array_Program_Reward = Parse_JSON_String_To_Array(Program_Reward_List);

                if (JSON_Array_Program_Reward != null) {

                    for (var j = 0; j < JSON_Array_Program_Reward.length; j++) {

                        var Round_Reward_List = JSON_Array_Program_Reward[j].Item_1;

                        //
                        var JSON_Array_Round_Reward = Parse_JSON_String_To_Array(Round_Reward_List);

                        if (JSON_Array_Round_Reward != null) {

                            if (Max_Round_Reward < JSON_Array_Round_Reward.length) {
                                Max_Round_Reward = JSON_Array_Round_Reward.length;
                            }

                            for (var x = 0; x < JSON_Array_Round_Reward.length; x++) {

                                var Round_ID = JSON_Array_Round_Reward[x].Item_1;
                                var Reward = JSON_Array_Round_Reward[x].Item_2;
                                var Reward_Picture = JSON_Array_Round_Reward[x].Item_3;

                                var UserId = JSON_Array_Round_Reward[x].Item_4;
                                var Name = JSON_Array_Round_Reward[x].Item_5;
                                var User_Picture = JSON_Array_Round_Reward[x].Item_6;
                                var Phone = JSON_Array_Round_Reward[x].Item_7;

                                if (UserId != '') {
                                    if (User_Picture == '') {
                                        User_Picture = Replace_Index_Host("/Index/IMG/Avatar.jpg");
                                    }
                                }

                                if (User_Picture != '') {
                                    $('#Round_tr_' + Round_ID).append("<td align='center' valign='bottom'><div class='Program_Reward_Title_div Overflow'><img class='Program_Reward_Picture_Avatar' src='" + User_Picture + "'><br/><span class='Red B'>" + Reward + "<br/>" + Name + "</span></div></td>");
                                }
                                else {
                                    $('#Round_tr_' + Round_ID).append("<td align='center' valign='bottom'><div class='Program_Reward_Title_div Overflow'><img class='Program_Reward_Picture' src='" + Reward_Picture + "'><br/>" + Reward + "</div></td>");
                                }

                                $('#Program_Reward_Order_td_' + (x + 1)).show();
                            }
                        }
                    }
                }

                //
                $('#Max_Round_Reward_hdf').val(Max_Round_Reward);
            }
        }

        //
        Resize_Program_Reward_tbl();
        Setup_jScrollPane_Vertical('Body_div');
    }

    function Read_Program_Winner_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Start_Program(Confirm) {

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

            $('#Program_Reward_div').hide();

            $('#Back_btn').attr("onclick", "View_Welcome('back'); return false;");
            $('#Back_btn').show();

            //
            Read_Round();
        }
}

function Read_Round() {

    $('#Message_div').show();
    $('#Play_div').hide();

    //
    Clear_Play_tbl('Play_Reward_Order_td_');
    Clear_Play_tbl('Play_Reward_Product_Name_td_');
    Clear_Play_tbl('Play_Reward_Product_Note_td_');
    Clear_Play_tbl('Play_Reward_Product_Picture_td_');

    Clear_Play_tbl('Play_TOP_Player_td_');
    Clear_Play_tbl('Play_TOP_Time_td_');
    Clear_Play_tbl('Play_TOP_Score_td_');

    $('#Play_Reward_Product_Name_tr').show();
    $('#Play_Reward_Product_Picture_tr').show();
    $('#Play_TOP_Time_tr').show();
    $('#Play_TOP_Score_tr').show();

    //
    var Program_ID = $('#Program_ID_hdf').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Round(Program_ID, Read_Round_Sucessfull, Read_Round_Error);

    function Read_Round_Sucessfull(Response) {

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            if (JSON_Array.length > 0) {

                var Round_ID = JSON_Array[0].Item_1;
                var Round = JSON_Array[0].Item_2;
                var Duration = JSON_Array[0].Item_3;
                var Reward_List = JSON_Array[0].Item_4;
                var Round_Order = parseInt(Round);

                $('#Round_ID_hdf').val(Round_ID);
                $('#Round_hdf').val(Round);
                $('#Duration_hdf').val(Duration);
                $('#Round_Order_hdf').val(Round_Order);

                //
                if (Check_Is_Add_Final_Award()) {
                    $('#OK_btn').html("Bước 1: Giới thiệu \"GIẢI THƯỞNG\" của: Vòng Chung Kết");
                    $('#OK_btn').attr("onclick", "View_Play_Reward('delay'); return false;");
                    $('#OK_btn').css("color", "yellow");
                }
                else {
                    $('#OK_btn').html("Bước 1: Giới thiệu \"GIẢI THƯỞNG\" của Vòng đấu: " + Round);
                    $('#OK_btn').attr("onclick", "View_Play_Reward('delay'); return false;");
                    $('#OK_btn').css("color", "yellow");
                }

                $('#Message_div').hide();
                $('#Play_div').show();

                //
                var JSON_Array_Reward = Parse_JSON_String_To_Array(Reward_List);

                if (JSON_Array_Reward != null) {

                    if (JSON_Array_Reward.length > 0) {

                        $('#Total_Round_Reward_hdf').val(JSON_Array_Reward.length);

                        for (var j = 0; j < JSON_Array_Reward.length; j++) {

                            var Reward_ID = JSON_Array_Reward[j].Item_1;
                            var Reward = JSON_Array_Reward[j].Item_2;
                            var Reward_Picture = JSON_Array_Reward[j].Item_3;
                            var Note = JSON_Array_Reward[j].Item_4;
                            var Order = j + 1;

                            $('#Play_Reward_Order_td_' + Order).html("<span class='Red'>" + Order + "</span>");
                            $('#Play_Reward_Product_Name_td_' + Order).html("<div class='Play_Reward_Title_div Overflow'>" + Reward + "</div>");
                            $('#Play_Reward_Product_Note_td_' + Order).html(Note);
                            $('#Play_Reward_Product_Picture_td_' + Order).html("<img class='Play_Reward_Picture' src='" + Reward_Picture + "'>");

                            $('#Play_Reward_Order_td_' + Order).show();
                            $('#Play_Reward_Product_Name_td_' + Order).show();
                            $('#Play_Reward_Product_Note_td_' + Order).show();
                            $('#Play_Reward_Product_Picture_td_' + Order).show();
                        }
                    }
                }
            }
        }

        //
        Resize_Play_tbl_Welcome();
    }

    function Read_Round_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Start_Round(Confirm) {

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
            if (Confirm == 'remote') {
                View_Playing();
            }

            $('#OK_btn').html("HÃY CHUẨN BỊ SẴN SÀNG CHƠI... TRONG VÀI GIÂY TỚI...");
            $('#OK_btn').attr("onclick", "return false;");

            $('#Back_btn').attr("onclick", "return false;");
            $('#Back_btn').hide();

            //
            //'#Play_Time_div').hide();
            $('#Play_Time_div').html("<span class='Play_Time_lbl' style='color: red;'>???</span>");

            $('#Play_QR_img').attr('src', Replace_Index_Host("/Index/IMG/Loading/Loading_Gear.gif"));

            $('#Blinking_hdf').val('Play_QR_Border_div');

            //
            Creat_Program_QR(Confirm);
        }
}

function Creat_Program_QR(Confirm) {

    var Program_ID = $('#Program_ID_hdf').val();
    var Round_ID = $('#Round_ID_hdf').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Creat_Program_QR(Program_ID, Round_ID, Confirm, Creat_Program_QR_Sucessfull, Creat_Program_QR_Error);

    function Creat_Program_QR_Sucessfull(Response) {

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            if (JSON_Array.length > 0) {

                var QR_ID = JSON_Array[0].Item_1;
                var QR_URL = JSON_Array[0].Item_2;

                $('#QR_ID_hdf').val(QR_ID);

                Display_QR_Wait_Loaded(QR_URL, Confirm);
            }
        }
    }

    function Creat_Program_QR_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Display_QR_Wait_Loaded(QR_URL, Confirm) {

    var Image_Temp = new Image();
    Image_Temp.src = QR_URL;

    if (!Image_Temp.complete) {
        window.setTimeout(function () { Display_QR_Wait_Loaded(QR_URL, Confirm) }, 1000 * 0.5);
    }
    else {

        $('#Play_Time_div').show();

        //
        var Total_Seconds_Left = 5;

        var Play_QR_Timer = setInterval(function () {

            var User_Role = $('#User_Role_hdf').val();

            if (User_Role == 'partner_manager') {
                $('#Play_Time_div').html(Get_Total_Time_Left(Total_Seconds_Left));
            }
            else
                if (User_Role == 'partner_mc') {
                    $('#Play_Time_div').html("<span class='Play_Time_lbl' style='color: red;'>HÃY CHUẨN BỊ SẴN SÀNG...</span>");
                }

            //
            if (Total_Seconds_Left > 0) {
                Total_Seconds_Left = Total_Seconds_Left - 1;
            }
            else {

                clearInterval(Play_QR_Timer);

                //'#Play_Time_div').hide();
                $('#Play_Time_div').html("<span class='Play_Time_lbl' style='color: red;'>???</span>");

                $('#Play_QR_img').attr('src', QR_URL);

                var Round = $('#Round_hdf').val();

                $('#OK_btn').html("ĐÃ ĐANG CHƠI... Vòng đấu " + Round + "...");
                $('#OK_btn').attr("onclick", "return false;");

                //
                var Duration = parseInt($('#Duration_hdf').val());
                Start_Play_Round_Time(Duration, Confirm);
            }

        }, 1000);
    }
}

function Start_Play_Round_Time(Total_Seconds_Left, Confirm) {

    $('#Play_Time_div').show();
    $('#Play_Time_div').html("<span class='Play_Time_lbl' style='color: red;'>???</span>");

    //
    var Play_Round_Timer = setInterval(function () {

        var User_Role = $('#User_Role_hdf').val();

        if (User_Role == 'partner_manager') {
            $('#Play_Time_div').html(Get_Total_Time_Left(Total_Seconds_Left));
        }
        else
            if (User_Role == 'partner_mc') {
                $('#Play_Time_div').html("<span class='Play_Time_lbl' style='color: red;'>ĐÃ ĐANG CHƠI...</span>");
            }

        //
        if (Total_Seconds_Left > 0) {
            Total_Seconds_Left = Total_Seconds_Left - 1;
        }
        else {

            clearInterval(Play_Round_Timer);

            //'#Play_Time_div').hide();
            $('#Play_Time_div').html("<span class='Play_Time_lbl' style='color: red;'>???</span>");

            View_Play_Win('run');
        }

    }, 1000);

    //
    Clear_Play_tbl('Play_TOP_Player_td_');
    Clear_Play_tbl('Play_TOP_Time_td_');
    Clear_Play_tbl('Play_TOP_Score_td_');

    //Read_Round_TOP
    Read_Round_TOP(Confirm);
}

function Get_Total_Time_Left(Total_Seconds_Left) {

    function Convert_Number_10(Number) {

        if (Number >= 0) {

            return (Number < 10 ? "0" : "") + Number;
        }
        else {
            return Number;
        }
    }

    //
    var Minutes_Left = Math.floor(Total_Seconds_Left / 60);
    var Seconds_Left = Math.floor(Total_Seconds_Left % 60);

    var Total_Time_Left = '';

    if (parseInt(Minutes_Left) >= 1) {

        Minutes_Left = Convert_Number_10(Minutes_Left);
        Seconds_Left = Convert_Number_10(Seconds_Left);

        Total_Time_Left = "<span class='Play_Time_lbl' style='color: red;'>" + Minutes_Left + "</span> phút : <span class='Play_Time_lbl' style='color: red;'>" + Seconds_Left + "</span> giây...";
    }
    else {
        Seconds_Left = Convert_Number_10(Seconds_Left);

        Total_Time_Left = "<span class='Play_Time_lbl' style='color: red;'>" + Seconds_Left + "</span> giây...";
    }

    return Total_Time_Left;
}

function Read_Round_TOP(Confirm) {

    var Program_ID = $('#Program_ID_hdf').val();
    var Round_ID = $('#Round_ID_hdf').val();
    var QR_ID = $('#QR_ID_hdf').val();

    var Total_Round_Reward = parseInt($('#Total_Round_Reward_hdf').val());

    PageMethods.set_path($('#PageMethods_Path_hdf').val());

    if (Confirm == "run") {
        PageMethods.Read_Round_TOP(Program_ID, Round_ID, QR_ID, Read_Round_TOP_Sucessfull, Read_Round_TOP_Error);
    } else if (Confirm == "remote") {
        PageMethods.Read_Round_TOP_Remote(Program_ID, Round_ID, QR_ID, Read_Round_TOP_Sucessfull, Read_Round_TOP_Error);
    }

    function Read_Round_TOP_Sucessfull(Response) {

        //Write_Message_Fix(Response);

        var Finished = '0';

        if ((Response == '0') || (Response == '1')) {
            Finished = Response;
        }
        else {
            var JSON_Array = Parse_JSON_String_To_Array(Response);

            if (JSON_Array != null) {

                if (JSON_Array.length > 0) {

                    var Max_Round_TOP = JSON_Array.length;

                    if (Max_Round_TOP > Total_Round_Reward) {
                        Max_Round_TOP = Total_Round_Reward;
                    }

                    for (var j = 0; j < Max_Round_TOP; j++) {

                        Finished = JSON_Array[j].Item_1;

                        var UserId = JSON_Array[j].Item_2;
                        var Name = JSON_Array[j].Item_3;
                        var Phone = JSON_Array[j].Item_4;
                        var User_Picture = JSON_Array[j].Item_5;

                        var Win_Time = JSON_Array[j].Item_6;
                        var Score_Round = JSON_Array[j].Item_7;

                        if (User_Picture == '') {
                            User_Picture = Replace_Index_Host("/Index/IMG/Avatar.jpg");
                        }

                        var Order = j + 1;

                        //
                        var Color = '';

                        if (j % 2 == 0) {
                            Color = 'Red';
                        }
                        else {
                            Color = 'Black';
                        }

                        var User_Information =
                            "<img class='Play_Reward_Picture' src='" + User_Picture + "'>"
                            + "<br/><div class='Play_Reward_Title_div Overflow " + Color + "'>" + Name + "</div>"
                            + "<div class='Play_Reward_Title_div Overflow " + Color + "'>" + Phone + "</div>"
                        ;

                        //Display TOP
                        $('#Play_TOP_Player_td_' + Order).html(User_Information);
                        $('#Play_TOP_Time_td_' + Order).html("<div class='Play_Reward_Title_div Overflow " + Color + "'>" + Win_Time + "</div>");

                        if (Score_Round != '0') {
                            $('#Play_TOP_Score_td_' + Order).html("<div class='Play_Reward_Title_div Overflow " + Color + "'>(" + Score_Round + " điểm)</div>");
                        }
                        else {
                            $('#Play_TOP_Score_td_' + Order).html('');
                        }

                        $('#Play_TOP_Player_td_' + Order).show();
                        $('#Play_TOP_Time_td_' + Order).show();
                        $('#Play_TOP_Score_td_' + Order).show();
                    }
                }
            }
        }

        //
        Resize_Play_Reward_Picture();

        //Loop
        if (Finished == '0') {

            setTimeout(function () {

                Read_Round_TOP(Confirm);

            }, 1000);
        }
    }

    function Read_Round_TOP_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Read_Score_Program() {

    //
    var Program_ID = $('#Program_ID_hdf').val();
    var Round_ID = $('#Round_ID_hdf').val();

    var Total_Program_Reward = parseInt($('#Total_Program_Reward_hdf').val());

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Score_Program(Program_ID, Round_ID, Read_Score_Program_Sucessfull, Read_Score_Program_Error);

    function Read_Score_Program_Sucessfull(Response) {

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            if (JSON_Array.length > 0) {

                var Max_Program_TOP = JSON_Array.length;

                if (Max_Program_TOP > Total_Program_Reward) {
                    Max_Program_TOP = Total_Program_Reward;
                }

                for (var j = 0; j < Max_Program_TOP; j++) {

                    var UserId = JSON_Array[j].Item_1;
                    var Name = JSON_Array[j].Item_2;
                    var Phone = JSON_Array[j].Item_3;
                    var User_Picture = JSON_Array[j].Item_4;

                    var Score_Program = JSON_Array[j].Item_5;

                    if (User_Picture == '') {
                        User_Picture = Replace_Index_Host("/Index/IMG/Avatar.jpg");
                    }

                    var Order = j + 1;

                    //
                    var Color = '';

                    if (j % 2 == 0) {
                        Color = 'Red';
                    }
                    else {
                        Color = 'Black';
                    }

                    //
                    var User_Information =
                        "<img class='Play_Reward_Picture' src='" + User_Picture + "'>"
                        + "<br/><span class='" + Color + "'>" + Name + "</span>"
                        + "<br/><span class='" + Color + "'>" + Phone + "</span>"
                    ;

                    //Display TOP
                    $('#Play_TOP_Player_td_' + Order).html(User_Information);
                    $('#Play_TOP_Score_td_' + Order).html("<span class='" + Color + "'>(" + Score_Program + " điểm)</span>");

                    //Nếu có giải thưởng thì show
                    $('#Play_TOP_Player_td_' + Order).show();
                    $('#Play_TOP_Score_td_' + Order).show();
                }
            }
        }

        Resize_Play_Reward_Picture_Score_Program();
    }

    function Read_Score_Program_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function View_Next_Round(Confirm) {

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

            $('#Back_btn').attr("onclick", "View_Welcome('back'); return false;");
            $('#Back_btn').show();

            Read_Round();
        }
}

function Submit_Remote(CMD) {

    CMD = escape(CMD);

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Submit_Remote(CMD, Submit_Remote_Sucessfull, Submit_Remote_Error);

    function Submit_Remote_Sucessfull(Response) {
    }

    function Submit_Remote_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Read_Remote() {

    var Event_ID = $('#Event_ID_hdf').val();

    if (Event_ID != '0') {
        PageMethods.set_path($('#PageMethods_Path_hdf').val());
        PageMethods.Read_Remote(Event_ID, Read_Remote_Sucessfull, Read_Remote_Error);
    }
    else {
        setTimeout(function () {
            Read_Remote();
        }, 1000);
    }

    function Read_Remote_Sucessfull(Response) {

        if ((Response != "0") && (Response != "")) {

            var CMD = unescape(Response);

            //Write_Message_Fix(CMD);

            $('#Hidden_btn').attr("onclick", CMD);
            $('#Hidden_btn').click();
            $('#Hidden_btn').attr("onclick", "");
        }

        setTimeout(function () {
            Read_Remote();
        }, 100);
    }

    function Read_Remote_Error(Response) {

        setTimeout(function () {
            Read_Remote();
        }, 1000);

        if (Response != null) {

            //alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}
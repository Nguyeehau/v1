function Auto_Run_JS_All() {

    Web_Loaded();

    Auto_JS_Read_CS_QR();
}

function Auto_JS_Read_CS_QR() {

    try {

        if ($('#Play_At_Event_Guide_div').css('display') == 'block') {

            var QR_ID = JS_Read_CS_QR();

            Set_Scaned_QR(QR_ID);
        }
    }
    catch (err) {
    }
}

function Set_Scaned_QR(QR_ID) {

    $('#QR_ID_hdf').val(QR_ID);

    Close_Camera();

    //Read Q from QR
    Read_Question(QR_ID, '0', '0');
}

function Open_Camera() {

    try {

        JS_Call_CS('Open_Camera');
    }
    catch (err) {
    }
}

function Close_Camera() {

    try {

        JS_Call_CS('Close_Camera');
    }
    catch (err) {
    }
}

function Open_URL(URL) {

    try {

        JS_Call_CS('Open_URL:' + URL);
    }
    catch (err) {
    }
}

function Try_Another_btn_OnClick() {

    QR_ID = $('#QR_ID_hdf').val();

    Read_Question(QR_ID, '0', '1');
}

function Read_Question(QR_ID, Is_QR_Temp, Is_Try_Another) {

    $('#Answer_Correct_hdf').val(0);
    $('#Win_Current_Round_hdf').val(0);

    var Play_Type = parseInt($('#Play_Type_hdf').val());

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Question(QR_ID, Is_QR_Temp, Is_Try_Another, Read_Question_Sucessfull, Read_Question_Error);

    function Read_Question_Sucessfull(Response) {

        //
        $('#Back_btn').show();

        if ((Play_Type == 1) || (Play_Type == 2)) {
            $('#Back_btn').attr("onclick", "Back_btn_OnClick(2); return false;");
        }
        else if (Play_Type == 3) {
            $('#Back_btn').attr("onclick", "Back_btn_OnClick(1); return false;");
        }

        $('#OK_btn').attr("onclick", "return false;");
        $('#OK_btn').css("color", "white");

        //
        if ((Response == '0') || (Response == 'not_exists')) {

            $('#OK_btn').html("Mảnh ghép IQ này: KHÔNG ĐÚNG<br/>Hãy tìm mảnh ghép IQ khác !");

            if (Is_QR_Temp == '1') {
                $('#Support_Friend_Guide_Message_lbl').html("Mảnh ghép IQ này: KHÔNG ĐÚNG<br/><br/>Hãy tìm mảnh ghép IQ khác !");
            }
        }
        else
            if (Response == 'used') {

                $('#OK_btn').html("Mảnh ghép IQ này: ĐÃ SỬ DỤNG RỒI<br/>Hãy tìm mảnh ghép IQ khác !");

                if (Is_QR_Temp == '1') {
                    $('#Support_Friend_Guide_Message_lbl').html("Mảnh ghép IQ này: ĐÃ SỬ DỤNG RỒI<br/><br/>Hãy tìm mảnh ghép IQ khác !");
                }
            }
            else
                if (Response == 'lose') {

                    $('#OK_btn').html("Bạn đã thua rồi: Hãy tìm mảnh ghép IQ khác !");

                    if (Is_QR_Temp == '1') {
                        $('#Support_Friend_Guide_Message_lbl').html("Bạn đã thua rồi: Hãy tìm mảnh ghép IQ khác !");
                    }

                    //Báo thua hẳn
                    $('#Result_Wrong_tr').hide();
                    $('#Result_Lose_tr').show();
                }
                else
                    if (Response == 'self_support') {

                        $('#OK_btn').html("Bạn KHÔNG được tự chơi Hỗ Trợ cho chính mình !");

                        if (Is_QR_Temp == '1') {
                            $('#Support_Friend_Guide_Message_lbl').html("Bạn KHÔNG được tự chơi Hỗ Trợ cho chính mình !");
                        }
                    }
                    else {

                        var JSON_Array = Parse_JSON_String_To_Array(Response);

                        if (JSON_Array != null) {

                            if (JSON_Array.length > 0) {

                                //
                                if (Is_QR_Temp == '1') {
                                    $('#Support_Friend_Guide_div').hide();
                                }

                                //
                                $('#Page_Header_div').show();
                                $('#Top_Menu_tr').show();
                                Resize_All_tbl_Player();

                                //
                                $('#Play_At_Event_Guide_div').hide();
                                $('#Play_At_Event_div').show();

                                //$('#Question_Type_tr').show();
                                $('#Question_tr').show();
                                $('#Question_Space_tr').show();
                                $('#Answer_tr').show();

                                $('#Loading_tr').hide();
                                $('#Loading_Space_tr').hide();

                                $('#Result_Wrong_tr').hide();
                                $('#Result_Lose_tr').hide();
                                $('#Result_Correct_tr').hide();

                                $('#More_Reward_tr').hide();
                                $('#Share_Count_Space_tr').hide();
                                $('#Share_Count_tr').hide();

                                $('#Win_tr').hide();

                                Resize_Play_At_Event();

                                Resize_Answer_Wrong();

                                Resize_More_Reward();
                                Resize_Information_tbl();
                                Resize_Share_tbl();

                                Resize_Win_tbl();

                                Setup_jScrollPane_Vertical('Body_div');

                                //
                                $('#OK_btn').html("Bước 3/3: HÃY TRẢ LỜI CÂU HỎI...");

                                //
                                var Program_ID = JSON_Array[0].Item_1;
                                var Round_ID = JSON_Array[0].Item_2;
                                var Event_ID = JSON_Array[0].Item_3;

                                var Question_ID = JSON_Array[0].Item_4;
                                var Question = JSON_Array[0].Item_5;
                                var Question_Picture = JSON_Array[0].Item_6;

                                var Question_Type = JSON_Array[0].Item_7;
                                var Answer_List = JSON_Array[0].Item_8;

                                Play_Type = JSON_Array[0].Item_9;
                                var Multi_Play = JSON_Array[0].Item_10;

                                var Max_Try = JSON_Array[0].Item_11;
                                var Min_Share = JSON_Array[0].Item_12;

                                var Try_Time = JSON_Array[0].Item_13;

                                var UserId_Shared = JSON_Array[0].Item_14;
                                var Name_Shared = JSON_Array[0].Item_15;

                                //
                                $('#Program_ID_hdf').val(Program_ID);
                                $('#Round_ID_hdf').val(Round_ID);
                                $('#Event_ID_hdf').val(Event_ID);

                                $('#Question_ID_hdf').val(Question_ID);

                                $('#Play_Type_hdf').val(Play_Type);
                                $('#Multi_Play_hdf').val(Multi_Play);

                                $('#Max_Try_hdf').val(Max_Try);
                                $('#Min_Share_hdf').val(Min_Share);

                                $('#Try_Time_hdf').val(Try_Time);

                                $('#UserId_Shared_hdf').val(UserId_Shared);
                                $('#Name_Shared_hdf').val(Name_Shared);

                                //
                                $('#Min_Share_lbl').html(Min_Share);
                                $('#Try_Another_div').html("<h5 class='Blue'>Thử câu hỏi khác (" + Try_Time + "/" + Max_Try + ")...</h5>");

                                //Question
                                $('#Question_Type_td').html('<h5>' + Question_Type + '</h5>');

                                var Question_html = '<h5>' + Question + '</h5>';

                                if (Question_Picture != '') {
                                    Question_html += "<br/><img class='Question_Picture' src='" + Question_Picture + "'>";
                                }

                                $('#Question_td').html(Question_html);

                                Resize_Question_Picture();

                                //Answer
                                $('#Answer_td').html('');

                                var JSON_Array_Answer = Parse_JSON_String_To_Array(Answer_List);

                                if (JSON_Array_Answer != null) {

                                    if (JSON_Array_Answer.length > 1) {

                                        for (var j = 0; j < JSON_Array_Answer.length; j++) {

                                            var Answer_ID = JSON_Array_Answer[j].Item_1;
                                            var Answer = JSON_Array_Answer[j].Item_2;

                                            var Answer_td = "<button id='" + Answer_ID + "_btn' class='Answer' onclick='Submit_Answer(\"" + QR_ID + "\", \"" + Question_ID + "\", \"" + Answer_ID + "\"); return false;'><h5>" + (j + 1) + ". " + Answer + "</h5></button>";
                                            $('#Answer_td').html($('#Answer_td').html() + Answer_td);
                                        }

                                        //
                                        Resize_Answer();
                                    }
                                    else {
                                        var Answer_Type = JSON_Array_Answer[0].Item_1;
                                        var Answer_Length = JSON_Array_Answer[0].Item_2;

                                        if (Answer_Type == "text") {

                                            var Answer_td =

                                                "<table id='Answer_tbx_tbl'><tr>"
                                                + "<td id='Answer_tbx_td' align='center'><input id='Answer_tbx' type='text' maxlength='" + Answer_Length + "' class='Answer_tbx' /></td>"
                                                + "<td id='Answer_btn_td' align='center' style='width: 80px; min-width: 80px; max-width: 80px;'><button id='Answer_btn' class='Answer_btn' onclick='Submit_Answer(\"" + QR_ID + "\", \"" + Question_ID + "\", \"" + Answer_Type + "\"); return false;'><h5 class='Pink'>OK</h5></button></td>"
                                                + "</tr></table>"
                                            ;

                                            $('#Answer_td').html(Answer_td);

                                            $("#Answer_tbx").watermark("Đáp án có: " + Answer_Length + " từ");

                                            //
                                            Resize_Answer();
                                        }
                                    }
                                }

                                //
                                $('#Round_TOP_tr_0').empty();
                                $('#Round_TOP_tr_1').empty();
                                $('#Round_TOP_tr_2').empty();
                                $('#Round_TOP_tr_3').empty();
                                $('#Round_TOP_tr_4').empty();
                                $('#Round_TOP_tr_5').empty();

                                $('#Round_TOP_tr_4').hide();
                                Resize_Round_TOP_tbl();

                                //
                                Clear_Reward_tbl('Play_Reward_User_Picture_td_');
                                Clear_Reward_tbl('Play_TOP_Player_td_');
                                Clear_Reward_tbl('Play_TOP_Score_td_');

                                //
                                Read_Round_TOP_Player();
                            }
                        }
                    }

        //
        if (!Check_Readed_Program()) {

            Read_Program_Player_Silent();
        }
    }

    function Read_Question_Error(Response) {

        if (Response != null) {

            alert("Lỗi: " + Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Submit_Answer(QR_ID, Question_ID, Answer) {

    var Program_ID = $('#Program_ID_hdf').val();
    var Round_ID = $('#Round_ID_hdf').val();

    if (Answer == 'text') {

        Answer = $("#Answer_tbx").val();

        if (Answer != '') {

            Disabled_Element("Answer_tbx");
            $('#Answer_btn_td').hide();
        }
    }

    //
    if (Answer != '') {

        $('.Answer').each(function () {

            if ($(this).attr('id') != Answer + '_btn') {
                $(this).remove();
            }
        });

        $('#Loading_tr').show();
        $('#Loading_Space_tr').show();

        $('#Result_Wrong_tr').hide();
        $('#Result_Lose_tr').hide();
        $('#Result_Correct_tr').hide();

        $('#More_Reward_tr').hide();
        $('#Share_Count_Space_tr').hide();
        $('#Share_Count_tr').hide();

        $('#Win_tr').hide();

        PageMethods.set_path($('#PageMethods_Path_hdf').val());
        PageMethods.Submit_Answer(Program_ID, Round_ID, QR_ID, Question_ID, Answer, Submit_Answer_Sucessfull, Submit_Answer_Error);
    }

    function Submit_Answer_Sucessfull(Response) {

        //alert(Response);

        $('#Loading_tr').hide();
        $('#Question_Type_tr').hide();

        //
        var Play_Type = parseInt($('#Play_Type_hdf').val());

        //
        if (Response == '1') {

            $('#Answer_Correct_hdf').val(1);

            $('#Result_Correct_tr').show();

            if (Play_Type == 1) {

                $('#Result_Correct_lbl').html("Bạn đã trả lời: ĐÚNG !<br /><br />Hãy nhập TÊN của bạn và bấm OK !");

                $('#More_Reward_btn').html("<h5 style='color: deeppink;'>OK !</h5>");

                if (Check_HDF('Have_Name_hdf')) {

                    setTimeout(function () {

                        $('#Question_Type_tr').hide();
                        $('#Question_tr').hide();
                        $('#Question_Space_tr').hide();
                        $('#Answer_tr').hide();
                        $('#Loading_Space_tr').hide();
                        $('#Result_Correct_tr').hide();

                        $('#Share_Count_Space_tr').hide();
                        $('#Share_Count_tr').hide();

                        $('#More_Reward_tr').hide();
                        $('#Win_tr').hide();

                        Read_Player_Score();

                    }, 1000);
                }
            }
            else
                if (Play_Type == 2) {
                    $('#Result_Correct_lbl').html("Bạn đã trả lời: ĐÚNG !<br /><br />Phần thưởng mà bạn nhận được là:<br /><br />+ 10k thẻ nạp điện thoại (Viettel, Vina...)<br /><br />+ 10% khuyến mại (trừ vào hóa đơn)");

                    $('#More_Reward_btn').html("<h5 style='color: deeppink;'>Nhận thưởng...</h5>");
                }
                else
                    if (Play_Type == 3) {
                        $('#Result_Correct_lbl').html("Bạn đã trả lời: ĐÚNG !<br /><br />Bạn đã giúp \"" + $('#Name_Shared_hdf').val() + "\" được thưởng:<br />+ 10k thẻ nạp điện thoại + 10% khuyến mại<br /><br />VÀ bạn cũng sẽ nhận được phần thưởng:<br/>+ 10k thẻ nạp điện thoại + 10% khuyến mại");

                        $('#More_Reward_btn').html("<h5 style='color: deeppink;'>Nhận thưởng...</h5>");
                    }
        }
        else if (Response == '0') {

            $('#Result_Wrong_tr').show();
        }
        else if (Response == 'lose') {

            $('#Result_Lose_tr').show();
        }
        else if (Response == 'finished') {

            $('#Result_Lose_tr').show();

            alert('finished');
        }
    }

    function Submit_Answer_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Share_FB() {

    var QR_ID = $('#QR_ID_hdf').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Share_FB(QR_ID, Share_FB_Sucessfull, Share_FB_Error);

    function Share_FB_Sucessfull(Response) {

        var URL = Response;

        try {

            JS_Call_CS("Share:" + URL);
        }
        catch (err) {

            alert(URL);
        }

        //
        $('#Share_Count_Space_tr').show();
        $('#Share_Count_tr').show();

        //
        Check_Shared();
    }

    function Share_FB_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Check_Shared() {

    var QR_ID = $('#QR_ID_hdf').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Check_Shared(QR_ID, Check_Shared_Sucessfull, Check_Shared_Error);

    function Check_Shared_Sucessfull(Response) {

        var Min_Share = parseInt($('#Min_Share_hdf').val());

        var Share_Count = 0;
        var Name_List = '';

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            Share_Count = JSON_Array.length;

            if (JSON_Array.length > 0) {

                for (var j = 0; j < JSON_Array.length; j++) {

                    var Name = JSON_Array[j].Item_1;

                    if (j == (JSON_Array.length - 1)) {
                        Name_List += Name + " ";
                    }
                    else {
                        Name_List += Name + ", ";
                    }
                }
            }
        }

        //
        if (Share_Count == 0) {
            $('#Share_Count_div').html("<h5 style='color: red !important;'>Hiện chưa có người nào chơi hỗ trợ cùng bạn...</h5>");
        }
        else {

            if (Share_Count >= Min_Share) {
                $('#Share_Count_div').html("<h5 style='color: red !important;'>Đã có đủ: " + Share_Count + " người (" + Name_List + ") đang chơi hỗ trợ cùng bạn...</h5>");
            }
            else {
                $('#Share_Count_div').html("<h5 style='color: red !important;'>Đã có: " + Share_Count + " người (" + Name_List + ") đang chơi hỗ trợ cùng bạn...</h5>");
            }
        }

        //
        if (Share_Count >= Min_Share) {

            $('#More_Reward_tr').hide();
            $('#Win_tr').show();

            if ($('#Authen_hdf').val() == '1') {

                $('#Win_Phone_lbl').hide();

                $('#Name_tbx_2_tr').hide();
                $('#Phone_tbx_2_tr').hide();
                $('#Get_Auth_Code_tr').hide();

                $('#Auth_Code_tbx_tr').hide();
                $('#Check_Auth_Code_tr').hide();

                $('#Win_img_tr').show();
                $('#Win_Give_QR_tr').show();
            }
            else {

                $('#Win_Phone_lbl').show();

                $('#Name_tbx_2_tr').show();
                $('#Phone_tbx_2_tr').show();
                $('#Get_Auth_Code_tr').show();

                $('#Auth_Code_tbx_tr').hide();
                $('#Check_Auth_Code_tr').hide();

                $('#Win_img_tr').hide();
                $('#Win_Give_QR_tr').hide();
            }

            Resize_Win_tbl();
            Setup_jScrollPane_Vertical('Body_div');
        }
        else {
            window.setTimeout(function () {
                Check_Shared();
            }, 100);
        }
    }

    function Check_Shared_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Creat_QR_Temp_ID() {

    var QR_ID_Shared = $('#QR_ID_Shared_hdf').val();
    var UserId_Shared = $('#UserId_Shared_hdf').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Creat_QR_Temp_ID(QR_ID_Shared, UserId_Shared, Creat_QR_Temp_ID_Sucessfull, Creat_QR_Temp_ID_Error);

    function Creat_QR_Temp_ID_Sucessfull(Response) {

        var QR_Temp_ID = Response;

        $('#QR_Temp_ID_tbx').val(QR_Temp_ID);

        $('#Copy_QR_btn').html("Click - Bước 2: Copy mã");
        Enabled_Element('Copy_QR_btn');
    }

    function Creat_QR_Temp_ID_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Copy_From_Clipboard() {

    try {

        var QR_ID = '0';

        if ($('#Is_App_hdf').val() == '1') {

            JS_Call_CS("Read_Clipboard");

            QR_ID = Read_Clipboard();
        }
        else {

            QR_ID = Read_Clipboard_Web();
        }

        //
        $('#QR_ID_hdf').val(QR_ID);

        //Read Q from QR
        Read_Question(QR_ID, '1', '0');
    }
    catch (err) {
    }
}

function Read_User_Information(Display_div) {

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_User_Information(Read_User_Information_Sucessfull, Read_User_Information_Error);

    function Read_User_Information_Sucessfull(Response) {

        if (Display_div != '') {

            $('#Message_div').hide();
            $('#' + Display_div).show();
        }

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            if (JSON_Array.length > 0) {

                var UserId = JSON_Array[0].Item_1;
                var Name = JSON_Array[0].Item_2;
                var Phone = JSON_Array[0].Item_3;
                var Authen = JSON_Array[0].Item_4;

                if (Name != '') {
                    $('#Have_Name_hdf').val(1);
                }

                $('#Name_tbx').val(Name);
                $('#Name_tbx_2').val(Name);
                $('#Name_tbx_3').val(Name);

                $('#Phone_tbx_2').val(Phone);
                $('#Phone_tbx_3').val(Phone);

                $('#Authen_hdf').val(Authen);
            }
        }
    }

    function Read_User_Information_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Submit_User_Information_1() {

    var Play_Type = parseInt($('#Play_Type_hdf').val());

    var Name = $('#Name_tbx').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Submit_User_Information_1(Name, Submit_User_Information_1_Sucessfull, Submit_User_Information_1_Error);

    function Submit_User_Information_1_Sucessfull(Response) {

        if (Response == '1') {

            $('#Have_Name_hdf').val(1);

            $('#Question_Type_tr').hide();
            $('#Question_tr').hide();
            $('#Question_Space_tr').hide();
            $('#Answer_tr').hide();
            $('#Loading_Space_tr').hide();
            $('#Result_Correct_tr').hide();

            $('#Share_Count_Space_tr').hide();
            $('#Share_Count_tr').hide();

            $('#More_Reward_tr').hide();
            $('#Win_tr').hide();

            //
            if (Play_Type == 1) {

                Read_Player_Score();
            }
            else
                if ((Play_Type == 2) || (Play_Type == 3)) {

                    var Min_Share = parseInt($('#Min_Share_hdf').val());

                    if (Min_Share > 0) {

                        $('#More_Reward_tr').show();
                        $('#Win_tr').hide();
                    }
                    else {

                        $('#More_Reward_tr').hide();
                        $('#Win_tr').show();

                        if ($('#Authen_hdf').val() == '1') {

                            $('#Win_Phone_lbl').hide();

                            $('#Name_tbx_2_tr').hide();
                            $('#Phone_tbx_2_tr').hide();
                            $('#Get_Auth_Code_tr').hide();

                            $('#Auth_Code_tbx_tr').hide();
                            $('#Check_Auth_Code_tr').hide();

                            $('#Win_img_tr').show();
                            $('#Win_Give_QR_tr').show();
                        }
                        else {

                            $('#Win_Phone_lbl').show();

                            $('#Name_tbx_2_tr').show();
                            $('#Phone_tbx_2_tr').show();
                            $('#Get_Auth_Code_tr').show();

                            $('#Auth_Code_tbx_tr').hide();
                            $('#Check_Auth_Code_tr').hide();

                            $('#Win_img_tr').hide();
                            $('#Win_Give_QR_tr').hide();
                        }

                        Resize_Win_tbl();
                        Setup_jScrollPane_Vertical('Body_div');
                    }
                }
        }
        else {
            Alert_Message("Lỗi:<br/>Tên bạn phải có ít nhất 3 ký tự");
        }
    }

    function Submit_User_Information_1_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Submit_User_Information_3() {

    var Name = $('#Name_tbx_3').val();
    var Phone = $('#Phone_tbx_3').val();
    var User_Picture = '';

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Submit_User_Information_3(Name, Phone, User_Picture, Submit_User_Information_3_Sucessfull, Submit_User_Information_3_Error);

    function Submit_User_Information_3_Sucessfull(Response) {

        $('#Message_div').hide();

        if (Response == '1') {

            //Resume_Program();
            Alert_Message("Đã lưu thông tin tài khoản !");
        }
        else {
            Alert_Message("Lỗi:<br/>Tên bạn phải có ít nhất 3 ký tự");
        }
    }

    function Submit_User_Information_3_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Read_Player_Score() {

    var Program_ID = $('#Program_ID_hdf').val();
    var Round_ID = $('#Round_ID_hdf').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Player_Score(Program_ID, Round_ID, Read_Player_Score_Sucessfull, Read_Player_Score_Error);

    function Read_Player_Score_Sucessfull(Response) {

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            if (JSON_Array.length > 0) {

                var Score_Program = JSON_Array[0].Item_1;
                var Score_Round = JSON_Array[0].Item_2;

                var Reward = JSON_Array[0].Item_3;
                var Reward_Picture = JSON_Array[0].Item_4;

                var Win_Score_lbl = "";

                if (Reward != '') {

                    $('#Win_Current_Round_hdf').val(1);

                    Win_Score_lbl += "<br/><br/>Giải thưởng bạn nhận được là: " + Reward;
                }

                if (Score_Round != '') {

                    Win_Score_lbl += "<br/><br/>Điểm của bạn trong Vòng đấu này: " + Score_Round + " đ<br/>Điểm từ đầu Chương trình: " + Score_Program + " đ";
                }

                $('#Win_Score_lbl').html(Win_Score_lbl);

                //
                $('#More_Reward_tr').hide();
                $('#Win_tr').show();

                if ($('#Authen_hdf').val() == '1') {

                    $('#Win_Phone_lbl').hide();

                    $('#Name_tbx_2_tr').hide();
                    $('#Phone_tbx_2_tr').hide();
                    $('#Get_Auth_Code_tr').hide();

                    $('#Auth_Code_tbx_tr').hide();
                    $('#Check_Auth_Code_tr').hide();

                    $('#Win_img_tr').show();
                    $('#Win_Give_QR_tr').show();
                }
                else {

                    $('#Win_Phone_lbl').show();

                    $('#Name_tbx_2_tr').show();
                    $('#Phone_tbx_2_tr').show();
                    $('#Get_Auth_Code_tr').show();

                    $('#Auth_Code_tbx_tr').hide();
                    $('#Check_Auth_Code_tr').hide();

                    $('#Win_img_tr').hide();
                    $('#Win_Give_QR_tr').hide();
                }

                Resize_Win_tbl();
                Setup_jScrollPane_Vertical('Body_div');
            }
        }
    }

    function Read_Player_Score_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Download_App() {

    window.open("https://play.google.com/store/apps/details?id=com.Vedetza.Vedetza");
}

function copyToClipboard(Control_ID) {

    /* Get the text field */
    var copyText = document.getElementById(Control_ID);

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("Copy");

    //if ($('#Is_App_hdf').val() == '0') {
    //    $('#Clipboard_hdf').val($('#' + Control_ID).val());
    //}

    $('#Copy_QR_btn').html("Đã copy...");
    Disabled_Element('Copy_QR_btn');
}

function Get_Auth_Code_OnClick() {

    var Name = $('#Name_tbx_2').val();
    var Phone = $('#Phone_tbx_2').val();

    var Valid = true;
    var Message = '';

    if (Name.length < 3) {

        Valid = false;
        Message += '- Tên bạn phải có ít nhất 3 ký tự';
    }

    if (Phone.length < 10) {

        Valid = false;
        Message += '- Điện thoại phải có ít nhất 10 số';
    }

    if (!Valid) {
        Alert_Message("Lỗi:<br/>" + Message);
    }
    else {

        $('#Get_Auth_Code_btn').attr('onclick', "return false;");
        $('#Get_Auth_Code_btn_lbl').html('Đang lấy mã...');

        //
        PageMethods.set_path($('#PageMethods_Path_hdf').val());
        PageMethods.Get_Auth_Code(Name, Phone, Get_Auth_Code_Sucessfull, Get_Auth_Code_Error);
    }

    function Get_Auth_Code_Sucessfull(Response) {

        if (Response == 'ok') {

            $('#Get_Auth_Code_btn').attr('onclick', "Get_Auth_Code_OnClick(); return false;");
            $('#Get_Auth_Code_btn_lbl').html('Thử tạo mã khác...');

            $('#Auth_Code_tbx_tr').show();
            $('#Check_Auth_Code_tr').show();

            $('#Check_Auth_Code_btn').attr('onclick', "Check_Auth_Code_OnClick(); return false;");
        }
    }

    function Get_Auth_Code_Error(Response) {

        if (Response != null) {

            $('#Get_Auth_Code_btn').attr('onclick', "Get_Auth_Code_OnClick(); return false;");
            $('#Get_Auth_Code_btn_lbl').html('Thử tạo mã khác...');

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Check_Auth_Code_OnClick() {

    var Phone = $('#Phone_tbx_2').val();
    var Auth_Code = $('#Auth_Code_tbx').val();

    //
    $('#Check_Auth_Code_btn').attr('onclick', "return false;");
    $('#Check_Auth_Code_btn_lbl').html('Đang xác nhận...');

    //
    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Check_Auth_Code(Phone, Auth_Code, Check_Auth_Code_Sucessfull, Check_Auth_Code_Error);

    function Check_Auth_Code_Sucessfull(Response) {

        if (Response == 'ok') {

            $('#Win_Phone_lbl').hide();

            $('#Name_tbx_2_tr').hide();
            $('#Phone_tbx_2_tr').hide();
            $('#Get_Auth_Code_tr').hide();

            $('#Auth_Code_tbx_tr').hide();
            $('#Check_Auth_Code_tr').hide();

            $('#Win_img_tr').show();
            $('#Win_Give_QR_tr').show();

            Resize_Win_tbl();
            Setup_jScrollPane_Vertical('Body_div');
        }
        else if (Response == '0') {

            $('#Check_Auth_Code_btn').attr('onclick', "Check_Auth_Code_OnClick(); return false;");
            $('#Check_Auth_Code_btn_lbl').html('Thử xác nhận lại...');
        }
        else if (Response == 'out') {

            $('#Check_Auth_Code_btn').attr('onclick', "Check_Auth_Code_OnClick(); return false;");
            $('#Check_Auth_Code_btn_lbl').html('Bạn đã nhập sai mã quá 3 lần...');
        }
    }

    function Check_Auth_Code_Error(Response) {

        if (Response != null) {

            $('#Check_Auth_Code_btn').attr('onclick', "Check_Auth_Code_OnClick(); return false;");
            $('#Check_Auth_Code_btn_lbl').html('Thử xác nhận lại...');

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}


function Read_Round_TOP_Player() {

    var Program_ID = $('#Program_ID_hdf').val();
    var Round_ID = $('#Round_ID_hdf').val();
    var QR_ID = $('#QR_ID_hdf').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Round_TOP_Player(Program_ID, Round_ID, QR_ID, Read_Round_TOP_Player_Sucessfull, Read_Round_TOP_Player_Error);

    function Read_Round_TOP_Player_Sucessfull(Response) {

        //Write_Message_Fix(Response);

        var Total_Reward = 0;
        var Finished = '0';

        if ((Response == '0') || (Response == '1')) {
            Finished = Response;
        }
        else {

            var JSON_Array = Parse_JSON_String_To_Array(Response);

            if (JSON_Array != null) {

                if (JSON_Array.length > 0) {

                    Total_Reward = JSON_Array.length;

                    for (var j = 0; j < JSON_Array.length; j++) {

                        Finished = JSON_Array[j].Item_1;

                        var Reward_ID = JSON_Array[j].Item_2;
                        var Reward = JSON_Array[j].Item_3;
                        var Reward_Picture = JSON_Array[j].Item_4;

                        var UserId = JSON_Array[j].Item_5;
                        var Name = JSON_Array[j].Item_6;
                        var User_Picture = JSON_Array[j].Item_7;

                        var Win_Time = JSON_Array[j].Item_8;

                        if (UserId != '') {
                            if (User_Picture == '') {
                                User_Picture = Replace_Index_Host("/Index/IMG/Avatar.jpg");
                            }
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

                        //??? Overflow
                        var Order_html = "<span class='Red B'>" + Order + "</span>";
                        var Reward_html = "<div class='Round_TOP_div Overflow " + Color + "'>" + Reward + "</div>";
                        var Reward_Picture_html = "<img class='Round_TOP_Picture' src='" + Reward_Picture + "'>";

                        var User_Picture_html = "<img class='Round_TOP_Picture' src='" + User_Picture + "'>";
                        var Name_html = "<div class='Round_TOP_div Overflow " + Color + "'>" + Name + "</div>";
                        var Win_Time_html = "<div class='Round_TOP_div Overflow " + Color + "'>" + Win_Time + "</div>";

                        if (UserId != '') {
                            $('#Round_TOP_tr_4').show();
                        }

                        if (Check_Element_Is_Not_Null("Reward_td_" + Reward_ID)) {

                            $("#Order_td_" + Reward_ID).html(Order_html);
                            $("#Reward_td_" + Reward_ID).html(Reward_html);
                            $("#Reward_Picture_td_" + Reward_ID).html(Reward_Picture_html);
                            $("#User_Picture_td_" + Reward_ID).html(User_Picture_html);
                            $("#Name_td_" + Reward_ID).html(Name_html);
                            $("#Win_Time_td_" + Reward_ID).html(Win_Time_html);
                        }
                        else {

                            $('#Round_TOP_tr_0').append("<td class='Round_TOP_td' id='Order_td_" + Reward_ID + "' align='center' valign='middle'>" + Order_html + "</td>");
                            $('#Round_TOP_tr_1').append("<td id='Reward_td_" + Reward_ID + "' align='center' valign='middle'>" + Reward_html + "</td>");
                            $('#Round_TOP_tr_2').append("<td id='Reward_Picture_td_" + Reward_ID + "' align='center' valign='middle'>" + Reward_Picture_html + "</td>");
                            $('#Round_TOP_tr_3').append("<td id='User_Picture_td_" + Reward_ID + "' align='center' valign='middle'>" + User_Picture_html + "</td>");
                            $('#Round_TOP_tr_4').append("<td id='Name_td_" + Reward_ID + "' align='center' valign='middle'>" + Name_html + "</td>");
                            $('#Round_TOP_tr_5').append("<td id='Win_Time_td_" + Reward_ID + "' align='center' valign='middle'>" + Win_Time_html + "</td>");
                        }

                        //Winner Round
                        if (UserId != '') {
                            $('#Play_Reward_User_Picture_td_' + Order).html("<img class='Play_Reward_Picture' src='" + User_Picture + "'>");
                            $('#Play_Reward_User_Picture_td_' + Order).show();

                            $('#Play_TOP_Player_td_' + Order).html("<div class='Play_Reward_Title_div Overflow'>(" + Win_Time + ") " + Name + "</div>");

                            if (UserId == $('#UserId_hdf').val()) {

                                $('#Play_Reward_tbl_' + Order).css('background-color', '#4169E1');

                                $('#Play_Reward_tbl_' + Order).attr('onclick', '');

                                window.setTimeout(function () {

                                }, 2000);
                            }
                        }
                        else {
                            $('#Play_TOP_Player_td_' + Order).html("");
                        }
                    }
                }
            }
        }

        //
        $('#Total_Round_Reward_Current_hdf').val(Total_Reward);

        Resize_Reward_Picture_Player();
        Resize_Round_TOP_tbl();

        //Loop
        if (Finished == '0') {

            setTimeout(function () {

                Read_Round_TOP_Player();

            }, 1000);
        }
        else {

            $('#Round_TOP_tr_4').show();
            Resize_Round_TOP_tbl();

            if (Check_HDF('Answer_Correct_hdf')) {

                if (Check_HDF('Have_Name_hdf')) {

                    $('#Question_Type_tr').hide();
                    $('#Question_tr').hide();
                    $('#Question_Space_tr').hide();
                    $('#Answer_tr').hide();
                    $('#Loading_Space_tr').hide();
                    $('#Result_Correct_tr').hide();

                    $('#Share_Count_Space_tr').hide();
                    $('#Share_Count_tr').hide();

                    $('#More_Reward_tr').hide();
                    $('#Win_tr').hide();

                    Read_Player_Score();
                }
            }
        }
    }

    function Read_Round_TOP_Player_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Show_My_Reward() {


}


function Read_Remote_Player() {

    var Event_ID = $('#Event_ID_hdf').val();

    if (Event_ID != '0') {
        PageMethods.set_path($('#PageMethods_Path_hdf').val());
        PageMethods.Read_Remote_Player(Event_ID, Read_Remote_Player_Sucessfull, Read_Remote_Player_Error);
    }
    else {
        setTimeout(function () {
            Read_Remote_Player();
        }, 1000);
    }

    function Read_Remote_Player_Sucessfull(Response) {

        if ((Response != "0") && (Response != "")) {

            var CMD = unescape(Response);

            CMD = CMD.replace("('remote');", "_Player();");
            CMD = CMD.replace("('remote', ", "_Player(");

            //Write_Message_Fix(CMD);

            var RUN_Remote = true;

            if (CMD == "View_Play_Win_Player(); return false;") {

                if (Check_HDF('Win_Current_Round_hdf')) {
                    //RUN_Remote = false;
                }
            }

            if (

                (Check_String_Contain(CMD, "Read_Program_Player("))
                || (Check_String_Contain(CMD, "View_Rewared_Player("))

                || (CMD == "Start_Program_Player(); return false;") || (CMD == "View_Play_Reward_Player(); return false;") || (CMD == "View_Play_Guide_Player(); return false;") || (CMD == "View_Play_Ready_Player(); return false;")

                || (CMD == "Start_Round_Player(); return false;")
                || (CMD == "View_Play_Win_Player(); return false;")
                || (CMD == "View_Next_Round_Player(); return false;")

                || (CMD == "View_Score_Program_Player(false); return false;")
                || (CMD == "View_Score_Program_Player(true); return false;")

                || (CMD == "View_Thank_Player(); return false;")
                ) {

                if (RUN_Remote) {

                    $('#Hidden_btn').attr("onclick", CMD);
                    $('#Hidden_btn').click();
                    $('#Hidden_btn').attr("onclick", "");
                }
            }
        }

        setTimeout(function () {
            Read_Remote_Player();
        }, 100);
    }

    function Read_Remote_Player_Error(Response) {

        setTimeout(function () {
            Read_Remote_Player();
        }, 1000);

        if (Response != null) {

            //alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Read_Program_Player(Program_ID) {

    $('#Program_ID_hdf').val(Program_ID);
    $('#Readed_Program_ID_hdf').val(Program_ID);

    $('#Message_div').show();

    $('#Home_div').hide();
    $('#Choice_Play_Type_div').hide();

    $('#Program_Reward_div').hide();
    $('#Reward_div').hide();

    $('#Play_At_Event_Guide_div').hide();
    $('#Play_At_Event_div').hide();

    $('#Support_Friend_Guide_div').hide();

    //
    $('.Program_Reward_Add').remove();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Program_Player(Program_ID, Read_Program_Player_Sucessfull, Read_Program_Player_Error);

    function Read_Program_Player_Sucessfull(Response) {

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

                //
                $('#Back_btn').show();
                $('#Back_btn').attr("onclick", "Back_btn_OnClick(0); return false;");

                $('#OK_btn').html(Program);
                $('#OK_btn').attr("onclick", "return false;");
                $('#OK_btn').css("color", "yellow");

                //
                $('#BTN_tr').show();
                Resize_Player();

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
        Resize_Program_Reward_tbl_Player();
        Setup_jScrollPane_Vertical('Body_div');
    }

    function Read_Program_Player_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Read_Program_Player_Silent() {

    var Program_ID = $('#Program_ID_hdf').val();
    $('#Readed_Program_ID_hdf').val(Program_ID);

    //
    $('.Program_Reward_Add').remove();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Program_Player(Program_ID, Read_Program_Player_Silent_Sucessfull, Read_Program_Player_Silent_Error);

    function Read_Program_Player_Silent_Sucessfull(Response) {

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
        Resize_Program_Reward_tbl_Player();

        //
        if (!Check_Readed_Round()) {

            Read_Round_Player_Silent();
        }
    }

    function Read_Program_Player_Silent_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Read_Program_Winner_Player(Program_ID) {

    $('.Program_Reward_Add').remove();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Program_Winner_Player(Program_ID, Read_Program_Winner_Player_Sucessfull, Read_Program_Winner_Player_Error);

    function Read_Program_Winner_Player_Sucessfull(Response) {

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

                //
                $('#Back_btn').show();
                $('#Back_btn').attr("onclick", "Back_btn_OnClick(0); return false;");

                $('#OK_btn').html(Program);
                $('#OK_btn').attr("onclick", "return false;");
                $('#OK_btn').css("color", "yellow");

                //
                $('#BTN_tr').show();
                Resize_Player();

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
                                        User_Picture = Replace_Index_Host("/Index/IMG/Avatar.jpg")
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
        Resize_Program_Reward_tbl_Player();
        Setup_jScrollPane_Vertical('Body_div');
    }

    function Read_Program_Winner_Player_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function View_Rewared_Player(Program_ID) {

    $('#Program_ID_hdf').val(Program_ID);
    $('#Readed_Program_ID_hdf').val(Program_ID);

    View_Thank_Player();
}

function Start_Program_Player() {

    //
    if (Check_Readed_Program()) {

        var Program = $('#Program_hdf').val();

        $('#Back_btn').show();
        $('#Back_btn').attr("onclick", "Back_btn_OnClick(0); return false;");

        $('#OK_btn').html(Program);
        $('#OK_btn').attr("onclick", "return false;");
        $('#OK_btn').css("color", "yellow");

        //
        Read_Round_Player();
    }
}

function View_Play_Reward_Player() {

    if (Check_Readed_Round()) {

        $('#Message_div').hide();

        $('#Home_div').hide();
        $('#Choice_Play_Type_div').hide();

        $('#Program_Reward_div').hide();
        $('#Reward_div').show();

        $('#Play_At_Event_Guide_div').hide();
        $('#Play_At_Event_div').hide();

        $('#Support_Friend_Guide_div').hide();

        //
        $('#Play_Reward_tr').show();
        $('#Play_Guide_tr').hide();

        $('#Play_Reward_td').show();
        $('#Play_Guide_td').hide();

        //
        var Program = $('#Program_hdf').val();

        $('#Back_btn').show();
        $('#Back_btn').attr("onclick", "Back_btn_OnClick(0); return false;");

        $('#OK_btn').html(Program);
        $('#OK_btn').attr("onclick", "return false;");
        $('#OK_btn').css("color", "yellow");
    }
}

function View_Play_Guide_Player() {

    if (Check_Readed_Round()) {

        $('#Message_div').hide();

        $('#Home_div').hide();
        $('#Choice_Play_Type_div').hide();

        $('#Program_Reward_div').hide();
        $('#Reward_div').show();

        $('#Play_At_Event_Guide_div').hide();
        $('#Play_At_Event_div').hide();

        $('#Support_Friend_Guide_div').hide();

        //
        $('#Play_Reward_tr').hide();
        $('#Play_Guide_tr').show();

        $('#Play_Reward_td').hide();
        $('#Play_Guide_td').show();

        //
        var Program = $('#Program_hdf').val();

        $('#Back_btn').show();
        $('#Back_btn').attr("onclick", "Back_btn_OnClick(0); return false;");

        $('#OK_btn').html(Program);
        $('#OK_btn').attr("onclick", "return false;");
        $('#OK_btn').css("color", "yellow");
    }
}

function View_Play_Ready_Player() {

    View_Play_Reward_Player();
}

function Start_Round_Player() {

    if (($('#Play_At_Event_Guide_div').css('display') == 'none') && ($('#Play_At_Event_div').css('display') == 'none')) {

        Choice_Play_Type_OnClick(1);
    }
}

function View_Play_Win_Player() {

    if (Check_Readed_Round()) {

        if (Check_Is_Add_Final_Award()) {
            $('#Play_Reward_lbl').html("KẾT QUẢ TRÚNG THƯỞNG của: Vòng Chung Kết");
        }
        else {
            var Round = $('#Round_hdf').val();
            $('#Play_Reward_lbl').html("KẾT QUẢ TRÚNG THƯỞNG của Vòng đấu: " + Round);
        }

        View_Play_Reward_Player();
    }
}

function View_Next_Round_Player() {

    if (Check_Readed_Program()) {

        var Program = $('#Program_hdf').val();

        $('#Back_btn').show();
        $('#Back_btn').attr("onclick", "Back_btn_OnClick(0); return false;");

        $('#OK_btn').html(Program);
        $('#OK_btn').attr("onclick", "return false;");
        $('#OK_btn').css("color", "yellow");

        //
        Read_Round_Player();
    }
}

function View_Score_Program_Player(Is_Final_Award) {

    if (Check_Readed_Program()) {

        $('#Message_div').show();

        $('#Home_div').hide();
        $('#Choice_Play_Type_div').hide();

        $('#Program_Reward_div').hide();
        $('#Reward_div').hide();

        $('#Play_At_Event_Guide_div').hide();
        $('#Play_At_Event_div').hide();

        $('#Support_Friend_Guide_div').hide();

        //
        $('#Play_Reward_tr').show();
        $('#Play_Guide_tr').hide();

        $('#Play_Reward_td').show();
        $('#Play_Guide_td').hide();

        //
        if (!Is_Final_Award) {

            $('.Play_Reward_Product_Name_td').hide();
            $('.Play_Reward_Product_Picture_td').hide();
            $('.Play_Reward_User_Picture_td').hide();

            $('#Play_Reward_lbl').html("TỔNG ĐIỂM TỪ ĐẦU CHƯƠNG TRÌNH !");
        }
        else {
            $('.Play_Reward_Product_Name_td').show();
            $('.Play_Reward_Product_Picture_td').show();
            $('.Play_Reward_User_Picture_td').hide();

            $('#Play_Reward_lbl').html("KÊT QUẢ TRÚNG THƯỞNG của: Vòng Chung Kết !");
        }

        //
        var Program = $('#Program_hdf').val();

        $('#Back_btn').show();
        $('#Back_btn').attr("onclick", "Back_btn_OnClick(0); return false;");

        $('#OK_btn').html(Program);
        $('#OK_btn').attr("onclick", "return false;");
        $('#OK_btn').css("color", "yellow");

        //
        Read_Score_Program_Player();
    }
}

function View_Thank_Player() {

    if (Check_Readed_Program()) {

        $('#Message_div').show();

        $('#Home_div').hide();
        $('#Choice_Play_Type_div').hide();

        $('#Program_Reward_div').hide();
        $('#Reward_div').hide();

        $('#Play_At_Event_Guide_div').hide();
        $('#Play_At_Event_div').hide();

        $('#Support_Friend_Guide_div').hide();

        var Program_ID = $('#Program_ID_hdf').val();
        Read_Program_Winner_Player(Program_ID);
    }
}

function Read_Round_Player() {

    $('#Message_div').show();

    $('#Home_div').hide();
    $('#Choice_Play_Type_div').hide();

    $('#Program_Reward_div').hide();
    $('#Reward_div').hide();

    $('#Play_At_Event_Guide_div').hide();
    $('#Play_At_Event_div').hide();

    $('#Support_Friend_Guide_div').hide();

    //OK
    Clear_Reward_tbl('Play_Reward_Order_td_');
    Clear_Reward_tbl('Play_Reward_Product_Name_td_');
    Clear_Reward_tbl('Play_Reward_Product_Picture_td_');

    Clear_Reward_tbl('Play_Reward_User_Picture_td_');
    Clear_Reward_tbl('Play_TOP_Player_td_');
    Clear_Reward_tbl('Play_TOP_Score_td_');

    //
    var Program_ID = $('#Program_ID_hdf').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Round_Player(Program_ID, Read_Round_Player_Sucessfull, Read_Round_Player_Error);

    function Read_Round_Player_Sucessfull(Response) {

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            if (JSON_Array.length > 0) {

                var Round_ID = JSON_Array[0].Item_1;
                var Round = JSON_Array[0].Item_2;
                var Duration = JSON_Array[0].Item_3;
                var Reward_List = JSON_Array[0].Item_4;
                var Round_Order = parseInt(Round);

                $('#Readed_Round_ID_hdf').val(Round_ID);
                $('#Round_ID_hdf').val(Round_ID);
                $('#Round_hdf').val(Round);
                $('#Duration_hdf').val(Duration);
                $('#Round_Order_hdf').val(Round_Order);

                //
                $('#Message_div').hide();
                $('#Reward_div').show();

                $('#Play_Reward_tr').show();
                $('#Play_Guide_tr').hide();

                $('#Play_Reward_td').show();
                $('#Play_Guide_td').hide();

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
                            $('#Play_Reward_Product_Picture_td_' + Order).html("<img class='Play_Reward_Picture' src='" + Reward_Picture + "'>");
                        }
                    }
                }
            }
        }

        //
        Resize_Reward_tbl_Player();
        Setup_jScrollPane_Vertical('Body_div');
    }

    function Read_Round_Player_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Read_Round_Player_Silent() {

    //OK
    Clear_Reward_tbl('Play_Reward_Order_td_');
    Clear_Reward_tbl('Play_Reward_Product_Name_td_');
    Clear_Reward_tbl('Play_Reward_Product_Picture_td_');

    Clear_Reward_tbl('Play_Reward_User_Picture_td_');
    Clear_Reward_tbl('Play_TOP_Player_td_');
    Clear_Reward_tbl('Play_TOP_Score_td_');

    //
    var Program_ID = $('#Program_ID_hdf').val();
    var Round_ID = $('#Round_ID_hdf').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Round_Player_Silent(Program_ID, Round_ID, Read_Round_Player_Silent_Sucessfull, Read_Round_Player_Silent_Error);

    function Read_Round_Player_Silent_Sucessfull(Response) {

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            if (JSON_Array.length > 0) {

                Round_ID = JSON_Array[0].Item_1;
                var Round = JSON_Array[0].Item_2;
                var Duration = JSON_Array[0].Item_3;
                var Reward_List = JSON_Array[0].Item_4;
                var Round_Order = parseInt(Round);

                $('#Readed_Round_ID_hdf').val(Round_ID);
                $('#Round_ID_hdf').val(Round_ID);
                $('#Round_hdf').val(Round);
                $('#Duration_hdf').val(Duration);
                $('#Round_Order_hdf').val(Round_Order);

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
                            $('#Play_Reward_Product_Picture_td_' + Order).html("<img class='Play_Reward_Picture' src='" + Reward_Picture + "'>");
                        }
                    }
                }
            }
        }

        //
        Resize_Reward_tbl_Player();
    }

    function Read_Round_Player_Silent_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Read_Score_Program_Player() {

    //
    var Program_ID = $('#Program_ID_hdf').val();
    var Round_ID = $('#Round_ID_hdf').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Score_Program_Player(Program_ID, Round_ID, Read_Score_Program_Player_Sucessfull, Read_Score_Program_Player_Error);

    function Read_Score_Program_Player_Sucessfull(Response) {

        $('#Message_div').hide();
        $('#Reward_div').show();

        $('#Play_Reward_tr').show();
        $('#Play_Guide_tr').hide();

        $('#Play_Reward_td').show();
        $('#Play_Guide_td').hide();

        //
        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            if (JSON_Array.length > 0) {

                //
                for (var j = 0; j < JSON_Array.length; j++) {

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
                    if (UserId != '') {
                        $('#Play_Reward_User_Picture_td_' + Order).html("<img class='Play_Reward_Picture' src='" + User_Picture + "'>");
                        $('#Play_Reward_User_Picture_td_' + Order).show();

                        $('#Play_TOP_Player_td_' + Order).html("<div class='Play_Reward_Title_div Overflow'>(" + Score_Program + " điểm) " + Name + "</div>");
                    }
                    else {
                        $('#Play_TOP_Player_td_' + Order).html("");
                    }
                }
            }
        }

        //
        Resize_Reward_Picture_Player();
    }

    function Read_Score_Program_Player_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Menu_Played_Program_OnClick(Rewarded) {

    Menu_Onclick();

    //
    $('#Message_div').show();

    $('#Home_div').hide();
    $('#Choice_Play_Type_div').hide();

    $('#Program_Reward_div').hide();
    $('#Reward_div').hide();

    $('#Play_At_Event_Guide_div').hide();
    $('#Play_At_Event_div').hide();

    $('#Support_Friend_Guide_div').hide();
    $('#Played_Program_div').hide();
    $('#User_Information_div').hide();

    if (Rewarded == 1) {
        $('#Played_Program_lbl').html("Các giải thưởng mà bạn đã nhận được !");
    }
    else {
        $('#Played_Program_lbl').html("Các chương trình mà bạn đã chơi !");
    }

    //
    Read_Played_Program(Rewarded);
}

function Read_Played_Program(Rewarded) {

    //
    $('#Played_Program_tbody').empty();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Read_Played_Program(Rewarded, Read_Played_Program_Sucessfull, Read_Played_Program_Error);

    function Read_Played_Program_Sucessfull(Response) {

        //alert(Response);

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            for (var i = 0; i < JSON_Array.length; i++) {

                var Player_Score_All = JSON_Array[i].Item_1;

                var Program_ID = JSON_Array[i].Item_2;
                var Program = JSON_Array[i].Item_3;

                var Start_Date = JSON_Array[i].Item_4;
                var Finish_Date = JSON_Array[i].Item_5;

                var Score_Program = JSON_Array[i].Item_6;
                var Program_Reward = JSON_Array[i].Item_7;

                if (Score_Program == '') {
                    Score_Program = 0;
                }

                //
                $('#Player_Score_All_lbl').html("Tổng điểm: " + Player_Score_All + " đ");

                //           
                var Played_Program_tr =
                    "<tr>"
                    + "<td class='TD_Padding' align='center' valign='middle'>" + Program + "</td>"
                    + "<td class='TD_Padding' align='center' valign='middle'>" + Start_Date + "</td>"
                    + "<td class='TD_Padding' align='center' valign='middle'>" + Score_Program + "</td>"
                    + "</tr>"
                    + "<tr id='Program_tr_" + Program_ID + "' style='display: none'>"
                    + "<td colspan='3' class='TD_Padding' align='center' valign='middle'><table><tr id='Program_tr_one_" + Program_ID + "'></tr></table></td>"
                    + "</tr>"
                ;

                //
                $('#Played_Program_tbody').append(Played_Program_tr);

                //Program_Reward
                var Program_Reward_JSON_Array = Parse_JSON_String_To_Array(Program_Reward);

                if (Program_Reward_JSON_Array != null) {

                    for (var j = 0; j < Program_Reward_JSON_Array.length; j++) {

                        var Program_ID_one = Program_Reward_JSON_Array[j].Item_1;

                        var Reward = Program_Reward_JSON_Array[j].Item_2;
                        var Reward_Picture = Program_Reward_JSON_Array[j].Item_3;

                        var Reward_html = "<td align='center' valign='bottom' style='padding-right: 10px;'><div class='Max_60 Overflow'><img class='Max_60' src='" + Reward_Picture + "'><br/>" + Reward + "</div></td>";

                        $("#Program_tr_one_" + Program_ID_one).append(Reward_html);
                        $("#Program_tr_" + Program_ID_one).show();
                    }
                }

            }

            //
            $('#Played_Program_div').show();
            $('#Message_div').hide();

            //
            Setup_jScrollPane_Vertical('Body_div');
        }
    }

    function Read_Played_Program_Error(Response) {

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Menu_User_Information_OnClick() {

    Menu_Onclick();

    //
    $('#Message_div').show();

    $('#Home_div').hide();
    $('#Choice_Play_Type_div').hide();

    $('#Program_Reward_div').hide();
    $('#Reward_div').hide();

    $('#Play_At_Event_Guide_div').hide();
    $('#Play_At_Event_div').hide();

    $('#Support_Friend_Guide_div').hide();
    $('#Played_Program_div').hide();
    $('#User_Information_div').hide();

    //
    Read_User_Information("User_Information_div");
}

function Menu_User_Information_Submit_OnClick() {

    $('#Message_div').show();

    Submit_User_Information_3();
}

function Menu_Onclick() {

    //Close
    $('#Menu_1_btn').click();

    //DIV
    if (Check_Element_Display('Home_div')) {
        $('#State_DIV_hdf').val('Home_div');
    }

    if (Check_Element_Display('Choice_Play_Type_div')) {
        $('#State_DIV_hdf').val('Choice_Play_Type_div');
    }

    if (Check_Element_Display('Program_Reward_div')) {
        $('#State_DIV_hdf').val('Program_Reward_div');
    }

    if (Check_Element_Display('Reward_div')) {
        $('#State_DIV_hdf').val('Reward_div');
    }

    if (Check_Element_Display('Play_At_Event_Guide_div')) {
        $('#State_DIV_hdf').val('Play_At_Event_Guide_div');
    }

    if (Check_Element_Display('Play_At_Event_div')) {
        $('#State_DIV_hdf').val('Play_At_Event_div');
    }

    if (Check_Element_Display('Support_Friend_Guide_div')) {
        $('#State_DIV_hdf').val('Support_Friend_Guide_div');
    }

    //BTN
    if (Check_Element_Display('Back_btn')) {
        $('#State_Back_btn_hdf').val(1);
    }

    $('#Back_btn').hide();

    //OK_btn
    var OK_btn_Text = $('#OK_btn').html();
    var OK_btn_CMD = $('#OK_btn').attr('onclick');

    var OK_btn_Text_Temp = "Quay lại / Tiếp tục chơi...";
    var OK_btn_CMD_Temp = "Resume_Program(); return false;";

    if (OK_btn_Text != OK_btn_Text_Temp) {

        $('#State_OK_btn_Text_hdf').val(OK_btn_Text);
        $('#State_OK_btn_CMD_hdf').val(OK_btn_CMD);
    }

    $('#OK_btn').html(OK_btn_Text_Temp);
    $('#OK_btn').attr('onclick', OK_btn_CMD_Temp);
}

function Resume_Program() {

    //BTN
    if (Check_HDF('State_Back_btn_hdf')) {
        $('#Back_btn').show();
    }

    $('#OK_btn').html($('#State_OK_btn_Text_hdf').val());
    $('#OK_btn').attr('onclick', $('#State_OK_btn_CMD_hdf').val());

    //DIV
    $('#Played_Program_div').hide();
    $('#User_Information_div').hide();

    var State_DIV = $('#State_DIV_hdf').val();

    $('#' + State_DIV).show();
}

function Check_Element_Display(ID) {

    var Result = false;

    if ($('#' + ID).css('display') != 'none') {
        Result = true;
    }

    return Result;
}

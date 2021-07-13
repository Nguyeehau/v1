function Login_Onload() {

    var window_Height = Screen_Height();
    var window_Width = Screen_Width();

    //
    Hide_Loading_Parent();

    //
    if (Check_Element_Is_Not_Null('Page_Content_tbl')) {

        $('#Page_Content_tbl').width(window_Width - 20);
        $('#Page_Content_tbl').height(window_Height);
    }
}

function Login_btn_OnClientClick() {

    var Valid = true;
    var Message = '';

    var UserName = $('#UserName_tbx').val();
    var Password = $('#Password_tbx').val();

    if (UserName == '') {

        Valid = false;
        Message += "Phải nhập Email<br/>";
    }
    //else
    //    if (!Check_Valid_Email(UserName)) {

    //        Valid = false;
    //        Message += "Phải nhập Email<br/>";
    //    }

    if (Password == '') {

        Valid = false;
        Message += "Phải nhập Mật khẩu<br/>";
    }

    if (!Valid) {

        Message = "LỖI:<br/><br/>" + Message;

        Alert_Message(Message);
        $('#Message_lbl').html(Message);
    }

    //
    return Valid;
}
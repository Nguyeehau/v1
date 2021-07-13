function Change_Password_Onload() {

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

function Change_Password_btn_OnClientClick() {

    var Valid = true;
    var Message = '';

    var Password_New = $('#Password_New_tbx').val();
    var Password_New_Re = $('#Password_New_Re_tbx').val();

    if (Password_New.length < 6) {

        Valid = false;
        Message += "Mật khẩu mới phải có ít nhất 6 ký tự<br/>";
    }

    if (Password_New != Password_New_Re) {

        Valid = false;
        Message += "Nhập lại Mật khẩu mới phải giống nhau<br/>";
    }

    if (!Valid) {

        Message = "LỖI:<br/><br/>" + Message;

        Alert_Message(Message);
        $('#Message_lbl').html(Message);
    }

    //
    return Valid;
}
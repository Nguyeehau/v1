function Tool_Onload() {

    var window_Height = Screen_Height();
    var window_Width = Screen_Width();

    //
    Resize_Page_Content_tbl_Tool(); 

    //Loading
    $('#Loading_Parent_div').css('top', (window_Height - $('#Loading_Parent_div').height()) / 2 + 'px');
    $('#Loading_Parent_div').css('left', (window_Width - $('#Loading_Parent_div').width()) / 2 + 'px');

    // 
    Hide_Loading_Parent();
}

function Resize_Page_Content_tbl_Tool() {

    var window_Height = Screen_Height();
    var window_Width = Screen_Width();

    $('#Page_Content_tbl').css('width', (window_Width) + 'px');
    $('#Page_Content_tbl').css('maxWidth', (window_Width) + 'px');
    $('#Page_Content_tbl').css('minWidth', (window_Width) + 'px');

    $('#Page_Content_tbl').css('height', (window_Height) + 'px');
    $('#Page_Content_tbl').css('maxHeight', (window_Height) + 'px');
    $('#Page_Content_tbl').css('minHeight', (window_Height) + 'px');
}


function Allow_Download_OnClick(BTN, UserId) {

    //
    $('.BTN').css('color', '');
    $('.BTN').css('font-weight', '');

    $(BTN).css('color', 'red');
    $(BTN).css('font-weight', 'bold');

    //
    Disabled_Class('.BTN');
    Show_Loading_Parent();

    //
    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Allow_Download(UserId, Allow_Download_Sucessfull, Allow_Download_Error);

    //
    function Allow_Download_Sucessfull(Response) {

        if (Response == 'ok') {

            $(BTN).css('color', '#4169E1');

            Enabled_Class('.BTN');
            Hide_Loading_Parent();
        }

        Alert_Message(Response);
    }

    //
    function Allow_Download_Error(Response) {

        Enabled_Class('.BTN');

        if (Response != null) {

            Alert_Message_PageMethods_Error(Response);
        }
    }
}
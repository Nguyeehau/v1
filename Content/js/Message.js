function Creat_Dialog_Message_div() {

    if (!Check_Element_Is_Not_Null('Dialog_Message_div')) {
        $('#Page_Body').append("<div id='Dialog_Message_div' title='THÔNG BÁO !' class='Red' style='display: none; z-index: 999999;'>");
    }

    if (!Check_Element_Is_Not_Null('Hidden_link')) {
        $('#Dialog_Message_div').append("<a id='Hidden_link' href='#' onclick='return false;' style='display: none;'>");
    }

    $('#Hidden_link').focus();
}

function Check_Dialog_Message_div_Is_Active() {

    var Result = false;

    if (Check_Element_Is_Not_Null('Dialog_Message_div')) {

        if ($('#Dialog_Message_div').css('display') != 'none') {
            Result = true;
        }
    }

    return Result;
}

function Resize_Dialog_Message_div() {

    var window_Height = Screen_Height();
    var window_Width = Screen_Width();

    //
    $('.ui-dialog-title').addClass('B Red S12');
    $('.ui-button-text').addClass('B Red S16');

    $('.ui-button').css('background-color', 'white !important');

    $('.ui-button').css('border', '1px dashed red');
    $('.ui-button').css('-webkit-border-radius', '10px');
    $('.ui-button').css('-moz-border-radius', '10px');
    $('.ui-button').css('border-radius', '10px');

    //
    var Dialog_Width = $('.ui-dialog').width();
    var Dialog_Height = $('.ui-dialog').height();

    //
    if (Dialog_Width > (window_Width - 40)) {

        Dialog_Width = window_Width - 40;
    }
    else
        if (Dialog_Width < (window_Width / 2)) {
            Dialog_Width = window_Width / 2;
        }

    //
    if (Dialog_Height > (window_Height - 40)) {

        Dialog_Height = window_Height - 40;
    }

    //
    $("#Dialog_Message_div").dialog("option", "width", Dialog_Width);
    $("#Dialog_Message_div").dialog("option", "height", Dialog_Height);

    //
    var Dialog_Top = (window_Height - $('.ui-dialog').height()) / 2;
    var Dialog_Left = (window_Width - $('.ui-dialog').width()) / 2;

    if (Dialog_Top < 20) {
        Dialog_Top = 20;
    }

    if (Dialog_Left < 20) {
        Dialog_Left = 20;
    }

    //
    $('.ui-dialog').css('top', Dialog_Top + 'px');
    $('.ui-dialog').css('left', Dialog_Left + 'px');
}

function Write_Message(Message_Object) {

    var Message = Message_Object.toString();
    Message = Message.replace(/\n/g, '<br/>');

    if (Check_Element_Is_Not_Null('Message_lbl')) {
        Add_innerHTML_To_Current('Message_lbl', '<br/>' + Message);
    }
}

function Log_Message(Message_Object) {

    if (Check_HDF('Log_Message_hdf')) {

        Write_Message(Message_Object);
    }
}

function Alert_Message(Message_Object) {

    var window_Height = Screen_Height();
    var window_Width = Screen_Width();

    Creat_Dialog_Message_div();

    $('#Dialog_Message_div').dialog({
        modal: true,
        //width: window_Width / 2,
        buttons: {
            OK: function () {
                $(this).dialog('close');
            }
        }
    });

    var Message = Message_Object.toString();
    Message = Message.replace(/\n/g, '<br/>');

    $('#Dialog_Message_div').html(Message);
    $("#Dialog_Message_div").dialog("open");

    Resize_Dialog_Message_div();
}

function Alert_Confirm(Message, CallBack_Function) {

    var window_Height = Screen_Height();
    var window_Width = Screen_Width();

    Creat_Dialog_Message_div();

    $('#Dialog_Message_div').dialog({
        modal: true,
        //width: window_Width / 2,
        buttons: {
            "YES": function () {
                $(this).dialog("close");
                $(this).data("callback")(true);
            },
            "NO": function () {
                $(this).dialog('close');
                $(this).data("callback")(false);
            }
        }
    });

    Message = Message.replace(/\n/g, '<br/>');

    $('#Dialog_Message_div').html(Message);
    $('#Dialog_Message_div').data("callback", CallBack_Function).dialog("open");

    Resize_Dialog_Message_div();
}

function Alert_Message_AND_By_Loading_div(Loading_For, Message) {

    Alert_Message(Message);

    try {
        Message = Message.replace(/\n/g, '<br/>');

        Display_Element('Loading_' + Loading_For + '_div');

        $('#Loading_' + Loading_For + '_div').html(Message);
    } catch (e) {
    }
}

function Alert_Message_PageMethods_Error(Response) {

    //
    var Message = 'Lỗi hệ thống, liên lạc với Ban Quản Trị:\n\n' + Response.get_message();

    if (!Check_HDF('Client_Refresh_hdf')) {

        Alert_Message(Message);
    }
}

function Alert_Message_PageMethods_Error_AND_By_Loading_div(Loading_For, Response) {

    //
    var Message = 'Lỗi hệ thống, liên lạc với Ban Quản Trị:\n\n' + Response.get_message();

    if (!Check_HDF('Client_Refresh_hdf')) {

        Alert_Message(Message);
    }

    try {
        Message = Message.replace(/\n/g, '<br/>');

        Display_Element('Loading_' + Loading_For + '_div');

        $('#Loading_' + Loading_For + '_div').html(Message);
    } catch (e) {
    }
}

function Alert_Message_AND_Redirect(Message, URL) {

    Creat_Dialog_Message_div();

    $('#Dialog_Message_div').dialog({
        modal: true,
        //width: window_Width / 2,
        buttons: {
            OK: function () {

                $(this).dialog('close');

                Add_Hidden_Field('NOT_Run_Home_On_Client_Refresh_hdf', '1');

                Display_Element('Loading_div');

                window.location.href = URL;
            }
        }
    });

    Message = Message.replace(/\n/g, '<br/>');

    $('#Dialog_Message_div').html(Message);
    $("#Dialog_Message_div").dialog("open");

    Resize_Dialog_Message_div();
}

function Alert_Message_AND_Reload_Home(Message) {

    Creat_Dialog_Message_div();

    $('#Dialog_Message_div').dialog({
        modal: true,
        //width: window_Width / 2,
        buttons: {
            OK: function () {

                $(this).dialog('close');
                Home_On_Client_Refresh();
            }
        }
    });

    Message = Message.replace(/\n/g, '<br/>');

    $('#Dialog_Message_div').html(Message);
    $("#Dialog_Message_div").dialog("open");

    Resize_Dialog_Message_div();
}

function Alert_Message_AND_Open_New_Page(Message, URL) {

    Creat_Dialog_Message_div();

    $('#Dialog_Message_div').dialog({
        modal: true,
        //width: window_Width / 2,
        buttons: {
            OK: function () {
                window.open(URL, '_blank');
                $(this).dialog('close');
            }
        }
    });

    Message = Message.replace(/\n/g, '<br/>');

    $('#Dialog_Message_div').html(Message);
    $("#Dialog_Message_div").dialog("open");

    Resize_Dialog_Message_div();
}
function Manager_Program_Onload() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //ready
    $(document).ready(function () {

        $('#Message_div').hide();
        $('#Manager_div').show();

        On_Window_Resize_Manager_Program();

        //$(window).resize(function () {
        //}).trigger('resize');

        //
        Set_All_onclick_Mouse();
    });
}

function Manager_Reward_Onload() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //ready
    $(document).ready(function () {

        $('#Message_div').hide();
        $('#Manager_div').show();

        On_Window_Resize_Manager_Program();

        //$(window).resize(function () {
        //}).trigger('resize');

        //
        Set_All_onclick_Mouse();

        Setup_Uploader_Reward();

        //
        var Uploader_URL = $('#Uploader_hdf').val();

        if (Uploader_URL != "0") {
            $('#Uploaded_img').attr('src', Uploader_URL);
        }
    });
}

function On_Window_Resize_Manager_Program() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    if (window_Height != parseInt($('#Screen_Height_hdf').val())) {

        $('#Screen_Height_hdf').val(window_Height);

        On_Window_Resize_All_tbl_Manager_Program();
        On_Window_Resize_Message_Manager_Program();

        //
        Setup_jScrollPane_Vertical('Body_div');
    }
}

function On_Window_Resize_All_tbl_Manager_Program() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
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
}

function On_Window_Resize_Message_Manager_Program() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    var All_tbl_H = window_Height;
    var Body_td_H = All_tbl_H;

    if ($('#Top_Menu_tr').css('display') != 'none') {
        Body_td_H -= $('#Top_Menu_td').height();
    }

    var Message_tbl_Height = Body_td_H;

    $('#Message_tbl').css('height', Message_tbl_Height);
    $('#Message_tbl').css('maxHeight', Message_tbl_Height);
    $('#Message_tbl').css('minHeight', Message_tbl_Height);

    $('#Message_tbl').css('width', window_Width);
    $('#Message_tbl').css('maxWidth', window_Width);
    $('#Message_tbl').css('minWidth', window_Width);
}


function Edit_Program(Program, URL) {

    if (confirm('Sửa ?\n' + Program) == true) {

        window.location = URL;
    }
}

function Delete_Program(Program, URL) {

    if (confirm('Xóa ?\n' + Program) == true) {

        window.location = URL;
    }
}

function Enable_Order_Program() {

    Disabled_Element('OK_btn');
    Disabled_Element('Enable_Order_btn');

    $('#Submit_Order_btn').show();
    Enabled_Element('Submit_Order_btn');
    $('#Submit_Order_btn').val("Lưu lại thứ tự mới");

    $("#Manager_tbl tbody").sortable();
}

function Submit_Order_Program(Order_For) {

    Disabled_Element('Submit_Order_btn');
    $('#Submit_Order_btn').val("Đang lưu...");

    var Order_List = '';

    $("#Manager_tbl > tbody > tr").each(function () {

        if ($(this).attr('id')) {
            Order_List += '#' + $(this).attr('id').replace('_tr', '') + '#';
        }
    });

    //
    if (!Check_Object_NOT_Null_Or_Empty(Order_List)) {

        Enabled_Element('OK_btn');
        Enabled_Element('Enable_Order_btn');

        $('#Submit_Order_btn').hide();
    }
    else {
        Submit_Order_List_Program(Order_For, Order_List);
    }
}

function Submit_Order_List_Program(Order_For, Order_List) {

    if (Order_For == 'Reward') {

        var Program_ID = $('#Program_ID_hdf').val();
        var Round_ID = $('#Round_ID_hdf').val();

        PageMethods.set_path($('#PageMethods_Path_hdf').val());
        PageMethods.Submit_Order_List_Reward(Program_ID, Round_ID, Order_List, Submit_Order_List_Program_Sucessfull, Submit_Order_List_Program_Error);
    }
    else
        if (Order_For == 'Round') {

            var Program_ID = $('#Program_ID_hdf').val();

            PageMethods.set_path($('#PageMethods_Path_hdf').val());
            PageMethods.Submit_Order_List_Round(Program_ID, Order_List, Submit_Order_List_Program_Sucessfull, Submit_Order_List_Program_Error);
        }

    function Submit_Order_List_Program_Sucessfull(Response) {

        Enabled_Element('OK_btn');
        Enabled_Element('Enable_Order_btn');

        $('#Submit_Order_btn').val("Đã lưu xong thứ tự mới...");
    }

    function Submit_Order_List_Program_Error(Response) {

        Enabled_Element('OK_btn');
        Enabled_Element('Enable_Order_btn');

        $('#Submit_Order_btn').hide();

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}

function Setup_Uploader_Reward() {

    // Some options to pass to the Uploader are discussed on the next page
    var Uploader = new qq.FineUploader({

        element: document.getElementById("Uploader"),

        request: {
            endpoint: 'http://App.IQwinwin.com/Upload.ashx?Type=Reward'
        },

        multiple: false,

        validation: {
            sizeLimit: 10000000,
            acceptFiles: 'image/*',
            allowedExtensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp']
        },

        callbacks: {

            onSubmit: function (id, name) {

                Start_Upload_Reward();
            },

            onComplete: function (id, name, responseJSON, xhr) {

                Uploaded_Reward(responseJSON);
            }
        }
    });
}

function Start_Upload_Reward() {

    $('#Uploaded_img').attr('src', Replace_Index_Host("/Index/IMG/Loading/Loading_Red_48.gif"));
}

function Uploaded_Reward(Return_Message) {

    var URL = Return_Message.URL;
    var GUID = Return_Message.GUID;

    $('#Uploaded_img').attr('src', URL);
    $('#Uploader_hdf').val(URL);
}

function Reward_Picture_Onload() {

    On_Window_Resize_Manager_Program();
}

function Submit_Program() {

    $('#Message_lbl').html("");

    var Program = $('#Program_tbx').val();
    var Start_Time = $('#Start_Time_tbx').val();
    var Finish_Time = $('#Finish_Time_tbx').val();

    var Valid = true;
    var Message = '';

    if (Program.length < 5) {

        Valid = false;
        Message += '- Phải nhập tên Chương trình: Từ 5 đến 50 ký tự<br/>';
    }

    if (Start_Time == "__/__/____") {

        Valid = false;
        Message += '- Phải chọn ngày Bắt đầu<br/>';
    }

    if (Finish_Time == "__/__/____") {

        Valid = false;
        Message += '- Phải chọn ngày Kết thúc<br/>';
    }

    if (!Valid) {

        Alert_Message("Lỗi:<br/>" + Message);
        $('#Message_lbl').html("Lỗi:<br/>" + Message);
    }

    return Valid;
}

function Submit_Round() {

    $('#Message_lbl').html("");

    var Valid = true;

    return Valid;
}

function Submit_Reward() {

    $('#Message_lbl').html("");

    var Reward = $('#Reward_tbx').val();

    var Valid = true;
    var Message = '';

    if (Reward.length < 5) {

        Valid = false;
        Message += '- Phải nhập tên Giải thưởng: Từ 5 đến 25 ký tự<br/>';
    }

    if (!Valid) {

        Alert_Message("Lỗi:<br/>" + Message);
        $('#Message_lbl').html("Lỗi:<br/>" + Message);
    }

    return Valid;
}
function Manager_Index_Onload() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //ready
    $(document).ready(function () {

        $('#Message_div').hide();
        $('#Manager_div').show();

        On_Window_Resize_Manager_Index();

        //$(window).resize(function () {
        //}).trigger('resize');

        //
        Set_All_onclick_Mouse();
    });
}

function On_Window_Resize_Manager_Index() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    if (window_Height != parseInt($('#Screen_Height_hdf').val())) {

        $('#Screen_Height_hdf').val(window_Height);

        On_Window_Resize_All_tbl_Manager_Index();
        On_Window_Resize_Message_Manager_Index();

        //
        Setup_jScrollPane_Vertical('Body_div');
    }
}

function On_Window_Resize_All_tbl_Manager_Index() {

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

function On_Window_Resize_Message_Manager_Index() {

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

function Submit_Index_1() {

    $('#Message_lbl').html("");

    var Index_1 = $('#Index_1_tbx').val();

    var Valid = true;
    var Message = '';

    if (Index_1.length < 1) {

        Valid = false;
        Message += '- Phải nhập tên Danh mục: Từ 1 đến 50 ký tự<br/>';
    }

    if (!Valid) {

        Alert_Message("Lỗi:<br/>" + Message);
        $('#Message_lbl').html("Lỗi:<br/>" + Message);
    }

    return Valid;
}

function Submit_Index_2() {

    $('#Message_lbl').html("");

    var Index_2 = $('#Index_2_tbx').val();

    var Valid = true;
    var Message = '';

    if (Index_2.length < 1) {

        Valid = false;
        Message += '- Phải nhập tên Danh mục nhỏ: Từ 1 đến 50 ký tự<br/>';
    }

    if (!Valid) {

        Alert_Message("Lỗi:<br/>" + Message);
        $('#Message_lbl').html("Lỗi:<br/>" + Message);
    }

    return Valid;
}

function Edit_Index(Index, URL) {

    if (confirm('Sửa ?\n' + Index) == true) {

        window.location = URL;
    }
}

function Delete_Index(Index, URL) {

    if (confirm('Xóa ?\n' + Index) == true) {

        window.location = URL;
    }
}

function Enable_Order_Web_Index() {

    Disabled_Element('OK_btn');
    Disabled_Element('Enable_Order_btn');

    $('#Submit_Order_btn').show();
    Enabled_Element('Submit_Order_btn');
    $('#Submit_Order_btn').val("Lưu lại thứ tự mới");

    $("#Manager_tbl tbody").sortable();
}

function Submit_Order_Web_Index(Order_For) {

    Disabled_Element('Submit_Order_btn');
    $('#Submit_Order_btn').val("Đang lưu...");

    var Order_List = '';

    $("#Manager_tbl > tbody > tr").each(function () {

        if ($(this).attr('id')) {
            Order_List += '#' + $(this).attr('id').replace('_tr', '') + '#';
        }
    });

    if (!Check_Object_NOT_Null_Or_Empty(Order_List)) {

        Enabled_Element('OK_btn');
        Enabled_Element('Enable_Order_btn');

        $('#Submit_Order_btn').hide();
    }
    else {
        Submit_Order_List_Web_Index(Order_For, Order_List);
    }
}

function Submit_Order_List_Web_Index(Order_For, Order_List) {

    if (Order_For == 'Index_1') {

        var Domain = $('#Domain_hdf').val();

        PageMethods.set_path($('#PageMethods_Path_hdf').val());
        PageMethods.Submit_Order_List_Index_1(Domain, Order_List, Submit_Order_List_Web_Index_Sucessfull, Submit_Order_List_Web_Index_Error);
    }
    else
        if (Order_For == 'Index_2') {

            var Domain = $('#Domain_hdf').val();
            var Index_1_ID = $('#Index_1_ID_hdf').val();

            PageMethods.set_path($('#PageMethods_Path_hdf').val());
            PageMethods.Submit_Order_List_Index_2(Domain, Index_1_ID, Order_List, Submit_Order_List_Web_Index_Sucessfull, Submit_Order_List_Web_Index_Error);
        }

    function Submit_Order_List_Web_Index_Sucessfull(Response) {

        Enabled_Element('OK_btn');
        Enabled_Element('Enable_Order_btn');

        $('#Submit_Order_btn').val("Đã lưu xong thứ tự mới...");
    }

    function Submit_Order_List_Web_Index_Error(Response) {

        Enabled_Element('OK_btn');
        Enabled_Element('Enable_Order_btn');

        $('#Submit_Order_btn').hide();

        if (Response != null) {

            alert(Response.get_message());
            //Alert_Message_PageMethods_Error(Response);
        }
    }
}
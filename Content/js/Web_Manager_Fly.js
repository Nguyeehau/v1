function Manager_Fly_Onload() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    //ready
    $(document).ready(function () {

        $('#Message_div').hide();
        $('#Manager_div').show();

        On_Window_Resize_Manager_Fly();

        //$(window).resize(function () {
        //}).trigger('resize');

        //
        Set_All_onclick_Mouse();
    });
}

function On_Window_Resize_Manager_Fly() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    if (window_Height != parseInt($('#Screen_Height_hdf').val())) {

        $('#Screen_Height_hdf').val(window_Height);

        On_Window_Resize_All_tbl_Manager_Fly();
        On_Window_Resize_Message_Manager_Fly();

        //
        Setup_jScrollPane_Vertical('Body_div');
    }
}

function On_Window_Resize_All_tbl_Manager_Fly() {

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

function On_Window_Resize_Message_Manager_Fly() {

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

function Submit_Fly() {

    return true;
}

function Edit_Fly(Fly, URL) {

    if (confirm('Sửa ?\n' + Fly) == true) {

        window.location = URL;
    }
}

function Delete_Fly(Fly, URL) {

    if (confirm('Xóa ?\n' + Fly) == true) {

        window.location = URL;
    }
}
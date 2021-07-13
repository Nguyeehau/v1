function Index_Onload() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    $('#All_tbl').width(window_Width);
    $('#All_tbl').height(window_Height);
}

function Index_OnClientClick() {

    $('#Message_lbl').html('...');

    Hide_Element('Time_lbl');
    Hide_Element('Index_lnk');

    window.location.href = "http://IQ.IQwinwin.com/Index.aspx";
}
function Screen_Height() {
    return $(window).innerHeight();
}

function Screen_Width() {
    return $(window).innerWidth();
}

function Set_Page_Orientation() {
    
    if (window_Width >= window_Height) {
        $('#Page_Orientation_hdf').val('landscape');
    }
    else {
        $('#Page_Orientation_hdf').val('portrait');
    }
}


function Creat_UUID() {

    var d = new Date().getTime();

    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });

    return uuid;
}

function Convert_GUID_To_ID(GUID) {

    return GUID.replace("-", "_");
}


function Convert_Link_Element(ID) {

    var str = $('#' + ID).html();

    // Set the regex string
    var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig

    // Replace plain text links by hyperlinks
    var replaced_text = str.replace(regex, "<a href='$1' target='_blank'>$1</a>");

    // Echo link
    $('#' + ID).html(replaced_text);
}


function Get_Key_Pressed(event) {

    var Key_Pressed;

    if (event.keyCode) {
        Key_Pressed = event.keyCode;
    }
    else {
        Key_Pressed = event.which;
    }

    return Key_Pressed;
}


function Set_All_onclick_Mouse() {

    try {
        $('*').each(function () {

            if ($(this).attr('onclick')) {
                $(this).addClass('Mouse_Hand');
            }
        });
    }
    catch (e) {
    }
}

function Auto_Click_Link(ID) {

    if (Check_Element_Is_Not_Null(ID)) {

        if (Check_Element_Visible(ID)) {

            $('#' + ID).click();
        }
    }
}


function Add_innerHTML_To_Current(ID, HTML) {
    $('#' + ID).html($('#' + ID).html() + HTML);
}


function Enable_Order_List(List_ID) {
    $('#' + List_ID).sortable();    
    //$('#' + List_ID).disableSelection();
}

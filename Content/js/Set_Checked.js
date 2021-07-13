function Set_Checked_CBXL(ID, Checked) {

    var list = $('#' + ID + ' input');

    list.each(function (index) {
        item = $(this);
        if (str.indexOf(item.val()) != -1) {
            item.attr('checked', Checked);
        }
    });
}

function Set_Checked_CBX(ID, Checked) {

    if (Check_Element_Is_Not_Null(ID)) {
        $('#' + ID).attr('checked', Checked);
    }
}
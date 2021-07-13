function Make_Button_Radio_Style(ID) {

    $('#' + ID).buttonset();

    $('#' + ID + ' label:first').removeClass('ui-corner-left');
    $('#' + ID + ' label:last').removeClass('ui-corner-right');
    $('#' + ID + ' label').addClass('ui-corner-all');
}
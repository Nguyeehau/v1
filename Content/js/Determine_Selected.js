﻿function Determine_Tree_View_Node_Checked(Tree_View_ID, Prefix) {

    var Result = '';

    $('#' + Tree_View_ID + ' input[type=checkbox]:checked').each(function () {
        if (Check_String_Contain($(this).val(), Prefix + '_')) {
            Result += '#' + $(this).val() + '#';
        }
    });

    return Result;
}

function Get_Checked_CBXL_To_List(ID) {

    var Result = '';

    var CBXL = document.getElementById(ID);

    var CBXL_Item_Array = CBXL.getElementsByTagName("input");

    for (var i = 0; i < CBXL_Item_Array.length; i++) {

        if (CBXL_Item_Array[i].checked) {
            Result += '#' + CBXL_Item_Array[i].value + '#';
        }
    }

    return Result;
}

function Determine_Checked_RDOL(ID) {

    return $('input:radio[name=' + ID + ']:checked').val();
}

function Determine_Checked_CBX(ID) {

    var Result = false;

    if (Check_Element_Is_Not_Null(ID)) {
        Result = $('#' + ID).prop('checked');
    }

    return Result;
}
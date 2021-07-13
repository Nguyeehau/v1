function Setup_TBX_Submit(TBX_ID, BTN_ID) {

    $('#' + TBX_ID).bind('keydown', function (event) {

        if (Get_Key_Pressed(event) == 13) {
            $('#' + BTN_ID).click(); return false;
        }
    });
}

function Disable_TBX_Auto_Submit(TBX_ID) {

    $('#' + TBX_ID).bind('keyup keydown', function (event) {

        if (Get_Key_Pressed(event) == 13) {
            return false;
        }
        else {
            return true;
        }
    });
}


function Clear_All_Input(Holder_ID) {

    $('#' + Holder_ID).children().find('input[type=text], textarea').each(function () {

        $(this).val('');

        if ($(this).attr('checked')) {
            $(this).attr('checked', false);
        }
    });
}


function Set_Watermarked_TBX(TBX_ID, Value) {
    var TBX = $get(TBX_ID);
    var Wrapper = Sys.Extended.UI.TextBoxWrapper.get_Wrapper(TBX);

    //var oldValue = Wrapper.get_Value();
    Wrapper.set_Value(Value);
}

function Clear_Watermarked_TBX(TBX_ID) {
    $('#' + TBX_ID).val('');
    $('#' + TBX_ID).select();
}


function Disable_TBX_Auto_Complete_All() {

    $('input[type=text]').attr('autocomplete', 'off');
    $('input[type=text]').attr('autocorrect', 'off');
    $('input[type=text]').attr('autocapitalize', 'off');
    $('input[type=text]').attr('spellcheck', 'false');

    $('input[type=password]').attr('autocomplete', 'off');
    $('input[type=password]').attr('autocorrect', 'off');
    $('input[type=password]').attr('autocapitalize', 'off');
    $('input[type=password]').attr('spellcheck', 'false');
}


function OnlyNumber(TBX_ID) {

    $('#' + TBX_ID).on('keypress', function (event) {

        var key = Get_Key_Pressed(event);

        return (key >= 48 && key <= 57) || key == 8 || key == 46 || key == 37 || key == 39;
    });
}

function MaxLength(TBX_ID, max) {
    $('#' + TBX_ID).attr('maxlength', max);
}
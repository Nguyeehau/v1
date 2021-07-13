function Add_Hidden_Field(key, value) {

    if (Check_Element_Is_Not_Null(key)) {
        $('#' + key).val(value);
    }
    else {
        var Element_To_Add = $('<input/>', {
            type: 'hidden',
            id: key,
            value: value
        });

        $('#Page_Form').append(Element_To_Add);
    }
}

function Check_HDF(HDF_ID) {

    var Result = false;

    if (Check_Element_Is_Not_Null(HDF_ID)) {
        if (($('#' + HDF_ID).val() == '1') || ($('#' + HDF_ID).val() == 'true') || ($('#' + HDF_ID).val() == 'True')) {
            Result = true;
        }
    }

    return Result;
}

function Check_HDF_Not_Empty(HDF_ID) {

    var Result = false;

    if (Check_Element_Is_Not_Null(HDF_ID)) {
        if (($('#' + HDF_ID).val() != '') && ($('#' + HDF_ID).val() != '0')) {
            Result = true;
        }
    }

    return Result;
}

function Check_Loaded_PageMethods(PageMethods_For) {
    return Check_HDF('Loaded_PageMethods_' + PageMethods_For + '_hdf');
}

function Save_Last_Time_HDF(Last_Time_For) {

    var Current_Date = new Date();
    var Current_Time = Current_Date.getTime();

    Add_Hidden_Field('Last_Time_' + Last_Time_For + '_hdf', Current_Time);
}

function Read_Last_Time_HDF(Last_Time_For) {

    var Result = false;

    var Current_Date = new Date();
    var Current_Time = Current_Date.getTime();

    var Last_Time_HDF = $('#Last_Time_' + Last_Time_For + '_hdf').val();

    return (Current_Time - Last_Time_HDF);
}

function Check_Last_Time_HDF(Last_Time_For, Min_Time) {

    var Result = false;

    var Current_Date = new Date();
    var Current_Time = Current_Date.getTime();

    if (Min_Time == null) {
        Add_Hidden_Field('Last_Time_' + Last_Time_For + '_hdf', null);
    }
    else
        if (Min_Time == 0) {
            Add_Hidden_Field('Last_Time_' + Last_Time_For + '_hdf', Current_Time);
        }
        else {
            var Last_Time_HDF = $('#Last_Time_' + Last_Time_For + '_hdf').val();

            if (!Check_Object_NOT_Null_Or_Empty(Last_Time_HDF)) {
                Result = true;
            }
            else {
                if ((Current_Time - Last_Time_HDF) >= Min_Time) {
                    Result = true;
                }
            }

            if (Last_Time_For == 'XXX') {

                Write_Message(Current_Time.toString());

                if (Check_Object_NOT_Null_Or_Empty(Last_Time_HDF)) {
                    Write_Message(' - ' + Last_Time_HDF.toString() + ' = ' + (Current_Time - Last_Time_HDF).toString() + ' : ' + Result.toString());
                }
            }

            if (Result) {
                Add_Hidden_Field('Last_Time_' + Last_Time_For + '_hdf', Current_Time);
            }
        }

    return Result;
}
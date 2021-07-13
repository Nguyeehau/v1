function Set_UserIdd_hdf(Value) {

    if (Check_HDF('Is_Iframe_hdf')) {
        parent.Set_UserIdd_hdf(Value);
    }
    else {
        $('#UserIdd_hdf').val(Value);
    }
}

function Hide_Loading_Parent() {

    if (Check_HDF('Is_Iframe_hdf')) {
        parent.Hide_Loading_Parent();
    }
    else {
        $('#Loading_Parent_div').hide();
    }
}

function Show_Loading_Parent() {

    if (Check_HDF('Is_Iframe_hdf')) {
        parent.Show_Loading_Parent();
    }
    else {
        $('#Loading_Parent_div').show();
    }
}


function Alert_Message_Parent(Message_Object) {

    if (Check_HDF('Is_Iframe_hdf')) {
        parent.Alert_Message_Parent(Message_Object);
    }
    else {
        Alert_Message(Message_Object);
    }
}

function Alert_Confirm_Parent(Message, CallBack_Function) {

    if (Check_HDF('Is_Iframe_hdf')) {
        parent.Alert_Confirm_Parent(Message, CallBack_Function);
    }
    else {
        Alert_Confirm(Message, CallBack_Function);
    }
}
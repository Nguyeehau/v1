function Add_Row_To_Table(Table_ID, innerHTML) {
    $('#' + Table_ID + ' >tbody:last-child').append("<tr><td align='center'>" + innerHTML + "</td></tr>");
}

function Add_List_Item(List_ID, List_Item_ID, InnerHTML) {

    if (Check_Element_Is_Not_Null(List_Item_ID)) {
        $('#' + List_Item_ID).html(InnerHTML);

    } else {
        var Element_To_Add = $('<li/>', {
            id: List_Item_ID,
            html: InnerHTML
        });

        $('#' + List_ID).append(Element_To_Add);
    }
}

function Add_Item_To_DDL(DDL_ID, Text, Value) {

    $('#' + DDL_ID).append(new Option(Text, Value));
}

function Add_Item_To_DDL_Check(DDL_ID, Text, Value) {

    if ($("#" + DDL_ID + " option[value='" + Value + "']").length == 0) {
        $('#' + DDL_ID).append(new Option(Text, Value));
    }
}

function Add_Item_To_CBXL(CBXL_ID, Text, Value, Checked) {

    var option = document.createElement('input');
    var label = document.createElement('label');

    //
    option.type = 'checkbox';
    label.innerHTML = Text;
    option.value = Value;
    option.setAttribute("checked", Checked);

    //
    document.getElementById(CBXL_ID).appendChild(option);
    document.getElementById(CBXL_ID).appendChild(label);
}

function Add_Item_To_RDOL(RDOL_ID, Text, Value, Checked) {

    var option = document.createElement('input');
    var label = document.createElement('label');

    //
    option.type = 'radio';
    option.value = Value;
    option.setAttribute("checked", Checked);
    option.setAttribute('name', RDOL_ID);

    label.innerHTML = Text;

    //
    document.getElementById(RDOL_ID).appendChild(option);
    document.getElementById(RDOL_ID).appendChild(label);
}
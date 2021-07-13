function Parse_JSON_String_To_Array(JSON_String) {

    var JSON_Array = new Array();

    try {
        JSON_Array = eval(JSON_String);
    } catch (e) {
        return null;
    }

    return JSON_Array;
}

function Creat_JSON_Array(Uploaded_obj) {
    return "[" + JSON.stringify(Uploaded_obj) + "]";
}

function Creat_JSON_one(Uploaded_obj) {
    return JSON.stringify(Uploaded_obj);
}
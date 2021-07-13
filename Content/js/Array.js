function Split_List_To_Array(List) {

    var Result_List_Array = new Array();

    var List_Array = List.split('#');

    //
    if (List_Array != null) {

        for (var i = 0; i < List_Array.length; i++) {

            if ((List_Array[i] != '#') && (List_Array[i] != '')) {
                Result_List_Array.length = Result_List_Array.length + 1;
                Result_List_Array[Result_List_Array.length - 1] = List_Array[i];
            }
        }
    }

    return Result_List_Array;
}
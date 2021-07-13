function TreeView_ToggleNode_By_Index(Tree_View_ID, Node_Index) {

    var Tree_View = document.getElementById(Tree_View_ID);

    var TreeView_Node_Display_State = 'none';

    if (Check_Object_NOT_Null_Or_Empty(Tree_View)) {

        var Tree_Links_Array = Tree_View.getElementsByTagName("a");
        var Is_Root_Node = true;

        for (i = 0; i < Tree_Links_Array.length; i++) {

            if (Tree_Links_Array[i].firstChild) {

                if (Tree_Links_Array[i].firstChild.tagName == "IMG") {

                    var node = Tree_Links_Array[i];
                    var level = parseInt(Tree_Links_Array[i].id.replace(Tree_View_ID + 'n', '')); // parseInt(Tree_Links_Array[i].id.substr(Tree_Links_Array[i].id.length - 1), 10);
                    var childContainer = document.getElementById(Tree_Links_Array[i].id + "Nodes");

                    TreeView_Node_Display_State = childContainer.style.display;

                    if (Is_Root_Node) {

                        Is_Root_Node = false;

                        if (level == Node_Index) {
                            TreeView_ToggleNode(eval(Tree_View_ID + "_Data"), level, node, 'r', childContainer);

                            break;
                        }
                    }
                    else
                        if (level == Node_Index) {
                            TreeView_ToggleNode(eval(Tree_View_ID + "_Data"), level, node, 'l', childContainer);

                            break;
                        }
                }
            }
        }
    }

    return TreeView_Node_Display_State;
}

function TreeView_ToggleNode_All_Except(Tree_View_ID, Node_Index, Expand) {

    var Tree_View = document.getElementById(Tree_View_ID);

    if (Check_Object_NOT_Null_Or_Empty(Tree_View)) {

        var Tree_Links_Array = Tree_View.getElementsByTagName("a");
        var Is_Root_Node = true;

        var Display_Mode = 'none';

        if (!Expand) {
            Display_Mode = 'block';
        }

        for (i = 0; i < Tree_Links_Array.length; i++) {

            if (Tree_Links_Array[i].firstChild) {

                if (Tree_Links_Array[i].firstChild.tagName == "IMG") {

                    var node = Tree_Links_Array[i];
                    var level = parseInt(Tree_Links_Array[i].id.replace(Tree_View_ID + 'n', '')); // parseInt(Tree_Links_Array[i].id.substr(Tree_Links_Array[i].id.length - 1), 10);
                    var childContainer = document.getElementById(Tree_Links_Array[i].id + "Nodes");

                    if (Is_Root_Node) {

                        Is_Root_Node = false;

                        if ((childContainer.style.display == Display_Mode) && (level != Node_Index)) {
                            TreeView_ToggleNode(eval(Tree_View_ID + "_Data"), level, node, 'r', childContainer);
                        }
                    }
                    else
                        if ((childContainer.style.display == Display_Mode) && (level != Node_Index)) {
                            TreeView_ToggleNode(eval(Tree_View_ID + "_Data"), level, node, 'l', childContainer);
                        }
                }
            }
        }
    }
}

function Tree_View_UnSelect_Parent_If_No_Child_Nodes_Checked(sender, args) {

    var node = args.get_node();
    var shouldUncheck = true;

    if (node.get_checked() == false) {

        var parent = node.get_parent();

        for (var i = 0; i < parent.get_nodes().get_count(); i++) {

            var childNode = parent.get_nodes().getNode(i);

            if (childNode.get_checked() == true) {
                shouldUncheck = false;
                break;
            }
        }

        if (shouldUncheck) {
            parent.uncheck();
        }
    }
}

function Tree_View_Select_All_Child_Nodes(event) {
    //debugger;

    var Object;
    var childtreeNodeFound = false;
    var checkedState;

    // Internet Explorer
    if (event.srcElement) {
        Object = event.srcElement;
    }
    // Netscape and Firefox
    else
        if (event.target) {
            Object = event.target;
        }

    if (Object.tagName == "INPUT" && Object.type == "checkbox") {
        var treeNode = Object;

        checkedState = treeNode.checked;

        do {
            Object = Object.parentElement;
        }
        while (Object.tagName != "TABLE")

        var parentTreeLevel = Object.rows[0].cells.length;
        var parentTreeNode = Object.rows[0].cells[0];

        var tables = Object.parentElement.getElementsByTagName("TABLE");
        var numTables = tables.length;

        if (numTables >= 1) {
            for (iCount = 0; iCount < numTables; iCount++) {
                if (tables[iCount] == Object) {

                    childtreeNodeFound = true;
                    iCount++;

                    if (iCount == numTables) {
                        return;
                    }
                }

                if (childtreeNodeFound == true) {

                    var childTreeLevel = tables[iCount].rows[0].cells.length;

                    if (childTreeLevel > parentTreeLevel) {

                        var cell = tables[iCount].rows[0].cells[childTreeLevel - 1];
                        var inputs = cell.getElementsByTagName("INPUT");
                        inputs[0].checked = checkedState;
                    }
                    else {
                        return;
                    }
                }
            }
        }
    }
}

function Tree_View_Select_Parent_If_Check_Child_Nodes(event) {
    //debugger;

    var Object;
    var childtreeNodeFound = false;
    var checkedState;

    // Internet Explorer
    if (event.srcElement) {
        Object = event.srcElement;
    }
    // Netscape and Firefox
    else
        if (event.target) {
            Object = event.target;
        }

    if (Object.tagName == "INPUT" && Object.type == "checkbox") {

        var treeNode = Object;

        checkedState = treeNode.checked;

        do {
            Object = Object.parentElement;
        }
        while (Object.tagName != "TABLE")

        var parentTreeLevel = Object.rows[0].cells.length;
        var parentTreeNode = Object.rows[0].cells[0];

        //
        if (checkedState == true) {

            //
            var Parent_tables = Object.parentElement.parentElement.getElementsByTagName("TABLE");
            var Parent_numTables = Parent_tables.length;

            //
            if (Parent_numTables >= 1) {

                for (iCount = 0; iCount < Parent_numTables; iCount++) {
                }
            }

            var Parent_inputs = Object.parentElement.parentElement.getElementsByTagName("INPUT");
            Parent_inputs[0].checked = true;
        }

        //
        var tables = Object.parentElement.getElementsByTagName("TABLE");
        var numTables = tables.length;

        //
        if (numTables >= 1) {

            for (iCount = 0; iCount < numTables; iCount++) {

                if (tables[iCount] == Object) {

                    childtreeNodeFound = true;
                    iCount++;

                    if (iCount == numTables) {
                        return;
                    }
                }

                if (childtreeNodeFound == true) {

                    var childTreeLevel = tables[iCount].rows[0].cells.length;

                    if (childTreeLevel > parentTreeLevel) {

                        var cell = tables[iCount].rows[0].cells[childTreeLevel - 1];
                        var inputs = cell.getElementsByTagName("INPUT");
                        inputs[0].checked = checkedState;
                    }
                    else {
                        return;
                    }
                }
            }
        }
    }
}

function Setup_Tree_View_Select_All_Child_Nodes(Tree_View_ID) {

    $('#' + Tree_View_ID + ' input[type=checkbox]').click(function () {
        //$('div[id=' + Tree_View_ID + '] input[type=checkbox]').click(function () {

        var Parent_Checked = this.checked;
        var Parent_Checked_string = '';

        if (Parent_Checked) {
            $(this).closest('table').next('div').find('input[type=checkbox]').attr('checked', 'checked');
        } else {
            $(this).closest('table').next('div').find('input[type=checkbox]').removeAttr('checked');
        }

        /*
        $(this).parents('div').each(function (index) {

        //parent.Write_Message($(this).find('input[type=checkbox]:checked').length);

        if ($(this).find('input[type=checkbox]:checked').length > 0) {
        //$(this).prev('table').find('input[type=checkbox]').attr('checked', true);
        }
        else {
        //$(this).prev('table').find('input[type=checkbox]').attr('checked', false);
        }
        });
        */
    });
}

function Post_News_Onload() {

    var window_Height = $(window).innerHeight();
    var window_Width = $(window).innerWidth();

    //ready
    $(document).ready(function () {

        On_Window_Resize_Message_Post_News();

        $('#Message_div').hide();

        //
        Setup_Editor('Content_tbx');

        //
        Setup_Uploader_News_Picture();
    });
}

function On_Window_Resize_Message_Post_News() {

    var window_Height = Screen_Height();
    var window_Width = $(window).innerWidth();

    $('#Message_tbl').css('height', window_Height);
    $('#Message_tbl').css('maxHeight', window_Height);
    $('#Message_tbl').css('minHeight', window_Height);

    $('#Message_tbl').css('width', window_Width);
    $('#Message_tbl').css('maxWidth', window_Width);
    $('#Message_tbl').css('minWidth', window_Width);
}

function Setup_Uploader_News_Picture() {

    // Some options to pass to the Uploader are discussed on the next page
    var Uploader = new qq.FineUploader({

        element: document.getElementById("Uploader"),

        request: {
            endpoint: $('#Web_Host_hdf').val() + '/Upload.ashx?Type=News_Picture'
        },

        multiple: false,

        validation: {
            sizeLimit: 10000000,
            acceptFiles: 'image/*',
            allowedExtensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp']
        },

        callbacks: {

            onSubmit: function (id, name) {

                Start_Upload_News_Picture();
            },

            onComplete: function (id, name, responseJSON, xhr) {

                Uploaded_News_Picture(responseJSON);
            }
        }
    });
}

function Start_Upload_News_Picture() {

    $('#Uploaded_img').attr('src', Replace_Index_Host("/Index/IMG/Loading/Loading_Red_48.gif"));
}

function Uploaded_News_Picture(Return_Message) {

    var URL = Return_Message.URL;
    var GUID = Return_Message.GUID;

    $('#Uploaded_img').attr('src', URL);

    //
    var Picture_img = $('#Picture_img').attr('src');

    if (Picture_img == '') {
        Uploaded_img_OnClick();
    }
}

function Uploaded_img_OnClick() {

    var URL = $('#Uploaded_img').attr('src');

    $('#Picture_img').attr('src', URL);
    $('#Picture_hdf').val(URL);
}

function Submit_Post_News() {

    var Valid = true;
    var Message = '';

    var Title = $('#Title_tbx').val();

    Title = Replace_String(Title, "  ", " ");
    $('#Title_tbx').val(Title);

    var Picture_img = $('#Picture_img').attr('src');

    //
    if (Title.length < 3) {
        Valid = false;
        Message += "- Phải nhập \"Tiêu đề\" có ít nhất 3 ký tự.<br/>";
    }

    if (Picture_img == '') {
        Valid = false;
        Message += "- Phải Upload \"Hình ảnh Chính\".<br/>";
    }

    //
    if (!Valid) {
        Alert_Message("LỖI:<br/><br/>" + Message);
    }

    //
    if (Valid) {

        var Content = Get_HTML_Editor_Content('Content_tbx');

        $('#Page_Body').append("<div id='Temp_div' style='display: none;'></div>");
        $('#Temp_div').html(Content);

        $('#Temp_div').find('table').each(function () {
            $(this).attr('border', '1');
            $(this).attr('class', 'Table_Editor');
        });

        //
        Content = $('#Temp_div').html();
        Set_HTML_Editor_Content('Content_tbx', Content);

        $('#Temp_div').remove();

        //
        $('#Message_div').show();
    }

    return Valid;
}

function Set_Content_From_hdf() {

    var Content_hdf = $('#Content_hdf').val();

    Set_HTML_Editor_Content('Content_tbx', Content_hdf);
}

function Continued_Post_News() {

    location.href = $('#URL_hdf').val();
}

function Index_1_ddl_Onchange() {

    $('#Index_1_ID_hdf').val($('#Index_1_ddl').val());

    Creat_Index_2_ddl();
}

function Index_2_ddl_Onchange() {

    $('#Index_2_ID_hdf').val($('#Index_2_ddl').val());
}

function Creat_Index_2_ddl() {

    $('#Index_2_ddl').empty();

    var Domain = $('#Domain_hdf').val();
    var Index_1_ID = $('#Index_1_ddl').val();

    PageMethods.set_path($('#PageMethods_Path_hdf').val());
    PageMethods.Creat_Index_2_ddl(Domain, Index_1_ID, Creat_Index_2_ddl_Sucessfull, Creat_Index_2_ddl_Error);

    //
    function Creat_Index_2_ddl_Sucessfull(Response) {

        //alert(Response);

        var JSON_Array = Parse_JSON_String_To_Array(Response);

        if (JSON_Array != null) {

            if (JSON_Array.length > 0) {

                for (var i = 0; i < JSON_Array.length; i++) {

                    var Index_2_ID = JSON_Array[i].Item_1;
                    var Index_2 = JSON_Array[i].Item_2;

                    Add_Item_To_DDL("Index_2_ddl", Index_2, Index_2_ID);
                }
            }
        }

        //
        $('#Index_2_ID_hdf').val($('#Index_2_ddl').val());
    }

    //
    function Creat_Index_2_ddl_Error(Response) {

        if (Response != null) {

            Alert_Message_PageMethods_Error(Response);
        }
    }
}
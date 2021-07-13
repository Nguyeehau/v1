function Manager_News_Onload() {

    var window_Height = $(window).innerHeight();
    var window_Width = $(window).innerWidth();
}

function Delete_News(News_ID) {

    var Title = $('#Title_' + News_ID + '_hdf').val();

    //
    if (confirm('Xóa ?\n - ' + Title) == true) {

        var Domain = $('#Domain_hdf').val();

        PageMethods.set_path($('#PageMethods_Path_hdf').val());
        PageMethods.Delete_News(Domain, News_ID, Delete_News_Sucessfull, Delete_News_Error);
    }

    //
    function Delete_News_Sucessfull(Response) {

        Hide_Element(News_ID + '_tr');
    }

    //
    function Delete_News_Error(Response) {

        if (Response != null) {
            Alert_Message_PageMethods_Error(Response);
        }
    }
}
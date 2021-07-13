function Scroll_To_Element(ID) {

    if (Check_Element_Is_Not_Null(ID)) {

        try {
            $('html, body').animate({
                scrollTop: $("#" + ID).offset().top
            }, 2000);
        }
        catch (e) {

            document.getElementById(ID).scrollIntoView();
        }
    }
}

function Scroll_To_Element_Padding(ID, Padding) {

    if (Check_Element_Is_Not_Null(ID)) {

        try {
            $('html, body').animate({
                scrollTop: $("#" + ID).offset().top - Padding
            }, 2000);
        }
        catch (e) {

            document.getElementById(ID).scrollIntoView();
        }
    }
}

function Hidden_Scroll_To(ID, Padding) {

    if (Check_Element_Is_Not_Null('Hidden_Scroll_To_lnk')) {

        $('#Hidden_Scroll_To_lnk').attr("onclick", "Scroll_To_Element_Padding('" + ID + "', " + Padding + "); return false;");
        $('#Hidden_Scroll_To_lnk').click();
    }
}

function Scroll_To_Top() {

    $('html, body').animate({
        scrollTop: 0
    }, 2000);
}


function Scroll_To_Top_Iframe() {

    document.getElementById('Page_Content_ifr').contentWindow.Scroll_To_Top_Iframe_Inside();
}

function Scroll_To_Top_Iframe_Inside() {

    Scroll_To_Top();
}
function Convert_Color_Rgb_To_Name(RGB) {

    var Color_Name = '';

    if (RGB == "rgb(255, 255, 0)") {
        Color_Name = "yellow";
    }
    else
        if (RGB == "rgb(255, 255, 255)") {
            Color_Name = "white";
        }
        else
            if (RGB == "rgb(255, 0, 0)") {
                Color_Name = "red";
            }

    return Color_Name;
}

function Write_Message_Fix(Message) {

    $('#Message_lbl').html($('#Message_lbl').html() + "<br/>" + Message);
}
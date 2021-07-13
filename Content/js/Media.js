function Check_IMG_Loaded(ID) {

    var Image_Temp = new Image();
    Image_Temp.src = $('#' + ID).attr('src');

    return Image_Temp.complete;
}
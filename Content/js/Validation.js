﻿function Check_Valid_Email(Email_Address) {

    var pattern = new RegExp(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/); //^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$

    return pattern.test(Email_Address);
}

function Check_Valid_Nick_Name(Nick_Name) {
    return true;
}

function Message_InValid_Nick_Name() {
    return "Tên KHÔNG HỢP LỆ !";
}

function Check_Valid_Date(txtDate, separator) {

    var aoDate,           // needed for creating array and object
        ms,               // date in milliseconds
        month, day, year; // (integer) month, day and year

    // if separator is not defined then set '/'
    if (separator === undefined) {
        separator = '/';
    }

    // split input date to month, day and year
    aoDate = txtDate.split(separator);

    // array length should be exactly 3 (no more no less)
    if (aoDate.length !== 3) {
        return false;
    }

    // define month, day and year from array (expected format is m/d/yyyy)
    // subtraction will cast variables to integer implicitly
    day = aoDate[0] - 0;
    month = aoDate[1] - 1; // because months in JS start from 0
    year = aoDate[2] - 0;

    // test year range
    if (year < 1000 || year > 3000) {
        return false;
    }

    // convert input date to milliseconds
    ms = (new Date(year, month, day)).getTime();

    // initialize Date() object from milliseconds (reuse aoDate variable)
    aoDate = new Date();
    aoDate.setTime(ms);

    // compare input date and parts from Date() object
    // if difference exists then input date is not valid
    if (aoDate.getFullYear() !== year ||
        aoDate.getMonth() !== month ||
        aoDate.getDate() !== day) {

        return false;
    }

    // date is OK, return true
    return true;
}

function Check_Date_Less_Than_Today(Year, Month, Day) {

    var Result = false;

    var Today_Year = parseInt($('#Today_Year_hdf').val());
    var Today_Month = parseInt($('#Today_Month_hdf').val());
    var Today_Day = parseInt($('#Today_Day_hdf').val());

    //New date thi Month - 1
    var Today_Date = new Date(Today_Year, Today_Month - 1, Today_Day);

    //
    if ((!Check_Object_NOT_Null_Or_Empty(Day)) || (isNaN(Day))) {
        Day = 1;
    }

    if ((!Check_Object_NOT_Null_Or_Empty(Month)) || (isNaN(Month))) {
        Month = 1;
    }

    if ((!Check_Object_NOT_Null_Or_Empty(Year)) || (isNaN(Year))) {
        Year = 1900;
    }

    //New date thi Month - 1
    var Date_Temp = new Date(Year, Month - 1, Day);

    //
    if (Date_Temp < Today_Date) {
        Result = true;
    }

    return Result;
}

function Check_Date_Less_Than_Today_one(Date) {

    var Result = false;

    //Date_Array
    var Date_Array = Date.split("/");

    if (Date_Array.length == 3) {

        var Day = Date_Array[0];
        var Month = Date_Array[1];
        var Year = Date_Array[2];

        Result = Check_Date_Less_Than_Today(Year, Month, Day);
    }

    return Result;
}

function Check_Date_Greater_Than_OR_Equal_Today(Year, Month, Day) {

    var Result = false;

    var Today_Year = parseInt($('#Today_Year_hdf').val());
    var Today_Month = parseInt($('#Today_Month_hdf').val());
    var Today_Day = parseInt($('#Today_Day_hdf').val());

    //New date thi Month - 1
    var Today_Date = new Date(Today_Year, Today_Month - 1, Today_Day);

    //
    if ((!Check_Object_NOT_Null_Or_Empty(Day)) || (isNaN(Day))) {
        Day = 1;
    }

    if ((!Check_Object_NOT_Null_Or_Empty(Month)) || (isNaN(Month))) {
        Month = 1;
    }

    if ((!Check_Object_NOT_Null_Or_Empty(Year)) || (isNaN(Year))) {
        Year = 1900;
    }

    //New date thi Month - 1
    var Date_Temp = new Date(Year, Month - 1, Day);

    //
    if (Date_Temp >= Today_Date) {
        Result = true;
    }

    return Result;
}

function Check_Date_Greater_Than_OR_Equal_Today_one(Date) {

    var Result = false;

    //Date_Array
    var Date_Array = Date.split("/");

    if (Date_Array.length == 3) {

        var Day = Date_Array[0];
        var Month = Date_Array[1];
        var Year = Date_Array[2];

        Result = Check_Date_Greater_Than_OR_Equal_Today(Year, Month, Day);
    }

    return Result;
}

function Check_Date_Greater_Than_Today(Year, Month, Day) {

    var Result = false;

    var Today_Year = parseInt($('#Today_Year_hdf').val());
    var Today_Month = parseInt($('#Today_Month_hdf').val());
    var Today_Day = parseInt($('#Today_Day_hdf').val());

    //New date thi Month - 1
    var Today_Date = new Date(Today_Year, Today_Month - 1, Today_Day);

    //
    if ((!Check_Object_NOT_Null_Or_Empty(Day)) || (isNaN(Day))) {
        Day = 1;
    }

    if ((!Check_Object_NOT_Null_Or_Empty(Month)) || (isNaN(Month))) {
        Month = 1;
    }

    if ((!Check_Object_NOT_Null_Or_Empty(Year)) || (isNaN(Year))) {
        Year = 1900;
    }

    //New date thi Month - 1
    var Date_Temp = new Date(Year, Month - 1, Day);

    //
    if (Date_Temp > Today_Date) {
        Result = true;
    }

    return Result;
}

function Check_Date_Greater_Than_Today_one(Date) {

    var Result = false;

    //Date_Array
    var Date_Array = Date.split("/");

    if (Date_Array.length == 3) {

        var Day = Date_Array[0];
        var Month = Date_Array[1];
        var Year = Date_Array[2];

        Result = Check_Date_Greater_Than_Today(Year, Month, Day);
    }

    return Result;
}
function Read_Curent_Web_URL() {

    var URL = window.location.href.split('?')[0];

    URL = URL.split('#')[0];

    return URL.toLowerCase();
}

function Get_Query_String() {

    var vars = [], hash;

    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}


function Read_File_Name_Extension(File_Name) {
    return "." + File_Name.substr(File_Name.lastIndexOf('.') + 1);
}
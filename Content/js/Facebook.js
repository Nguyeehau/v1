function Facebook_Onload(d, s, id) {

    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;

    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.1';
    fjs.parentNode.insertBefore(js, fjs);
}

function Delay_Load_FB(Time) {

    try {

        var News_ID = $('#News_ID_hdf').val();

        if (News_ID != '') {

            setTimeout(function () {

                Facebook_Onload(document, 'script', 'facebook-jssdk');

                FB.XFBML.parse(document.getElementById('fb-like_' + News_ID + '_div'));
                FB.XFBML.parse(document.getElementById('fb-comments_' + News_ID + '_div'));

            }, Time);
        }

    } catch (e) {
    }
}
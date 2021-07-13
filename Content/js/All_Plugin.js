function Config_Highslide() {

    hs.graphicsDir = Replace_Index_Host('/Index/_Plugin/Highslide/graphics/');
    hs.align = 'center';
    hs.outlineType = 'rounded-white';
    hs.wrapperClassName = 'draggable-header';    
    hs.allowSizeReduction = true;
    //hs.onDimmerClick = function () { return false; }
}

function Check_Highslide_Is_Expanded() {

    var Result = false;

    for (var i = 0; i < hs.expanders.length; i++) {

        if (hs.expanders[i]
			&& !(this.last && this.transitions[1] == 'crossfade')) {
            Result = true;
            break;
        }
    }

    return Result;
}

function Setup_Tooltip() {

    $(document).ready(function () {

        //
        //$('a[title]').tooltip({ html: true }); 

        $('a[title]').attr('title', '');

        /*
        $('.tooltip').tooltipster({
        theme: 'tooltipster-my-custom-theme',
        animation: 'swing',
        contentAsHTML: true,
        hideOnClick: true,
        position: 'right'
        });*/

        /*
        $('a[title]').tooltip({
        track: true,
        tooltipClass: 'my-tooltip-styling',
        content: function () { return $(this).attr('title'); }
        });*/
    });
}

function Creat_Marquee(Marquee_ID, Direction) {

    if (Check_Element_Is_Not_Null(Marquee_ID)) {

        var Valid_Exists = true;

        $('#' + Marquee_ID).find('*').each(function () {

            if ($(this).attr('class')) {
                if (($(this).attr('class') == 'js-marquee-wrapper') || ($(this).attr('class') == 'js-marquee')) {
                    Valid_Exists = false;
                }
            }
        });

        //
        if ((Valid_Exists) && ($('#' + Marquee_ID).width() > 0)) {

            var $mwo = $('#' + Marquee_ID);
            //$('.marquee').marquee();

            //$('#' + Marquee_ID).marquee('destroy');

            //Left or Right
            if ((Direction == 'left') || (Direction == 'right')) {
                $('#' + Marquee_ID).marquee({
                    speed: 10000,
                    gap: 50,
                    delayBeforeStart: 0,
                    direction: Direction,
                    duplicated: false,
                    pauseOnHover: true
                });
            }
            else
                if ((Direction == 'up') || (Direction == 'down')) {
                    //Up or Down
                    $('#' + Marquee_ID).marquee({
                        direction: Direction,
                        speed: 1500
                    });
                }

            //pause and resume links
            $('.pause').click(function (e) {
                e.preventDefault();
                $mwo.trigger('pause');
            });

            $('.resume').click(function (e) {
                e.preventDefault();
                $mwo.trigger('resume');
            });

            //toggle
            $('.toggle').hover(function (e) {
                $mwo.trigger('pause');
            }, function () {
                $mwo.trigger('resume');
            }).click(function (e) {
                e.preventDefault();
            })
        }
    }
}
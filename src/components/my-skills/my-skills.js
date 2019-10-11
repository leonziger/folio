import $ from 'jquery';
window.$ = window.jQuery = require('jquery');


(function ($) {
    'use strict';


    $.fn.LineProgressbar = function (options) {

        options = $.extend({
            percentage: null,
            ShowProgressCount: true,
            duration: 3000,

            // Styling Options
            fillBackgroundColor: '#3498db',
            backgroundColor: '#EEEEEE',
            radius: '0px',
            height: '10px',
            width: '100%'
        }, options);

        $.options = options;
        return this.each(function (index, el) {
            // Markup
            $(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');



            var progressFill = $(el).find('.proggress');
            var progressBar = $(el).find('.progressbar');


            progressFill.css({
                backgroundColor: options.fillBackgroundColor,
                height: options.height,
                borderRadius: options.radius
            });
            progressBar.css({
                width: options.width,
                backgroundColor: options.backgroundColor,
                borderRadius: options.radius
            });

            // Progressing
            progressFill.animate(
                {
                    width: options.percentage + "%"
                },
                {
                    step: function (x) {
                        if (options.ShowProgressCount) {
                            $(el).find(".percentCount").text(Math.round(x) + "%");
                        }
                    },
                    duration: options.duration
                }
            );
            ////////////////////////////////////////////////////////////////////
        });
    }
    $.fn.progressTo = function (next) {

        let options = $.options;

        return this.each(function (index, el) {

            var progressFill = $(el).find('.proggress');
            var progressBar = $(el).find('.progressbar');

            progressFill.animate(
                {
                    width: next + "%"
                },
                {
                    step: function (x) {
                        if (options.ShowProgressCount) {
                            $(el).find(".percentCount").text(Math.round(x) + "%");
                        }
                    },
                    duration: options.duration
                }
            );
            ////////////////////////////////////////////////////////////////////
        });
    }

})(jQuery);

// $('#photoshop').LineProgressbar({
//     percentage:90,
//     height: '30px',
//     fillBackgroundColor: '#2ecc71',
//     animation: true,
//     ShowProgressCount: true
// });
//
// $('#illustrator').LineProgressbar({
//     percentage:80,
//     height: '30px',
//     fillBackgroundColor: '#2ecc72',
//     animation: true,
//     ShowProgressCount: true
// });
//
// $('#htmlcss').LineProgressbar({
//     percentage:90,
//     height: '30px',
//     fillBackgroundColor: '#2ecc73',
//     animation: true,
//     ShowProgressCount: true
// });
//
// $('#phpmysql').LineProgressbar({
//     percentage:70,
//     height: '30px',
//     fillBackgroundColor: '#2ecc74',
//     animation: true,
//     ShowProgressCount: true
// });
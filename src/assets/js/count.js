(function ($) {
    $.fn.numberRock = function (options) {
        var defaults = {
            speed: 24,
            count: 100
        };
        var opts = $.extend({}, defaults, options);

        var count = opts["count"],
            div_by =  count > 600 ? 36 : 66 ,
            speed = Math.floor(count / div_by ),
            sum = 0,
            $display = this,
            run_count = count > 600 ? 10 : 5,
            int_speed = opts["speed"];
        var int = setInterval(function () {
            if (run_count <= div_by && speed != 0) {
                $display.text(sum = speed * run_count);
                run_count++;
            } else if (sum < count) {
                $display.text(++sum);
            } else {
                clearInterval(int);
            }
        }, int_speed);
    }

})(jQuery);
(function () {
    $.fn.animateOnScroll = function (options) {
        const element = this;
        element.data('doAnimation', true);

        // Config
        const defaults = {
            loop: false
        };
        $.extend(defaults, options);

        // Methods
        const animateOnScroll = {
            animate: function () {
                element.each(function (i, e) {
                    if (animateOnScroll.isOnScreen(e) && $(e).data('doAnimation')) {
                        $(this).data('isAnimationRunning', true);
                        $(this).data('doAnimation', false);

                        $(e).css('opacity', 0).delay($(e).attr('data-delay')).queue(function () {
                            $(e).addClass($(e).attr('data-action')).css('opacity', 1);
                            jQuery.dequeue(this)
                        })
                    }
                }).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    $(this).data('isAnimationRunning', false);
                })
            },
            reset: function () {
                element.each(function (i, e) {
                    if (!animateOnScroll.isOnScreen(e) && !$(e).data('isAnimationRunning')) {
                        $(e).data('doAnimation', true);
                        $(e).removeClass($(e).attr('data-action'))
                    }
                })
            },
            isOnScreen: function (elem) {
                if (elem.length === 0) {
                    return;
                }

                let $window = jQuery(window);
                let viewport_top = $window.scrollTop();
                let viewport_height = $window.height();
                let viewport_bottom = viewport_top + viewport_height;
                let $elem = jQuery(elem);
                let top = $elem.offset().top;
                let height = $elem.height();
                let bottom = top + height;

                return (top >= viewport_top && top < viewport_bottom) ||
                    (bottom > viewport_top && bottom <= viewport_bottom) ||
                    (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
            }
        };

        // Exec
        $(document).scroll(function () {
            // if (animateOnScroll.isOnScreen(element)) {
            //     animateOnScroll.animate();
            // } else {
            //     if (defaults.loop) {
            //         animateOnScroll.reset()
            //     }
            // }
            animateOnScroll.animate();
            if (defaults.loop) {
                animateOnScroll.reset()
            }
        });
        return this;
    };
}(jQuery));
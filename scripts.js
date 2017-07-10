jQuery(document).ready(function ($) {
    "use strict";

    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:517671,hjsv:5};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');

    $('.swipebox').swipebox({autoplayVideos: true});

    $('.newsletter-button-col a').click(function() {
        $('#mc-embedded-subscribe-form').submit();
    });

    function handleOutboundLinkClicks(href_value) {
        ga('send', 'event', {
            eventCategory: 'Link',
            eventAction: 'click',
            eventLabel: href_value,
            transport: 'beacon'
        });
    }

    $('#menu-menu-2 .menu-item a, #menu-token-sale-1 .menu-item a, a#more-info-button, .token-main a.sh-button, #token-sale a.sh-button, .sh-nav .menu-item a, a.sh-button, .sh-icon-group-item a, .sh-team a').click(function() {
		handleOutboundLinkClicks($(this).attr('href'));
    });
});


// use this extension: https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en
// go to stocktwits.com. click on the extension icon. click the add new button. paste this. reload stocktwits. 
// make sure it's enabled by clicking the extension icon again, and seeing that the selector to the left of stocktwits is green.
$(document).ready(function() {
    for (var i = 0; i < 20; i++) {
        setTimeout(function() {
            $('body').css('overflow', 'scroll');
            if ($('div[style*=background-color]')) {
                $('div[style*=background-color]').first().remove();
            }
        }, 500 * i);
    }
});

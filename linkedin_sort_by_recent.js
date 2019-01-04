// Using this chrome extension, run custom JS on websites. In this case for LinkedIn.
// https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?hl=en
$(document).ready(function() {
setTimeout(function() {
    $('button[class*=sort-dropdown__dropdown-trigger]').click();
    setTimeout(function() {
        $('li[class=sort-dropdown__list-item] button').each(function(row) {
            if ($(this).text().indexOf("Recent") >= 0) {
                $(this).click();
            }
        });
    }, 500);
}, 2000);
});
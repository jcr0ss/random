var totalCount = 0;
/*var headex = 1;
$('div[id=screener-content] td[class*=table-top]').each(function() {
    $(this).append(' ' + headex);
    headex = headex+1;
});*/
$('div[id=screener-content] tr[class*=table]').each(function() {
    var count = 0;
    var changeFromOpen = $(this).children('td:nth-child(61)').text().replace("%", "");
    var openPrice = -($(this).children('td:nth-child(66)').text())/(-(changeFromOpen/100)-1);
    openPrice = openPrice.toFixed(2);
    //Market Cap > 1.65 Billion
    if ($(this).children('td:nth-child(7)').text().includes('B')) {
        if ($(this).children('td:nth-child(7)').text().replace("B", "") >= 1.65) {
            count = count + 1;
            $(this).children('td:nth-child(7)').css('background-color', '#ffff00');
        }
    }
    //P/S < 0.95
    if ($(this).children('td:nth-child(11)').text() < 0.95) {
        count = count + 1;
        $(this).children('td:nth-child(11)').css('background-color', '#ffff00');
    }
    //EPS (ttm) < -0.37
    if ($(this).children('td:nth-child(17)').text() < -0.37) {
        count = count + 1;
        $(this).children('td:nth-child(17)').css('background-color', '#ffff00');
    }
    //EPS growth past 5 years > -15.20%
    if ($(this).children('td:nth-child(20)').text().replace("%", "") > -15.20) {
        count = count + 1;
        $(this).children('td:nth-child(20)').css('background-color', '#ffff00');
    }
	/*
    //EPS growth next 5 years > 10.10%
    if ($(this).children('td:nth-child(21)').text().replace("%", "") > 10.10) {
        count = count + 1;
        $(this).children('td:nth-child(21)').css('background-color', '#ffff00');
    }
	*/
    //Sales growth quarter over quarter < 22.80%
    if ($(this).children('td:nth-child(24)').text().replace("%", "") < 22.80) {
        count = count + 1;
        $(this).children('td:nth-child(24)').css('background-color', '#ffff00');
    }
    //Shares Float > 36.50
    if ($(this).children('td:nth-child(26)').text().includes('M')) {
        if ($(this).children('td:nth-child(26)').text().replace("M", "") > 36.50) {
            count = count + 1;
            $(this).children('td:nth-child(26)').css('background-color', '#ffff00');
        }
    } else if ($(this).children('td:nth-child(26)').text().includes('B')) {
        count = count + 1;
        $(this).children('td:nth-child(26)').css('background-color', '#ffff00');
    }
	/*
    //Insider Ownership < 0.40%
    if ($(this).children('td:nth-child(27)').text().replace("%", "") < 0.40) {
        count = count + 1;
        $(this).children('td:nth-child(27)').css('background-color', '#ffff00');
    }
    //Insider Transactions > -9.50%
    if ($(this).children('td:nth-child(28)').text().replace("%", "") > -9.50) {
        count = count + 1;
        $(this).children('td:nth-child(28)').css('background-color', '#ffff00');
    }
	*/
    //Return on Equity < -15.75%
    if ($(this).children('td:nth-child(34)').text().replace("%", "") < -15.75) {
        count = count + 1;
        $(this).children('td:nth-child(34)').css('background-color', '#ffff00');
    }
	/*
    //Quick Ratio > 0.55
    if ($(this).children('td:nth-child(37)').text() > 0.55) {
        count = count + 1;
        $(this).children('td:nth-child(37)').css('background-color', '#ffff00');
    }
	*/
    //Gross Margin < 20.85%
    if ($(this).children('td:nth-child(40)').text().replace("%", "") < 20.85) {
        count = count + 1;
        $(this).children('td:nth-child(40)').css('background-color', '#ffff00');
    }
    //Performance Week SOD > -0.05%
    if (($(this).children('td:nth-child(43)').text().replace("%", "") - changeFromOpen) > -0.05) {
        count = count + 1;
        $(this).children('td:nth-child(43)').css('background-color', '#ffff00');
    }
    //Performance Month SOD < -0.55%
    if (($(this).children('td:nth-child(44)').text().replace("%", "") - changeFromOpen) < -0.55) {
        count = count + 1;
        $(this).children('td:nth-child(44)').css('background-color', '#ffff00');
    }
    //Performance Quarter SOD < -9.85%
    if (($(this).children('td:nth-child(45)').text().replace("%", "") - changeFromOpen) < -9.85) {
        count = count + 1;
        $(this).children('td:nth-child(45)').css('background-color', '#ffff00');
    }
    //Performance Half Year SOD < -16.10%
    if (($(this).children('td:nth-child(46)').text().replace("%", "") - changeFromOpen) < -16.10) {
        count = count + 1;
        $(this).children('td:nth-child(46)').css('background-color', '#ffff00');
    }
    //Performance Year SOD < -38.85%
    if (($(this).children('td:nth-child(47)').text().replace("%", "") - changeFromOpen) < -38.85) {
        count = count + 1;
        $(this).children('td:nth-child(47)').css('background-color', '#ffff00');
    }
    //Volatility (Week) < 5.25%
    if ($(this).children('td:nth-child(51)').text().replace("%", "") < 5.25) {
        count = count + 1;
        $(this).children('td:nth-child(51)').css('background-color', '#ffff00');
    }
    //50-Day Simple Moving Average SOD < -2.05%
    if (($(this).children('td:nth-child(54)').text().replace("%", "") - changeFromOpen) < -2.05) {
        count = count + 1;
        $(this).children('td:nth-child(54)').css('background-color', '#ffff00');
    }
    //200-Day Simple Moving Average SOD < -11%
    if (($(this).children('td:nth-child(55)').text().replace("%", "") - changeFromOpen) < -11) {
        count = count + 1;
        $(this).children('td:nth-child(55)').css('background-color', '#ffff00');
    }
    //50-Day High SOD < -19%
    if (($(this).children('td:nth-child(56)').text().replace("%", "") - changeFromOpen) < -19) {
        count = count + 1;
        $(this).children('td:nth-child(56)').css('background-color', '#ffff00');
    }
    //50-Day Low SOD < 13.90%
    if (($(this).children('td:nth-child(57)').text().replace("%", "") - changeFromOpen) < 13.90) {
        count = count + 1;
        $(this).children('td:nth-child(57)').css('background-color', '#ffff00');
    }
	/*
    //Relative Strength Index (14) > 46.35
    if ($(this).children('td:nth-child(60)').text() > 46.35) {
        count = count + 1;
        $(this).children('td:nth-child(60)').css('background-color', '#ffff00');
    }
    //Gap > -4.10%
    if ($(this).children('td:nth-child(62)').text().replace("%", "") > -4.10) {
        count = count + 1;
        $(this).children('td:nth-child(62)').css('background-color', '#ffff00');
    }
	*/
    //Analyst Recom > 2.20
    if ($(this).children('td:nth-child(63)').text() > 2.20) {
        count = count + 1;
        $(this).children('td:nth-child(63)').css('background-color', '#ffff00');
    }
	/*
    //Average Volume * Price Yesterday Close > 22470.00
     var average_vol_thousands;
    if ($(this).children('td:nth-child(64)').text().includes('M')) {
	average_vol_thousands = $(this).children('td:nth-child(64)').text().replace("M", "") * 1000;
    }
    else {
	average_vol_thousands = $(this).children('td:nth-child(64)').text().replace("K", "");
    }
    if(average_vol_thousands * (openPrice-(openPrice*.06)).toFixed(2) > 22470.00){
        count = count + 1;
        $(this).children('td:nth-child(64)').css('background-color', '#ffff00');
    }
	*/
    //Relative Volume < 1.40
    if ($(this).children('td:nth-child(65)').text() < 1.40) {
        count = count + 1;
        $(this).children('td:nth-child(65)').css('background-color', '#ffff00');
    }
	/*
    // ((Target Price - Price)/Price)*100 > -6.35
    if ((($(this).children('td:nth-child(70)').text() - openPrice) / openPrice) * 100 > -6.35) {
        count = count + 1;
        $(this).children('td:nth-child(70)').css('background-color', '#ffff00');
    }
    */
      $(this).children('td:nth-child(61)').append('(Open: ' + openPrice + ')');
        $(this).children('td:nth-child(61)').append(' (Count: ' + count + ')');
        $(this).children('td:nth-child(61)').append(' (Stop Loss: ' + (openPrice-(openPrice*.0948)).toFixed(2) + ')');
        $(this).children('td:nth-child(61)').append(' (Buy At: ' + (openPrice-(openPrice*.06)).toFixed(2) + ')');
    if (count > 7) {
        totalCount = totalCount + 1;
        $(this).css('background-color', '#7FFF00');
      //  $(this).children('td').css('background-color', '#7FFF00');
    }

});

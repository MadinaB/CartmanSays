'use strict';

var CartmanQuotes = ['I am fat, but you are ugly. I can diet.' , 
'I am big-boned.' , 
'I just have not grown into my body yet.',
'I just have sweet hockey body',
'I am festively plump'];
var r = 0;
var CartmanQuotesSize = 5;
async function sendQuote(){
    //var r = parseInt((Math.random()*100)%CartmanQuotesSize);
    chrome.notifications.create({
        type:     'basic',
        iconUrl:  'Cartman.png',
        title:    'Cartman says',
        message:  CartmanQuotes[r],
        //message: r,
        priority: 0});
    r++;
    if(r>=5){r=0;}
}
setInterval(sendQuote, 2000);


var CartmanQuotes = ['I am fat, but you are ugly. I can diet.' , 
'I am big-boned.' , 
'I just have not grown into my body yet.',
'I just have sweet hockey body',
'I am festively plump'];
var r = 0;
var CartmanQuotesSize = 5;

function CartmanSay() {
    var r = parseInt((Math.random()*100)%CartmanQuotesSize);
    new Notification(CartmanQuotes[r],{icon: 'Cartman.png'});
}
if (window.Notification) {
    setInterval(CartmanSay, 1000);
}

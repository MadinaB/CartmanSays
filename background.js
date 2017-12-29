var CartmanQuotes = ['I am fat, but you are ugly. I can diet.' , 
'I am big-boned.' , 
'I just have not grown into my body yet.',
'I just have sweet hockey body',
'I am festively plump'];
var CartmanSays = ['festively_plump', 'big_boned'];
var r = 0;
var CartmanQuotesSize = 5;
var name=CartmanSays[1];
function CartmanSay() {
    var r = parseInt((Math.random()*100)%CartmanQuotesSize);
    new Notification(CartmanQuotes[r],{icon: 'Cartman.png'});
    var audio = (new Audio('audio/'+name+'.mp3'));
    audio.volume=0.2;
    audio.play();
}
if (window.Notification) {
    setInterval(CartmanSay, 10000);
}

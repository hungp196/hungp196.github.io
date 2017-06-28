var cards = ['f1','f2','f3','f4','f5'];

function flip(card) {
  $(card).toggleClass('flipped');
  $(card).css('pointer-events', 'none');
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}

$(function() {
  cards = cards.concat(cards);
  shuffle(cards);
  var html = '';
  for (var i = 0; i < cards.length; i++) {
    html += '<div class="grid">'+
    '<div class="card" onclick="flip(this)">'+
    '<div class="front"><img src="img/'+cards[i]+'.jpg" alt=""></div>'+
    '<div class="back"><img src="img/back.jpg" alt=""></div>'+
    '</div></div>';
  }
  $('.content').html(html);
});

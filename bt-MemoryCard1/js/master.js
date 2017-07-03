var cards = ['f1','f2','f3'];
var current = null;
var sum = 0;

function flip(card) {
  document.getElementById("choise-music").load();
  document.getElementById("choise-music").play();
  $(card).toggleClass('flipped');

  if(!current){
    current = $(card);
    current.css('pointer-events', 'none');
  }else{
    if(current.attr('data-name') != $(card).attr('data-name')){
      setTimeout(function(){
        current.toggleClass('flipped');
        $(card).toggleClass('flipped');
        current = null;
      },200);
    }else {
      document.getElementById("bg-music").load();
      document.getElementById("bg-music").play();
      setTimeout(function(){
        current.css('opacity','0');
        $(card).css('opacity','0');
        current = null;
      },100);
      sum++;
    }
    current.css('pointer-events', 'auto');
  }


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
  swal({
    title: "Are you ready?",
    text: "Try the best",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    closeOnConfirm: true,
    closeOnCancel: false
  },
  function(isConfirm){
    if (isConfirm) {
      document.getElementById("theme-music").play();
      cards = cards.concat(cards);
      shuffle(cards);
      var html = '';
      for (var i = 0; i < cards.length; i++) {
        html += '<div class="grid">'+
        '<div class="card" data-name="'+cards[i]+'" onclick="flip(this)">'+
        '<div class="front"><img src="img/'+cards[i]+'.jpg" alt=""></div>'+
        '<div class="back"><img src="img/back.jpg" alt=""></div>'+
        '</div></div>';
      }
      $('.content').html(html);
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 100);
      function frame() {
          if (width >= 100) {
              swal("Game Over!!!");
          } else {
              if(sum<3){
                width++;
                elem.style.width = width + '%';
              }else {
                clearInterval(id);
                swal("Good Game!!!");
              }
          }
      }
    }else {
      swal("Start Again Please!");
    }
  });
  //document.getElementById("theme-music").play();
});

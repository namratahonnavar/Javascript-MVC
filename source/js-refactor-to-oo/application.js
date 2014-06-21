$(document).ready(function() {

  var die = "<div class='die'>0</div>"

   var addDie = function (){
    $('.dice').append(die);
  }

  $('#roller button.add').on('click', function() {
    addDie();
  });

  $('#roller button.roll').on('click', function() {
      rollDie();
  });

  var rollDie = function () {
      $('.die').each(function(index, die) {
      $(die).text(randomValue)
    })
  };

  var randomValue = function() {
  return Math.floor((Math.random()*6)+1);
  };

});
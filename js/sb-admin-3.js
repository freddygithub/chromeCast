(function($) {
  "use strict"; 
    
var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'hotpink', 'lightgreen', 'darkred', 'lightblue'];

$('.profile').each(function() {
    $(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
});

})(jQuery); // End of use strict

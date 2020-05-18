

var body = $('body');
var colors = ['#dfb642','#b182e1'];
var currentIndex = 0;
setInterval(function () {
   body.css({
     backgroundColor: colors[currentIndex]
   // document.querySelectorAll("body").style.backgroundcColor = "colors[currentIndex]";
   });
   if (!colors[currentIndex]) {
       currentIndex = 0;
   } else {
       currentIndex++;
   }
}, 500);

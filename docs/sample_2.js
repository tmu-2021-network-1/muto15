var btn = document.getElementById("parallax");
var baseva = 0;
var backva = -300;
var deepva = -700;
var on = false;
var basebl = 1;
var backbl = 3;
var deepbl = 6;


btn.addEventListener(
  "scroll",
  function () {
    // console.log('クリックされました！');
    // baseva += 30;
    // var base1 = document.getElementById('base1');
    // base1.style.transform = 'translateZ('+baseva+'px)';

    // backva += 30;
    // var back1 = document.getElementById('back1');
    // back1.style.transform = 'translateZ('+backva+'px)';
    // var back2 = document.getElementById('back2');
    // back2.style.transform = 'translateZ('+backva+'px)';

    // deepva += 30;
    // var deep1 = document.getElementById('deep1');
    // deep1.style.transform = 'translateZ('+deepva+'px)';
    // var deep2 = document.getElementById('deep2');
    // deep2.style.transform = 'translateZ('+deepva+'px)';

    // var back1 = document.getElementById('back1');
    // back1.style.backgroundColor = '#f00';

    // var deep1 = document.getElementById('deep1');
    // deep1.style.backgroundColor = '#f00';

    var clientRect = base1.getBoundingClientRect();
    var x = clientRect.left;

    // 画面の上端から、要素の上端までの距離
    var y = clientRect.top;
    console.log(y);
    if (y == 0) {
      // 画面の左端から、要素の左端までの距離

      // base1.style.backgroundColor = "#f00";
      console.log("kitya");
      on = !on;
    }
    //   else{
    //     base1.style.backgroundColor = "#ff0";

    //   }
  },
  false
);

var g3 = document.getElementById("base1");
var timeon = 0;

btn.addEventListener("scroll", function () {});

window.addEventListener("DOMContentLoaded", function () {
  // 0.5秒ごとに実行
  //setInterval(() => {    console.log("Interval type1");  }, 500);
  // 1秒ごとに実行
  setInterval(() => {
    if (on) {
        timeon += 20;
        if(timeon < 750){
            console.log(timeon);
          btn.style.overflow = "hidden";
    
         
          baseva += 5;
          basebl -= 0.05;
          var base1 = document.getElementById("base1");
          base1.style.transform = "translateZ(" + baseva + "px)";
          base1.style.filter = "blur(" + basebl + "px)";
          
    
          backva += 5;
          backbl -= 0.05;
          var back1 = document.getElementById("back1");
          back1.style.transform = "translateZ(" + backva + "px) scale(1.4)";
          back1.style.filter = "blur(" + backbl + "px)";
          //back1.style.transform = "scale(1.4)";
          var back2 = document.getElementById("back2");
          back2.style.transform = "translateZ(" + backva + "px) scale(1.4)";
    
          deepva += 5;
          deepbl -= 0.05;
          var deep1 = document.getElementById("deep1");
          deep1.style.transform = "translateZ(" + deepva + "px) scale(1.4)";
          deep1.style.filter = "blur(" + deepbl + "px)";
          var deep2 = document.getElementById("deep2");
          deep2.style.transform = "translateZ(" + deepva + "px) scale(1.4)";
            }
        if(timeon  >750 && timeon  <1900){
        console.log(timeon);
      btn.style.overflow = "hidden";

      
      baseva += 15;
      basebl -= 0.05;
      var base1 = document.getElementById("base1");
      base1.style.transform = "translateZ(" + baseva + "px)";
      base1.style.filter = "blur(" + basebl + "px)";

      backva += 15;
      backbl -= 0.055;
      var back1 = document.getElementById("back1");
      back1.style.transform = "translateZ(" + backva + "px) scale(1.4)";
      back1.style.filter = "blur(" + backbl + "px)";
      var back2 = document.getElementById("back2");
      back2.style.transform = "translateZ(" + backva + "px) scale(1.4)";

      deepva += 15;
      deepbl -= 0.096;
      var deep1 = document.getElementById("deep1");
      deep1.style.transform = "translateZ(" + deepva + "px) scale(1.4)";
      deep1.style.filter = "blur(" + deepbl + "px)";
      var deep2 = document.getElementById("deep2");
      deep2.style.transform = "translateZ(" + deepva + "px) scale(1.4)";
      console.log(basebl);
      console.log(baseva);
      console.log(backbl);
      console.log(backva);
      console.log(deepbl);
      console.log(deepva);
        }

      if(timeon >= 1900){
        var deep1 = document.getElementById("deep1");
        console.log("wa");
    }
    }
  }, 50);

});

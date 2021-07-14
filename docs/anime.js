var btn = document.getElementById("parallax");
var baseva = 0;
var backva = -300;
var deepva = -700;
var on = false;
var basebl = 1;
var backbl = 3;
var deepbl = 6;
var blwhwidth;
var blwhop;
var downpos;
var width1;
var width2;
var width3;
var width4;
var width5;
var starton = false;
var sheet2pos;
var sheet3pos;

const map = (value, fromMin, fromMax, toMin, toMax) => {
  let result = 0;

  result =
    value <= fromMin
      ? toMin
      : value >= fromMax
      ? toMax
      : (() => {
          let ratio = (toMax - toMin) / (fromMax - fromMin);
          return (value - fromMin) * ratio + toMin;
        })();

  return result;
};

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
    // console.log(y);
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
  var kitai = document.getElementById("kitai");
  kitai.style.opacity = 0;
  var hikan = document.getElementById("hikan");
  hikan.style.opacity = 0;
  // div要素を生成
  var kitaip = document.createElement("p");
  // classを追加
  kitaip.textContent = "期待";

  // 生成したdiv要素を追加する
  kitai.appendChild(kitaip);

  var hikanp = document.createElement("p");
  // classを追加
  hikanp.textContent = "悲観";

  // 生成したdiv要素を追加する
  hikan.appendChild(hikanp);

  // 0.5秒ごとに実行
  //setInterval(() => {    console.log("Interval type1");  }, 500);
  // 1秒ごとに実行
  setInterval(() => {
    if (on) {
      timeon += 20;
      if (timeon < 750) {
        //console.log(timeon);
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
      if (timeon > 750 && timeon < 1850) {
        //console.log(timeon);
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
        //   console.log(basebl);
        //   console.log(baseva);
        //   console.log(backbl);
        //   console.log(backva);
        //   console.log(deepbl);
        //   console.log(deepva);
      }

      if (timeon >= 1850) {
        btn.remove();
      }
    }
  }, 50);
});

var blwh = document.getElementById("blwh");
var kara = document.getElementById("kara");

blwh.addEventListener(
  "scroll",
  function () {
    var blwhclientRect = kara.getBoundingClientRect();
    // 画面の上端から、要素の上端までの距離
    var y = blwhclientRect.top;
    // console.log(y);
    blwhwidth = map(-y, -815, -415, 0, 90);
    blwhop = -map(-y, -815, -415, -1, 0);
    // console.log(blwhop);

    var left = document.getElementById("left");
    left.style.width = +blwhwidth + "vh";
    left.style.opacity = 1 - blwhop;
    var kitai = document.getElementById("kitai");
    kitai.style.opacity = blwhop;
    var right = document.getElementById("right");
    right.style.width = +blwhwidth + "vh";
    right.style.opacity = 1 - blwhop;
    var hikan = document.getElementById("hikan");
    hikan.style.opacity = blwhop;
  },
  false
);

var up = document.getElementById("up");
var kara = document.getElementById("kara");

blwh.addEventListener(
  "scroll",
  function () {
    var upclientRect = up.getBoundingClientRect();
    // 画面の上端から、要素の上端までの距離
    var y = upclientRect.top;
    console.log(y);
    downpos = map(-y, -815, 0, -50, 50);
    width1 = map(-y, -115, 0, 0, 200);
    width2 = map(-y, -90, 0, 0, 200);
    width3 = map(-y, -185, 0, 0, 200);
    width4 = map(-y, -75, 0, 0, 200);
    width5 = map(-y, -100, 0, 0, 200);
    sheet2pos = map(-y, 400, 670, -180, 55);
    sheet3pos = map(-y, 550, 815, -100, 30);
    // console.log(blwhop);

    var downtop = document.getElementById("down");
    downtop.style.top = +downpos + "%";
    var rikowidth = document.getElementById("riko");
    rikowidth.style.width = +width1 + "vh";
    var doryokuwidth = document.getElementById("doryoku");
    doryokuwidth.style.width = +width2 + "vh";
    var sinnenwidth = document.getElementById("sinnen");
    sinnenwidth.style.width = +width3 + "vh";
    var yasinwidth = document.getElementById("yasin");
    yasinwidth.style.width = +width4 + "vh";
    var seigiwidth = document.getElementById("seigi");
    seigiwidth.style.width = +width5 + "vh";

    var taidawidth = document.getElementById("taida");
    taidawidth.style.width = +width4 + "vh";
    var hinikuwidth = document.getElementById("hiniku");
    hinikuwidth.style.width = +width5 + "vh";
    var kenkyowidth = document.getElementById("kenkyo");
    kenkyowidth.style.width = +width2 + "vh";
    var reisyouwidth = document.getElementById("reisyou");
    reisyouwidth.style.width = +width3 + "vh";
    var kyomuwidth = document.getElementById("kyomu");
    kyomuwidth.style.width = +width1 + "vh";

    var sheet2left = document.getElementById("sheet2");
    sheet2left.style.left = +sheet2pos + "vh";
    var sheet3top = document.getElementById("sheet3");
    sheet3top.style.top = +sheet3pos + "vh";

    if (-631 > y && y > -633) {
      new Vivus("risei", {
        start: "autostart",
        type: "delayed",
        duration: 200,
      });
    }
    if (-701 > y && y > -703) {
      new Vivus("mukansin", {
        start: "autostart",
        type: "delayed",
        duration: 200,
      });
    }
    if (-451 > y && y > -453) {
      new Vivus("dakyou", {
        start: "autostart",
        type: "delayed",
        duration: 200,
      });
    }
    if (-401 > y && y > -403) {
      new Vivus("senbou", {
        start: "autostart",
        type: "delayed",
        duration: 200,
      });
    }
    if (-501 > y && y > -503) {
      new Vivus("syuutyaku", {
        start: "autostart",
        type: "delayed",
        duration: 200,
      });
    }
    if (-551 > y && y > -553) {
      new Vivus("kodoku", {
        start: "autostart",
        type: "delayed",
        duration: 200,
      });
    }
    if (-461 > y && y > -463) {
      new Vivus("kanpeki", {
        start: "autostart",
        type: "delayed",
        duration: 200,
      });
    }
  },
  false
);

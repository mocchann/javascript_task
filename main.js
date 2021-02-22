
  
  //スタート
  $("#stopWatch #buttonStart").click(function(){
    $("#stopWatch .time").html("00:00:00:0");
    //カウントアップを開始
    timer = setInterval("countUp()",100);
    //スタートボタンを非表示
    $(this).attr("disabled","disabled");
    //ストップボタンを表示
    $("#stopWatch #buttonStop").removeAttr("disabled");
  });
  
  //ストップ
  $("#stopWatch #buttonStop").click(function(){
    //タイマー処理をキャンセル
    clearInterval(timer);
    //ストップボタンを非表示
    $(this).attr("disabled","disabled");
    //スタートボタンとリセットボタンを表示
    $("#stopWatch #buttonStart").removeAttr("disabled");
    $("#stopWatch #buttonReset").removeAttr("disabled");
  });
  
  //リセット
  $("#stopWatch #buttonReset").click(function(){
    //全桁を０にリセット
    msec = 0;
    sec  = 0;
    min  = 0;
    hour = 0;
    //タイムを初期化
    $("#stopWatch .time").html("00:00:00:0");
    //ストップボタンとリセットボタンを非表示
    $(this).attr("disabled","disabled");
    $("#stopWatch #buttonStop").attr("disabled","disabled");
    $("#stopWatch #buttonStart").removeAttr("disabled");
  });
  
msec = 0;
sec  = 0;
min  = 0;
hour = 0;


function countUp() {
  
msec += 1;

// ミリ秒

if(msec > 9) {
  msec = 0;
  sec += 1;
}

// 秒

if(sec > 59){
  sec = 0;
  min += 1;
}

// 分

if(min > 59){
  min = 0;
  hour += 1;
}

msecNumber = msec;

　　// 秒
　　if(sec < 10){
    secNumber = "0"+ sec.toString();
    } else {
        secNumber = sec;
    }

    // 分
    if (min < 10) {
    minNumber = "0" + min.toString();
    } else {
        minNumber = min;
    }

    // 時
    if (hour < 10) {
    hourNumber = "0" + hour.toString();
    } else {
        hourNumber = hour;
    }


    // 表示
$("#stopWatch .time").html(hourNumber + ":" + minNumber + ":" + secNumber + ":" + msecNumber);

}
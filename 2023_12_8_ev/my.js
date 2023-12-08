$(function(){
  
  // イベント処理
  function mymousedown(ev){
    console.log("mouse down:"+ev.pageX+","+ev.pageY);
  }
  function mymouseup(ev){
    console.log("mouse up:"+ev.pageX+","+ev.pageY);
  }
  function mymouseenter(ev){
    console.log("mouse enter:"+ev.pageX+","+ev.pageY);
  }
  function mymouseleave(ev){
    console.log("mouse leave:"+ev.pageX+","+ev.pageY);
  }
  function mymousemove(ev){
    console.log("mouse move:"+ev.pageX+","+ev.pageY);
  }
  function mykeydown(ev){
    console.log("key down:"+ev.key);
  }
  function mykeyup(ev){
    console.log("key up:"+ev.key);
  }
  
  // グローバル変数
  var can=$("#can");
  
  // イベントハンドラの登録
  can.attr("tabindex",0);
  can.mousedown(mymousedown);
  can.mouseup(mymouseup);
  can.mouseenter(mymouseenter);
  can.mouseleave(mymouseleave);
  can.mousemove(mymousemove);
  can.keydown(mykeydown);
  can.keyup(mykeyup);
});
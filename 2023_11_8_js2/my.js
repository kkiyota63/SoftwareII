$(function(){

    alert("もう読み込みました。");
    function add(a,b){
      return a+b;
    }
  
    var span=$("#sum");
    span.text(add(2,3));
  });

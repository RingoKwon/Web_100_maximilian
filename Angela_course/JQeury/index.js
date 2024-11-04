// $("h1").css("color", "blue");
$("button").text("hey");
$("button").text("<em>hey</em>");
$("button").html("<em>hey</em>");
$(".c2").css("color", "red");

$("a").attr("href", "www.hh.com");

$("h1").click(function () {
  $("h1").css("color", "black");
});

$("button").click(function () {
  $("h1").css("color", "yellow");
});

// 방법 1: input 이벤트 사용 (권장)

// 또는

// 방법 2: keydown 이벤트 사용
$("input").keypress(function(event){
    $("h1").text(event.key)
    event.key
});
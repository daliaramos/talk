$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>hello</li>");
    $("ul#webpage").prepend("<li>hello 2 u</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>goodbye</li>");
    $("ul#webpage").prepend("<li>goodbye dear user</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });
  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop copying me</li>");
    $("ul#webpage").prepend("<li>no you</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("h2").css("background-color", "green");
});

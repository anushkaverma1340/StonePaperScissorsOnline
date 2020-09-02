var var1 = Math.random() * 3;
var1 = Math.floor(var1) + 1;
var var2 = Math.random() * 3;
var2 = Math.floor(var2) + 1;

if(var1===1 && var2===2){
  $(".p1-img").attr("src","public/images/sps-img-1.jpg");
  $(".p2-img").attr("src","public/images/sps-img-2.jpg");
  document.querySelector("h2").textContent = "Player-2 Wins!";
}
else if(var1===2 && var2===1){
  $(".p1-img").attr("src","public/images/sps-img-2.jpg");
  $(".p2-img").attr("src","public/images/sps-img-1.jpg");
  document.querySelector("h2").textContent = "Player-1 Wins!";
}
else if(var1===2 && var2===3){
  $(".p1-img").attr("src","public/images/sps-img-2.jpg");
  $(".p2-img").attr("src","public/images/sps-img-3.jpg");
  document.querySelector("h2").textContent = "Player-2 Wins!";
}
else if(var1===3 && var2===2){
  $(".p1-img").attr("src","public/images/sps-img-3.jpg");
  $(".p2-img").attr("src","public/images/sps-img-2.jpg");
  document.querySelector("h2").textContent = "Player-1 Wins!";
}
else if(var1===1 && var2===3){
  $(".p1-img").attr("src","public/images/sps-img-1.jpg");
  $(".p2-img").attr("src","public/images/sps-img-3.jpg");
  document.querySelector("h2").textContent = "Player-1 Wins!";
}
else if(var1===3 && var2===1){
  $(".p1-img").attr("src","public/images/sps-img-3.jpg");
  $(".p2-img").attr("src","public/images/sps-img-1.jpg");
  document.querySelector("h2").textContent = "Player-2 Wins!";
}
else if(var1===1 && var2===1){
  $(".p1-img").attr("src","public/images/sps-img-1.jpg");
  $(".p2-img").attr("src","public/images/sps-img-1.jpg");
  document.querySelector("h2").textContent = "It's a Draw!";
}
else if(var1===2 && var2===2){
  $(".p1-img").attr("src","public/images/sps-img-2.jpg");
  $(".p2-img").attr("src","public/images/sps-img-2.jpg");
  document.querySelector("h2").textContent = "It's a Draw!";
}
else if(var1===3 && var2===3){
  $(".p1-img").attr("src","public/images/sps-img-3.jpg");
  $(".p2-img").attr("src","public/images/sps-img-3.jpg");
  document.querySelector("h2").textContent = "It's a Draw!";
}

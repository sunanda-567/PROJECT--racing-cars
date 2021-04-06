canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car_width=190;
car_height=190;

car_x=20;
car_y=10;

background_image="racing.jpg";
car_image="car1.png";

function add(){
    background_imagetag=new Image();
    background_imagetag.onload=upload_background;
background_imagetag.src=background_image;

 car_imagetag=new Image();
    car_imagetag.onload=upload_car;
car_imagetag.src=car_image;

car_imagetag=new Image();
    car_imagetag.onload=upload_car;
car_imagetag.src=car_image;

}
function upload_background(){
  ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
  }

  function upload_car(){
    ctx.drawImage(car_imagetag, car_x, car_y, car_width, car_height);
  }
  window.addEventListener("keydown", my_keydown);
  function my_keydown(e){
      keyPressed=e.keyCode;
        console.log (keyPressed);

        if(keyPressed=='38')
        {
            up();
            console.log("up");
        }
        if(keyPressed=='40')
        {
            down();
            console.log("down");
        }
        if(keyPressed=='37')
        {
            left();
            console.log("left");
        }
        if(keyPressed=='39')
        {
            right();
            console.log("right");
        }
          
  }
var c=document.getElementById("labirintCanvas");    //canvas
var ctx = c.getContext("2d");   //use za risanje drugo

ctx.strokeStyle="black";    //barva
ctx.lineWidth=2;    //sirina crte
ctx.lineCap="round";

ctx.moveTo(261,1);  //premakni
ctx.lineTo(1,1);    //risi crto
ctx.lineTo(1,562);
ctx.lineTo(261,562);

ctx.moveTo(301,562);    //okvir labirinta
ctx.lineTo(562,562);
ctx.lineTo(562,1);
ctx.lineTo(301,1);

ctx.moveTo(261,80);     //risanje labirinta
ctx.lineTo(261,30);
ctx.lineTo(110,30);
ctx.lineTo(110,60);

ctx.moveTo(110,1);
ctx.lineTo(110,30);

ctx.moveTo(55,70);
ctx.lineTo(80,70);
ctx.lineTo(80,30);
ctx.lineTo(30,30);
ctx.lineTo(30,170);
ctx.lineTo(80,170);
ctx.lineTo(80,130);
ctx.lineTo(55,130);

ctx.moveTo(30,100);
ctx.lineTo(80,100);

ctx.moveTo(1,200);
ctx.lineTo(110,200);
ctx.lineTo(110,100);

ctx.moveTo(110,200);
ctx.lineTo(180,200);

ctx.moveTo(30,200);
ctx.lineTo(30,260);

ctx.moveTo(30,290);
ctx.lineTo(30,340);
ctx.lineTo(110,340);

ctx.moveTo(110,290);
ctx.lineTo(110,480);

ctx.moveTo(1,380);
ctx.lineTo(80,380);
ctx.lineTo(80,450);

ctx.moveTo(40,420);
ctx.lineTo(40,480);
ctx.lineTo(200,480);

ctx.moveTo(80,480);
ctx.lineTo(80,520);

ctx.moveTo(40,520);
ctx.lineTo(130,520);
ctx.lineTo(130,562);

ctx.moveTo(160,520);
ctx.lineTo(220,520);

ctx.moveTo(190,520);
ctx.lineTo(190,562);

ctx.moveTo(150,80);
ctx.lineTo(210,80);
ctx.lineTo(210,150);
ctx.lineTo(150,150);

ctx.moveTo(150,115);
ctx.lineTo(301,115);
ctx.lineTo(301,70);
ctx.lineTo(400,70);

ctx.moveTo(301,1);
ctx.lineTo(301,35);
ctx.lineTo(380,35);

ctx.moveTo(400,70);
ctx.lineTo(400,240);

ctx.moveTo(400,150);
ctx.lineTo(320,150);

ctx.moveTo(290,150);
ctx.lineTo(250,150);
ctx.lineTo(250,250);
ctx.lineTo(210,250);
ctx.lineTo(210,150);

ctx.moveTo(210,250);
ctx.lineTo(70,250);
ctx.lineTo(70,310);

ctx.moveTo(150,250);
ctx.lineTo(150,350);

ctx.moveTo(110,390);
ctx.lineTo(150,390);

ctx.moveTo(180,390);
ctx.lineTo(280,390);
ctx.lineTo(280,290);

ctx.moveTo(180,290);
ctx.lineTo(300,290);
ctx.lineTo(300,200);
ctx.lineTo(350,200);

ctx.moveTo(180,390);
ctx.lineTo(180,330);

ctx.moveTo(210,360);
ctx.lineTo(210,290);

ctx.moveTo(245,390);
ctx.lineTo(245,330);

ctx.moveTo(110,435);
ctx.lineTo(240,435);
ctx.lineTo(240,480);

ctx.moveTo(400,240);
ctx.lineTo(340,240);
ctx.lineTo(340,320);
ctx.lineTo(320,320);
ctx.lineTo(320,350);

ctx.moveTo(280,390);
ctx.lineTo(280,480);
ctx.lineTo(240,480);

ctx.moveTo(301,115);
ctx.lineTo(360,115);

ctx.moveTo(320,380);
ctx.lineTo(340,380);
ctx.lineTo(340,320);

ctx.moveTo(280,420);
ctx.lineTo(380,420);
ctx.lineTo(380,480);
ctx.lineTo(350,480);
ctx.lineTo(350,450);

ctx.moveTo(280,450);
ctx.lineTo(315,450);
ctx.lineTo(315,480);

ctx.moveTo(380,380);
ctx.lineTo(380,280);
ctx.lineTo(480,280);

ctx.moveTo(435,280);
ctx.lineTo(435,200);

ctx.moveTo(380,310);
ctx.lineTo(435,310);
ctx.lineTo(435,340);
ctx.lineTo(500,340);
ctx.lineTo(500,390);
ctx.lineTo(562,390);

ctx.moveTo(400,170);
ctx.lineTo(470,170);
ctx.lineTo(470,240);

ctx.moveTo(480,280);
ctx.lineTo(510,280);

ctx.moveTo(510,240);
ctx.lineTo(510,170);
ctx.lineTo(562,170);

ctx.moveTo(520,70);
ctx.lineTo(520,170);

ctx.moveTo(380,70);
ctx.lineTo(380,35);

ctx.moveTo(400,110);
ctx.lineTo(490,110);


ctx.moveTo(520,140);
ctx.lineTo(430,140);


ctx.moveTo(520,70);
ctx.lineTo(430,70);

ctx.moveTo(430,40);
ctx.lineTo(520,40);
ctx.lineTo(520,2);

ctx.moveTo(562,420);
ctx.lineTo(460,420);
ctx.lineTo(460,380);
ctx.lineTo(420,380);

ctx.moveTo(460,420);
ctx.lineTo(460,520);
ctx.lineTo(490,520);
ctx.lineTo(490,460);

ctx.moveTo(520,420);
ctx.lineTo(520,520);

ctx.moveTo(420,562);
ctx.lineTo(420,420);

ctx.moveTo(301,562);
ctx.lineTo(301,520);
ctx.lineTo(380,520);


ctx.stroke();   //zapolni vse
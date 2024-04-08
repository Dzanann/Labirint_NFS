var c=document.getElementById("potCanvas");    //canvas
var ctx = c.getContext("2d");   //use za risanje drugo
ctx.strokeStyle="black";    //barva
ctx.lineWidth=2;    //sirina crte
ctx.lineCap="round";


const xKoordinate=[281, 281, 235, 235, 130, 130, 195, 195, 50, 50, 90, 90, 130, 130, 165, 165, 275, 275, 375, 375, 320, 320, 300, 300, 400, 400, 281, 281];
const yKoordinate=[2, 97, 97, 55, 55, 175, 175, 225, 225, 325, 325, 270, 270, 370, 370, 270, 270, 175, 175, 220, 220, 305, 305, 400, 400, 500, 500, 562];

var x=xKoordinate[0];
var y=yKoordinate[0];

function premakni(){
    ctx.moveTo(x,y);
}

function risiX(){
    ctx.lineTo(x-2,y);
}

function risiY(){
    ctx.lineTo(x,y-2);
}

function risiPike(){
    ctx.beginPath();
    ctx.moveTo(281,2);


    for(let i=0;i<xKoordinate;i++){
        if(x<xKoodrinate[i] && y==yKoordinat[i]){
            //dokler je x manjsi povecaj x
            while(x<xKoordinate[i]){
                x=+4;
                if((xKoordinate[i]-x)<4){
                    x=xKoordinate[i];
                }
                premakni();
            }
        }else if(y<yKoordinate[i] && x==xKoordinate[i]){
            //dokler je y manjsi povecaj y
            while(y<yKoordinate[i]){
                y=+4;
                if((yKoordinate[i]-y)<4){
                    y=yKoordinate[i];
                }
            }
        }else if(x>xKoodrinate[i] && y==yKoordinat[i]){
            //dokler je x vecji pomanjsaj x
            x=x-4;
            while(x>xKoordinate[i]){
                x=x-4;
                if((x-xKoordinate[i])<4){
                    x=xKoordinate[i];
                }
            }
        }else if(y>yKoordinate[i] && x==xKoordinate[i]){
            //dokler je y vecji pomanjsaj y
            y=y-4;
            while(y>yKoordinate[i]){
                y=y-4;
                if((y-yKoordinate[i])<4){
                    y=yKoordinate[i];
                }
            }
        }
    }
    ctx.stroke();
}

setInterval(drawPath, 500);
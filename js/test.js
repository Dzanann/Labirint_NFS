var c = document.getElementById("potCanvas"); // canvas
var ctx = c.getContext("2d"); // context for drawing

// Set drawing styles
ctx.strokeStyle = "red"; // color
ctx.lineWidth = 2; // line width
ctx.lineCap = "round"; // line cap style

const xKoordinate = [];
const yKoordinate = [];


var x = xKoordinate[0];
var y = yKoordinate[0];

function drawPath() {
  ctx.beginPath();
  ctx.moveTo(x, y);

  for (let i = 0; i < xKoordinate.length; i++) {
    if (x < xKoordinate[i] && y === yKoordinate[i]) {
      // Move right
      while (x < xKoordinate[i]) {
        x += 4;
        if ((xKoordinate[i] - x) < 4) {
          x = xKoordinate[i];
        }
        ctx.lineTo(x, y);
      }
    } else if (y < yKoordinate[i] && x === xKoordinate[i]) {
      // Move down
      while (y < yKoordinate[i]) {
        y += 4;
        if ((yKoordinate[i] - y) < 4) {
          y = yKoordinate[i];
        }
        ctx.lineTo(x, y);
      }
    } else if (x > xKoordinate[i] && y === yKoordinate[i]) {
      // Move left
      while (x > xKoordinate[i]) {
        x -= 4;
        if ((x - xKoordinate[i]) < 4) {
          x = xKoordinate[i];
        }
        ctx.lineTo(x, y);
      }
    } else if (y > yKoordinate[i] && x === xKoordinate[i]) {
      // Move up
      while (y > yKoordinate[i]) {
        y -= 4;
        if ((y - yKoordinate[i]) < 4) {
          y = yKoordinate[i];
        }
        ctx.lineTo(x, y);
      }
    }
  }

  // Draw the path
  ctx.stroke();
}



// Call drawPath every 1000ms (1 second)
setInterval(drawPath, 1000);

drawPath();
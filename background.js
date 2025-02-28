const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

document.body.style.margin = "0";
document.body.style.position = "relative";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const POINT_COUNT = 40;
const points = [];

// Initialize random points
for (let i = 0; i < POINT_COUNT; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Small velocity for smooth movement
        vy: (Math.random() - 0.5) * 0.5
    });
}

// Function to get distance between two points
function getDistance(a, b) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#231B3B";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = "#DDE0DC";
    
    // Connect points within a certain range
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            if (getDistance(points[i], points[j]) < 150) {
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[j].x, points[j].y);
                ctx.stroke();
            }
        }
    }
    
    // Update points with slight movement
    for (let point of points) {
        point.x += point.vx;
        point.y += point.vy;

        // Keep points within bounds
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
    }
    
    requestAnimationFrame(draw);
}

draw();

// Resize event listener to keep canvas full screen
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

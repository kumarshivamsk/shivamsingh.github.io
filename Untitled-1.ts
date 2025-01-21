// Node visualization using particles.js
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    canvas.id = "particleCanvas";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const particles = [];
    const maxParticles = 100;

    // Resize canvas to fill the screen
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
            }
        }
        draw() {
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    // Animate particles
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    };
    animate();
});

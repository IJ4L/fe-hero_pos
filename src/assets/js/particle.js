export class Particle {
  constructor(x, y, canvas) {
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 0.35 - 0.2;
    this.speedY = -(Math.random() * 0.3 + 0.2);
    this.color = "rgba(255, 255, 255, 1)";
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particleSize = 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.y < 0) {
      this.y = this.canvas.height;
      this.x = Math.random() * this.canvas.width;
    }

    if (this.x > this.canvas.width || this.x < 0) {
      this.speedX *= -1;
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.particleSize, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}

export function initParticles(canvas, particleCount = 140) {
  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particle(x, y, canvas));
  }
  return particles;
}

export function animateParticles(particles) {
  return function animate(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(() => animate(ctx, canvas));
  };
}

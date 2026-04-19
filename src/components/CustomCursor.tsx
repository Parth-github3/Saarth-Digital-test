import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
}

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: -100, y: -100 });
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, input, textarea, select, [role="button"]');

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(${isHoverable ? 1.5 : 1})`;
        cursorRef.current.style.backgroundColor = isHoverable ? 'rgba(212, 175, 55, 0.4)' : 'rgba(212, 175, 55, 0.1)';
      }

      // Add particles for the comet trail
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 2.5 + 1,
          color: `rgba(212, 175, 55, ${Math.random() * 0.5 + 0.5})`, // Gold color
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          life: 0,
          maxLife: Math.random() * 25 + 15
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        const progress = p.life / p.maxLife;
        const currentSize = p.size * (1 - progress);

        if (p.life >= p.maxLife) {
          particles.current.splice(i, 1);
          i--;
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 -ml-2.5 -mt-2.5 rounded-full border border-gold bg-gold/10 shadow-[0_0_10px_rgba(212,175,55,0.6)] pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </>
  );
};

export default CustomCursor;

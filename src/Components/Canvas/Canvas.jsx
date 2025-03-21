import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';
import './Canvas.css'
const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    Matter.use('matter-attractors');
    Matter.use('matter-wrap');

    const runMatter = () => {
      const Engine = Matter.Engine,
        Events = Matter.Events,
        Runner = Matter.Runner,
        Render = Matter.Render,
        World = Matter.World,
        Body = Matter.Body,
        Mouse = Matter.Mouse,
        Common = Matter.Common,
        Bodies = Matter.Bodies;

      const engine = Engine.create();
      engine.world.gravity.y = 0;
      engine.world.gravity.x = 0;
      engine.world.gravity.scale = 0.1;

      const render = Render.create({
        element: document.getElementById('wrapper-canvas'),
        engine: engine,
        options: {
          showVelocity: false,
          width: dimensions.width,
          height: dimensions.height,
          wireframes: false,
          background: 'transparent',
        },
      });

      const runner = Runner.create();
      const world = engine.world;

      const attractiveBody = Bodies.circle(
        render.options.width / 2,
        render.options.height / 2,
        Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
        {
          render: {
            fillStyle: '#000',
            strokeStyle: '#000',
            lineWidth: 0,
          },
          isStatic: true,
          plugin: {
            attractors: [
              function (bodyA, bodyB) {
                return {
                  x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                  y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                };
              },
            ],
          },
        }
      );

      World.add(world, attractiveBody);

      for (let i = 0; i < 60; i += 1) {
        let x = Common.random(0, render.options.width);
        let y = Common.random(0, render.options.height);
        let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
        let polygonNumber = Common.random(3, 6);
        const body = Bodies.polygon(
          x,
          y,
          polygonNumber,
          s,
          {
            mass: s / 20,
            friction: 0,
            frictionAir: 0.02,
            angle: Math.round(Math.random() * 360),
            render: {
              fillStyle: '#222222',
              strokeStyle: '#000000',
              lineWidth: 2,
            },
          }
        );

        World.add(world, body);

        const circles = [
          Bodies.circle(x, y, Common.random(2, 8), { /* attributes */ }),
          Bodies.circle(x, y, Common.random(2, 20), { /* attributes */ }),
          Bodies.circle(x, y, Common.random(2, 30), { /* attributes */ })
        ];

        circles.forEach(circle => World.add(world, circle));
      }

      const mouse = Mouse.create(render.canvas);

      Events.on(engine, 'afterUpdate', function () {
        if (!mouse.position.x) return;
        Body.translate(attractiveBody, {
          x: (mouse.position.x - attractiveBody.position.x) * 0.12,
          y: (mouse.position.y - attractiveBody.position.y) * 0.12,
        });
      });

      Runner.run(runner, engine);
      Render.run(render);

      return { engine, runner, render };
    };

    const debounce = (func, wait, immediate) => {
      let timeout;
      return function () {
        const context = this, args = arguments;
        const later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const m = runMatter();

    const setWindowSize = () => {
      dimensions.width = window.innerWidth;
      dimensions.height = window.innerHeight;
      m.render.canvas.width = dimensions.width;
      m.render.canvas.height = dimensions.height;
    };

    setWindowSize();
    window.addEventListener('resize', debounce(setWindowSize, 250));

    return () => {
      m.render.canvas.remove();
      Matter.Render.stop(m.render);
      Matter.Runner.stop(m.runner);
    };
  }, []);

  return (
    <div id="wrapper-canvas" style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Canvas;

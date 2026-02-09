'use client'

export default function BackgroundAnimation() {
  return (
    <div suppressHydrationWarning>
      <style>{`
        .background-animation {
          position: fixed;
          inset: 0;
          z-index: -10;
          overflow: hidden;
          pointer-events: none;
        }

        .background-animation .background {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0f0f1e 0%, #1a1f3a 25%, #0d2540 50%, #0a1428 75%, #000814 100%);
          overflow: hidden;
        }



        .background-animation .code-snippets {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .background-animation .code-line {
          position: absolute;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: rgba(20, 184, 166, 0.5);
          text-shadow: 0 0 15px rgba(20, 184, 166, 0.5), 0 0 25px rgba(20, 184, 166, 0.2);
          white-space: nowrap;
          animation: codeFlicker 4s ease-in-out infinite;
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        @keyframes codeFlicker {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.65; }
        }

        .background-animation .glow-circle-1 {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(20, 184, 166, 0.05) 40%, transparent 70%);
          border-radius: 50%;
          top: -300px;
          right: -300px;
          animation: moveGlow1 25s ease-in-out infinite;
          filter: blur(60px);
          box-shadow: inset 0 0 60px rgba(20, 184, 166, 0.2);
        }

        .background-animation .glow-circle-2 {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, rgba(34, 197, 94, 0.04) 40%, transparent 70%);
          border-radius: 50%;
          bottom: -200px;
          left: -200px;
          animation: moveGlow2 30s ease-in-out infinite;
          filter: blur(70px);
          box-shadow: inset 0 0 50px rgba(34, 197, 94, 0.15);
        }

        .background-animation .glow-circle-3 {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0.03) 40%, transparent 70%);
          border-radius: 50%;
          top: 50%;
          left: 30%;
          animation: moveGlow3 35s ease-in-out infinite;
          filter: blur(65px);
          box-shadow: inset 0 0 40px rgba(99, 102, 241, 0.1);
        }

        @keyframes moveGlow1 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(100px) translateY(-100px);
          }
        }

        @keyframes moveGlow2 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-80px) translateY(80px);
          }
        }

        @keyframes moveGlow3 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(60px) translateY(60px);
          }
        }

        .background-animation .overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 200% 100% at 50% 0%,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.7) 100%
          );
        }

        .background-animation .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.3;
        }

        .background-animation .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(20, 184, 166, 0.6);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(20, 184, 166, 0.4);
          animation: particleFloat 15s linear infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>
      <div className="background-animation">
        <div className="background">
          
          <div className="code-snippets">
            {[
              '> const socket = io()',
              '$ npm install',
              '{ "status": "online" }',
              '> git commit -m "fix"',
              '>>> import sys',
              '$ ping 192.168.1.1',
              'class Handler {}',
              '// initialized',
              'if (true) {',
              '} catch (error)',
            ].map((code, index) => (
              <div
                key={index}
                className="code-line"
                style={{
                  left: `${Math.random() * 90}%`,
                  top: `${Math.random() * 90}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                {code}
              </div>
            ))}
          </div>

          <div className="glow-circle-1" />
          <div className="glow-circle-2" />
          <div className="glow-circle-3" />

          <div className="particles">
            {[...Array(40)].map((_, index) => (
              <div
                key={index}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '100%',
                  animationDuration: `${Math.random() * 10 + 12}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          <div className="overlay" />
        </div>
      </div>
    </div>
  )
}

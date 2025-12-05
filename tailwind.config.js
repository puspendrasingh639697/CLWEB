/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'floatParticle': 'floatParticle 15s ease-in-out infinite',
        'sparkleFly': 'sparkleFly 0.8s ease-out forwards',
        'float3d': 'float3d 8s ease-in-out infinite',
        'rotate3d': 'rotate3d 10s linear infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      keyframes: {
        floatParticle: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg) scale(1)',
            opacity: '0.3'
          },
          '25%': {
            transform: 'translateY(-20px) rotate(90deg) scale(1.2)',
            opacity: '0.6'
          },
          '50%': {
            transform: 'translateY(-40px) rotate(180deg) scale(1)',
            opacity: '0.8'
          },
          '75%': {
            transform: 'translateY(-20px) rotate(270deg) scale(0.8)',
            opacity: '0.6'
          }
        },
        sparkleFly: {
          '0%': {
            opacity: '0',
            transform: 'translate(0, 0) scale(0)'
          },
          '50%': {
            opacity: '1',
            transform: 'translate(var(--sx, 20px), var(--sy, -20px)) scale(1)'
          },
          '100%': {
            opacity: '0',
            transform: 'translate(var(--sx, 40px), var(--sy, -40px)) scale(0)'
          }
        },
        float3d: {
          '0%, 100%': {
            transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)'
          },
          '33%': {
            transform: 'translateY(-20px) rotateX(120deg) rotateY(120deg)'
          },
          '66%': {
            transform: 'translateY(-10px) rotateX(240deg) rotateY(240deg)'
          }
        },
        rotate3d: {
          '0%': {
            transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
          },
          '100%': {
            transform: 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)'
          }
        }
      }
    },
  },
  plugins: [],
};
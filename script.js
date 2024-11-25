window.addEventListener('load', () => {
   confetti({
       particleCount: 300,        // More particles
       spread: 160,              // Wider spread
       origin: { y: 0.2 },       // Start higher
       scalar: 1.5,              // Bigger particles
       colors: ['#d62222', '#ffffff', '#000000'],
       startVelocity: 50,        // Faster initial speed
       gravity: 1.5,             // Slower fall
       ticks: 150                // Longer duration
   });
});

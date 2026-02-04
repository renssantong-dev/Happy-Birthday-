       // Generate confetti elements
    function createConfetti() {
            const confettiCount = 100;
    const container = document.body;
    for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.width = `${Math.random() * 5 + 5}px`;
    confetti.style.height = `${Math.random() * 5 + 5}px`;
    container.appendChild(confetti);
                // Remove confetti after animation ends
                setTimeout(() => confetti.remove(), 5000);
            }
        }
    // Start confetti when page loads
    createConfetti();
    // Restart confetti every 5 seconds
    setInterval(createConfetti, 5000);
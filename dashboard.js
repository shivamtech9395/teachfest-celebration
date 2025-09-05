document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const results = JSON.parse(localStorage.getItem('contestResults') || '{}');
    if (user && results[user.email]) {
        const { attempted, correct, wrong, score, percentage, prize } = results[user.email];
        document.getElementById('attempted').textContent = attempted;
        document.getElementById('correct').textContent = correct;
        document.getElementById('wrong').textContent = wrong;
        document.getElementById('score').textContent = score;
        document.getElementById('percentage').textContent = percentage + '%';
        document.getElementById('giftBox').addEventListener('click', () => {
            document.getElementById('prize').innerHTML = `🎉 Congratulations! You won: ${prize} 🎉`;
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#1d4ed8', '#facc15', '#22c55e']
            });
        });
    }
});
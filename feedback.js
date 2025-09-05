document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const feedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    let rating = '';

    document.getElementById('feedbackList').innerHTML = feedback.map(f => `
        <div class="bg-gray-100 p-4 rounded-lg animate-slide-up">
            <p class="text-lg font-serif"><strong>${f.name}</strong> (${f.email}): ${f.rating}</p>
            <p class="text-gray-600 font-serif">${f.comment}</p>
        </div>
    `).join('');

    document.getElementById('ratings').addEventListener('click', (e) => {
        if (e.target.classList.contains('ratingBtn')) {
            rating = e.target.dataset.rating;
            document.querySelectorAll('.ratingBtn').forEach(btn => {
                btn.classList.remove('bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-800');
            });
            if (rating === 'Good') e.target.classList.add('bg-green-500', 'text-white');
            if (rating === 'Better') e.target.classList.add('bg-blue-500', 'text-white');
            if (rating === 'Excellent') e.target.classList.add('bg-yellow-500', 'text-white');
        }
    });

    document.getElementById('submitFeedback').addEventListener('click', () => {
        const comment = document.getElementById('comment').value;
        if (!rating || !comment) {
            alert('Please select a rating and provide a comment!');
            return;
        }
        feedback.push({ name: user.name, email: user.email, rating, comment });
        localStorage.setItem('feedback', JSON.stringify(feedback));
        location.reload();
    });

    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
});
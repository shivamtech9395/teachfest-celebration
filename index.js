document.addEventListener('DOMContentLoaded', () => {
    const backgrounds = [
        'bg-gradient-to-r from-blue-600 to-purple-600',
        'bg-gradient-to-r from-green-500 to-teal-500',
        'bg-gradient-to-r from-red-500 to-yellow-500',
        'bg-gradient-to-r from-purple-600 to-pink-500'
    ];
    document.body.className = `min-h-screen flex items-center justify-center ${backgrounds[Math.floor(Math.random() * backgrounds.length)]}`;

    const loginForm = document.getElementById('loginForm');
    const error = document.getElementById('error');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const results = JSON.parse(localStorage.getItem('contestResults') || '{}');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (users.some(u => u.email === email)) {
            error.textContent = 'Email already registered!';
            error.classList.remove('hidden');
            return;
        }

        if (email === 'shivam@gmail.com' && password === '1234') {
            const admin = { name, email, password, userType: 'admin', uniqueCode: Math.random().toString(36).substr(2, 8) };
            localStorage.setItem('currentUser', JSON.stringify(admin));
            window.location.href = 'admin.html';
        } else {
            const user = { name, email, password, userType: 'user', uniqueCode: Math.random().toString(36).substr(2, 8) };
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'welcome.html';
        }
    });

    document.getElementById('signInBtn').addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = user.userType === 'admin' ? 'admin.html' : results[user.email] ? 'dashboard.html' : 'welcome.html';
        } else {
            error.textContent = 'Invalid credentials! Try again.';
            error.classList.remove('hidden');
        }
    });
});
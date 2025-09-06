document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.userType !== 'shivam') {
        window.location.href = 'index.html';
    }
    const results = JSON.parse(localStorage.getItem('contestResults') || '{}');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const feedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    document.getElementById('userList').innerHTML = users.map(u => `
        <tr class="hover:bg-gray-50 transition-all duration-200">
            <td class="p-3 font-serif">${u.name}</td>
            <td class="p-3 font-serif">${u.email}</td>
            <td class="p-3 font-serif">${results[u.email]?.score || 0}</td>
            <td class="p-3 font-serif">${results[u.email]?.prize || '-'}</td>
            <td class="p-3"><button class="deleteUser bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 font-serif" data-email="${u.email}">Delete</button></td>
        </tr>
    `).join('');
    document.getElementById('feedbackList').innerHTML = feedback.map(f => `
        <div class="bg-gray-100 p-4 rounded-lg animate-slide-up">
            <p class="text-lg font-serif"><strong>${f.name}</strong> (${f.email}): ${f.rating}</p>
            <p class="text-gray-600 font-serif">${f.comment}</p>
        </div>
    `).join('');
    document.getElementById('savePrizes').addEventListener('click', () => {
        localStorage.setItem('prizes', JSON.stringify({
            first: document.getElementById('firstPrize').value,
            second: document.getElementById('secondPrize').value,
            third: document.getElementById('thirdPrize').value
        }));
        alert('Prizes saved!');
    });
    document.getElementById('saveLimit').addEventListener('click', () => {
        localStorage.setItem('entryLimit', document.getElementById('entryLimit').value);
        alert('Entry limit set!');
    });
    document.getElementById('userList').addEventListener('click', (e) => {
        if (e.target.classList.contains('deleteUser')) {
            const email = e.target.dataset.email;
            const users = JSON.parse(localStorage.getItem('users') || '[]').filter(u => u.email !== email);
            localStorage.setItem('users', JSON.stringify(users));
            location.reload();
        }
    });
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
});
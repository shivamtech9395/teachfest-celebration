document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        // Easy Questions (40)
        { question: "If a teacher has 5 classes daily and each class has 30 students, how many students does the teacher teach daily?", options: ["120", "150", "180", "200"], answer: "150", difficulty: "Easy" },
        { question: "If a school day starts at 8 AM and ends at 2 PM, how many hours is the school open?", options: ["5", "6", "7", "8"], answer: "6", difficulty: "Easy" },
        { question: "A teacher gives 3 assignments weekly. How many assignments in 4 weeks?", options: ["9", "10", "12", "15"], answer: "12", difficulty: "Easy" },
        { question: "If a classroom has 4 rows with 5 desks each, how many desks are there?", options: ["15", "20", "25", "30"], answer: "20", difficulty: "Easy" },
        { question: "A teacher corrects 10 papers per hour. How many papers in 3 hours?", options: ["20", "25", "30", "35"], answer: "30", difficulty: "Easy" },
        { question: "If a student reads 2 chapters daily, how many chapters in 5 days?", options: ["8", "10", "12", "14"], answer: "10", difficulty: "Easy" },
        { question: "A school has 4 houses. Each house has 50 students. How many students in total?", options: ["150", "200", "250", "300"], answer: "200", difficulty: "Easy" },
        { question: "If a teacher spends 15 minutes per lesson plan and makes 5 plans, how long does it take?", options: ["60 min", "75 min", "90 min", "100 min"], answer: "75 min", difficulty: "Easy" },
        { question: "If a class has 25 students and 5 are absent, how many are present?", options: ["18", "20", "22", "24"], answer: "20", difficulty: "Easy" },
        { question: "A teacher organizes 3 quizzes monthly. How many in a year?", options: ["30", "36", "42", "48"], answer: "36", difficulty: "Easy" },
        { question: "If a school bus carries 40 students and makes 2 trips, how many students are transported?", options: ["60", "80", "100", "120"], answer: "80", difficulty: "Easy" },
        { question: "A teacher gives 2 marks per correct answer. How many marks for 10 correct answers?", options: ["15", "20", "25", "30"], answer: "20", difficulty: "Easy" },
        { question: "If a lesson lasts 45 minutes, how many lessons in 3 hours?", options: ["3", "4", "5", "6"], answer: "4", difficulty: "Easy" },
        { question: "A school library has 100 books. If 25 are borrowed, how many remain?", options: ["65", "70", "75", "80"], answer: "75", difficulty: "Easy" },
        { question: "If a teacher assigns 4 projects per semester and there are 2 semesters, how many projects?", options: ["6", "8", "10", "12"], answer: "8", difficulty: "Easy" },
        { question: "A classroom has 6 windows. If each has 4 panes, how many panes in total?", options: ["18", "20", "24", "28"], answer: "24", difficulty: "Easy" },
        { question: "If a teacher grades 5 tests per hour, how many in 2 hours?", options: ["8", "10", "12", "15"], answer: "10", difficulty: "Easy" },
        { question: "A school event has 3 sessions, each 2 hours long. Total duration?", options: ["5 hr", "6 hr", "7 hr", "8 hr"], answer: "6 hr", difficulty: "Easy" },
        { question: "If a student scores 10 marks per quiz and takes 3 quizzes, what’s the total score?", options: ["20", "25", "30", "35"], answer: "30", difficulty: "Easy" },
        { question: "A teacher has 4 classes, each with 20 students. Total students?", options: ["60", "80", "100", "120"], answer: "80", difficulty: "Easy" },
        { question: "If a school day has 6 periods, each 40 minutes, what’s the total time?", options: ["200 min", "240 min", "280 min", "320 min"], answer: "240 min", difficulty: "Easy" },
        { question: "A teacher distributes 30 worksheets to 6 groups. How many per group?", options: ["4", "5", "6", "7"], answer: "5", difficulty: "Easy" },
        { question: "If a student finishes 2 assignments in 1 hour, how many in 3 hours?", options: ["4", "5", "6", "7"], answer: "6", difficulty: "Easy" },
        { question: "A school has 5 teachers, each teaching 4 classes. Total classes?", options: ["15", "20", "25", "30"], answer: "20", difficulty: "Easy" },
        { question: "If a test has 10 questions and each is worth 2 marks, what’s the total?", options: ["15", "20", "25", "30"], answer: "20", difficulty: "Easy" },
        { question: "A teacher spends 10 minutes per student for feedback. Time for 5 students?", options: ["40 min", "50 min", "60 min", "70 min"], answer: "50 min", difficulty: "Easy" },
        { question: "If a class has 30 students and 6 are girls, how many are boys?", options: ["22", "24", "26", "28"], answer: "24", difficulty: "Easy" },
        { question: "A school year has 9 months. If a teacher assigns 2 projects monthly, how many total?", options: ["16", "18", "20", "22"], answer: "18", difficulty: "Easy" },
        { question: "If a teacher gives 5 homework tasks weekly, how many in 4 weeks?", options: ["15", "20", "25", "30"], answer: "20", difficulty: "Easy" },
        { question: "A classroom has 3 boards, each with 2 markers. Total markers?", options: ["5", "6", "7", "8"], answer: "6", difficulty: "Easy" },
        { question: "If a student reads 3 pages daily, how many pages in a week?", options: ["18", "21", "24", "27"], answer: "21", difficulty: "Easy" },
        { question: "A teacher has 4 sections, each with 25 students. Total students?", options: ["75", "100", "125", "150"], answer: "100", difficulty: "Easy" },
        { question: "If a class period is 50 minutes, how many periods in 200 minutes?", options: ["3", "4", "5", "6"], answer: "4", difficulty: "Easy" },
        { question: "A teacher corrects 20 papers in 2 hours. How many per hour?", options: ["8", "10", "12", "14"], answer: "10", difficulty: "Easy" },
        { question: "If a school has 6 buses, each carrying 30 students, how many students?", options: ["150", "180", "210", "240"], answer: "180", difficulty: "Easy" },
        { question: "A teacher gives 3 tests per month. How many in 6 months?", options: ["15", "18", "21", "24"], answer: "18", difficulty: "Easy" },
        { question: "If a student answers 4 questions correctly out of 5, what’s the percentage?", options: ["60%", "70%", "80%", "90%"], answer: "80%", difficulty: "Easy" },
        { question: "A school has 8 classes, each with 20 students. Total students?", options: ["140", "160", "180", "200"], answer: "160", difficulty: "Easy" },
        { question: "If a teacher spends 30 minutes per lesson and teaches 3 lessons, total time?", options: ["60 min", "90 min", "120 min", "150 min"], answer: "90 min", difficulty: "Easy" },
        { question: "A student completes 5 tasks in 2 days. How many in 6 days?", options: ["12", "15", "18", "21"], answer: "15", difficulty: "Easy" },

        // Medium Questions (40)
        { question: "If a teacher grades 60 papers in 3 hours, how many papers per hour?", options: ["15", "20", "25", "30"], answer: "20", difficulty: "Medium" },
        { question: "A class has 40 students. If 25% are absent, how many are present?", options: ["28", "30", "32", "34"], answer: "30", difficulty: "Medium" },
        { question: "A teacher assigns 3 tasks daily for 5 days, then 2 tasks daily for 3 days. Total tasks?", options: ["18", "21", "24", "27"], answer: "21", difficulty: "Medium" },
        { question: "If a school has 4 houses and each house scores 50 points, but one house gets a 20-point bonus, what’s the total?", options: ["200", "220", "240", "260"], answer: "220", difficulty: "Medium" },
        { question: "A teacher spends 20 minutes per student for 5 students and 10 minutes for prep. Total time?", options: ["100 min", "110 min", "120 min", "130 min"], answer: "110 min", difficulty: "Medium" },
        { question: "If a test has 20 questions and a student scores 80%, how many correct?", options: ["14", "16", "18", "20"], answer: "16", difficulty: "Medium" },
        { question: "A teacher divides 48 students into groups of 6. How many groups?", options: ["6", "7", "8", "9"], answer: "8", difficulty: "Medium" },
        { question: "If a school event lasts 3 hours and breaks are 15 minutes every hour, total break time?", options: ["30 min", "45 min", "60 min", "75 min"], answer: "45 min", difficulty: "Medium" },
        { question: "A teacher gives 5 marks for correct answers and deducts 2 for wrong. If a student gets 8 correct and 2 wrong, what’s the score?", options: ["34", "36", "38", "40"], answer: "36", difficulty: "Medium" },
        { question: "A school has 3 teachers, each teaching 4 classes of 25 students. Total students?", options: ["250", "300", "350", "400"], answer: "300", difficulty: "Medium" },
        { question: "If a student studies 2 hours daily for 5 days and 3 hours daily for 2 days, total hours?", options: ["14", "15", "16", "17"], answer: "16", difficulty: "Medium" },
        { question: "A teacher corrects 100 papers. If 60% are correct, how many are correct?", options: ["50", "60", "70", "80"], answer: "60", difficulty: "Medium" },
        { question: "If a class has 30 students and 1/3 are girls, how many are boys?", options: ["18", "20", "22", "24"], answer: "20", difficulty: "Medium" },
        { question: "A teacher assigns 4 projects monthly for 3 months, then 2 projects for 2 months. Total projects?", options: ["14", "16", "18", "20"], answer: "16", difficulty: "Medium" },
        { question: "If a school bus carries 45 students per trip and makes 3 trips, total students?", options: ["120", "135", "150", "165"], answer: "135", difficulty: "Medium" },
        { question: "A teacher spends 25 minutes per lesson for 4 lessons and 15 minutes for prep. Total time?", options: ["110 min", "115 min", "120 min", "125 min"], answer: "115 min", difficulty: "Medium" },
        { question: "If a test has 25 questions and a student scores 80%, how many correct?", options: ["18", "20", "22", "24"], answer: "20", difficulty: "Medium" },
        { question: "A school has 5 classes, each with 30 students. If 10% are absent, total present?", options: ["125", "135", "145", "150"], answer: "135", difficulty: "Medium" },
        { question: "A teacher gives 4 marks per correct answer and deducts 1 for wrong. If 7 correct and 3 wrong, what’s the score?", options: ["24", "25", "26", "27"], answer: "25", difficulty: "Medium" },
        { question: "If a student reads 5 pages per hour for 3 hours and 3 pages per hour for 2 hours, total pages?", options: ["18", "20", "21", "22"], answer: "21", difficulty: "Medium" },
        { question: "A school has 6 teachers, each with 4 classes of 20 students. Total students?", options: ["400", "480", "560", "640"], answer: "480", difficulty: "Medium" },
        { question: "If a teacher grades 50 papers and 40% are wrong, how many are correct?", options: ["25", "30", "35", "40"], answer: "30", difficulty: "Medium" },
        { question: "A class has 35 students. If 20% leave early, how many remain?", options: ["25", "26", "27", "28"], answer: "28", difficulty: "Medium" },
        { question: "A teacher assigns 5 tasks weekly for 4 weeks, then 3 tasks for 2 weeks. Total tasks?", options: ["24", "26", "28", "30"], answer: "26", difficulty: "Medium" },
        { question: "If a school event has 4 sessions, each 1.5 hours, total duration?", options: ["5 hr", "6 hr", "7 hr", "8 hr"], answer: "6 hr", difficulty: "Medium" },
        { question: "A student scores 90% on a 50-mark test. What’s the score?", options: ["40", "42", "45", "48"], answer: "45", difficulty: "Medium" },
        { question: "A teacher divides 60 students into groups of 12. How many groups?", options: ["4", "5", "6", "7"], answer: "5", difficulty: "Medium" },
        { question: "If a teacher spends 30 minutes per class for 5 classes and 10 minutes for prep, total time?", options: ["150 min", "160 min", "170 min", "180 min"], answer: "160 min", difficulty: "Medium" },
        { question: "A test has 30 questions. If a student gets 80% correct, how many are wrong?", options: ["4", "5", "6", "7"], answer: "6", difficulty: "Medium" },
        { question: "A school has 4 buses, each carrying 50 students for 2 trips. Total students?", options: ["350", "400", "450", "500"], answer: "400", difficulty: "Medium" },
        { question: "If a teacher gives 3 tests monthly for 4 months, then 2 tests for 2 months, total tests?", options: ["14", "15", "16", "17"], answer: "16", difficulty: "Medium" },
        { question: "A student studies 4 hours daily for 3 days and 2 hours daily for 4 days. Total hours?", options: ["18", "19", "20", "21"], answer: "20", difficulty: "Medium" },
        { question: "If a class has 40 students and 25% are girls, how many are boys?", options: ["28", "30", "32", "34"], answer: "30", difficulty: "Medium" },
        { question: "A teacher corrects 80 papers. If 75% are correct, how many are wrong?", options: ["15", "20", "25", "30"], answer: "20", difficulty: "Medium" },
        { question: "If a lesson lasts 40 minutes and a teacher teaches 5 lessons with a 10-minute break, total time?", options: ["200 min", "210 min", "220 min", "230 min"], answer: "210 min", difficulty: "Medium" },
        { question: "A student scores 85% on a 20-mark test. What’s the score?", options: ["15", "16", "17", "18"], answer: "17", difficulty: "Medium" },
        { question: "A school has 3 classes, each with 35 students. If 20% are absent, total present?", options: ["80", "84", "88", "92"], answer: "84", difficulty: "Medium" },
        { question: "A teacher gives 6 marks per correct answer and deducts 2 for wrong. If 5 correct and 2 wrong, score?", options: ["24", "26", "28", "30"], answer: "26", difficulty: "Medium" },
        { question: "If a student reads 6 pages per hour for 2 hours and 4 pages per hour for 3 hours, total pages?", options: ["22", "23", "24", "25"], answer: "24", difficulty: "Medium" },
        { question: "A teacher has 5 classes, each with 25 students. If 10% are absent, total present?", options: ["110", "112", "113", "115"], answer: "112", difficulty: "Medium" },

        // Hard Questions (20)
        { question: "A teacher grades 100 papers. If 60% score above 80 and 25% of those score 90+, how many score 90+?", options: ["12", "15", "18", "20"], answer: "15", difficulty: "Hard" },
        { question: "A school has 3 houses, each with 40 students. If 1/4 of one house is absent and 1/5 of another, total present?", options: ["100", "105", "110", "115"], answer: "110", difficulty: "Hard" },
        { question: "A teacher gives 5 marks per correct answer and deducts 3 for wrong. If a student scores 34 with 10 answers, how many were correct?", options: ["7", "8", "9", "10"], answer: "8", difficulty: "Hard" },
        { question: "If a class has 50 students and 40% are girls, 20% of girls and 10% of boys are absent, total present?", options: ["40", "42", "44", "46"], answer: "44", difficulty: "Hard" },
        { question: "A teacher spends 20 minutes per lesson for 4 lessons, 10 minutes prep, and 5 minutes per student for 6 students. Total time?", options: ["115 min", "120 min", "125 min", "130 min"], answer: "120 min", difficulty: "Hard" },
        { question: "A test has 25 questions, 4 marks per correct, -1 per wrong. If a student scores 75 with 20 correct, how many wrong?", options: ["3", "4", "5", "6"], answer: "5", difficulty: "Hard" },
        { question: "A school has 4 classes, each with 30 students. If 1/3 of one class and 1/6 of another are absent, total present?", options: ["100", "102", "104", "106"], answer: "104", difficulty: "Hard" },
        { question: "A teacher assigns 5 projects monthly for 3 months, then 3 for 2 months, with a 10% increase in the second phase. Total projects (rounded)?", options: ["20", "21", "22", "23"], answer: "21", difficulty: "Hard" },
        { question: "If a student studies 3 hours daily for 4 days and 2 hours daily for 5 days, but misses 1/3 of the last day, total hours?", options: ["21", "22", "23", "24"], answer: "22", difficulty: "Hard" },
        { question: "A teacher grades 80 papers. If 70% score above 75 and 40% of those score 85+, how many score 85+?", options: ["20", "22", "24", "26"], answer: "22", difficulty: "Hard" },
        { question: "A school has 5 buses, each carrying 40 students. If 2 buses make 3 trips and 3 make 2 trips, total students?", options: ["360", "380", "400", "420"], answer: "400", difficulty: "Hard" },
        { question: "A test has 20 questions, 5 marks per correct, -2 per wrong. If a student scores 76 with 16 correct, how many wrong?", options: ["2", "3", "4", "5"], answer: "4", difficulty: "Hard" },
        { question: "A teacher divides 60 students into groups. If each group has 8 students, but the last group has 4, how many groups?", options: ["7", "8", "9", "10"], answer: "8", difficulty: "Hard" },
        { question: "A school has 3 classes, each with 35 students. If 2/5 of one class and 1/7 of another are absent, total present?", options: ["85", "87", "89", "91"], answer: "89", difficulty: "Hard" },
        { question: "A teacher gives 6 marks per correct answer and deducts 2 for wrong. If a student scores 50 with 10 answers, how many correct?", options: ["8", "9", "10", "11"], answer: "9", difficulty: "Hard" },
        { question: "If a student reads 5 pages per hour for 3 hours and 3 pages per hour for 4 hours, but skips 1/4 of the last hour, total pages?", options: ["24", "25", "26", "27"], answer: "26", difficulty: "Hard" },
        { question: "A school has 4 teachers, each with 3 classes of 25 students. If 10% of one class is absent, total present?", options: ["275", "280", "285", "290"], answer: "285", difficulty: "Hard" },
        { question: "A test has 30 questions, 4 marks per correct, -1 per wrong. If a student scores 100 with 26 correct, how many wrong?", options: ["2", "3", "4", "5"], answer: "4", difficulty: "Hard" },
        { question: "A teacher spends 15 minutes per lesson for 5 lessons, 10 minutes prep, and 5 minutes per student for 4 students. Total time?", options: ["100 min", "105 min", "110 min", "115 min"], answer: "105 min", difficulty: "Hard" },
        { question: "A school has 6 classes, each with 30 students. If 1/5 of one class and 1/10 of another are absent, total present?", options: ["162", "164", "166", "168"], answer: "168", difficulty: "Hard" }
    ];

    let currentQuestion = 0;
    let score = 0;
    let correct = 0;
    let wrong = 0;
    let timer;
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const results = JSON.parse(localStorage.getItem('contestResults') || '{}');
    const selectedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 5);

    if (user && results[user.email]) {
        alert('You have already submitted the contest!');
        window.location.href = 'dashboard.html';
        return;
    }

    document.getElementById('startContest').addEventListener('click', () => {
        document.getElementById('startScreen').classList.add('hidden');
        document.getElementById('contestScreen').classList.remove('hidden');
        loadQuestion();
    });

    function loadQuestion() {
        if (currentQuestion >= 5) {
            const percentage = (score / 50) * 100;
            const prize = score >= 40 ? '1st Prize: Gold Medal' : score >= 30 ? '2nd Prize: Silver Medal' : '3rd Prize: Certificate';
            localStorage.setItem('contestResults', JSON.stringify({
                ...results,
                [user.email]: { attempted: 5, correct, wrong, score, percentage, prize }
            }));
            document.getElementById('contestScreen').innerHTML = `
                <h2 class="text-4xl font-serif font-bold text-gray-800 animate-slide-up">Contest Completed!</h2>
                <p class="text-2xl text-green-600 animate-slide-up mt-6">Score: ${score}/50</p>
                <p class="text-2xl text-green-600 animate-slide-up mt-2">Prize: ${prize}</p>
                <button onclick="window.location.href='dashboard.html'" class="mt-6 bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 font-serif">View Dashboard</button>
            `;
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#1d4ed8', '#facc15', '#22c55e']
            });
            return;
        }
        const q = selectedQuestions[currentQuestion];
        document.getElementById('questionNumber').textContent = currentQuestion + 1;
        document.getElementById('question').textContent = q.question;
        document.getElementById('options').innerHTML = q.options.map(opt => `
            <button class="w-full bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all duration-300 text-left text-lg font-serif">${opt}</button>
        `).join('');
        startTimer();
    }

    function startTimer() {
        let time = 60;
        document.getElementById('timer').textContent = `Time: ${time}s`;
        timer = setInterval(() => {
            time--;
            document.getElementById('timer').textContent = `Time: ${time}s`;
            if (time <= 0) {
                clearInterval(timer);
                currentQuestion++;
                loadQuestion();
            }
        }, 1000);
    }

    document.getElementById('submitAnswer').addEventListener('click', () => {
        clearInterval(timer);
        const selected = document.querySelector('#options button.bg-blue-600');
        if (selected && selected.textContent === selectedQuestions[currentQuestion].answer) {
            score += 10;
            correct++;
            document.getElementById('result').innerHTML = '<p class="text-green-600 animate-slide-up">Correct! 🎉</p>';
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#22c55e', '#facc15']
            });
        } else {
            wrong++;
            document.getElementById('result').innerHTML = `<p class="text-red-600 animate-slide-up">Wrong! Correct Answer: ${selectedQuestions[currentQuestion].answer}</p>`;
        }
        document.getElementById('result').classList.remove('hidden');
        setTimeout(() => {
            currentQuestion++;
            document.getElementById('result').classList.add('hidden');
            loadQuestion();
        }, 1500);
    });

    document.getElementById('options').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelectorAll('#options button').forEach(btn => btn.classList.remove('bg-blue-600', 'text-white'));
            e.target.classList.add('bg-blue-600', 'text-white');
        }
    });

    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
});
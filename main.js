function submitQuiz() {
    const correctAnswers = {
        q1: 'B',
        q2: 'C',
        q3: 'A',
        q4: 'D',
        q5: 'B',
        q6: 'A',
        q7: 'C',
        q8: 'D',
        q9: 'B',
        q10: 'C',
        q11: 'A',
        q12: 'B',
        q13: 'C',
        q14: 'D',
        q15: 'A',
        q16: 'B',
        q17: 'C',
        q18: 'A',
        q19: 'D',
        q20: 'C',
        q21: 'A',
        q22: 'B',
        q23: 'D',
        q24: 'C',
        q25: 'B',
        q26: 'A',
        q27: 'D',
        q28: 'C',
        q29: 'B',
        q30: 'A'
    };
    
    

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let detailedResult = '';
    

    for (let q in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${q}"]:checked`);
        
        if (userAnswer && userAnswer.value === correctAnswers[q]) {
            score++;
            detailedResult += `<p>${q}. To'g'ri: ${userAnswer.value}</p>`;
        } else {
            detailedResult += `<p>${q}. Noto'g'ri: ${
                userAnswer ? userAnswer.value : 'Javob berilmagan'
            }, To'g'ri: ${correctAnswers[q]}</p>`;
        }
    }

  
    let percentage = (score / totalQuestions) * 100;

  
    document.getElementById('result').innerHTML = `Sizning natijangiz: ${percentage.toFixed(2)}%`;
    document.getElementById('detailedResult').innerHTML = detailedResult;
}

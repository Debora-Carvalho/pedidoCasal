function lancarConfetes() {
    const numConfetes = 50;
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';

    for (let i = 0; i < numConfetes; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);
    }

    document.body.appendChild(confettiContainer);

    setTimeout(() => {
        confettiContainer.remove(); 
    }, 7000); 
}

function getRandomColor() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function sim() {
    // Seleciona a imagem da noiva
    const brideImage = document.getElementById('bride_image');
    const proposalReturn = document.getElementById('proposal_return');
    
    // Troca a imagem atual pela imagem de casamento
    brideImage.src = 'img/img-wedding.png';
    proposalReturn.style.display = 'block'; 

    // Oculta o botão "Não..."
    const btnReject = document.getElementById('btn_reject');
    btnReject.style.display = 'none';

    document.getElementById('return').classList.remove('hidden');

    lancarConfetes();
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

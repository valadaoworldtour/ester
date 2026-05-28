// Configura a data de início do namoro (Ano-Mês-Dia)
const startDate = new Date('2026-04-26T00:00:00').getTime();

// Função que calcula e atualiza o tempo que vocês estão juntos
function updateCounter() {
    const now = new Date().getTime();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Evita números negativos se a página for aberta antes da meia-noite do dia 26
    if (difference < 0) {
        document.getElementById('time-counter').innerHTML = "A contagem regressiva já vai começar!";
        return;
    }

    document.getElementById('time-counter').innerHTML =
        `${days} Dias, ${hours} Horas, ${minutes} Minutos e ${seconds} Segundos<br>e contando...`;
}

// Atualiza o contador a cada 1 segundo (1000 milissegundos)
setInterval(updateCounter, 1000);
updateCounter(); // Faz a primeira chamada para não esperar 1 segundo para aparecer

// Lógica do botão e da mensagem surpresa
const btn = document.getElementById('loveBtn');
const msg = document.getElementById('hiddenMessage');

btn.addEventListener('click', () => {
    msg.classList.remove('hidden');
    msg.classList.add('visible');
    btn.style.display = 'none'; // Esconde o botão após ela clicar
    createHearts(); // Inicia a chuva de corações
});

// Função que cria uma "chuva de corações" na tela
function createHearts() {
    for(let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        
        // Espalha os corações pela largura da tela
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-10vh';
        
        // Tamanhos variados para os corações
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        
        // Adiciona um brilho rosa neon nos corações (Cyberpunk / Romance Cósmico)
        heart.style.filter = 'drop-shadow(0 0 10px #ff2a6d)';
        
        // Velocidades de queda variadas
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        heart.style.zIndex = '9999';
        
        document.body.appendChild(heart);

        // Remove os corações depois que caírem para não travar a página
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
// Initial heart click handler
const initialHeart = document.getElementById('initialHeart');
const messageBox = document.getElementById('messageBox');
const treeContainer = document.getElementById('treeContainer');
const valentineMessage = document.getElementById('valentineMessage');

initialHeart.addEventListener('click', function() {
    initialHeart.classList.add('hide');
    setTimeout(() => {
        messageBox.classList.add('show');
    }, 400);
});

// Tree click handler for Valentine's message
treeContainer.addEventListener('click', function() {
    valentineMessage.classList.add('show');
    
    // Hide the message after 5 seconds
    setTimeout(() => {
        valentineMessage.classList.remove('show');
    }, 5000);
});

// Create falling hearts
function createFallingHeart() {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = -20 + 'px';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    const colors = ['#ff6b9d', '#ff8fab', '#ffa6c1', '#c74a4a', '#ff4d6d'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    const duration = Math.random() * 3 + 4;
    const drift = (Math.random() - 0.5) * 100;
    
    heart.style.setProperty('--drift', drift + 'px');
    heart.style.animationDuration = duration + 's';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create falling hearts periodically
setInterval(createFallingHeart, 300);

// Timer functionality
const startDate = new Date();
startDate.setDate(startDate.getDate() - 355);
startDate.setHours(startDate.getHours() - 17);
startDate.setMinutes(startDate.getMinutes() - 8);
startDate.setSeconds(startDate.getSeconds() - 23);

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.textContent = 
            `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
    }
}

updateTimer();
setInterval(updateTimer, 1000);
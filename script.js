// Gravity slider interaction
const gravitySlider = document.getElementById('gravity-slider');
const gravityValue = document.getElementById('gravity-value');
const powerFill = document.getElementById('power-fill');
const powerMessage = document.getElementById('power-message');

// Update gravity display and power level
gravitySlider.addEventListener('input', function() {
    const value = this.value;
    gravityValue.textContent = value;
    
    // Update power level based on gravity
    const powerPercentage = (value / 500) * 100;
    powerFill.style.width = powerPercentage + '%';
    
    // Update power message based on gravity level
    updatePowerMessage(parseInt(value));
    
    // Add shake effect at high gravity
    if (value > 400) {
        document.body.style.animation = 'shake 0.5s';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
    }
});

// Power level messages based on gravity
function updatePowerMessage(gravity) {
    if (gravity < 50) {
        powerMessage.textContent = "🌱 Starting your journey... Keep pushing!";
        powerMessage.style.color = "#4CAF50";
    } else if (gravity < 100) {
        powerMessage.textContent = "💪 You're getting stronger! Don't give up!";
        powerMessage.style.color = "#8BC34A";
    } else if (gravity < 200) {
        powerMessage.textContent = "🔥 Impressive training! Your skills are growing!";
        powerMessage.style.color = "#FFC107";
    } else if (gravity < 300) {
        powerMessage.textContent = "⚡ Incredible power! You're pushing your limits!";
        powerMessage.style.color = "#FF9800";
    } else if (gravity < 400) {
        powerMessage.textContent = "💥 Elite level! You're among the best!";
        powerMessage.style.color = "#FF5722";
    } else if (gravity < 500) {
        powerMessage.textContent = "🌟 Legendary warrior! Few can reach this level!";
        powerMessage.style.color = "#9C27B0";
    } else {
        powerMessage.textContent = "👑 MAXIMUM POWER! You've reached the ultimate level!";
        powerMessage.style.color = "#E91E63";
    }
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Highlight training zones based on gravity level
gravitySlider.addEventListener('input', function() {
    const value = parseInt(this.value);
    const cards = document.querySelectorAll('.zone-card');
    
    cards.forEach(card => {
        card.style.opacity = '0.5';
        card.style.transform = 'scale(0.95)';
    });
    
    if (value >= 50 && value <= 150) {
        highlightCard(0);
    } else if (value >= 100 && value <= 250) {
        highlightCard(1);
    } else if (value >= 200 && value <= 400) {
        highlightCard(2);
    } else if (value >= 250 && value <= 500) {
        highlightCard(3);
    }
    
    if (value < 50) {
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        });
    }
});

function highlightCard(index) {
    const cards = document.querySelectorAll('.zone-card');
    if (cards[index]) {
        cards[index].style.opacity = '1';
        cards[index].style.transform = 'scale(1)';
    }
}

// Add particle effect on high gravity
function createParticles() {
    const gravity = parseInt(gravitySlider.value);
    if (gravity > 300) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            background: radial-gradient(circle, #fff, #f5576c);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particle-fade 2s ease-out forwards;
        `;
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 2000);
    }
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle-fade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-100px);
        }
    }
`;
document.head.appendChild(particleStyle);

// Generate particles periodically at high gravity
setInterval(() => {
    const gravity = parseInt(gravitySlider.value);
    if (gravity > 300) {
        createParticles();
    }
}, 500);

// Initialize
updatePowerMessage(1);

// Gravity slider interaction
const gravitySlider = document.getElementById('gravity-slider');
const gravityValue = document.getElementById('gravity-value');
const powerFill = document.getElementById('power-fill');
const powerMessage = document.getElementById('power-message');

// Update gravity display and power level
gravitySlider.addEventListener('input', function() {
    const value = parseInt(this.value);
    gravityValue.textContent = value;
    
    // Update power level based on gravity
    const powerPercentage = (value / 500) * 100;
    powerFill.style.width = powerPercentage + '%';
    
    // Update power message based on gravity level
    updatePowerMessage(value);
    
    // Highlight training zones based on gravity level
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

// Power level messages based on gravity
function updatePowerMessage(gravity) {
    const messageColor = '#666';
    
    if (gravity < 50) {
        powerMessage.textContent = "Level: Beginner";
    } else if (gravity < 100) {
        powerMessage.textContent = "Level: Intermediate";
    } else if (gravity < 200) {
        powerMessage.textContent = "Level: Advanced";
    } else if (gravity < 300) {
        powerMessage.textContent = "Level: Expert";
    } else if (gravity < 400) {
        powerMessage.textContent = "Level: Elite";
    } else if (gravity < 500) {
        powerMessage.textContent = "Level: Master";
    } else {
        powerMessage.textContent = "Level: Maximum";
    }
    
    powerMessage.style.color = messageColor;
}

function highlightCard(index) {
    const cards = document.querySelectorAll('.zone-card');
    if (cards[index]) {
        cards[index].style.opacity = '1';
        cards[index].style.transform = 'scale(1)';
    }
}

// Initialize
updatePowerMessage(1);

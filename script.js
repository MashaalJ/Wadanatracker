function updateProgress() {
    const totalTasks = 100;
    const mcqInput = document.getElementById('mcq-input').value;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const motivationText = document.getElementById('motivation-text');
    const animationContainer = document.getElementById('animation-container');

    // Ensure input is within valid range
    let completedTasks = Math.min(Math.max(mcqInput, 0), totalTasks);

    // Update progress bar and text
    let progressPercent = (completedTasks / totalTasks) * 100;
    progressBar.style.width = progressPercent + '%';
    progressText.textContent = `${completedTasks}/100 MCQs Completed`;

    // Clear previous animations
    animationContainer.innerHTML = '';

    // Trigger animations or messages based on progress
    if (completedTasks === totalTasks) {
        triggerFireworks();
        motivationText.textContent = "You're amazing! All tasks completed! You can now rest in peace.";
    } else if (completedTasks >= 90) {
        showFriendlyAnimal8("We're there, jara ma");
        motivationText.textContent = "Ha! Take that Humpty Dumpty";
    } else if (completedTasks >= 80) {
        showFriendlyAnimal7("Keep going! You're almost there!");
        motivationText.textContent = "Almost there! Keep pushing!";
    } else if (completedTasks >= 70) {
        showFriendlyAnimal6("So close now!");
        motivationText.textContent = "You can cry if you want to but da questions ba ke";
    } else if (completedTasks >= 60) {
        showFriendlyAnimal5("Amazing! Look at you bulldozing these puny mcqs!");
        motivationText.textContent = "Text Mashaal 'Bananas'";    
    } else if (completedTasks >= 50) {
        showFriendlyAnimal4("Great job! You're halfway through!");
        motivationText.textContent = "Halfway through! Keep going!";
    } else if (completedTasks >= 40) {
        showFriendlyAnimal3("Shabash! 10 more done, litte more to go");
        motivationText.textContent = "Heres a cute picture for you if u knw what i mean";
    } else if (completedTasks >= 30) {
        showFriendlyAnimal2("Great job! Another 10 done!");
        motivationText.textContent = "Keep going!";
    } else if (completedTasks >= 20) {
        showFriendlyAnimal("Good start! Keep up the pace!");
        motivationText.textContent = "Great start! Keep up the pace!";
    } else {
        motivationText.textContent = "Let's get started!";
    }
}

function triggerFireworks() {
    const animationContainer = document.getElementById('animation-container');
    animationContainer.innerHTML = '<img src="https://media.tenor.com/NXvU9jbBUGMAAAAM/fireworks.gif" alt="Fireworks" style="width: 100%;">';
}

function showFriendlyAnimal(message) {
    const animationContainer = document.getElementById('animation-container');
    animationContainer.innerHTML = `
        <img src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif" alt="Friendly Animal" style="width: 100%;">
        <p>${message}</p>
    `;
}
function showFriendlyAnimal2(message) {
    const animationContainer = document.getElementById('animation-container');
    animationContainer.innerHTML = `
        <img src="https://media.tenor.com/I_eemn3LILEAAAAM/otter-relax.gif" alt="Friendly Animal" style="width: 100%;">
        <p>${message}</p>
    `;
}
function showFriendlyAnimal3(message) {
    const animationContainer = document.getElementById('animation-container');
    animationContainer.innerHTML = `
        <img src="https://i.pinimg.com/originals/11/68/1b/11681b40c7ae84daef0477dda290da9b.gif" alt="Friendly Animal" style="width: 100%;">
        <p>${message}</p>
    `;
}
function showFriendlyAnimal4(message) {
    const animationContainer = document.getElementById('animation-container');
    animationContainer.innerHTML = `
        <img src="https://media.tenor.com/0tZ7Cw_PVQgAAAAM/motivational-squirrel-motivational.gif" alt="Friendly Animal" style="width: 100%;">
        <p>${message}</p>
    `;
}
function showFriendlyAnimal5(message) {
    const animationContainer = document.getElementById('animation-container');
    animationContainer.innerHTML = `
        <img src="https://media3.giphy.com/media/2ytlbPlOr6c028biPK/giphy.gif?cid=e3b0c44207c6f299807502055c88ccdaa129a9ba37da88e5&rid=giphy.gif" alt="Friendly Animal" style="width: 100%;">
        <p>${message}</p>
    `;
}
function showFriendlyAnimal6(message) {
    const animationContainer = document.getElementById('animation-container');
    animationContainer.innerHTML = `
        <img src="https://media.tenor.com/7jaVOs1ETVUAAAAM/bunny-cute.gif" alt="Friendly Animal" style="width: 100%;">
        <p>${message}</p>
    `;
}
function showFriendlyAnimal7(message) {
    const animationContainer = document.getElementById('animation-container');
    animationContainer.innerHTML = `
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDBzNGY5YzdudDNveDZtbHA1dHdzcDA0Nm16YnNqZ3E4NmZncWhoMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YSYkSmLfV74dGCQRz4/giphy.gif" alt="Friendly Animal" style="width: 100%;">
        <p>${message}</p>
    `;
}
function showFriendlyAnimal8(message) {
    const animationContainer = document.getElementById('animation-container');
    animationContainer.innerHTML = `
        <img src="https://dpandpics.com/images/motivational-gif/motivational-gif24.gif" alt="Friendly Animal" style="width: 100%;">
        <p>${message}</p>
    `;
}
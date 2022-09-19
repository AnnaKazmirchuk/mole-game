const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

for (let i = 1; i < 10; i++ ) {
    const elementHole = document.getElementById(`hole${i}`);
    elementHole.onclick = () => {
        if (elementHole.className.includes('hole_has-mole')) {
            deadCounter.textContent = Number(deadCounter.textContent) + 1;
        } else (lostCounter.textContent = Number(lostCounter.textContent) + 1)
                
        if (Number(deadCounter.textContent) == 10) {
            alert("You win!");
        } else if (Number(lostCounter.textContent) == 5) {
            alert("You lost!");
        }
    }
}    



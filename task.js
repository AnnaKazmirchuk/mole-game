const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`)
}

for (let i = 1; i < 9; i++ ) {
    elementHole = getHole(i);
    elementHole.onclick = () => {
        if (elementHole.className.includes('hole_has-mole')) {
            deadCounter.textContent = Number(deadCounter.textContent) + 1;
            if (Number(deadCounter.textContent) == 10)
                alert("You win!");
        } else { lostCounter.textContent = Number(lostCounter.textContent) + 1;
            if ((Number(deadCounter.textContent) == 5))
                alert("You lost!")

        }
    }
}
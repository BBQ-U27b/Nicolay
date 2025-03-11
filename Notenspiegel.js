const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function bubbleSort(array) {
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

function average(array) {
    let summe = 0;
    for (let i = 0; i < array.length; i++) {
        summe += array[i];
    }
    return summe / array.length;
}

let grades = [];

function input() {
    
    rl.question("Geben Sie nun die Noten ihrer Schüler ein.\nSollten Sie alle Noten eingegeben haben verwenden sie ein 'q' um die Eingabe zu beenden.: ", (answer) => {
        
        if (answer.toLowerCase() === 'q') {
            const sortedArray = bubbleSort([...grades]);
            const avgGrade = average(grades);

            console.log("Noten in aufsteigender Reihenfolge: ", sortedArray);
            console.log("Die Durchschnittsnote beträgt: ", avgGrade);

            rl.close();

            } else {
                const grade = parseInt(answer);
                if (grade >= 1 && grade <= 6) {
                grades = [...grades, grade];
                console.log("Note hinzugefügt :)"); 
                } else {
                    console.log("Bitte gebe eine gültige Note ein! ╭∩╮(ಠ_ಠ)╭∩╮ ")
                }
                
        input();
        }
    });
}

input();

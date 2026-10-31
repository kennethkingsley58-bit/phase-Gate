const prompt = require("prompt-sync")();
function main() {


    let numberOfStudent = Number(prompt("How many Student do you have: "));
    let numberOfSubject = Number(prompt("How many subject do they offer: "));

    console.log("Saved successfully");

    let totalScore = [];

    for (let index = 0; index < numberOfStudent; index++) {
        totalScore[index] = new Array(numberOfSubject).fill(0);
    }
    console.log(totalScore);
    collectScore(totalScore, numberOfStudent, numberOfSubject);
    displayScore(totalScore, numberOfStudent);
    calculateTotalAndAverage(totalScore, numberOfStudent, numberOfSubject);
}

function collectScore(totalScore, numberOfStudent, numberOfSubject){
    for (let index = 0; index < numberOfStudent; index++){
        for (let count = 0; count < numberOfSubject; count++){
            console.log("For student " + (index + 1))

            let score = Number(prompt("Enter score for subject " + (count + 1) + ": "))
            while (score < 0 || score > 100) {
                console.log("invalid")
                score = Number(prompt("Enter score again: "))
            }
            totalScore[index][count] = score
    }
}
}

function displayScore(totalScore, numberOfStudent){
    for (let index = 0; index < numberOfStudent; index++){
        console.log("Student" + (index + 1) + ": "
            + JSON.stringify(totalScore[index]))
}
}

function calculateTotalAndAverage(totalScore, numberOfStudent, numberOfSubject){
    for (let index = 0; index < numberOfStudent; index++){
        let total = 0
        for (let count = 0; count < numberOfSubject; count++){
            total += totalScore[index][count]
        }

        let average = total / numberOfSubject
        console.log("Student" + (index + 1) + "Total" + ": " + total)
        console.log("Student" + (index + 1) + "Average" + ": " + average)
}
}


main()



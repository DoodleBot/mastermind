let maxGuesses = 12;
let spaces = 5;
let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'brown', 'purple', 'black', 'white'];
let guesses = [];
let solution = [];

const init = () => {

}

const createGame = () => {
    createSolution();
}

const getPeg = () => {
    let max = colors.length - 1;
    let rand = Math.random();

    return Math.round(rand * max);
}

const createSolution = () => {
    let i;
    solution = [];
    // generate random numbers for solution based on number of spaces and rules for game
    for(i = 0; i < spaces; i++) {
        solution.push(getPeg());
    }

    console.log('solution:', solution, getCodeColors(solution));
}

const getCodeColors = (code) => {
    const codeColors = code.map((index) => {
        return colors[index];
    });

    return codeColors;
}

const reset = () => {
    guesses = [];
    createSolution();
}

const makeGuess = (code) => {
    guesses.push(code);
    validateGuess(code);
}

const validateGuess = (guess) => {
    let whiteMarker = 0;
    let blackMarker = 0;
    let guessDupe = guess.concat();
    let solutionDupe = solution.concat();
    let i, j;

    for(i = solution.length - 1; i >= 0; i--) {
        if (solution[i] === guess[i]) {
            guessDupe.splice(i, 1);
            solutionDupe.splice(i, 1);
            blackMarker++;
        }
    }

    for(i = solutionDupe.length - 1; i >= 0; i--) {
        let peg = solutionDupe[i];

        for(j = guessDupe.length - 1; j >= 0; j--) {
            if (peg === guessDupe[j]) {
                guessDupe.splice(j, 1);
                whiteMarker++;
                break;
            }
        }
    }

    console.log('validate:',{blackMarker, whiteMarker});
}

const hasWon = (code) => {
    // is code === solution.
}

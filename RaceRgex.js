function solve(input) {

    input.pop();
    let participants={};
    let participantsInput = input.shift()
        .split(', ');
    let lettersReg = /[A-Za-z]+/g;
    let digitsReg = /\d/g;

    for (let p of participantsInput) {
        participants[p] = 0;

    }
    for (let row of input){
        let currentParticipant = row.match(lettersReg)
            .join('');

        let currentDistance = row.match(digitsReg)
            .map(Number)
            .reduce((a,b)=> a+b,0);

        if (participants.hasOwnProperty(currentParticipant)){
            participants[currentParticipant] += currentDistance;

        }

    }
    let sortedParticipants = Object.entries(participants)
        .sort((a,b)=>{
            return b[1] - a[1];
        })
        .map(kvp => kvp[0]);

    console.log(`1st place: ${sortedParticipants[0]}`);
    console.log(`2nd place: ${sortedParticipants[1]}`);
    console.log(`3rd place: ${sortedParticipants[2]}`);

}
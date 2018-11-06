function questJurnal(input) {
    let initialQuest = (input.shift().split(', '));


    for (let i = 0; i < input.length; i++) {
        let [command, quest] = input[i].split(' - ');

        if (command === "Start") {
            if (!initialQuest.includes(quest)) {
                initialQuest.push(quest)
            }
        }
        else if (command === "Complete") {
            if (initialQuest.includes(quest)) {
                let index = initialQuest.indexOf(quest);
                initialQuest.splice(index, 1);
            }
        }
        else if (command === "Side Quest") {
            let [questExist, sideQuest] = quest.split(':');
            if (initialQuest.includes(questExist)) {
                if (!initialQuest.includes(sideQuest)) {
                    let index = initialQuest.indexOf(questExist);
                    initialQuest.splice(index + 1, 0, sideQuest)
                }
            }
        }
        else if (command === "Renew") {
            if (initialQuest.includes(quest)) {
                let index = initialQuest.indexOf(quest);
                let sliced = initialQuest.splice(index, 1);
                initialQuest.push(sliced);
            }
        }
        else {
            break;
        }
    }
    console.log(initialQuest.join(', '))
}

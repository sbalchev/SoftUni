function solve(input) {
    input.pop();
    let gladiators = new Map();

    for(let inputRow of input) {
        let tokens = inputRow.split(' -> ');

        if (tokens.length === 3) {
            let [ name, technique, skill ] = tokens;
            skill = Number(skill);

            if (!gladiators.has(name)) {
                gladiators.set(name, new Map());
            }

            let techniques = gladiators.get(name);

            if (!techniques.has(technique)) {
                techniques.set(technique, 0);
            }

            let oldSkill = techniques.get(technique);
            if (skill > oldSkill) {
                // Update inner map
                techniques.set(technique, skill);
            }
        } else {
            let [firstG, secondG] = inputRow.split(' vs ');
            battle(firstG, secondG);
        }
    }

    let sortedGladiators = [...gladiators]
        .sort(compareGladiators);

    for(let [name, techniquesMap] of sortedGladiators) {
        let totalSkill =  [...techniquesMap]
            .map(e => e[1])
            .reduce((c, d) => c + d, 0);
        console.log(`${name}: ${totalSkill} skill`);

        let sortedTechniques = [...techniquesMap]
            .sort(compareTechniques);

        for(let [techniqueName, techniqueSkill] of sortedTechniques) {
            console.log(`- ${techniqueName} <!> ${techniqueSkill}`);
        }
    }

    function battle(firstGladiator, secondGladiator) {
        if (gladiators.has(firstGladiator) && gladiators.has(secondGladiator)) {
            let firstGladiatorTechniques = gladiators.get(firstGladiator);
            let secondGladiatorTechniques = gladiators.get(secondGladiator);

            // Get common techniques by comparing keys
            let secondKeys = [...secondGladiatorTechniques.keys()];

            let common = [...firstGladiatorTechniques.keys()]
                .filter(g => secondKeys.includes(g));

            let firstGSkill = 0;
            let secondGSkill = 0;
            for(let t of common) {
                firstGSkill += firstGladiatorTechniques.get(t);
                secondGSkill += secondGladiatorTechniques.get(t);
            }

            if (firstGSkill > secondGSkill) {
                gladiators.delete(secondGladiator);
            }

            if (firstGSkill < secondGSkill) {
                gladiators.delete(firstGladiator);
            }
        }
    }
    function compareGladiators(a, b) {
        let aName = a[0];
        let bName = b[0];
        let aTechniques = a[1];
        let bTechniques = b[1];

        let aTotalSkill = 0;

        for(let aVal of aTechniques.values()) {
            aTotalSkill += aVal
        }

        let bTotalSkill = 0;

        for(let bVal of bTechniques.values()) {
            bTotalSkill += bVal;
        }

        let firstCriteria = bTotalSkill - aTotalSkill;

        if (firstCriteria === 0) {
            return aName.localeCompare(bName);
        }

        return firstCriteria;
    }
    function compareTechniques(a, b) {
        let firstCriteria = b[1] - a[1];

        if (firstCriteria === 0) {
            return a[0].localeCompare(b[0]);
        }

        return firstCriteria;
    }
}
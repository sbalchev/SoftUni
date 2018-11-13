function solve(input) {
    let systems = {};

    for(let inputRow of input) {
        let [ system, component, subcomponent ]
            = inputRow.split(' | ');

        if (!systems.hasOwnProperty(system)) {
            systems[system] = {};
        }

        let allComponents = systems[system];
        if (!allComponents.hasOwnProperty(component)) {
            allComponents[component] = [];
        }

        let allSubcomponents = allComponents[component];
        allSubcomponents.push(subcomponent);
    }

    let sortedSystems = Object.entries(systems)
        .sort(compareSystems);

    for(let [ system, components ] of sortedSystems) {
        let sortedComponents = Object.entries(components)
            .sort((a, b) => {
                return b[1].length - a[1].length;
            });

        console.log(system);
        for(let [ name, subcomponents ] of sortedComponents) {
            console.log(`|||${name}`);
            for(let subC of subcomponents) {
                console.log(`||||||${subC}`);
            }
        }

    }

    function compareSystems(a, b) {
        let [ systemAName, systemAComponents ]
            = a;

        let [ systemBName, systemBComponents ]
            = b;

        let aComponentsCount =  Object.entries(systemAComponents).length;
        let bComponentsCount = Object.entries(systemBComponents).length;


        let firstCriteria = bComponentsCount - aComponentsCount;

        if (firstCriteria === 0) {
            return systemAName.localeCompare(systemBName);
        }

        return firstCriteria;
    }
}
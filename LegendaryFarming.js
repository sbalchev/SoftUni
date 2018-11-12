function solve(input) {
    input = input.split(' ');
    let keyMaterials = new Map([
        ['shards', 0],
        ['fragments', 0],
        ['motes', 0]
    ]);
    let junk = new Map();
    let winningItem = '';

    for(let i = 0; i < input.length - 1; i += 2) {
        let quantity = Number(input[i]);
        let material = input[i + 1].toLowerCase();

        if (!keyMaterials.has(material)) {
            if (!junk.has(material)) {
                junk.set(material, quantity);
            } else {
                junk.set(material, junk.get(material) + quantity);
            }
        } else {
            let oldQuantity = keyMaterials.get(material);
            keyMaterials.set(material, oldQuantity + quantity);
        }

        if (keyMaterials.get('shards') >= 250) {
            winningItem = 'Shadowmourne';
            keyMaterials.set('shards', keyMaterials.get('shards') - 250);
            break;
        }

        if (keyMaterials.get('fragments') >= 250) {
            winningItem = 'Valanyr';
            keyMaterials.set('fragments', keyMaterials.get('fragments') - 250);
            break;
        }

        if (keyMaterials.get('motes') >= 250) {
            winningItem = 'Dragonwrath';
            keyMaterials.set('motes', keyMaterials.get('motes') - 250);
            break;
        }
    }

    console.log(`${winningItem} obtained!`);
    let sortedMaterials = [...keyMaterials]
        .sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });
    let sortedJunk = [...junk]
        .sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });
    sortedMaterials.forEach((kV) => {
        console.log(`${kV[0]}: ${kV[1]}`);
    });
    sortedJunk.forEach((kV) => {
        console.log(`${kV[0]}: ${kV[1]}`);
    });
}
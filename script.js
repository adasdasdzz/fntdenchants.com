document.getElementById('enchantButton').addEventListener('click', function() {
    const enchantments = [
        { type: 'damage', values: ['damage 1', 'damage 2', 'damage 3'], probability: 32 },
        { type: 'range', values: ['range 1', 'range 2', 'range 3'], probability: 32 },
        { type: 'speed', values: ['speed 1', 'speed 2', 'speed 3'], probability: 32 },
        { type: 'boss-killer', values: ['boss killer'], probability: 1 },
        { type: 'withered', values: ['withered'], probability: 1 },
        { type: 'puppets-nightmare', values: ['puppets nightmare'], probability: 0.5 },
        { type: 'bounded', values: ['bounded'], probability: 0.5 },
        { type: 'shadow', values: ['shadow'], probability: 0.1 },
        { type: 'vengeance', values: ['vengeance'], probability: 0.01 },
    ];

    const random = Math.random() * 100;
    let selectedEnchantment = null;

    let cumulativeProbability = 0;
    for (const enchantment of enchantments) {
        cumulativeProbability += enchantment.probability;
        if (random < cumulativeProbability) {
            const value = enchantment.values[Math.floor(Math.random() * enchantment.values.length)];
            selectedEnchantment = `<div class="${enchantment.type}">${value}</div>`;
            break;
        }
    }

    document.getElementById('result').innerHTML = selectedEnchantment;
});

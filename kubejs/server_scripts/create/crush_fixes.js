const createCrushedOres = [
    'copper', 'gold',
    'iron', 'zinc',
    'silver', 'tin',
    'lead', 'nickel'
];

// Define special byproducts for specific ores
const byproducts = {
    copper: { tag: 'forge:molten_gold', amount: 30 },
    gold: { tag: 'forge:molten_cobalt', amount: 90 },
    iron: { tag: 'forge:molten_steel', amount: 90 },
    zinc: { tag: 'forge:molten_copper', amount: 90 },
    silver: { tag: 'forge:molten_tin', amount: 30 },
    lead: { tag: 'forge:molten_tin', amount: 90 },
    nickel: { tag: 'forge:molten_silver', amount: 30 }
};

ServerEvents.recipes(event => {
    createCrushedOres.forEach(ore => {
        const recipe = {
            type: "tconstruct:ore_melting",
            ingredient: {
                item: `create:crushed_raw_${ore}`
            },
            rate: "metal",
            result: {
                amount: 90,
                tag: `forge:molten_${ore}`
            },
            temperature: 500,
            time: 75
        };

        // If this ore has a defined byproduct, add it
        if (byproducts[ore]) {
            recipe.byproducts = [
                {
                    amount: byproducts[ore].amount,
                    rate: "metal",
                    tag: byproducts[ore].tag
                }
            ];
        }

        event.custom(recipe);
    });
});
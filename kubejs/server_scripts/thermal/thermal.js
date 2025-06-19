ServerEvents.recipes(event => {
    event.shaped(
        Item.of('thermal:rubber', 1),
        [
            'QQQ',
            'QYQ',
            'QQQ'
        ], 
        {
            Y: 'bloodmagic:watersigil',
            Q: 'minecraft:vine'
        }
    ).replaceIngredient('bloodmagic:watersigil', 'bloodmagic:watersigil');

    event.recipes.thermal.pulverizer(Item.of('mysticalagriculture:prosperity_shard').withChance(6.5), '#forge:ores/prosperity').energy(500)
});
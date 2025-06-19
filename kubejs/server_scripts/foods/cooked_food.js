ServerEvents.recipes(event => {
    // Smelting Recipes
    event.smelting('kubejs:cooked_apple', 'minecraft:apple').xp(0.35);
    event.smelting('kubejs:cooked_carrot', 'minecraft:carrot').xp(0.35);
    event.smelting('kubejs:cooked_beetroot', 'minecraft:beetroot').xp(0.35);
    event.smelting('kubejs:baked_bread', 'minecraft:bread').xp(0.35);

    // Smoking Recipes
    event.smoking('kubejs:cooked_apple', 'minecraft:apple').xp(0.35);
    event.smoking('kubejs:cooked_carrot', 'minecraft:carrot').xp(0.35);
    event.smoking('kubejs:cooked_beetroot', 'minecraft:beetroot').xp(0.35);
    event.smoking('kubejs:baked_bread', 'minecraft:bread').xp(0.35);

    // Campfire Cooking Recipes
    event.campfireCooking('kubejs:cooked_apple', 'minecraft:apple').xp(0.35);
    event.campfireCooking('kubejs:cooked_carrot', 'minecraft:carrot').xp(0.35);
    event.campfireCooking('kubejs:cooked_beetroot', 'minecraft:beetroot').xp(0.35);
    event.campfireCooking('kubejs:baked_bread', 'minecraft:bread').xp(0.35);
    
    event.remove({ id: 'thermal:smelting/cooked_corn_from_campfire_cooking' });
});
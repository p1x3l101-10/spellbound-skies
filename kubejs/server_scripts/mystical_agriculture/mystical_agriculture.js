ServerEvents.recipes(event => {
    // Inferium -> Dirt
    event.shaped(
        Item.of('minecraft:dirt', 1), 
        [
            'XX',
            'XX'
        ], 
        {
            X: 'mysticalagriculture:inferium_essence'
        }
    );

    // Inferium + Iron Nugget + Mana Powder -> 4x Prosperity Shards
    event.shaped(
        Item.of('mysticalagriculture:prosperity_shard', 4), 
        [
            'XXX',
            'XYX',
            'XXX'
        ], 
        {
            X: 'mysticalagriculture:inferium_essence',
            Y: 'minecraft:iron_nugget',
        }
    );

    // Stone Essence + Zinc Nuggets -> 8x Andesite
    event.shaped(
        Item.of('minecraft:andesite', 4),
        [
            'XYX',
            'XYX',
            'XYX'
        ], 
        {
            X: 'mysticalagriculture:stone_essence',
            Y: 'create:zinc_nugget'
        }
    ); 

    // Mystical Fertilizer + Wood Essence + Mana Powder -> 4x Living Root
    event.shaped(
        Item.of('botania:living_root', 4),
        [
            'XZX',
            'ZYZ',
            'XZX'
        ], 
        {
            X: 'mysticalagriculture:wood_essence',
            Y: 'botania:mana_powder',
            Z: 'mysticalagriculture:fertilized_essence'
        }
    );  
    
    event.remove({ id: 'mysticalagriculture:infusion_altar' });
    event.remove({ id: 'mysticalagriculture:infusion_pedestal' });
    event.remove({ id: 'minecraft:red_carpet' });
    event.remove({ id: 'mysticalagriculture:prosperity_gemstone' });

    event.shaped(
        Item.of('minecraft:red_carpet', 2),
        [
            'XX'
        ], 
        {
            X: 'minecraft:red_wool'
        }
    ); 
    
    event.shaped(
        Item.of('mysticalagriculture:infusion_altar', 1),
        [
            'XZX',
            'QYQ',
            'YYY'
        ], 
        {
            X: 'minecraft:gold_ingot',
            Y: 'minecraft:stone',
            Z: 'minecraft:red_carpet',
            Q: 'botania:mana_powder'
        }
    ); 

    event.shaped(
        Item.of('mysticalagriculture:infusion_pedestal', 1),
        [
            'XZX',
            ' Y ',
            'QYQ'
        ], 
        {
            X: 'minecraft:gold_ingot',
            Y: 'minecraft:stone',
            Z: 'minecraft:red_carpet',
            Q: 'botania:mana_powder'
        }
    ); 

    event.shaped(
        Item.of('mysticalagriculture:prosperity_gemstone', 1),
        [
            ' Q ',
            'QYQ',
            ' Q '
        ], 
        {
            Y: 'ars_nouveau:source_gem',
            Q: 'mysticalagriculture:prosperity_shard'
        }
    ); 

    event.shaped(
        Item.of('sulfar_mod:sulfar', 4),
        [
            'QZQ',
            'ZYZ',
            'QZQ'
        ], 
        {
            Y: 'minecraft:coal',
            Q: 'mysticalagriculture:nether_essence',
            Z: 'minecraft:gunpowder'
        }
    ); 
});
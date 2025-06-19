ServerEvents.recipes(event => {
    // Integral components
    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "minecraft:clock" },
        output: { item: "thermal:upgrade_augment_1" },
        upgradeLevel:     3,
        altarSyphon:      3000,
        consumptionRate:  1000,
        drainRate:        1000
    }).id("kubejs:altar/thermal_upgrade_augment_1");

    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "thermal:upgrade_augment_1" },
        output: { item: "thermal:upgrade_augment_2" },
        upgradeLevel:     3,
        altarSyphon:      5000,
        consumptionRate:  1000,
        drainRate:        1000
    }).id("kubejs:altar/thermal_upgrade_augment_2");

    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "thermal:upgrade_augment_2" },
        output: { item: "thermal:upgrade_augment_3" },
        upgradeLevel:     3,
        altarSyphon:      10000,
        consumptionRate:  1000,
        drainRate:        1000
    }).id("kubejs:altar/thermal_upgrade_augment_3");

    // Mystical Agriculture Essences
    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "mysticalagriculture:inferium_essence" },
        output: { item: "mysticalagriculture:prudentium_essence" },
        upgradeLevel:     0,
        altarSyphon:      500,
        consumptionRate:  125,
        drainRate:        125
    }).id("kubejs:altar/prudentium_essence");

    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "mysticalagriculture:prudentium_essence" },
        output: { item: "mysticalagriculture:tertium_essence" },
        upgradeLevel:     1,
        altarSyphon:      2000,
        consumptionRate:  500,
        drainRate:        500
    }).id("kubejs:altar/tertium_essence");

    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "mysticalagriculture:tertium_essence" },
        output: { item: "mysticalagriculture:imperium_essence" },
        upgradeLevel:     2,
        altarSyphon:      8000,
        consumptionRate:  2000,
        drainRate:        2000
    }).id("kubejs:altar/imperium_essence");

    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "mysticalagriculture:imperium_essence" },
        output: { item: "mysticalagriculture:supremium_essence" },
        upgradeLevel:     3,
        altarSyphon:      32000,
        consumptionRate:  8000,
        drainRate:        8000
    }).id("kubejs:altar/supremium_essence");

    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "mysticalagriculture:supremium_essence" },
        output: { item: "mysticalagradditions:insanium_essence" },
        upgradeLevel:     4,
        altarSyphon:      100000,
        consumptionRate:  25000,
        drainRate:        25000
    }).id("kubejs:altar/insanium_essence");

    // Nether essence
    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "minecraft:netherrack" },
        output: { item: "mysticalagriculture:nether_essence" },
        upgradeLevel:     2,
        altarSyphon:      1000,
        consumptionRate:  75,
        drainRate:        75
    }).id("kubejs:altar/nether_essence");

    // Dagger of Sacrifice
    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "minecraft:diamond_sword" },
        output: { item: "bloodmagic:daggerofsacrifice" },
        upgradeLevel:     2,
        altarSyphon:      4000,
        consumptionRate:  500,
        drainRate:        500
    }).id("kubejs:altar/dagger_of_sacrifice");

    // Coagulated blood (Blood Slime Ball)
    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "biomancy:flesh_bits" },
        output: { item: "tconstruct:blood_slime_ball" },
        upgradeLevel:     0,
        altarSyphon:      200,
        consumptionRate:  50,
        drainRate:        50
    }).id("kubejs:altar/blood_slime_ball");

    // Andesite Alloy
    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "minecraft:andesite" },
        output: { item: "create:andesite_alloy" },
        upgradeLevel:     0,
        altarSyphon:      250,
        consumptionRate:  10,
        drainRate:        10
    }).id("kubejs:altar/andesite_alloy");

    // Zinc Ingot
    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "minecraft:copper_ingot" },
        output: { item: "create:zinc_ingot" },
        upgradeLevel:     0,
        altarSyphon:      250,
        consumptionRate:  10,
        drainRate:        10
    }).id("kubejs:altar/zinc_ingot");

    // Nature essence
    event.custom({
        type: "bloodmagic:altar",
        input:  { tag: "createaddition:plants" },
        output: { item: "mysticalagriculture:nature_essence" },
        upgradeLevel:     0,
        altarSyphon:      200,
        consumptionRate:  1000,
        drainRate:        1000
    }).id("kubejs:altar/nature_essence");

    // Demon's Dream Seeds
    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "minecraft:wheat_seeds" },
        output: { item: "occultism:datura_seeds" },
        upgradeLevel:     0,
        altarSyphon:      200,
        consumptionRate:  10,
        drainRate:        10
    }).id("kubejs:altar/datura_seeds"); 

    // Bloomberries
    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "ars_nouveau:sourceberry_bush" },
        output: { item: "biomancy:bloomberry" },
        upgradeLevel:     0,
        altarSyphon:      250,
        consumptionRate:  25,
        drainRate:        25
    }).id("kubejs:altar/bloomberries"); 

    // Flesh Bits
    event.custom({
        type: "bloodmagic:altar",
        input:  { item: "minecraft:rotten_flesh" },
        output: { item: "biomancy:flesh_bits" },
        upgradeLevel:     1,
        altarSyphon:      500,
        consumptionRate:  50,
        drainRate:        50
    }).id("kubejs:altar/flesh_bits"); 

    event.remove({ id: 'bloodmagic:blood_altar' });
    event.remove({ id: 'ars_caelum:ritual_conjure_island_blazing' });
    event.remove({ id: 'biomancy:crafting/primordial_core' });

    // Altar Recipe
    event.shaped(
        Item.of('bloodmagic:altar', 1),
        [
            'XYX',
            'XZX',
            'QQQ'
        ], 
        {
            X: 'minecraft:stone',
            Y: 'ars_nouveau:source_gem',
            Z: 'minecraft:furnace',
            Q: 'minecraft:gold_ingot'
        }
    ).id('kubejs:blood_altar');

    // Primordial Core
    event.custom({
        type: 'bloodmagic:alchemytable',
        input: [
            { item: 'minecraft:ender_pearl' },
            { item: 'bloodmagic:basemonstersoul' },
            { tag: 'biomancy:raw_meats' },
            { tag: 'biomancy:raw_meats' },
            { item: 'biomancy:flesh_bits' },
            { item: 'biomancy:flesh_bits' }
        ],
        output: {
            item: 'biomancy:primordial_core',
        },
        syphon: 1000,
        ticks: 200,
        upgradeLevel: 2
    }).id('kubejs:alchemy/primordial_core');

    event.replaceInput(
        { id: 'naturesaura:gold_fiber' },
        '#minecraft:leaves',
        'ars_nouveau:magebloom_fiber'
    );
    
    // Swap out the grass input for nature essence
    event.replaceInput(
        { id: 'naturesaura:gold_fiber' },
        'minecraft:grass',
        'mysticalagriculture:nature_essence'
    );
});  
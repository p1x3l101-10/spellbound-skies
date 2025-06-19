ServerEvents.recipes( event => {
    const sr = event.recipes.summoningrituals;

    // Sheep ritual
    sr
        .altar('occultism:spirit_attuned_gem')
        .mobOutput('sheep')
        .input('4x #minecraft:wool')
        .input('2x ars_nouveau:source_gem')
        .input('minecraft:egg')
        .recipeTime(200)
        .sacrificeRegion(3, 3)
        .id('kubejs:ritual/sheep');

    // Cow ritual
    sr
        .altar('occultism:spirit_attuned_gem')
        .mobOutput('cow')
        .input('4x #forge:leather')
        .input('2x ars_nouveau:source_gem')
        .input('minecraft:beef')
        .input('minecraft:egg')
        .recipeTime(200)
        .sacrificeRegion(3, 3)
        .id('kubejs:ritual/cow');

    // Pig ritual
    sr
        .altar('occultism:spirit_attuned_gem')
        .mobOutput('pig')
        .input('2x minecraft:porkchop')
        .input('ars_nouveau:source_gem')
        .input('minecraft:golden_carrot')
        .input('minecraft:egg')
        .recipeTime(200)
        .sacrificeRegion(3, 3)
        .id('kubejs:ritual/pig');

    // Chicken ritual
    sr
        .altar('occultism:spirit_attuned_gem')
        .mobOutput('chicken')
        .input('4x minecraft:feather')
        .input('2x ars_nouveau:source_gem')
        .input('minecraft:chicken')
        .input('minecraft:egg')
        .recipeTime(200)
        .sacrificeRegion(3, 3)
        .id('kubejs:ritual/chicken');

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 5000,
        consumptionRate: 500,
        drainRate: 500,
        input: {
            item: "mysticalagriculture:infusion_altar"
        },
        output: {
            item: "summoningrituals:altar"
        },
        upgradeLevel: 2
    }).id('kubejs:bloodmagic/altar_upgrade_infusion_to_summoning');

});

// add visual & rewards
SummoningRituals.start( event => {
    event.level.spawnLightning(event.pos.x, event.pos.y, event.pos.z, true);
});

SummoningRituals.complete( event => {
    event.player.addXPLevels(5);
});  
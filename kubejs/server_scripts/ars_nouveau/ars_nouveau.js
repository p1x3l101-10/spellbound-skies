ServerEvents.recipes(event => {
    event.shaped(
        Item.of('supplementaries:flax_seeds', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:wheat_seeds',
            B: 'ars_nouveau:manipulation_essence'
        }
    );

    event.shaped(
        Item.of('ars_caelum:ritual_conjure_island_blazing', 1),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'botania:blaze_block',
            B: 'ars_nouveau:red_archwood_sapling',
            C: 'ars_nouveau:red_archwood_log'
        }
    );

    //event.recipes.ars_nouveau.enchanting_apparatus(
    //    [
    //       "minecraft:lightning_rod",
    //        "minecraft:lightning_rod",
    //        "ars_nouveau:bombegranate_pod",
    //        "ars_nouveau:bombegranate_pod",
    //    ], // input items
	//    "ars_nouveau:red_archwood_sapling", // reagent
	//    "ars_elemental:yellow_archwood_sapling", // output
	//    1000, // source cost
	//);
})
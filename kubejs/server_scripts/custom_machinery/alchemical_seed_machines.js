ServerEvents.recipes(event => {
    // Seed Deconstructor
    event.shaped(
        Item.of('custommachinery:custom_machine_item', 1, { machine: 'custommachinery:seed_deconstructor' }),
        [
            'RBR',
            'BSB',
            'RBR'
        ], 
        {
            R: 'minecraft:redstone_block',
            B: 'mysticalagriculture:inferium_seeds',
            S: 'thermal:rf_coil'
        }
    );

    // Seed Reconstructor
    event.shaped(
        Item.of('custommachinery:custom_machine_item', 1, { machine: 'custommachinery:seed_reconstructor' }),
        [
            'SRS',
            'RBR',
            'SAS'
        ], 
        {
            A: 'thermal:rf_coil',
            R: 'mysticalagriculture:inferium_seeds',
            S: 'minecraft:redstone_block',
            B: 'mysticalagriculture:inferium_essence'
        }
    );
});
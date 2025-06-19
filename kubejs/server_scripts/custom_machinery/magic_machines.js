ServerEvents.recipes(event => {

    // Sylvan Capacitor
    event.shaped(
        Item.of('custommachinery:custom_machine_item', 1, { machine: 'custommachinery:sylvan_capacitor' }),
        [
            'XZX',
            'ZYZ',
            'XAX'
        ], 
        {
            A: 'thermal:rf_coil',
            X: 'botania:livingrock',
            Y: 'botania:mana_diamond',
            Z: 'botania:manasteel_ingot'
        }
    );
});
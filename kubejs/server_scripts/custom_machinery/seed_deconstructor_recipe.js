ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine('custommachinery:seed_deconstructor', 10)
        .requireItemTag('forge:seeds', 1)
        .produceEnergyPerTick(10);
    
    event.remove({ id: 'mysticalagriculture:seed/infusion/wood' });
    event.remove({ id: 'mysticalagriculture:seed/infusion/dirt' });
    event.remove({ id: 'mysticalagriculture:seed/infusion/stone' });
    event.remove({ id: 'mysticalagriculture:seed/infusion/ice' });
});
ServerEvents.recipes(event => {
    event.remove({output: 'mining_dimension:teleporter'});
    event.shaped(
  	Item.of('mining_dimension:teleporter', 1),
  	[
    	    'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'create:andesite_casing',
            B: 'minecraft:stone',
            C: 'minecraft:stone_pickaxe'
        }
    );
});
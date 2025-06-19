ServerEvents.recipes(event => {
    const ingotMB = 90;

    /**
     * Helper: remove the old recipe by ID, then re-add as a Create mixing that outputs molten fluid.
     *
     * @param {string} id           The original recipe ID.
     * @param {Array<string|Item|Fluid>} ingredients  Mix inputs: item strings, tag strings (`#mod:tag`), Item.of(...), Fluid.of(...).
     * @param {string} heat         "heated" or "superheated".
     * @param {string} fluid        The molten fluid suffix (e.g. "amethyst_bronze").
     * @param {number} ingots       Number of ingots’ worth of fluid.
     */
    function rewriteMix(id, ingredients, heat, fluid, ingots) {
      event.remove({ id: id });
      const resultFluid = Fluid.of(`tconstruct:molten_${fluid}`, ingots * ingotMB);
      let recipe = event.recipes.create.mixing(resultFluid, ingredients);
      recipe = heat === 'heated' ? recipe.heated() : recipe.superheated();
      recipe.id(id);
    }
  
    rewriteMix(
      'createaddition:compat/tconstruct/amethyst_bronze',
      ['minecraft:copper_ingot', 'minecraft:amethyst_shard'],
      'heated',
      'amethyst_bronze',
      1
    );
  
    rewriteMix(
      'createaddition:compat/tconstruct/slimesteel',
      ['minecraft:iron_ingot', '#forge:slimeballs', '#tconstruct:seared_blocks'],
      'heated',
      'slimesteel',
      2
    );
  
    rewriteMix(
      'createaddition:compat/tconstruct/manyullyn',
      ['tconstruct:cobalt_ingot', 'minecraft:netherite_scrap'],
      'superheated',
      'manyullyn',
      4
    );
  
    rewriteMix(
      'createaddition:compat/tconstruct/pig_iron_2',
      ['minecraft:iron_ingot', 'biomancy:flesh_bits', 'minecraft:honey_block'],
      'heated',
      'pig_iron',
      8
    );
  
    rewriteMix(
      'create:mixing/brass_ingot',
      ['minecraft:copper_ingot', 'create:zinc_ingot'],
      'heated',
      'brass',
      2
    );
  
    rewriteMix(
      'createaddition:compat/tconstruct/pig_iron',
      ['minecraft:iron_ingot', 'biomancy:flesh_bits', 'minecraft:clay_ball'],
      'heated',
      'pig_iron',
      2
    );
  
    rewriteMix(
      'createaddition:compat/tconstruct/tinkers_bronze',
      ['minecraft:copper_ingot', '#forge:ingots/tin'],
      'heated',
      'bronze',
      4
    );
  
    rewriteMix(
      'createaddition:mixing/electrum',
      ['minecraft:gold_ingot', '#forge:ingots/silver'],
      'heated',
      'electrum',
      2
    );
  
    rewriteMix(
      'createaddition:compat/tconstruct/rose_gold',
      ['minecraft:copper_ingot', 'minecraft:gold_ingot'],
      'heated',
      'rose_gold',
      4
    );
  
    rewriteMix(
      'createaddition:compat/tconstruct/queens_slime',
      ['tconstruct:cobalt_ingot', 'minecraft:gold_ingot', 'minecraft:magma_cream'],
      'superheated',
      'queens_slime',
      2
    );
  
    rewriteMix(
      'createaddition:compat/tconstruct/hepatizon',
      ['minecraft:obsidian', 'tconstruct:cobalt_ingot', 'minecraft:copper_ingot', 'minecraft:copper_ingot'],
      'superheated',
      'hepatizon',
      2
    );
  
    ['copper','gold','iron','zinc','silver','tin','lead','nickel'].forEach(ore => {
      event.recipes.create.mixing(
        Fluid.of(`tconstruct:molten_${ore}`, 117),
        [`create:crushed_raw_${ore}`]
      ).heated().id(`kubejs:mixing/melt_crushed_${ore}`);
    });
  
    ['copper','iron','gold','zinc','tin','lead','silver','nickel'].forEach(ore => {
      event.recipes.create.mixing(
        Fluid.of(`tconstruct:molten_${ore}`, ingotMB),
        [`#forge:ores/${ore}`]
      ).heated().id(`kubejs:mixing/melt_ore_${ore}`);
      event.recipes.create.mixing(
        Fluid.of(`tconstruct:molten_${ore}`, 120),
        [`#forge:dusts/${ore}`]
        ).heated().id(`kubejs:mixing/melt_dust_${ore}`);
        event.recipes.create.mixing(
        Fluid.of(`tconstruct:molten_${ore}`, ingotMB),
            [`#forge:raw_materials/${ore}`]
        ).heated().id(`kubejs:mixing/melt_raw_${ore}`);
    });

    event.recipes.create.mixing(
        Fluid.of('tconstruct:molten_obsidian', 1000),
        ['minecraft:obsidian']
    ).superheated().id('kubejs:mixing/obsidian_to_molten_obsidian');

    event.recipes.create.mixing(
        Fluid.of('tcintegrations:molten_manasteel', ingotMB),
        ['botania:manasteel_ingot']
    ).heated().id('kubejs:mixing/manasteel_to_molten');

    event.recipes.create.mixing(
        Fluid.of('tconstruct:molten_diamond', ingotMB),
        ['minecraft:diamond']
    ).superheated().id('kubejs:mixing/diamond_to_molten');

    event.recipes.create.mixing(
        Fluid.of('tconstruct:molten_diamond', ingotMB),
        ['thermal:diamond_dust']
    ).heated().id('kubejs:mixing/diamond_dust_to_molten');

    event.recipes.create.mixing(
        Fluid.of('tconstruct:molten_ender', 250),
        ['minecraft:ender_pearl']
    ).superheated().id('kubejs:mixing/pearl_to_molten_ender');

    event.recipes.create.mixing(
        Fluid.of('tconstruct:molten_enderium', 180),
        [
            Item.of('minecraft:ender_pearl', 2),
            Item.of('thermal:lead_ingot', 3),
            'minecraft:diamond'
        ]
    ).superheated().id('kubejs:mixing/molten_enderium_1');
});
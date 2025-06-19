ServerEvents.recipes(event => {
    // Static Clouds
    event.recipes.botania.pure_daisy("cloudstorage:static_cloud", "cloudstorage:cloud");
    event.recipes.botania.pure_daisy("minecraft:clay", "minecraft:mud");
    event.recipes.botania.pure_daisy("occultism:otherstone", "minecraft:sculk");
    event.remove({ id: 'create_aquatic_ambitions:smelting/prismarine_to_veridium' });
    event.recipes.botania.pure_daisy("create:veridium", "minecraft:prismarine");
    event.recipes.botania.pure_daisy("create:asurine", "botania:metamorphic_taiga_stone");
    event.recipes.botania.pure_daisy("create:crimsite", "botania:metamorphic_mountain_stone");
    event.recipes.botania.pure_daisy("create:ochrum", "botania:metamorphic_desert_stone");
    event.remove({ id: 'gardenofglass:end_portal_frame' });
    // Stone
    event.recipes.botania.orechid("create:zinc_ore", "minecraft:stone", 3500);
    event.recipes.botania.orechid("mysticalagriculture:inferium_ore", "minecraft:stone", 5500);
    event.recipes.botania.orechid("mysticalagriculture:prosperity_ore", "minecraft:stone", 4250);
    event.recipes.botania.orechid("thermal:apatite_ore", "minecraft:stone", 4500);
    event.recipes.botania.orechid("thermal:cinnabar_ore", "minecraft:stone", 250);
    event.recipes.botania.orechid("thermal:niter_ore", "minecraft:stone", 2250);
    event.recipes.botania.orechid("thermal:sulfur_ore", "minecraft:stone", 4500);
    event.recipes.botania.orechid("thermal:tin_ore", "minecraft:stone", 3750);
    event.recipes.botania.orechid("thermal:lead_ore", "minecraft:stone", 2750);
    event.recipes.botania.orechid("thermal:silver_ore", "minecraft:stone", 3000);
    event.recipes.botania.orechid("thermal:nickel_ore", "minecraft:stone", 3250);
    event.recipes.botania.orechid("thermal:ruby_ore", "minecraft:stone", 100);
    event.recipes.botania.orechid("thermal:sapphire_ore", "minecraft:stone", 100);
    // Deepslate
    event.recipes.botania.orechid("create:deepslate_zinc_ore", "minecraft:deepslate", 225);
    event.recipes.botania.orechid("mysticalagriculture:deepslate_inferium_ore", "minecraft:deepslate", 400);
    event.recipes.botania.orechid("mysticalagriculture:deepslate_prosperity_ore", "minecraft:deepslate", 345);
    event.recipes.botania.orechid("thermal:deepslate_apatite_ore", "minecraft:deepslate", 325);
    event.recipes.botania.orechid("thermal:deepslate_cinnabar_ore", "minecraft:deepslate", 30);
    event.recipes.botania.orechid("thermal:deepslate_niter_ore", "minecraft:deepslate", 155);
    event.recipes.botania.orechid("thermal:deepslate_sulfur_ore", "minecraft:deepslate", 325);
    event.recipes.botania.orechid("thermal:deepslate_tin_ore", "minecraft:deepslate", 245);
    event.recipes.botania.orechid("thermal:deepslate_lead_ore", "minecraft:deepslate", 190);
    event.recipes.botania.orechid("thermal:deepslate_silver_ore", "minecraft:deepslate", 200);
    event.recipes.botania.orechid("thermal:deepslate_nickel_ore", "minecraft:deepslate", 215);
    event.recipes.botania.orechid("thermal:deepslate_ruby_ore", "minecraft:deepslate", 15);
    event.recipes.botania.orechid("thermal:deepslate_sapphire_ore", "minecraft:deepslate", 15);
    // Otherstone
    event.recipes.botania.orechid_ignem("occultism:iesnium_ore", "occultism:otherstone", 100);
    // Netherrack
    event.recipes.botania.orechid_ignem("sulfar_mod:nether_sulfar_ore", "minecraft:netherrack", 10000);
    event.recipes.botania.orechid_ignem("mysticalagriculture:nether_inferium_ore", "minecraft:netherrack", 9000);
    event.recipes.botania.orechid_ignem("mysticalagriculture:nether_prosperity_ore", "minecraft:netherrack", 7500);
    event.recipes.botania.orechid_ignem("mysticalagriculture:soulium_ore", "minecraft:netherrack", 2000);
    event.recipes.botania.orechid_ignem("tconstruct:cobalt_ore", "minecraft:netherrack", 750);
})

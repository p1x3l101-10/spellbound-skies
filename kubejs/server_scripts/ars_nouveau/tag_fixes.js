// Listen to item tag event
ServerEvents.tags('item', event => {
    event.remove('forge:stone', 'minecraft:andesite');
});
StartupEvents.registry('item', event => {
    // Register Cooked Apple
    event.create('cooked_apple')
        .displayName('Cooked Apple')
        .food(food => {
            food.hunger(6)
                .saturation(0.3);
        });
    
    // Register Cooked Carrot
    event.create('cooked_carrot')
        .displayName('Cooked Carrot')
        .food(food => {
            food.hunger(5)
                .saturation(0.25);
        });

    // Register Cooked Beetroot
    event.create('cooked_beetroot')
        .displayName('Cooked Beetroor')
        .food(food => {
            food.hunger(5)
                .saturation(0.25);
        });

    // Register Baked Bread
    event.create('baked_bread')
        .displayName('Baked Bread')
        .food(food => {
            food.hunger(10)
                .saturation(0.5);
        });
});
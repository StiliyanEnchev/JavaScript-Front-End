function solve(input) {
    heroes = [];

    for (let heroDetails of input) {
        let [name, level, items] = heroDetails.split(' / ')
        level = Number(level);
        
        heroes.push({
            level,
            name,
            items: items
        })
    }

    heroes.sort((a, b) => a.level - b.level);

    for (hero of heroes) {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
        
    }


}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )
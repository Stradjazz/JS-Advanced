function heroicInventory(input) {
    const heroData = [];
    for (const iterator of input) {
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        heroData.push({name, level, items});
    }

    return JSON.stringify(heroData);
}
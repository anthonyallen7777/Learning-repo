const itemData = [
    { category: 'fruit', itemName: 'apple', onSale: false },
    { category: 'canned', itemName: 'beans', onSale: false },
    { category: 'canned', itemName: 'corn', onSale: true },
    { category: 'frozen', itemName: 'pizza', onSale: false },
    { category: 'fruit', itemName: 'melon', onSale: true },
    { category: 'canned', itemName: 'soup', onSale: false },
];


function organizeItems(items) {
    let insertObj = {};

    for (let i = 0; i < items.length; i++) {
        const currentCat = items[i].category;
        let currentItemName = items[i].itemName;
        if (items[i].onSale) {
            currentItemName = currentItemName+'($)';
        }
        if (!insertObj[currentCat]) {
            insertObj[currentCat] = [currentItemName];
        } else {
            insertObj[currentCat].push(currentItemName);
        }
    }
    console.log(insertObj);
}

organizeItems(itemData);
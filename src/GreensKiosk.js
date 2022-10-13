let products = [
    {
        name: 'Mangoes',
        category: 'fruits',
        thumbnail: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0cyUyMGFuZCUyMHZlZ2dpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Apples',
        category: 'fruits',
        thumbnail: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0cyUyMGFuZCUyMHZlZ2dpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Bananas',
        category: 'fruits'
    },
    {
        name: 'Oranges',
        category: 'fruits'
    },
    {
        name: 'Grapes',
        category: 'fruits'
    },
    {
        name: 'Kales',
        category: 'vegetables'
    },
    {
        name: 'Onions',
        category: 'vegetables'
    },
    {
        name: 'Tomatoes',
        category: 'vegetables'
    },
    {
        name: 'Cabbages',
        category: 'vegetables'
    },
    {
        name: 'Spinach',
        category: 'vegetables'
    },
    ];
    
    function getItems(category) {
    if (category) {
        let filteredProducts = products.filter(item => {
            return item.category === category;
        });
        return filteredProducts;
    }
    return products;
    }
    
    // eslint-disable-next-line no-undef
    GreensKiosk = {
    getItems: getItems
    };
    
    // eslint-disable-next-line no-undef
    module.exports = GreensKiosk;

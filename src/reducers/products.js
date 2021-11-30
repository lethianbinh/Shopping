var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://24hstore.vn/images/products/2020/04/19/large/iphone-7-plus-rose-silver_1587272426_1.jpg',
        description: 'Sản phẩm của Apple',
        price: 500,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung Galaxy S20',
        image: 'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-hong-600x600-600x600.jpg',
        description: 'Sản phẩm của Samsung',
        price: 400,
        inventory: 20,
        rating: 4
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: 'http://vitinhthuduc.com/wp-content/uploads/2019/11/100000_oppo-f1s-12-600x550.jpg',
        description: 'Sản phẩm của Oppo',
        price: 300,
        inventory: 15,
        rating: 4
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;
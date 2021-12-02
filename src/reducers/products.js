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
        rating: 2
    },
    {
        id: 4,
        name: 'iPhone 13 Pro Max 1TB',
        image: 'https://24hstore.vn/images/products/2021/09/15/large/iphone-13-pro-max-graphite-select_1631659794_1.jpg',
        description: 'Sản phẩm của Apple',
        price: 500,
        inventory: 10,
        rating: 1
    },
    {
        id: 5,
        name: 'iPhone 11 Pro Max 512GB',
        image: 'https://24hstore.vn/images/products/2020/05/15/large/iphone-11-pro-max-gold_1589515230_1.jpg',
        description: 'Sản phẩm của Apple',
        price: 400,
        inventory: 20,
        rating: 4
    },
    {
        id: 6,
        name: 'Samsung Galaxy A52s 5G Hàng Công ty',
        image: 'https://24hstore.vn/images/products/2021/10/13/large/samsung-galaxy-a52s-black.jpg',
        description: 'Sản phẩm của Samsung',
        price: 200,
        inventory: 15,
        rating: 4
    },
    {
        id: 7,
        name: 'Xiaomi Redmi Note 10 Pro Hàng Công Ty',
        image: 'https://24hstore.vn/images/products/2021/04/13/large/redmi-note-10-pro-gray_1618298231_1.jpg',
        description: 'Sản phẩm của Xiaomi',
        price: 300,
        inventory: 10,
        rating: 5
    },
    {
        id: 8,
        name: 'Xiaomi Redmi 9C Hàng Công Ty',
        image: 'https://24hstore.vn/images/products/2021/04/13/large/redmi-9c-gray.jpg',
        description: 'Sản phẩm của Xiaomi',
        price: 100,
        inventory: 20,
        rating: 5
    },
    {
        id: 9,
        name: 'Vsmart Joy 4',
        image: 'https://24hstore.vn/images/products/2021/04/22/large/vsmart-joy-4.jpg',
        description: 'Sản phẩm của Vsmart',
        price: 100,
        inventory: 15,
        rating: 3
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;
const initalState = {


        carts: [],

        data: [{
                        id: 1,
                        name: 'Women T-Shirt',
                        image: './dress_1.jpg',
                        price: 350,
                        discountPrice: 350 - 50 / 100 * 350,
                        quantity: 1,
                        desc: "beautiful-men-fashion-shirt."
                },
                {
                        id: 2,
                        name: 'Blue Jeans',
                        image: './dress _2.jpg',
                        price: 550,
                        discountPrice: 550 - 50 / 100 * 550,
                        quantity: 1,
                        desc: "Tapered Fit Men Blue Jeans."
                },
                {
                        id: 3,
                        name: 'Black T-Shirt',
                        image: './dress_3.jpg',
                        price: 550,
                        discountPrice: 550 - 50 / 100 * 550,
                        quantity: 1,
                        desc: "Color Block Men Round Neck Black T-Shirt."
                },
                {
                        id: 4,
                        name: 'Jeans',
                        image: './dress_4.jpg',
                        price: 499,
                        discountPrice: 499 - 20 / 100 * 499,
                        quantity: 1,
                        desc: "Tapered Fit Men Light Blue Jeans."
                },
                {
                        id: 5,
                        name: 'Printed Shirt',
                        image: './dress_5.jpg',
                        price: 699,
                        discountPrice: 699 - 50 / 100 * 699,
                        quantity: 1,
                        desc: "Men Regular Fit Printed Slim Collar Beach Wear Shirt"
                },
                {
                        id: 6,
                        name: 'Shirt',
                        image: './dress_6.jpg',
                        price: 650,
                        discountPrice: 650 - 50 / 100 * 650,
                        quantity: 1,
                        desc: "beautiful-men-fashion-shirt."
                },
                {
                        id: 7,
                        name: 'Casual Shirt',
                        image: './dress_7.jpg',
                        price: 720,
                        discountPrice: 720 - 50 / 100 * 720,
                        quantity: 1,
                        desc: "  Men Slim Fit Checkered Spread Collar Casual Shirt."
                },
                {
                        id: 8,
                        name: 'Jeans Shirt',
                        image: './dress_8.jpg',
                        price: 600,
                        discountPrice: 600 - 50 / 100 * 600,
                        quantity: 1,
                        desc: " Striped Men Polo Neck Blue Jeans Shirt."
                },
                {
                        id: 9,
                        name: 'Women T-Shirt',
                        image: './dress_9.jpg',
                        price: 500,
                        discountPrice: 500 - 50 / 100 * 500,
                        quantity: 1,
                        desc: "Women Round Neck fashion T-Shirt"
                },





        ],
        users: [],
        loggedinuser: null,

}
const ProductReducer = (state = initalState, action) => {
        switch (action.type) {
                case "ADD_CART":
                        return {
                                ...state,
                                carts: [...state.carts, action.payload]
                        };

                case 'LOGIN':
                        return {

                                users: [...state.users, action.payload]
                        }








                        default:
                                return state;

        }

}
export default ProductReducer;
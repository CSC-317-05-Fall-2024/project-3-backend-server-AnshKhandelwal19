// Fill this in
let restaurantData = [
    {
        "name": "Tofuya-Ukai",
        "phone": "03-3436-1028",
        "address": "4 Chome-4-13 Shibakoen, Minato City, Tokyo 105-0011, Japan",
        "photo": "images/tofuya-ukai.JPG"
    },
    {
        "name": "Sushi Dai",
        "phone": "81 3-6633-0042",
        "address": "6 Chome-5-1 Toyosu, Koto City, Tokyo 135-0061, Japan",
        "photo": "images/SushiDai.jpg"
    },
    {
        "name": "Kawashima Tōfu",
        "phone": "81 955-72-2423",
        "address": "1775 Kyomachi, Karatsu, Saga 847-0045, Japan",
        "photo": "images/KawashimaTōfu.jpg"
    },
    {
        "name": "Menya Saimi",
        "phone": "81 11-820-6511",
        "address": "5 Chome-3-12 Misono 10 Jo, Toyohira Ward, Sapporo, Hokkaido 062-0010, Japan",
        "photo": "images/MenyaSaimi.jpg"
    },
    {
        "name": "Asakusa Imahan",
        "phone": "81 3-3841-1114",
        "address": "3 Chome-1-12 Nishiasakusa, Taito City, Tokyo 111-0035, Japan",
        "photo": "images/AsakusaImahan.jpg"
    },
    {
        "name": "Kozue",
        "phone": "03-5323-3460",
        "address": "40th fl, Park Hyatt Tokyo, 3-7-1-2 Nishi-Shinjuku. Shinjuku-ku",
        "photo": "images/Kozue.jpg"
    },
];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
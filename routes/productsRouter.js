const express = require("express")
const router = express.Router();
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


router.get("/",(req,res)=>{
    res.send("Hello Product");
});

// Assuming you're using Express
router.get('/shop', (req, res) => {
    // Define or fetch the products array from a database or other source
    const products = [
        {
            name: 'Product 1',
            bgcolor: '#FF5733', // Example color
            image: '/images/1bag.png', // Example base64 string or URL
            price: 12000,
            discount: 10,
            panelcolor : '#FF5733',
            textcolor : 'white'
        },
        
        // Add more products as necessary
    ];

    // Pass the products array to the EJS template
    res.render('shop', { products: products });
});

module.exports = router;
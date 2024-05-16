# package used
1. express
2. nodemon
3. body-parser
4. winston
5. mongoose
6. mongodb
7. cookie-parser

# Functions
User ::
Schema = Name,email,password,type,age,cartitem>[cartid]
1. Register - Done
2. Login - Done
3. Reset password - pending
4. Fotgot Password - pending
5. Update Password - Pending

Product::
Schema = name,description,price, category>[categories],stock,ratingsid>[ratingid]
rate Schema = {userid, productid}
Only seller can add product 
1. Add Product - done
2. Get all Product - done
3. Get One product - done
4. Filter Product - partially done
5. Rate Product - done
6.
7. 
8. Averate rating product -pending

Cart::
CartSchema = {userid,productid,quantity}
userScheme = Schema = Name,email,password,type,age,cartitem>[cartid]
Schema = name,description,price, category>[categories],stock,ratingsid>[ratingid]
1. Add and update items to Cart - [productid]
2. Get items of cart - [userid]
3. Remove items from cart - [cartid]

Order::
1. Create a order

UserController
Signup - Email, Name, Password, TypeOfUser(customer, seller) - Done.
Signin - (Email, Password) - Done.

# Features of this poject
Folder Structure
Route configuration
Creating APIs
Different API Methods
Middlewares
Route parameters
Query parameters
Testing api using postman
Securing Api using jwt token
Documenting API using using swagger
CORS
Logging
Error Handling

# User Data
Users
{
    "name":"user",
    "email":"user@outlook.com",
    "password":"user@gmail.com",
    "type":"customer",
    "age":30
}

{
    "name":"seller",
    "email":"seller@outlook.com",
    "password":"seller@gmail.com",
    "type":"seller",
    "age":30
}

{
  "name": "rahul",
  "email": "rahul@outlook.com",
  "password": "'rahul@outlook.com",
  "type": "seller",
  "age": 30
}

{  "email": "raj@gamil.com",
  "password": "raj@gamil.com",
}
# Products Data

const laptop = {
    "name": "Laptop",
    "description": "Powerful computing on the go.",
    "price": 1200,
    "category": ["Electronics", "Computers"],
    "stock": 10
};
const headphones = {
    "name": "Headphones",
    "description": "Immerse yourself in sound.",
    "price": 100,
    "category": ["Electronics", "Audio"],
    "stock": 0
};

const backpack = {
    "name": "Backpack",
    "description": "Carry your essentials with ease.",
    "price": 50,
    "category": ["Accessories", "Bags"],
    "stock": 5
};

const smartwatch = {
    "name": "Smartwatch",
    "description": "Stay connected, stay fit.",
    "price": 150,
    "category": ["Electronics", "Wearables"],
    "stock": 7
};

const book = {
    "name": "Book",
    "description": "Dive into a world of imagination.",
    "price": 20,
    "category": ["Books", "Fiction"],
    "stock": 20
};

const smartphone = {
    "name": "Smartphone",
    "description": "Your digital companion.",
    "price": 800,
    "category": ["Electronics", "Mobile"],
    "stock": 15
};

const deskLamp = {
    "name": "Desk Lamp",
    "description": "Illuminate your workspace.",
    "price": 30,
    "category": ["Electronics", "Lighting"],
    "stock": 8
};

const tShirt = {
    "name": "T-shirt",
    "description": "Casual comfort for everyday wear.",
    "price": 15,
    "category": ["Clothing", "Casual"],
    "stock": 50
};

const sunglasses = {
    "name": "Sunglasses",
    "description": "Shield your eyes in style.",
    "price": 50,
    "category": ["Accessories", "Eyewear"],
    "stock": 12
};

const bluetoothSpeaker = {
    "name": "Bluetooth Speaker",
    "description": "Portable music wherever you go.",
    "price": 70,
    "category": ["Electronics", "Audio"],
    "stock": 20
};

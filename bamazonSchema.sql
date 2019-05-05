DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
    item_id INT(4) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT(20) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pampers Swaddlers Diapers", "Baby", 24.97, 120), 
("Huggies Pull-ups Training Pants", "Baby", 19.99, 40),
("Bananafish Tote Diaper Bag", "Baby", 29.84, 24),
("VIZIO 65 inch 4K Ultra HD TV", "Electronics", 499.99, 30),
("iPad Air 256GB", "Electronics", 649.00, 50),
("HP Multipurpose Paper", "Office Supplies", 5.85, 300),
("Cross-cut Personal Shredder", "Office Supplies", 65.00, 15),
("Bumbleebee(Blu-ray + DVD", "Entertainment", 22.50, 150),
("Infinity Gauntlet Commic Book", "Entertainment", 16.95, 10),
("Corner & L-shaped Desk", "Furniture", 125.98, 5),
("Electric Height Adjustable Standing Desk", "Furniture", 249.99, 35),
("Purina Cat Chow", "Pet", 11.98, 200),
("Blue Buffalo Dog Food", "Pet", 17.98, 100),
("Aveeno Moisturizing Lotion", "Personal Care", 12.95, 26),
("Dove Antiperspirant Deodorant", "Personal Care", 4.88, 79),
("16 Person Family Cabin Tent", "Outdoors", 249.00, 5),
("Rectangular Sleeping Bag", "Outdoors", 24.95, 48),
("Red Delicious Apples", "Groceries", 0.40, 1000),
("Special K Red Berries Cereal", "Groceries", 3.49, 500);
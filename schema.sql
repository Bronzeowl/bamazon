CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NULL,
	department_name VARCHAR(255) NULL,
	price DECIMAL(10,2) NULL,
	stock_quantity INT(7),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
	('Bentley 6V Ride-On by Dynacraft','Toys',229.99,896,0),
	('BOSU Balance Trainer & 2-Disc DVD Set','Sports',139.99,847,0),
	('JBL Flip 3 Splashproof Wireless Bluetooth Speaker','Electronics',99.99,2500,0),
	('Keurig K55 Coffee Brewing System','Kitchen',119.99,347,0),
	('Gaiam 6mm Geo Feather Reversible Yoga Mat','Sports',34.99,235,0),
	('Fiest 4-pc. Place Setting','Kitchen',32.99,295,0),
	('Leick Furniture Mesh Back Office Chair','Office',110.49,150,0),
	("Fisher-Price Laugh & Learn Singin'Soccer Ball",'Toys',16.09,5000,0),
	('Beats Solo3 Wireless Headphones','Electronics',299.99,187,0),
	('Marcy 30-lb. Kettlebell Kit','Sports',74.99,453,0);
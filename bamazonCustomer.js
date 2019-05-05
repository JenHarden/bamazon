// Required NPM packages

var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

// Creates the connection to the SQL database

var connection = mysql.createConnection({
    host: "localhost",

    // Your port if not 3306

    port: 3306,

    // Your username

    user: "root",

    // Your password

    password: "Jenrn669@",

    // The database to connect to

    database: "bamazon_DB"
});

// Connects to the mysql server and sql database

connection.connect(function (err) {
    if (err) throw err;
});

// Displays the current inventory items from the database and will output it to the console using the cli-table npm package

function displayItems() {

    // The query that will be made to the database

    query = 'SELECT * FROM products';

    // Connects to the database for the query to be made

    connection.query(query, function (err, res) {
        if (err) throw err;

        // The cli-table NPM package to format the inventory into an easy to view table

        var table = new Table({
            head: ["Item ID", "Product Name", "Department", "Price"],
            colWidths: [10, 60, 20, 10]
        });
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price]
            );
        }
        console.log("********** Welcome to Bamazon **********" + "\n" + "************ where there is ************" + "\n" +
            "******** Something for Everyone ********" + "\n" + table.toString());

        // Prompts the user for the purchase inquirer

        promptForPurchase();
    });
}

function promptForPurchase() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'item_id',
            message: 'Please enter the Item ID for the item you would like to purchase:',
            validate: function (value) {
                if (isNaN(value)) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like to purchase?',
            validate: function (value) {
                if (isNaN(value)) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    ]).then(function (input) {
        var quantityRequested = input.quantity;
        var itemIdRequested = input.item_id;

        purchaseItems(itemIdRequested, quantityRequested);
    });
}

function purchaseItems(itemIdRequested, quantityRequested) {
    connection.query('SELECT * FROM products WHERE item_id = ' + itemIdRequested, function (err, res) {
        if (err) throw err;

        // Checks to see if the quantity selected is sufficient, if so proceeds with sale and update mySQL table, otherwise alerts there is not enough

        if (quantityRequested <= res[0].stock_quantity) {
            var totalPrice = res[0].price * quantityRequested;
            console.log("Congratulations! The product you requested is in stock.  Placing order now.");
            console.log("It will cost you $ " + totalPrice + " for the " + quantityRequested + " " + res[0].product_name + ". " + " Thank you for your order!");
            connection.query("UPDATE products SET ? WHERE ?",
                [
                    { stock_quantity: (res[0].stock_quantity - quantityRequested) },
                    { item_id: itemIdRequested }
                ]
            )
        } else {
            console.log("Sorry, there is not enough " + res[0].product_name + " in stock, your order cannot be placed as is. \n");
            console.log("Please modify your order. \n");
            console.log("\n-----------------------------------------------------------------------------\n");
        }
        displayItems();
    })
}

displayItems();
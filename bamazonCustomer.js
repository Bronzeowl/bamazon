var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "",
    database: "Bamazon"
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');


prompt.start();

prompt.get(["id", "howMany"], function (err, result) {
	if (err){
	    console.log(err)
	}

	var CustomerPickID = parseInt(result.id);
	var CustomerQuantity = parseInt(result.howMany);

	console.log("id=" + CustomerPickID, "how many=" + CustomerQuantity);

	function selectID(){
		connection.query('SELECT * FROM Products WHERE ItemID =' + CustomerPickID, function(err, res) { 
			if (err) throw err;
			console.log(res);
			var want = CustomerQuantity;
   			var have = res[0].StockQuantity;
   			var individPrice = res[0].Price;
   			newQuantity = have - want;
   			if (newQuantity >= 0){
          		console.log('Ok! We have enough '+res[0].ProductName+' in stock.');
          		var totalCost= individPrice * CustomerQuantity;
          		console.log("You owe $" +totalCost);
          		connection.query('UPDATE Products SET StockQuantity = '+newQuantity+' WHERE ItemID ='+CustomerPickID, function(err, res){
        		if (err) throw err;
        			connection.query('SELECT ItemID, ProductName, DepartmentName, Price, StockQuantity FROM products WHERE ItemID ='+CustomerPickID, function(err, res){
          				console.log(res);
          			});	
        		});
          	}	
   			else if(want>have && have !=0){
			    console.log('Insufficient quantity. We only have '+have+' in stock.');
		  	}
		  	else{
	          return false
	        }
		});
	};
	selectID();	
	});
});

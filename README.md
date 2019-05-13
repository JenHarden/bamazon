# Bamazon
### Overview
```
An Amazon-like storefront application that will take in orders from customers and then deplete stock from 
the inventory.
```
### Technologies Used
```
    * node.js
    * Node Package Manager (NPM)
    * MySQL Workbench
    * Git Bash
```
### Get Started
```
    * Clone the repo
    * You will use your terminal, such as Git Bash, to run this application.
    * Replace the default username and password, in the bamazonCustomer.js file, with your own.
    * Run the "NPM install" command to get the necessary node packages.
    * Enter "node bamazonCustomer.js" into the command line.
    * The bamazon application was built using user prompts to help guide you through the application.
    * You can use "Ctrl + C" to exit the application at any time.
```

### Workflow with Screenshots:

    1. Upon running the node command to launch the application, you will see the initial welcome screen and the 
       first prompt.  Here you will enter the Item ID for the item you would like to purchase.
        ![image](/images/customer_initial_display.png)
        * You will only be able to enter a numerical value here, as if alpha type entries are used, then it will 
          re-prompt for the Item ID.
          ![image](/images/alpha_entry.png)
    2. The application will then prompt you to answer how many you would like to purchase with one of two events 
       happening:
        ##### Unsuccessful:
        * If you enter to buy more of the product than what is in stock, you will get a message alerting you to 
          this and the application will ask you to modify your order.
          ![image](/images/insufficent/quantity.png)
            * The application will also track inventory within the MySQL database.  If the sale was not 
              successful, the inventory will not change.
                * Pre-sale inventory:
                ![image](/images/presale_for_tent.png)
                *Post-sale inventory unchanged:
                ![image](/images/postsale_tent.png)
        * If there is enough product in stock, then the order will successfully complete with the application 
          alerting you to how much the order will cost.
          ![image](/images/successful_sale.png)
            * If the sale was successful, then the inventory will show the change:
                *Pre-sale inventory:
                ![image](presale_for_desk.png)
                *Post-sale inventory changed:
                ![image](postsale_for_desk.png)

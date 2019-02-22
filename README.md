# UBreakIFix

# Sales Order Management

In real time it is hard to maintain any sales order details. If your using manual inventory like bills. Assume if customer wants to know the status of his order he/she has to call shopkeeper and get the information. This sales order management will give the solution to the problem. Using this application shopkeeper can add, update, edit, and delete order. Using the same application, a customer can check their order status online. Here shopkeeper is having admin privilege whereas customer has user privilege.

## Technologies going to use
Frontend: Angular
Backend: NodeJS
Server: Heroku
Database: MongoDB
Styling: Angular Material

## Functionalities
### Order Status
•	To-do
•	Started
•	Ready
•	Delivered
### Admin
•	Can Add, Delete, View, and Edit order
•	Send notification to customer as their order status changes
•	Admin can filter orders according to order status
•	Admin can sort the orders according to order date/delivery date
•	Admin can access application through desktop, phone, or tablet
### Customer
•	Can view the order details by entering the bill#/Phone No.
•	Gets a notification on order status change
o	For To-do -> “Thank you for shopping”
o	For Started -> “Your order work started”
o	For Ready -> “Your order is ready. Come and pick it up during our working hours”
o	For Delivered -> “Thank you visit again. Keep Shopping”
Note: Notification will be sent to customer’s phone number in normal text

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

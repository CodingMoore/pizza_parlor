# **PROJECT NAME HERE**
Updated: 2020-11-01
## **Project Description**
This project allows the user to input a number into the input field.  Upon clicking the submit button, the program will read back every whole number from 0 to the input value specified by the user.

The output will also convert every number that contains any of the digits "1","2","3" into a short word or phrase.
## **Required for Use**
A browser that can run HTML5 is required.
## **Installation Instructions**
**Option 1** (live webpage)
1) Follow the link below to access the live version of this webpage.
https://rmgit-it.github.io/mr_robogers_neighborhood/
**Option 2** (direct download)
1) Copy and paste the following GitHub project link into your web browser's url bar and hit enter/return. https://github.com/RMGit-it/mr_robogers_neighborhood
2) Download a .zip copy the repository by clicking on the large green "Code" button near the upper right corner of the screen.
3) Right click the .zip file and extract(unzip) it's contents.
4) Open the unzipped folder and launch the file named "index.html".  If the file does not automatically launch using your default web browser, you can right click on the file and choose which application you would like to open the index.html file with.

**Option 3** (via git console/terminal)
1) Open your Git enabled terminal/console and navigate to a directory that you wish to download this project to.
2) Type the following line of code into your terminal/console to automatically download the project to your current direcory and hit return/enter

<code>git clone https://github.com/RMGit-it/mr_robogers_neighborhood</code>
3) Once the project has finished downloading, navigate to the root directory of the project in the terminal/console, and type <code>code .</code> and then hit return/enter.

The project should automatically launch using your default application(s).
## **Usage / Examples**
Input: 14

Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!"
## **Planned Features**
No new features are planned at this time.
## **Specs**
| Test | Input | Output |
| :-- | :--| :-- |
| should create a new instance of PizzaOrder | pizzaOrder | PizzaOrder{Array(0)} |
| should create a new instance of Pizza | pizza | Pizza(size, meat, vegi) |
| should add a pizza to the pizzaOrder array | pizza1 | pizzaOrder.pizzas[Pizza] |
| should add up the total cost of pizza| pizza1(small, sausage, onion) | 11.5 |
| should add up the total cost of each pizza in the pizzaOrder | pizza1(small, sausage, onion), pizza2(large, deer, none)| 11.5, 23 |
| should add up the prices of all pizzas on the order | pizzaPriceArray[pizza1, pizza2] | 34.5 |
| should return the last pizza in the pizzas array | pizzas[pizza1, pizza2, pizza3] | pizza3 |
| | | |
| | | |

Description: PizzaOrder()

Test: should create a new instance of PizzaOrder
Expect: input(pizzaOrder).toResultIn(PizzaOrder{Array(0)})


Description: Pizza()

Test: should create a new instance of Pizza
Expect: input(pizza).toResultIn(Pizza(size, meat, vegi))


Description: PizzaOrder.prototype.AddPizza()

Test: should add a pizza to the pizzaOrder array
Expect: input(pizza1).toResultIn(pizzaOrder.pizzas[Pizza])


Description: PizzaOrder.prototype.PizzaCalcPrice()

Test: should add up the total cost of pizza
Expect: input(pizza1(small, sausage, onion)).toResultIn(11.5)

Test: should add up the total cost of each pizza in the pizzaOrder
Expect: input(pizza1(small, sausage, onion), pizza2(large, deer, none)).toResultIn(11.5, 23)


Description: PizzaOrder.prototype.OrderCalcPrice()

Test: should add up the prices of all pizzas on the order
Expect: input(pizzaPriceArray[pizza1, pizza2]).toResultIn(34.5)


Description: PizzaOrder.prototype.LastPizza()

Test: should return the last pizza in the pizzas array
Expect: input(pizzas[pizza1, pizza2, pizza3]).toReslutIn(pizza3)

## **Known Bugs**
There are no known bugs
## **Technology Used**
* HTML
* JavaScript
* Bootstrap
* jQuery
* CSS
## **Authors and Contributors**
Authored by: Randel Moore
Initial Start Date: 2020-10-30
## **Contact**
RMGit.it@gmail.com
## **License**

GPLv3

Copyright © 2020 Randel Moore

## **Project Status**

# CODING CHALLENGE IOET

## PROBLEM

The company ACME offers its employees the flexibility to work the hours they want. But due to some external circumstances, they need to know what employees have been at the office within the same time frame

This exercise aims to output a table containing pairs of employees and how often they have coincided in the office.

Input: an employee's name and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:

Example 1:

INPUT  
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00  
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00  
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

  
OUTPUT:  
ASTRID-RENE: 2  
ASTRID-ANDRES: 3  
RENE-ANDRES: 2

Example 2:

INPUT:  
RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00  
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

OUTPUT:  
RENE-ASTRID: 3

# How to run 

Download the code with 

    git clone https://github.com/jonaaldas/coding-challenge-ioet.git

Once downloaded the code install all the dependencies with 

    npm install 

All the dependencies will be installed

Open the HTML file in your browser and open the console. 



# HOW IT WORKS!

In order to solve this problem, we separated the file into two. One for functions and Getting Data.

## gettingData.js

This file handles the getting of the data from the .txt file and then it parses it into an object so we can use it as an input.

Input from .txt

RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
|ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
|ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
|CHRISTINA=M011:00-15:00,TH12:00-14:00,SU22:00-23:00
|MARILYN=M011:00-15:00,TH15:00-16:00,SU22:00-23:00

Output as an object
let obj = {
	  RENE: ['MO10:00-12:00','TU10:00-12:00','TH01:00-03:00','SA14:00-						    18:00','SU20:00- 21:00'],
	  ASTRID: ['MO10:00-12:00','TH12:00-14:00','SU20:00-21:00'],
	  ANDRES: ['MO10:00-12:00','TH12:00-14:00','SU20:00-21:00'],
	  CHRISTINA: ['M011:00-15:00','TH12:00-14:00','SU22:00-23:00'],
	  MARILYN: ['M011:00-15:00','TH15:00-16:00','SU22:00-23:00']
}



## functions.js

This file's job is to get the data from the "gettingData.js" file and it output the results as a hashmap.

[
	0, {"RENE-ASTRID" => 2},
	1,{"RENE-ANDRES" => 2},
	2,{"ASTRID-ANDRES" => 3},
	3, {"ASTRID-CHRISTINA" => 1},
	4, {"ANDRES-CHRISTINA" => 1},
	5, {"CHRISTINA-MARILYN" => 2}
]


## How it works! 

We first parse the data from the .txt file from a string to an object.
Each person has an array of a value with their times and days.

I created a hash map to show the data and the data is put into two functions. The first function seperatingNames(). This function is in charge of getting each key from the object and comparing it. 

MapBuilder gets 4 parameters (a_hours, b_hours, keys[i], keys[j]) 
this function is in charge of getting the hours of each employee, comparing them with each other, and determining if they have conceded. 

## Test
For the unit testing, we used jest as its a popular JS testing framework. 
To run the test, simply open the terminal and run 

    npm test

[Jonathan Aldas](https://www.jonathanaldas.com/)






///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let allAcres =[]
let totalAcres = 0

for(let i = 0; i < fujiAcres.length; i++){
    allAcres.push(fujiAcres[i])
}

for(let i = 0; i < galaAcres.length; i++){
    allAcres.push(galaAcres[i])
}

for(let i = 0; i < pinkAcres.length; i++){
    allAcres.push(pinkAcres[i])
}

// for(let i = 0; i < fujiAcres.length; i++){
//     allAcres.push(fujiAcres[i] + galaAcres[i] + pinkAcres[i])
// }
// I found a way to add them together in 'one line' of code online and tried it after trying my original code above and below out. 
// I did work by adding all the values together from the arrays in the allAcres and then pushing the value into the totalAcres with the code below

// console.log(allAcres)

for(let i = 0; i < allAcres.length; i++){
    totalAcres += allAcres[i] 
}

console.log(totalAcres)

//I first started by adding all the acres together into one array in order to simplify getting the number value needed for the variable totalAcres. Using a for loop, I pushed the values into allAcres and then added them together using the above for loop. 

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres)

// I just divided totalAcres by 7 for the 7 days of the week in order to get the average number across the 7 days.

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while(days < acresLeft){
    days += 1
    acresLeft -= averageDailyAcres
}

console.log(days)

// A pretty simple while loop. We are adding 1 days for each iteration while subtracting the average daily acres we calculated earlier from the acres left to give is the amount of days it woul be needed to finish all the acres.

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []

for(let i = 0; i < fujiAcres.length; i++){
    fujiTons.push(fujiAcres[i] * 6.5)
}

console.log(fujiTons)

for(let i = 0; i < galaAcres.length; i++){
    galaTons.push(galaAcres[i] * 6.5)
}

console.log(galaTons)

for(let i = 0; i < pinkAcres.length; i++){
    pinkTons.push(pinkAcres[i] * 6.5)
}

console.log(pinkTons)

// Pretty much doing what problem 1 did but along with pushing the values into the new arrays, we are mulitplying the number 6.5 to get the amount of apples they yield



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for(let i = 0; i < fujiTons.length; i++){
    fujiPounds += (fujiTons[i] * 2000) 
}

console.log(fujiPounds)

for(let i = 0; i < galaTons.length; i++){
    galaPounds += (galaTons[i] * 2000) 
}

console.log(galaPounds)

for(let i = 0; i < pinkTons.length; i++){
    pinkPounds += (pinkTons[i] * 2000) 
}

console.log(pinkPounds)

// Same thing as the problem above, we are looping the array and gathering the sum of the values to mulitple it by 2000 in order to get the pounds per variety and assiging that value to the variables above


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * .89
let galaProfit = galaPounds * .64
let pinkProfit = pinkPounds * .55

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)

// Below is just converting the numbers into actual currency with a method I found online

let fujiInDollars = (fujiProfit).toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD' 
});

console.log(fujiInDollars)

let galaInDollars = (galaProfit).toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD' 
});

console.log(galaInDollars)

let pinkInDollars = (pinkProfit).toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD' 
});

console.log(pinkInDollars)



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)

// Just adding all the values together and assigning them to the totalProfit variable.



// let totalDollars = (fujiInDollars + galaInDollars + pinkInDollars)
// console.log(totalDollars)

// I tried to add the actual dollar amounts together but I couldn't figure out the method to turn them into a string and then back into the added value
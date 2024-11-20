const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE

let firstname, lastname, age, hobbies;
fs.readFile('firstname.txt', 'utf-8')
    .then(data => {
        firstname = data
        return fs.readFile('lastname.txt', 'utf-8')
    })
    .then(data => {
        lastname = data
        return fs.readFile('age.txt', 'utf-8')
    })
    .then(data => {
        age = data
        return fs.readFile('hobbies.txt', 'utf-8')
    })
    .then(data => {
        // hobbies = data.
        hobbies = JSON.parse(data)
        console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]} (Then/Catch)`)
    })
    .catch(err => {
        console.error(err)
    })

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function readfile() {
    try {
        const firstname2 = await fs.readFile('firstname.txt', 'utf-8')
        const lastname2 = await fs.readFile('lastname.txt', 'utf-8')
        const age2 = await fs.readFile('age.txt', 'utf-8')
        const hobbies2 = await fs.readFile('hobbies.txt', 'utf-8')
        let hobbiesArr = JSON.parse(hobbies2)
        console.log(`${firstname2} ${lastname2} is ${age2} years old and his hobbies are ${hobbiesArr[0]} and ${hobbiesArr[1]} (Async/Await)`)
        // return `${firstname2} ${lastname2} is ${age2} years old and his hobbies are ${hobbiesArr[0]} and ${hobbiesArr[1]}`
    } catch (error) {
        console.log("Error", error)
    }
}

readfile()
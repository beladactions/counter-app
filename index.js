let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
 

// Create a function that adds 1 to the Add button

function increment() {

        count += 1
        console.log(count)      
        countEl.innerText = count

}

// Create a function that saves the count


function save() {
        
        let countStr = " " + " " + count + " - "
        saveEl.innerText += countStr
        console.log(saveEl)


}













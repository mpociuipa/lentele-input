var btnAdd = document.querySelector("button.add")
var btnFirst = document.querySelector("button.delete-first")
var btnLast = document.querySelector("button.delete-last")
var table = document.querySelector("table")

var vardasInput = document.querySelector("#vardas")
var pavardeInput = document.querySelector("#pavarde")
var amziusInput = document.querySelector("#amzius")

btnAdd.addEventListener("click", () => {
    console.log("veikia")
    console.log(vardasInput)
    var vardas = vardasInput.value
    var pavarde = pavardeInput.value
    var amzius = amziusInput.value

    var template = 
                `
                <tr>
                <td>${vardas}</td>
                <td>${pavarde}</td>
                <td>${amzius}</td>
                </tr>
                `
    table.innerHTML += template            
    
})
btnFirst.addEventListener("click", () => {
    table.deleteRow(1)       
    
})
btnLast.addEventListener("click", () => {
    
    var allRows = table.rows.length; 
    table.deleteRow(allRows-1)    
})
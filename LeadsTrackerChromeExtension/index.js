
//chrome://extensions/

let myLeads = [] // empty array
const inputBtn = document.getElementById("input-btn") // gets the id of input button tag from the html
const inputEl = document.getElementById("input-el") // gets the id of input tag from the html
const ulEl = document.getElementById("ul-el") // gets the id of ul tag from html
const tabBtn = document.getElementById("tab-btn")// gets the id of tab button tag from html
const deleteBtn = document.getElementById("delete-btn") // gets the id of delete buttont tag from html
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) // stores the of the myLead string in the form of array in this variable
 
// it works when there is value in the leadsFromLocalStorage variable and calls the render function
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// it is a method that listens the click of the tab button in html
// and runs a function that ask the query's the chrom.tabs for the link of the tab that is currently open on current Window
// and stores its value in myLeads which further stores in the localStorage of the browser 
// and finally calling the render function with argument myLeads to save it on the chrome extension window
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        inputEl.value =""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
   
})

// it is function with a parameter leads which is an array
// which gets the items present in the in the leads array and display them in an unordered list on the browser
function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        // creating element
        // set text element
        // append to ul
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
            `
    }
    ulEl.innerHTML = listItems
}

// it is method that listens the double click of the delete button on html 
// and runs the function that clear's all data stored in localStorage and myLeads
// and render empty array onto the browser
deleteBtn.addEventListener("dblclick", function(){
     localStorage.clear()
     myLeads = []
     render(myLeads)
})

// it is method that listens the click of the input button on html 
// and runs the function that push the values that are entered in the input tag in the html into the myleads array
// Also this function stores the value in the localStorage of the browser using set item method 
// render function with argument as myLeads displays the strings stored in the localStorage in the browser
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value =""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})

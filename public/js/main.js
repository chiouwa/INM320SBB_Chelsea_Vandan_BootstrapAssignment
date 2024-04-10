console.log('hello world');

// Overview header status
async function headerFunction(){
    try {
        const temp = await fetch("../data/content.json")
        const data = await temp.json();
        console.log('data: ', data.overviewHeaders);
        
        var i = 0 

        data.overviewHeaders.forEach(headerValue => {
            let overviewStatus = document.getElementById(`overview${i}`)
            overviewStatus.innerHTML = `<h6>${headerValue.text}</h6>`

            let overviewData = document.getElementById(`value${i}`)
            overviewData.innerHTML = `<p>${headerValue.value}</p>`

            i+=1
        });   
    }
    catch (error) {
        console.log('error: ', error);
    }
}

headerFunction()

// Trending stats
async function trendingFunction(){
    try {
        const temp = await fetch("../data/content.json")
        const data = await temp.json();
        console.log('data: ', data.trendingStats);

        var i = 0

        data.trendingStats.forEach(trendingValue => {
            let trendingStatus = document.getElementById(`trending${i}`)
            trendingStatus.innerHTML = `<h6>${trendingValue.text}</h6>`

            let trendingData = document.getElementById(`rvalue${i}`)
            trendingData.innerHTML = `<p>${trendingValue.value}</p>`

            i+=1
        });   
    } 
    catch (error) {
        console.log('error: ', error);
    }
}

trendingFunction()

// Assignment code
const company_info = {
    "company_name": "Dashboard Kit", 
    "current_page": "Overview", 
    "address": "Toronto", 
    "phone": "", 
    "website": "",
    "navigation": [
        { 
            "item1": "Overview", 
            "item2": "Tickets", 
            "item3": "Ideas", 
            "item4": "Contacts", 
            "item5": "Agents", 
            "item6": "Articles", 
            "item7": "Settings", 
            "item8": "Subscription"
        },
    ],
    "employees": [ 
        { "firstName": "Jonas", "lastName": "Ferdinand", "id": "5754" }, 
        { "firstName": "Vandan", "lastName": "Wadhwa", "id": "9764" }, 
        { "firstName": "Kezia", "lastName": "Meliana", "id": "3456" }
    ] 
};

console.log('company info: ', company_info);

// Dashboard Kit company name
let cResult = company_info.company_name;
const companyResult = document.getElementById("companyName")
companyResult.innerHTML = cResult;

let cPage = company_info.current_page;
const currentPage = document.getElementById("currentPage")
currentPage.innerHTML = cPage;

// Employee Profile
let eResult = company_info.employees[0].firstName;
let elResult = company_info.employees[0].lastName;
console.log(eResult);

const firstName = document.getElementById("demo")
firstName.innerHTML = eResult;

const lastName = document.getElementById("demo2")
lastName.innerHTML = elResult;

// Navigation Text
let item_1 = company_info.navigation[0].item1;
const tab1_result = document.getElementById("nResult1")
tab1_result.innerHTML = item_1;

let item_2 = company_info.navigation[0].item2;
const tab2_result = document.getElementById("nResult2")
tab2_result.innerHTML = item_2;

let item_3 = company_info.navigation[0].item3;
const tab3_result = document.getElementById("nResult3")
tab3_result.innerHTML = item_3;

let item_4 = company_info.navigation[0].item4;
const tab4_result = document.getElementById("nResult4")
tab4_result.innerHTML = item_4;

let item_5 = company_info.navigation[0].item5;
const tab5_result = document.getElementById("nResult5")
tab5_result.innerHTML = item_5;

let item_6 = company_info.navigation[0].item6;
const tab6_result = document.getElementById("nResult6")
tab6_result.innerHTML = item_6;

let item_7 = company_info.navigation[0].item7;
const tab7_result = document.getElementById("nResult7")
tab7_result.innerHTML = item_7;

let item_8 = company_info.navigation[0].item8;
const tab8_result = document.getElementById("nResult8")
tab8_result.innerHTML = item_8;

// Unresolved tickets
async function ticketFunction(){
    try {
        const temp = await fetch("../data/content.json")
        const data = await temp.json();
        console.log('data: ', data.unresolvedTickets);

        var i = 0

        data.unresolvedTickets.forEach(ticketValue => {
            let valueStatus = document.getElementById(`tickets${i}`)
            valueStatus.innerHTML = `<div>${ticketValue.text}<div>`

            let valueData = document.getElementById(`tvalue${i}`)
            valueData.innerHTML = `<div>${ticketValue.value}<div>`

            i+=1
        });   
    } 
    catch (error) {
        console.log('error: ', error);
    }
}

ticketFunction()
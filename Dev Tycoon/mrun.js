
var Money = Math.round((parseInt(new URLSearchParams(window.location.search).get("d"))*1000)/3999471)
var Day = (parseInt(new URLSearchParams(window.location.search).get("m"))*1000)/3999471
var MemoryType = new URLSearchParams(window.location.search).get("mm")
var TotalExpenses = 0
var TotalIncome = 0

if (Number.isNaN(Money)) {
    Money = 1000
} 
if (Number.isNaN(Day)) {
    Day = 1
} 
if (MemoryType == undefined) {
    MemoryType = "AxPl4"
} else if (MemoryType == "axplb8") {
    document.getElementById("axplb8").style.marginLeft = (parseInt(document.getElementById("axplb8").style.marginLeft.toString().slice(0, -1)) - 1).toString() + "%"
    document.getElementById("axplb8").innerHTML = "Purchased"
} else if (MemoryType == "ax16r") {
    document.getElementById("axplb8").style.marginLeft = (parseInt(document.getElementById("axplb8").style.marginLeft.toString().slice(0, -1)) - 1).toString() + "%"
    document.getElementById("ax16r").style.marginLeft = (parseInt(document.getElementById("ax16r").style.marginLeft.toString().slice(0, -1)) - 1).toString() + "%"
    document.getElementById("axplb8").innerHTML = "Purchased"
    document.getElementById("ax16r").innerHTML = "Purchased"
} 


var mcounter = document.getElementById("title")
mcounter.innerHTML = "$" + Money.toString()

console.log("Variables initialized")
function AddMoney(c) {
    Money += parseInt(c)
}

function AddExpense(c) {
    TotalExpenses += c
}

function RemoveMoney(c) {
    Money -= parseInt(c)
}

function ResetAllStats() {
    Money = 1000
}

function NextTurn() {
    Money += (TotalIncome - TotalExpenses)
    Day += 1
    console.log(Day)
}

function CreatePage(id) {
    switch (parseInt(id)) {
        case 0:
            document.location = "index.html?d=" + (Money/1000)*3999471 + "&m=" + (Day/1000)*3999471 + "&mm=" + MemoryType
            break;
        case 1:
            document.location = "store.html?d=" + (Money/1000)*3999471 + "&m=" + (Day/1000)*3999471 + "&mm=" + MemoryType
            break;
        case 2:
            document.location = "newp.html?d=" + (Money/1000)*3999471 + "&m=" + (Day/1000)*3999471 + "&mm=" + MemoryType
            break;
        case 3:
            document.location = "ram.html?d=" + (Money/1000)*3999471 + "&m=" + (Day/1000)*3999471 + "&mm=" + MemoryType
            break;
            
    }

}

function Transact(c, r) {
    var rObj = document.getElementById(r)
    if (rObj.innerHTML != "Purchased" && Money >= c)  {
        RemoveMoney(c)
        rObj.innerHTML = "Purchased"
        rObj.style.marginLeft = (parseInt(rObj.style.marginLeft.toString().slice(0, -1)) - 1).toString() + "%"
        mcounter.innerHTML = "$" + Money.toString()
    } else if (Money <= c) {
        Throw("Not Enough Money")
    }
}

function SetComponent(type, name) {
    if (type == "Memory") {
        MemoryType = name
    }
}

function Throw(cont) {
    alert(cont)
}
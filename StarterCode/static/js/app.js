// from data.js
var tableData = data;
// YOUR CODE HERE!

var tbody = d3.select("#ufo-tablebody")

tableData.forEach((ufoRecord) => {
    // console.log(ufoRecord)
    var trow = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
        // console.log(key, value);
        var cell = trow.append("td");
        cell.text(value);
    })
})


// Making the the dropdown for the dates
var difDates = [...new Set(tableData.map(x => x.datetime))]; 
var dateDrop = d3.select("#dateBtn")
var dateList = d3.select("#date-dropdown-menu")

function addDate() {
    dateList.text("")
    for (var i = 0; i < difDates.length; i++) {
        dateList.append("li").attr('id','dateListEle').text(difDates[i]);
    }
}

function delDate() {
    dateList.selectAll("li").remove();
}

if (dateDrop.attr("aria-expanded", "true")) {
    dateDrop.on('click',addDate);
} else {
    dateDrop.on("click",delDate);
}




// Making the the dropdown for the cities
var difCities = [...new Set(tableData.map(x => x.city))]; 
var cityDrop = d3.select("#cityBtn")

function addCity() {
    for (var i = 0; i < difCities.length; i++) {
        d3.select("#cityBtn").append("li").text(difCities[i]);
    }
}

cityDrop.on('click',addCity)



// Making the the dropdown for the states
var difStates = [...new Set(tableData.map(x => x.state))]; 
var stateDrop = d3.select("#stateBtn")

function addState() {
    for (var i = 0; i < difStates.length; i++) {
        d3.select("#stateBtn").append("li").text(difStates[i]);
    }
}
stateDrop.on('click',addState)




// var inputDate = d3.select("#datetime").on("change",filterData);
// var inputCity = d3.select("#city").on("change",filterData)
var inputBtn = d3.select("#filter-btn").on("click",filterData);





function filterData() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.text("")

    var inputDate = d3.select("#datetime").property("value")
    var inputCity = d3.select("#city").property("value")
    var inputState = d3.select("#state").property("value")
    var inputCountry = d3.select("#country").property("value")
    var inputShape = d3.select("#shape").property("value")

    var filter = tableData.filter(ufo => ufo.datetime === inputDate || ufo.city === inputCity || ufo.state === inputState || ufo.country === inputCountry || ufo.shape === inputShape);
    console.log(filter)

   
    filter.forEach((ufoRecord) => {
        // console.log(ufoRecord)
        var trow = tbody.append("tr");
        Object.entries(ufoRecord).forEach(([key, value]) => {
            // console.log(key, value);
            var cell = trow.append("td");
            cell.text(value);
        })
    })

    // var cityFilter = tableData.filter();
    // console.log(cityFilter)
    // cityFilter.forEach((ufoRecord) => {
    //     // console.log(ufoRecord)
    //     var trow = tbody.append("tr");
    //     Object.entries(ufoRecord).forEach(([key, value]) => {
    //         // console.log(key, value);
    //         var cell = trow.append("td");
    //         cell.text(value);
    //     })
    // })

  
    
    
}
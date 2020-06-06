// from data.js
var tableData = data;


// Putting data in table
// 
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
//
var difDates = [...new Set(tableData.map(x => x.datetime))];
var dateList = d3.select("#date-dropdown-menu");

function addDate() {
    dateList.text("");
    for (var i = 0; i < difDates.length; i++) {
        dateList.append("option").attr('class', 'listEle').text(difDates[i]);
    }
}

dateList.on('click', addDate);


// Making the the dropdown for the cities
// 
var difCities = [...new Set(tableData.map(x => x.city).sort())];
var cityList = d3.select("#city-dropdown-menu");

function addCity() {
    cityList.text("");
    for (var i = 0; i < difCities.length; i++) {
        cityList.append("option").attr('class', 'listEle').text(difCities[i]);
    }
    
}

cityList.on('click', addCity);


// Making the the dropdown for the states
//
var difStates = [...new Set(tableData.map(x => x.state).sort())];
var stateList = d3.select("#state-dropdown-menu");

function addState() {
    stateList.text("")
    for (var i = 0; i < difStates.length; i++) {
        stateList.append("option").attr('class', 'listEle').text(difStates[i]);
    }
}
stateList.on('click', addState);

// Making the the dropdown for the Country
//
var difCountry = [...new Set(tableData.map(x => x.country).sort())];
var countryList = d3.select("#country-dropdown-menu");

function addcountry() {
    countryList.text("")
    for (var i = 0; i < difCountry.length; i++) {
        countryList.append("option").attr('class', 'listEle').text(difCountry[i]);
    }
}
countryList.on('click', addcountry);


// Making the the dropdown for the Shape
//
var difShape = [...new Set(tableData.map(x => x.shape).sort())];
var shapeList = d3.select("#shape-dropdown-menu");

function addShape() {
    shapeList.text("")
    for (var i = 0; i < difShape.length; i++) {
        shapeList.append("option").attr('class', 'listEle').text(difShape[i]);
    }
}
shapeList.on('click', addShape);






// Reset Table Button and function
var filterReset = d3.select("#filter-reset");

filterReset.on("click", () => {
    selectedFilters = {}
    d3.selectAll(".listEle").remove();
    tableData.forEach((ufoRecord) => {
        // console.log(ufoRecord)
        var trow = tbody.append("tr");
        Object.entries(ufoRecord).forEach(([key, value]) => {
            // console.log(key, value);
            var cell = trow.append("td");
            cell.text(value);
        })
    })
});


var inputBtn = d3.select("#filter-btn").on("click", filterData);
var selectedFilters = {};

// save elements, value and id of filters, conditional if filter value entered then add the filter aand value to filter object, if not clear filter from filter object
// call filter data function

function filterer() {
    var dateSelected = dateList.node().value;
    var citySelected = cityList.node().value;
    var stateSelected = stateList.node().value;
    var countrySelected = countryList.node().value;
    var shapeSelected = shapeList.node().value;

    if (dateSelected != "") {
        selectedFilters["date"] = dateSelected;
        console.log("date Not empty")
    }
    if (citySelected != "") {
        selectedFilters["city"] = citySelected;
        console.log("city Not empty")
    }
    if (stateSelected != "") {
        selectedFilters["state"] = stateSelected;
        console.log("state Not empty")
    }
    if (countrySelected != "") {
        selectedFilters["country"] = countrySelected;
        console.log("country Not empty")
    }
    if (shapeSelected != "") {
        selectedFilters["shape"] = shapeSelected;
        console.log("shape Not empty")
    }
    return selectedFilters
}

function filterData(){
    filterer();
    d3.event.preventDefault();
    tbody.text("")
    var wholeTable = tableData;
    Object.entries(selectedFilters).forEach(([key, value]) => {
        console.log(selectedFilters)
        filteredData  = wholeTable.filter(x => {x.key === value});
        console.log(filteredData)
    
    filteredData.forEach((ufoRecord) => {
        console.log(ufoRecord)
        var trow = tbody.append("tr");
        Object.entries(ufoRecord).forEach(([key, value]) => {
            // console.log(key, value);
            var cell = trow.append("td");
            cell.text(value);
            
        })
    })
})
}
    
    


    // Getting value of selected from date dropdown 
   
//     if (dateList.node().value != "") {
        
//         datefilter.forEach((ufoRecord) => {
//             console.log(ufoRecord)
//             var trow = tbody.append("tr");
            
//                 console.log(key, value);
//                 var cell = trow.append("td");
//                 cell.text(value);
//             })
//         }) 
//     } 
  
// }







// || ufo.city === cityList.node().value)

// var inputDate = d3.select("#datetime").on("change",filterData);
// var inputCity = d3.select("#city").on("change",filterData)
// 


// function filterData() {
//     // Prevent the page from refreshing
//     d3.event.preventDefault();

//     

//     var inputDate = d3.select("#datetime").property("value")
//     var inputCity = d3.select("#city").property("value")
//     var inputState = d3.select("#state").property("value")
//     var inputCountry = d3.select("#country").property("value")
//     var inputShape = d3.select("#shape").property("value")

//     var filter = tableData.filter(ufo => ufo.datetime === inputDate || ufo.city === inputCity || ufo.state === inputState || ufo.country === inputCountry || ufo.shape === inputShape);
//     console.log(filter)


    

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





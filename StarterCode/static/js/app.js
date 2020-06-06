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
var dateBtn = d3.select("#dateBtn")
var dateList = d3.select("#date-dropdown-menu")

function addDate() {
    dateList.text("")
    for (var i = 0; i < difDates.length; i++) {
        dateList.append("li").attr('class','dateListEle').text(difDates[i]);
    }
}

dateBtn.on('click',addDate);  


// Making the the dropdown for the cities
var difCities = [...new Set(tableData.map(x => x.city))]; 
var cityBtn = d3.select("#cityBtn")
var cityList = d3.select("#city-dropdown-menu")
function addCity() {
    cityList.text("")
    for (var i = 0; i < difCities.length; i++) {
        cityList.append("li").attr('class','cityListEle').text(difCities[i]);
    }
}

cityBtn.on('click',addCity)


// Making the the dropdown for the states
var difStates = [...new Set(tableData.map(x => x.state))]; 
var stateBtn = d3.select("#stateBtn")
var stateList = d3.select("#state-dropdown-menu")

function addState() {
    stateList.text("")
    for (var i = 0; i < difStates.length; i++) {
        stateList.append("li").attr('class','stateListEle').text(difStates[i]);
    }
}
stateBtn.on('click',addState)

// Making the the dropdown for the Country
var difCountry = [...new Set(tableData.map(x => x.country))]; 
var countryBtn = d3.select("#countryBtn")
var countryList = d3.select("#country-dropdown-menu")

function addcountry() {
    countryList.text("")
    for (var i = 0; i < difCountry.length; i++) {
        countryList.append("li").attr('class','countryListEle').text(difCountry[i]);
    }
}
countryBtn.on('click',addcountry)


// Making the the dropdown for the Shape
var difShape = [...new Set(tableData.map(x => x.shape))]; 
var shapeBtn = d3.select("#shapeBtn")
var shapeList = d3.select("#shape-dropdown-menu")

function addShape() {
    shapeList.text("")
    for (var i = 0; i < difShape.length; i++) {
        shapeList.append("li").attr('class','shapeListEle').text(difShape[i]);
    }
}
shapeBtn.on('click',addShape)





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
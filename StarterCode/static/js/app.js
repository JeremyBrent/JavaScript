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
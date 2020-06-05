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


var inputBtn = d3.select("#filter-btn")

inputBtn.on("click",filterData);

function filterData() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.text("")
    
    var inputDate = d3.select("#datetime").property("value")

    var dateFilter = tableData.filter(ufo => ufo.datetime === inputDate);
    console.log(dateFilter)
    
    dateFilter.forEach((ufoRecord) => {
        // console.log(ufoRecord)
        var trow = tbody.append("tr");
        Object.entries(ufoRecord).forEach(([key, value]) => {
            // console.log(key, value);
            var cell = trow.append("td");
            cell.text(value);
        })
    })
}
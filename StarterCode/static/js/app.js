// from data.js
var tableData = data;
// YOUR CODE HERE!

var tbody = d3.select("#ufo-tablebody")

tableData.forEach((ufoRecord) => {
    // console.log(ufoRecord)
    var trow = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
        console.log(key, value);
        var cell = trow.append("td");
        cell.text(value);
    })
})







// // Append one cell for the student name
// adding.append("td").text(tableData[0])
// // Append one cell for the student grade
// adding.append("td").text(tableData[1])
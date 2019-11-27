// from data.js assign data to variable
var tableData = data;
//console.log(tableData);

//Reference Table body
var tbody = d3.select("tbody")


data.forEach((marsData) => {
    var row = tbody.append("tr");
    Object.entries(marsData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


  //Get reference to button
  var button = d3.select("#filter-btn");

  button.on("click", function() {

    //Get reference to input element, set id property and get value property
    var dateInput = d3.select("#datetime").node().value;
    //console.log(dateInput);
     
    var filteredData = tableData.filter(tableData => tableData.datetime === dateInput);
    //console.log(filteredData);
  
    // Remove data from the list 
     tbody.html("");
    
     filteredData.forEach((marsData) => {
      var row = tbody.append("tr");
      Object.entries(marsData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });      

    });
    
  });






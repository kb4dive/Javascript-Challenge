// from data.js assign data to variable
var tableData = data;


//Reference Table body
var tbody = d3.select("tbody");


data.forEach((marsData) => {
    var row = tbody.append("tr");
    Object.entries(marsData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Get array of unique state values for dropdown selection
const uniqueState = [... new Set(data.map(marsData => marsData.state))]
uniqueState === uniqueState.sort()
//console.log(uniqueState)

 var selectState = document.getElementById("selectState");
  for (var i = 0; i < uniqueState.length; i++) 
    {
      var option = document.createElement("option"),
        txt = document.createTextNode(uniqueState[i]);
        option.appendChild(txt);
        selectState.insertBefore(option,selectState.lastChild);

    }

  // Get array of unique country values for dropdown selection
const uniqueCountry = [... new Set(data.map(marsData => marsData.country))]
uniqueCountry === uniqueCountry.sort()
//console.log(uniqueCountry)

  var selectCountry = document.getElementById("selectCountry");
  for (var i = 0; i < uniqueCountry.length; i++) 
    {
      var option = document.createElement("option"),
        txt = document.createTextNode(uniqueCountry[i]);
        option.appendChild(txt);
        selectCountry.insertBefore(option,selectCountry.lastChild);

    }


  //Get reference to button
  var button = d3.select("#filter-btn");

  button.on("click", function() {

    //Get Input values for filters
    var dateInput = d3.select("#datetime").node().value;
    var cityInput = d3.select("#city").node().value;
    var countryInput = selectCountry.options[selectCountry.selectedIndex].value;
    var stateInput = selectState.options[selectState.selectedIndex].value;
    var shapeInput = d3.select("#shape").node().value;
    var filteredData = tableData;

    /*
    console.log(dateInput);   
    console.log(cityInput);    
    console.log(countryInput);    
    console.log(stateInput);    
    console.log(shapeInput);
    */

    //evaluate input and for filtered data    
    if (dateInput != ""){
      filteredData = filteredData.filter(marsData => marsData.datetime === dateInput);
    }

    if (cityInput !=""){
      filteredData = filteredData.filter(marsData => marsData.city === cityInput)
    }
   
    if (stateInput !="default"){
      filteredData = filteredData.filter(marsData => marsData.state === stateInput)
    }
   
    if (countryInput !="default"){
      filteredData = filteredData.filter(marsData => marsData.country === countryInput)
    }
    
    if (shapeInput !=""){
      filteredData = filteredData.filter(marsData => marsData.shape === shapeInput)
    }
   
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






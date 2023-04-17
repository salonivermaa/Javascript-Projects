  //Function to display selected values
  var result = document.getElementById("output");

  function display(value) {
      result.value += value;
  }

  //Calculate :if selected value is not an operator and not null
  function calculate() 
  {
  if(result.value==null || result.value=="0" || result.value=="*" || result.value== "-" || result.value== "*" || result.value=="/")
  {
  alert("fill the values");
  Clear();
  }
      
  else{
  var p = document.getElementById("output").value;
  var q = eval(p);
  dcument.getElementById("output").value = q;
  }
  }

  //function to clear all if C is pressed
  function Clear() {
  document.getElementById("output").value ="";
  }

function essential() {
  var students = document.forms["acquisitions_tool_form"]["number_of_students"].value;
  var currentCopies = document.forms["acquisitions_tool_form"]["number_of_copies"].value;
  if (students < 20 && currentCopies == 0) {
    var results = 1;
  }
  else if (students < 20 && currentCopies > 0) {
    results = 0;
  }
  else {
    results = students / 20 - currentCopies; {
      if (results < 0) {
        results = 0;
      }
      else if (results > 20) {
        results = 20;
      }
      else {
        results;
      }
    }
  }
  document.getElementById("resultsBox").innerHTML = Math.floor(results);
  return false;
}

function recommended() {
  var students = document.forms["acquisitions_tool_form"]["number_of_students"].value;
  var currentCopies = document.forms["acquisitions_tool_form"]["number_of_copies"].value;
  if (students < 40 && currentCopies == 0) {
    results = 1;
  }
  else if (students < 40 && currentCopies > 0) {
    results = 0;
  }
  else {
    results = students / 40 - currentCopies; {
      if (results < 0) {
        results = 0;
      }
      else if (results > 20) {
        results = 20;
      }
      else {
        results;
      }
    }
  }
  document.getElementById("resultsBox").innerHTML = Math.floor(results);
  return false;
}

function further() {
  var students = document.forms["acquisitions_tool_form"]["number_of_students"].value;
  var currentCopies = document.forms["acquisitions_tool_form"]["number_of_copies"].value;
    results = 0;
    document.getElementById("resultsBox").innerHTML = results;
    return false;
}

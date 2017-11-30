function checkValidations(element) {
  var id = element.id;
  var thisElement = document.getElementById(id);
  var errorSpan = document.getElementById("error_"+element.id);
  if(element.id == 'positive-x'){
    if (element.value < 0) {
      setErrorStyle(thisElement, id, errorSpan);
      errorSpan.innerHTML = 'Positive values only Accept';
      thisElement.value = '';
      thisElement.focus();
    } else {
      thisElement.setAttribute("style","border: 1px solid black;");
      errorSpan.style.display='none';
    }
  } else if(element.id == 'negative-x'){
    if (element.value > 0) {
        setErrorStyle(thisElement, id, errorSpan);
        errorSpan.innerHTML = 'Negative values only Accept';
        thisElement.value = '';
        thisElement.focus();
    } else {
      thisElement.setAttribute("style","border: 1px solid black;");
      errorSpan.style.display='none';
    }
  } else if(element.id == 'milli'){
    if (element.value > 9 || element.value < 0) {
        setErrorStyle(thisElement, id, errorSpan);
        errorSpan.innerHTML = 'Only 0-9 only accept';
        thisElement.value = '';
        thisElement.focus();
    } else {
      thisElement.setAttribute("style","border: 1px solid black;");
      errorSpan.style.display='none';
    }
  }
}
function setErrorStyle (thisElement, id, errorSpan) {
    thisElement.setAttribute("style","border: 1px solid red;");
    errorSpan.style.display='inline-block';
    errorSpan.style.color='red';
    console.log(errorSpan.style.display);
    errorSpan.style.margin='0 0 0 10px';
}

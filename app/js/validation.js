function checkValidations(element) {
  var id = element.id;
  var thisElement = document.getElementById(id);
  var errorSpan = document.getElementById("error_"+id);
  if(id === 'positiveX'){
    if (element.value < 0) {
      var message = 'Positive values only Accept';
      setErrorStyle(thisElement, id, errorSpan, message);
    } else {
      removeErrorStyle(thisElement, errorSpan);
    }
  } else if(id === 'negativeX'){
    if (element.value < 0) {
      var message = 'Negative values only Accept';
        setErrorStyle(thisElement, id, errorSpan, message);
    } else {
      removeErrorStyle(thisElement, errorSpan);
    }
  } else if(id === 'microTick'){
    if (element.value > 9 || element.value < 0) {
      var message = 'Only 0-9 only accept';
        setErrorStyle(thisElement, id, errorSpan, message);
    } else {
      removeErrorStyle(thisElement, errorSpan);
    }
  }
}
function setErrorStyle (thisElement, id, errorSpan, errMsg) {
    errorSpan.setAttribute("class","errorMsg");
    errorSpan.classList.add("inlineBlock");
    errorSpan.innerHTML = errMsg;
    errorSpan.style.margin='0 0 0 10px';
    thisElement.value = '';
    thisElement.focus();
}
function removeErrorStyle(thisElement, errorSpan) {
  thisElement.setAttribute("style","border: 1px solid black;");
  errorSpan.setAttribute("class","error");
}

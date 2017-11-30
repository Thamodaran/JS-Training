function checkValidations(element) {
  // var isValidate = true;
  var id = element.id;
  var thisElement = document.getElementById(id);
  // var onlyNumbers = new RegExp("[^0-9]");
  var errorSpan = document.getElementById("error_"+element.id);
  // if (onlyNumbers.test(element.value)) {
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
  }
}
function setErrorStyle (thisElement, id, errorSpan) {
    thisElement.setAttribute("style","border: 1px solid red;");
    errorSpan.style.display='inline-block';
    errorSpan.style.color='red';
    console.log(errorSpan.style.display);
    errorSpan.style.margin='0 0 0 10px';
}

function drawGraphValues() {
  removeAllChildrens();
  var negative = document.getElementById("negative-x").value;
  var positive = document.getElementById("positive-x").value;
  var milli = parseInt(document.getElementById("milli").value)+1;
  var spanElement = document.createElement('span');
  document.getElementById("content").appendChild(spanElement);
  spanElement.setAttribute("id","line-graph");
  spanElement.setAttribute("style","border-left: 1px solid black; height: 30px;display: inline-block;");
  var negativeCount = 0;
   for (var ncount = 0; ncount > negative; ncount--) {
      var lineSpans = document.getElementById('line-graph').insertAdjacentHTML('beforebegin', '<span name="negative-span" class="negative-span_'+negativeCount+'" style="display: inline-block;border-top: 1px solid black;border-left: 1px solid black;width: 40px;height: 15px;"></span>');
      negativeCount++;
   }
   var positiveCount = 0;
   for (var pcount = 0; pcount < positive; pcount++) {
      document.getElementById('line-graph').insertAdjacentHTML('afterbegin', '<span name="positive-span" class="positive-span_'+positiveCount+'" style="display: inline-block;border-top: 1px solid black;border-right: 1px solid black;width: 40px;height: 15px;"></span>');
      positiveCount++;
   }
   for (var noOfSpan = 0; noOfSpan < document.getElementsByName('negative-span').length; noOfSpan++) {
     for (var j = 0; j < milli; j++) {
       var milliwidth = (parseInt(document.getElementsByName('negative-span')[noOfSpan].style.width) / milli)-1;
      document.getElementsByName('negative-span')[noOfSpan].innerHTML += '<span style="display: inline-block;border-right: 1px solid black;width: '+milliwidth+'px;height: 10px;position: relative;left: 1px;"></span>';
     }
     document.styleSheets[0].addRule('.negative-span_'+noOfSpan+'::after','content: "'+ncount+'"');
     ncount++;
  }
   for (var noOfSpan = 0; noOfSpan < document.getElementsByName('positive-span').length; noOfSpan++) {
     for (var j = 0; j < milli; j++) {
       var milliwidth = (parseInt(document.getElementsByName('positive-span')[noOfSpan].style.width) / milli)-1;
       document.getElementsByName('positive-span')[noOfSpan].innerHTML += '<span style="display: inline-block;border-right: 1px solid black;width: '+milliwidth+'px;height: 10px;position: relative;left: 1px;"></span>';
     }
     positiveCount--;
     parseInt(noOfSpan+1);
     console.log(noOfSpan);
     document.styleSheets[0].addRule('.positive-span_'+noOfSpan+'::after','content: "'+positiveCount+'"','position:"reletive"','left: 20px;' );
     pcount--;
   }
}
function removeAllChildrens() {
    var myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

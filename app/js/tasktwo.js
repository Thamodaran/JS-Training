function drawGraphValues() {
  removeAllChildrens();
  drawCenterPoint();
}
function removeAllChildrens() {
    var myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    positiveCount = 0;
}
function drawCenterPoint() {
  var negative = -Math.abs(document.getElementById("negativeX").value);
  var negativeOrginal = document.getElementById("negativeX").value;
  var positive = document.getElementById("positiveX").value;
  var microTick = parseInt(document.getElementById("microTick").value)+1;
  var spanElement = document.createElement('span');
  var content = document.getElementById("content");
  content.appendChild(spanElement);
  spanElement.setAttribute("id","lineGraph");
  spanElement.setAttribute("class","centerPoint");
  drawOtherPoints(negative, positive, microTick, negativeOrginal);
}
function drawOtherPoints(negative, positive, microTick, negativeOrginal) {
  var negativeCount = 0;
  var contentDivEle = document.getElementsByClassName("contentDiv")[0];
  contentDivEle.classList.add("ruler");
  var contentDivWidth = contentDivEle.offsetWidth;
    var totalCenterLines = parseInt(negativeOrginal)+parseInt(positive);
    if(positive > 6 || negativeOrginal > 6) {
        var centerWidth = (contentDivWidth/totalCenterLines)-2;
        console.log(centerWidth);
    } else {
        var centerWidth = (contentDivWidth/totalCenterLines)-(totalCenterLines+2);
    }

  var lineGraph = document.getElementById('lineGraph');
   for (var ncount = 0; ncount > negative; ncount--) {
      lineGraph.insertAdjacentHTML('beforebegin', '<span name="negativeSpan" id="negativeSpan_'+negativeCount+'" style="width: '+centerWidth+'px; height: 15px;"></span>');
      var currNegativeLine = document.getElementById('negativeSpan_'+negativeCount);
      drawCenterLines(currNegativeLine);
      currNegativeLine.classList.add('negativeValue');
      if(negativeCount === 0) {
        currNegativeLine.classList.add("borderLeft");
      }
      negativeCount++;
   }
   var positiveCount = 0;
   for (var pcount = 0; pcount < positive; pcount++) {
      lineGraph.insertAdjacentHTML('afterend', '<span name="positiveSpan" id="positiveSpan_'+positiveCount+'" style="width: '+centerWidth+'px;height: 15px;"></span>');
      drawCenterLines(document.getElementById('positiveSpan_'+positiveCount));
      positiveCount++;
   }
   for (var noOfSpan = 0; noOfSpan < document.getElementsByName('negativeSpan').length; noOfSpan++) {
     for (var j = 0; j < microTick; j++) {
       var microTickwidth = (parseInt(document.getElementsByName('negativeSpan')[noOfSpan].style.width) / microTick)-1;
      document.getElementsByName('negativeSpan')[noOfSpan].innerHTML += '<span class="microTick" style="width: '+microTickwidth+'px;"></span>';

     }
     document.styleSheets[0].addRule('#negativeSpan_'+noOfSpan+'::after','content: "'+ncount+'"');
     ncount++;
  }
   for (var noOfSpan = 0; noOfSpan < document.getElementsByName('positiveSpan').length; noOfSpan++) {
     for (var j = 0; j < microTick; j++) {
       var microTickwidth = (parseInt(document.getElementsByName('positiveSpan')[noOfSpan].style.width) / microTick)-1;
       document.getElementsByName('positiveSpan')[noOfSpan].innerHTML += '<span class="microTick" style="width: '+microTickwidth+'px;"></span>';
     }
     positiveCount--;
     parseInt(noOfSpan);
     document.styleSheets[0].addRule('#positiveSpan_'+noOfSpan+'::after','content: "'+positiveCount+'"' );
     pcount--;
   }
}
function drawCenterLines(currentNode) {
  currentNode.setAttribute("class","inlineBlock");
  currentNode.classList.add("borderTop");
  currentNode.classList.add("borderRight");
  currentNode.classList.add("centerLineWidth");
}

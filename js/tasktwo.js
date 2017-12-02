function drawGraphValues() {
  removeAllChildrens();
  var negative = document.getElementById("negativeX").value;
  var positive = document.getElementById("positiveX").value;
  var microTick = parseInt(document.getElementById("microTick").value)+1;
  var spanElement = document.createElement('span');
  document.getElementById("content").appendChild(spanElement);
  spanElement.setAttribute("id","lineGraph");
  spanElement.setAttribute("style","border-left: 1px solid black; height: 30px;display: inline-block;");
  var negativeCount = 0;
   for (var ncount = 0; ncount > negative; ncount--) {
      var lineSpans = document.getElementById('lineGraph').insertAdjacentHTML('beforebegin', '<span name="negativeSpan" class="negativeSpan_'+negativeCount+'" style="display: inline-block;border-top: 1px solid black;border-left: 1px solid black;width: 40px;height: 15px;"></span>');
      negativeCount++;
   }
   var positiveCount = 0;
   for (var pcount = 0; pcount < positive; pcount++) {
      document.getElementById('lineGraph').insertAdjacentHTML('afterbegin', '<span name="positiveSpan" class="positiveSpan_'+positiveCount+'" style="display: inline-block;border-top: 1px solid black;border-right: 1px solid black;width: 40px;height: 15px;"></span>');
      positiveCount++;
   }
   for (var noOfSpan = 0; noOfSpan < document.getElementsByName('negativeSpan').length; noOfSpan++) {
     for (var j = 0; j < microTick; j++) {
       var microTickwidth = (parseInt(document.getElementsByName('negativeSpan')[noOfSpan].style.width) / microTick)-1;
      document.getElementsByName('negativeSpan')[noOfSpan].innerHTML += '<span style="display: inline-block;border-right: 1px solid black;width: '+microTickwidth+'px;height: 10px;position: relative;left: 1px;"></span>';
     }
     document.styleSheets[0].addRule('.negativeSpan_'+noOfSpan+'::after','content: "'+ncount+'"');
     ncount++;
  }
   for (var noOfSpan = 0; noOfSpan < document.getElementsByName('positiveSpan').length; noOfSpan++) {
     for (var j = 0; j < microTick; j++) {
       var microTickwidth = (parseInt(document.getElementsByName('positiveSpan')[noOfSpan].style.width) / microTick)-1;
       document.getElementsByName('positiveSpan')[noOfSpan].innerHTML += '<span style="display: inline-block;border-right: 1px solid black;width: '+microTickwidth+'px;height: 10px;position: relative;left: 1px;"></span>';
     }
     positiveCount--;
     parseInt(noOfSpan+1);
     document.styleSheets[0].addRule('.positiveSpan_'+noOfSpan+'::after','content: "'+positiveCount+'"','position:"reletive"','left: 20px;' );
     pcount--;
   }
}
function removeAllChildrens() {
    var myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

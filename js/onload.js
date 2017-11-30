window.onload = function(){
  var body = document.getElementsByTagName("BODY");
  var elements = [{"element":"input","id": "negative-x", "type": "text","method":"checkValidations(this);","event": "onchange"},
                  {"element":"input","id": "positive-x", "type": "text","method":"checkValidations(this);","event": "onchange"},
                  {"element":"input","id": "milli", "type": "text","method":"checkValidations(this);","event": "onchange"},
                  {"element":"input","id": "click-me", "type": "submit","method":"drawGraphValues();","event": "onclick"}];
  for (var i = 0; i < elements.length; i++) {
    var element = renderElement(elements[i]);
    var errorSpan = createErrorSpan(elements[i]);
    var divElement = document.createElement("div");
    divElement.setAttribute("style","width: 100%;height:10%;background-color: #76d7c4;")
    body[0].append(divElement);
    divElement.append(element);
    divElement.append(errorSpan);
  }

  var contentDiv = document.createElement("div");

  contentDiv.setAttribute("id","content");
  contentDiv.setAttribute("style","margin: 150px 0 0 25px;");
  document.getElementById("click-me");
  body[0].append(contentDiv);
};
function createErrorSpan(element) {
  var errorSpan = document.createElement("span");
  errorSpan.setAttribute("id","error_"+element.id);
  errorSpan.setAttribute("style", "display: none")
  errorSpan.innerHTML = 'Numbers only allowed';
  return errorSpan;
}

function renderElement(element) {
  var input = document.createElement(element.element);
  input.setAttribute("id",element.id);
  input.setAttribute("type",element.type);
  input.setAttribute(element.event,element.method);
  return input;
}

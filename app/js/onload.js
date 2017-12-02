window.onload = function() {
  var body = document.getElementsByTagName("body");
  var bodyContent = body[0];
  var header = document.createElement("header");
  header.setAttribute("class","header");
  header.innerHTML = "<h2>Js Ruler</h2>";
  bodyContent.append(header);
  var elements = [{"label":"Negative X-axis","element":"input","id": "negativeX", "type": "text","method":"checkValidations(this);","event": "onchange"},
                  {"label":"Positive X-axis","element":"input","id": "positiveX", "type": "text","method":"checkValidations(this);","event": "onchange"},
                  {"label":"Micro Tick","element":"input","id": "microTick", "type": "text","method":"checkValidations(this);","event": "onchange"},
                  {"element":"input","id": "clickHere", "type": "submit","method":"drawGraphValues();","event": "onclick"}];
  var wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("class","wrapper");
  // wrapperDiv.classList.add("left");
  bodyContent.append(wrapperDiv);
  for (var i = 0; i < elements.length; i++) {
    var element = renderElement(elements[i]);
    var errorSpan = createErrorSpan(elements[i]);
    var divElement = document.createElement("div");
    divElement.setAttribute("class","textDiv");
    bodyContent.append(divElement);
    divElement.append(element);
    divElement.append(errorSpan);
    wrapperDiv.append(divElement);
    if(elements[i].type !== "submit") {
        createLabel(elements[i]);
    }
  }
  var contentDiv = document.createElement("div");
  contentDiv.setAttribute("id","content");
  contentDiv.setAttribute("class","contentDiv");
  document.getElementById("clickHere");
  bodyContent.append(contentDiv);
};

function createLabel(node) {
  document.getElementById(node.id).insertAdjacentHTML('beforebegin', '<div class="left label">'+node.label+' :</div>');
}

function createErrorSpan(element) {
  var errorSpan = document.createElement("span");
  errorSpan.setAttribute("id","error_"+element.id);
  errorSpan.setAttribute("class", "error")
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

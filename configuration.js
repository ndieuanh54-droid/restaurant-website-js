function changeMarge(idInput) {
  var input = document.getElementById(idInput);
  var body = document.getElementById("id_body");

  body.style.margin = input.value; //
}

function changerHTMLColor(idInputColor) {
  var input = document.getElementById(idInputColor);
  var html = document.getElementById("id_html");

  html.style.backgroundColor = input.value;
}

function changeBODYColor(idInputColor) {
  var input = document.getElementById(idInputColor);
  var body = document.getElementById("id_body");

  body.style.backgroundColor = input.value;
}

function statPage() {
  var body = document.getElementById("id_body");

  var nbElem = 0;
  var nbText = 0;
  var nbAttr = 0;

  function parcours(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      nbElem++;

      if (node.attributes) nbAttr += node.attributes.length;

      for (var i = 0; i < node.childNodes.length; i++) {
        parcours(node.childNodes[i]);
      }
    } else if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.trim() !== "") nbText++;
    }
  }

  parcours(body);

  alert("Elements : " + nbElem + "\nAttributs : " + nbAttr + "\nTextes : " + nbText);
}


function cacher() {
  var corps = document.getElementById("corps");
  var enfants = corps.childNodes;

  for (var i = 0; i < enfants.length; i++) {
    if (enfants[i].nodeType === Node.ELEMENT_NODE && enfants[i].tagName !== "H2") {
      enfants[i].style.display = "none";
    }
  }

  document.getElementById("buttonCacher").style.display = "none";
  document.getElementById("buttonReveler").style.display = "inline";
}


function revele() {
  var corps = document.getElementById("corps");
  var enfants = corps.childNodes;

  for (var i = 0; i < enfants.length; i++) {
    if (enfants[i].nodeType === Node.ELEMENT_NODE) {
      enfants[i].style.display = "";
    }
  }

  document.getElementById("buttonCacher").style.display = "inline";
  document.getElementById("buttonReveler").style.display = "none";
}
function reduceH2(id_h2) {
  var elt = document.getElementById(id_h2);
  elt = elt.nextSibling;

  while (elt != null) {
    if (elt.nodeType === Node.ELEMENT_NODE) {

      if (elt.tagName === "H2") {
        break;
      }

      if (elt.style.display === "none") elt.style.display = "block";
      else elt.style.display = "none";

    }

    elt = elt.nextSibling;
  }
}


function replaceText(node) {
  // Call replaceText on the text of the document
  // Stolen largely from cloud-to-butt by panicsteve

  var child;

  switch (node.nodeType) {
  	case 1:
  	case 9:
  	case 11:
  	  // If there are child nodes, get them
  	  child = node.firstChild;
  	  while (child) {
  	  	replaceText(child);
  	  	child = child.nextSibling;
  	  }
  	  break;

  	case 3:
  	  // Text node: replace text
  	  var text = node.nodeValue;

  	  text = text.replace(/ate/gi, "8");
  	  text = text.replace(/bait/gi, "b8");
  	  text = text.replace(/gait/gi, "g8");
  	  text = text.replace(/trait/gi, "tr8");
  	  text = text.replace(/wait/gi, "w8");
  	  text = text.replace(/great/gi, "gr8");

  	  node.nodeValue = text;
  	  break;
  }
}

replaceText(document.body);

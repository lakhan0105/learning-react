function customRender(element, container) {
  /*
  const domEl = document.createElement(element.type);
  domEl.innerHTML = element.children;
  domEl.setAttribute("href", element.props.href);
  domEl.setAttribute("target", element.props.target);
  container.appendChild(domEl);
  */

  // another approach
  const domEl = document.createElement(element.type);
  domEl.innerHTML = element.children;
  for (let prop in reactElement.props) {
    domEl.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domEl);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit",
};

const mainCont = document.getElementById("root");

customRender(reactElement, mainCont);

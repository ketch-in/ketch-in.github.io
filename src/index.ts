import { CHROME_EXTENSION, COMPONENTS, HOST, SERVER } from "./todo";

import "./styles/index.css";

function titleAnimationEvent(e: MouseEvent) {
  const title = document.querySelector("h1");
  if (!title) {
    return;
  }

  const rect = title.getBoundingClientRect();

  const x = ((e.x - (rect.x + rect.width / 2)) / (window.innerWidth / 2)) * -1;
  const y =
    ((e.y - (rect.y + rect.height / 2)) / (window.innerHeight / 2)) * -1;

  title.style.setProperty("--shadow-x", `${x}rem`);
  title.style.setProperty("--shadow-y", `${y}rem`);
}

window.addEventListener("mousemove", titleAnimationEvent);

function createElement(
  tagName: string,
  attribute?: { [qualifiedName: string]: string },
  children?: (string | Node)[]
) {
  const element = document.createElement(tagName);

  if (attribute) {
    Object.keys(attribute).forEach((qualifiedName) => {
      element.setAttribute(qualifiedName, attribute[qualifiedName]);
    });
  }
  if (children) {
    element.append(...children);
  }
  return element;
}

/** not use now */
function createTabElement(
  data: { [tabName: string]: HTMLElement },
  defaultSelected = ""
) {
  const tabKeys = Object.keys(data);

  const tabs = createElement("div", { class: "tabs" });
  const tabHeader = createElement("ul", { class: "tabs__header" });
  const tabBody = createElement("div", { class: "tabs__body" });

  tabs.appendChild(tabHeader);
  tabs.appendChild(tabBody);

  let selected = tabKeys.includes(defaultSelected)
    ? defaultSelected
    : tabKeys[0];

  const setBody = () => {
    tabBody.innerText = "";
    tabBody.appendChild(data[selected]);
  };

  const items: { [key: string]: HTMLElement } = tabKeys.reduce(
    (acc, tabName) => {
      const li = createElement("li", { class: "tabs__item" }, [tabName]);
      li.addEventListener("click", () => {
        if (items[selected]) {
          items[selected].classList.remove("active");
        }
        li.classList.add("active");
        selected = tabName;
        setBody();
      });
      tabHeader.appendChild(li);
      return { ...acc, [tabName]: li };
    },
    {}
  );

  setBody();

  return tabs;
}

function createSliderElement(
  data: { [tabName: string]: HTMLElement },
  defaultSelected = ""
) {
  const sliderKeys = Object.keys(data);

  const slider = createElement("div", { class: "slider" });
  const sliderHeader = createElement("div", { class: "slider__header" });
  const sliderBody = createElement("div", { class: "slider__body" });
  const sliderPrev = createElement("div", { class: "slider__prev" }, ["<"]);
  const sliderTitle = createElement("div", { class: "slider__title" });
  const sliderNext = createElement("div", { class: "slider__next" }, [">"]);

  slider.appendChild(sliderHeader);
  slider.appendChild(sliderBody);
  sliderHeader.appendChild(sliderPrev);
  sliderHeader.appendChild(sliderTitle);
  sliderHeader.appendChild(sliderNext);

  const hasDefaultSelected = sliderKeys.findIndex(
    (name) => name === defaultSelected
  );

  let activeIdx = hasDefaultSelected >= 0 ? hasDefaultSelected : 0;

  const next = () => {
    const nextName = sliderKeys[activeIdx + 1];
    activeIdx = nextName ? activeIdx + 1 : 0;
    setItem();
  };

  const prev = () => {
    const prevName = sliderKeys[activeIdx - 1];
    activeIdx = prevName ? activeIdx - 1 : sliderKeys.length - 1;
    setItem();
  };

  const setItem = () => {
    const id = sliderKeys[activeIdx];
    sliderTitle.innerText = id;
    sliderBody.innerText = "";
    sliderBody.append(data[id]);
  };

  sliderPrev.addEventListener("click", () => prev());
  sliderNext.addEventListener("click", () => next());

  setItem();

  return slider;
}

function createTodoList(data: { title: string; active: boolean }[]) {
  const todo = createElement("div", { class: "todo-list" });
  const list = createElement("ul", { class: "todo-list__body" });

  data.forEach(({ title, active }) => {
    const li = createElement("li", { class: "todo-list__item" }, [
      createElement("input", {
        id: title,
        type: "checkbox",
        onclick: "return false;",
        ...(active ? { checked: "true" } : {}),
      }),
      createElement("label", { for: title }, [title]),
      createElement("span", { class: "todo-list__item__hover" }, [title]),
    ]);

    list.appendChild(li);
  });

  todo.appendChild(list);

  return todo;
}

const content = document.querySelector(".body");

if (content) {
  content.appendChild(
    createSliderElement({
      "Chrome Extension": createElement("div", {}, [
        createTodoList(CHROME_EXTENSION),
      ]),
      Host: createElement("div", {}, [createTodoList(HOST)]),
      Server: createElement("div", {}, [createTodoList(SERVER)]),
      Components: createElement("div", {}, [createTodoList(COMPONENTS)]),
    })
  );
}

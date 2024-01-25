# NOTES

## 2. Create react prjects

- Talks about react docs
- react has react-dom (for websites) and react native(for mobile apps), we will use react-dom
- npm means node package manager, when we installed node, we get npm which allows us to install some libraries
- npx means node package executor, which directly executes without installing.
- To create a react app, we use (npx create-react-app appname)
- create-react-app is a basic utility (basic app)
- So when we run this cmd, takes too long

- creating vite project
- npm create vite@latest
- it will ask project name
- it will ask framework - sel react
- sel variant - js

- cleaning the projects

- Diff b/t react and vite
- react is slow and installs unnecessery stuffs
- create-react-app has .js and vite has .jsx
- since they are a library, it is allowed. But in frameworks the name conventions are strict.

## 3. Understand the react flow and structure

- In this tut, we will compare b/t create-react-app and vite and understand the flow of react
- while making components , use Capitalized name.
- in create-react, the <script> is added using dependencies (DOUBT)
- in vite , script is added directly after root element in index.html

## 4. create your own react library and JSX

- created own react.
- learnt createReactElement
- we cannot include expressions in {javscript code}, because in the bg, the createReactEl is expecting a statement.
- cuz createReactEl is a func, that expects an obj. and we cannot have expressions in an obj

## 5. why you need hooks and project

- created a counter app which inc/dec when clicked on btn
- when we do like normal js, counter=counter+1, the counter val inc/dec but does not change in the UI
- so we use useState() hook, which returns two things. a val and a function
- we can manipulate the func to update the other variable, and changes will be visible in the UI

## 6. Virtual DOM, Fibre and reconciliation

react fibre - https://github.com/acdlite/react-fiber-architecture

## 7. Tailwind and props in react

- learnt abt tailwind css
- props: makes the components reusable
- learnt to pass and use props
- when we do not pass any prop, we can use deafult param to set the default prop val

## 8. A react interview questionon counter

- what will be the p/p of the below code
  fucntion increaseCount(){
  setCounter(counter+1);
  setCounter(counter+1);
  setCounter(counter+1);
  }
- the count val will inc only once, cuz useState updates in batches
- to make it work for all the setCounter(), we need to use cb func inside the - setCounter((prev)=>prev+1)

## 9. building a react project - bg color changer

- built a color changer app
- here we used useState()
- onclick=(()=>{setColor("red)})
- onClick func accepts a cb func and we need to call our func in that cb. cuz we have a param
- if we do not hv any param, we can directly call in onClick=(setCounter);

## 10. useEffect, useRef and useCallback with 1 project

# memo

react & roll up app for training sessions

# level 1 : init app and start
## set-ups
* roll up
  
  `npm install rollup --global`
  
  server & live refresh & babel & commonjs module format & importing npm modules
  
  `npm install rollup-plugin-serve rollup-plugin-livereload @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-replace --save-dev`

create rollup.config.js and define input and output.

* react
  
  `npm install react react-dom @babel/preset-react`

* create index in
  
  * add public/index.html
  * add /src/index.js

 ```js
  import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 

ReactDOM.render(<App />, document.querySelector('#app'));

```

## component

* add a root component App.js

```js
import React from 'react';
function App(){
return <h1>Hello World</h1>;
}
export default App;
```

## start application

* add in package.json 

```json
"scripts": {
  "start" : "rollup -c rollup.config.js -w"
  },

```

*  start app `npm run start`

* go http://localhost:3000/ 

# level 2 : adding css, images 

## setups
* `npm i @rollup/plugin-image rollup-plugin-postcss --save-dev`
* add in rollup.config.js plugins
```js
import image from "@rollup/plugin-image";
import postcss from 'rollup-plugin-postcss'

//...
plugins: [
    
 image(),
        postcss({
            extensions: [".css"],
        }),
]
```

## add image and css to App.js
* create a App.css
* import it in App.js 
  
  `import './App.css';`
* add an image
* import it in App.js  
* run app and see

# level 3 : adding tests

## jest
*add jest
`npm install --save-dev jest @types/jest`
*package.json
```json
{
  "scripts": {
    "test": "jest"
  }
}
```
* add App.spec.ts and write a dumb test
```js
test('should be ok', () => {
  expect(1).toBe(1);
});
```
* check if it is green
`npm run test`
  
##enzyme

* install enzyme
`npm i --save-dev enzyme @types/enzyme`
* install enzyme adapter corresponding to your react version
  (unofficial adapter)
  `npm install --save-dev @wojtekmaj/enzyme-adapter-react-17`
* [enzymes + jest conf](https://github.com/enzymejs/enzyme-matchers/tree/master/packages/jest-enzyme)

  * add a setupTest.js file
```js
import {configure} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({
    adapter: new EnzymeAdapter()
});
```
  * add in package.json 
```json
  "jest": {
"setupFilesAfterEnv": [
"<rootDir>/setupTest.js"
]
},
```

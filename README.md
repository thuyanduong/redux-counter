# Intro to Redux

## What is Redux
- Redux is an open-source JavaScript library for managing and centralizing application **state**
- What other tools have we used to manage state?

## Why Redux
- [State is not tightly coupled to components](https://res.cloudinary.com/practicaldev/image/fetch/s--pya5ldwL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://blog.codecentric.de/files/2017/12/Bildschirmfoto-2017-12-01-um-08.53.32.png)
- [Similar to Context API](https://edupala.com/wp-content/uploads/2022/04/react-context-diagram.png)
- [Redux Flow is action based](https://cdn-images-1.medium.com/max/1600/0*igA-RO7ila55cVWb.png)

## Counter Example
0. Let's define an **action** called "INCREMENT".
1. The UI/component will trigger this **action** on click of the button.
2. The **action** is sent to the **reducer** which will reduce a new **state**.
3. The store will update the UI/component by mapping the state to props. 

### Setup: Install `redux` and `react-redux`
* `npm install redux react-redux`

### Setup: Create the reducer with initial state
```js
const initialState = {
  darkMode: true,
  counter: 1
}

const reducer = ( currentState = initialState, action ) => { 
  return currentState;
}

export default reducer
```

### Setup: Create the Store
```js
import {createStore} from 'redux'
import reducer from './reducer';

const store = createStore( reducer );
export default store
```

### Setup: Provide the store to the App 
```js
import {Provider} from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

### Finally, we can build out Redux Flow!
1. Clicking the button will dispatch an **action** using `store.dispatch()`
  - We pass in an action object.

2. The **action** is sent to the **reducer** which is a giant if-else (or switch) block
  - The reducer uses the currentState to return a new state depending on the `action.type`. 
  - We might use the `action.payload` to reduce state.

3. The store needs to update the component. We need to `connect` the component to Redux. 
  - The syntax is confusing, but you can memorize the pattern for now.
  - We need to define a `mapStateToProps` function that returns an object where the keys are `props` we are giving to the component and the `value` is from the state object.


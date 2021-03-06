Q-> what is React?
A-> 1. Open source library for building user interfaces.
    2. Not a framework.
    3. Focus on UI.
    4. Rich ecosystem

Q-> why learn react?
A-> 1. Created and maintained by facebook.
    2. More than 100k start on Github.
    3. Huge community.
    4. In demand skilled.

react is declarative
-> 1. tell react what you want and react will build the actual UI.
   2. react will handle efficienlty updating and rendering of the components.
   3. DOM updates are handles gracefully in React.

Q-> More on why React?
A-> 1. Seamlessly integrate react into any of your applications.
    2. Portion of your pag e or a complete page or even an entire application itself.
    3. React native for mobile applications.

Prerequisites
-> 1. HTML, CSS and Javscript fundamentals.
   2. ES6.
   3. Javascript - 'this' keywords,filter, map and reduce.
   4. ES6 - let & const, arrow function, template literals, default parameters, object  literals,rst and spread operators and destrcturing assignment.

channel content - react
Fundamentals -> HTTP -> Routing -> Redux -> Utilities

reactjs software requirement
-> 1. Nodejs
   2. vs code editor

Components Summary
-> 1. Component describe a part of the user interface.
   2. They are re-usable and can be nested inside other components.
   Two Types -
   -> 1. Stateless Functional Components.
      2. Stateful Class Components.

Functional Components
     Properties(props) --->  JavaScript Function ---> HTML(JSX)

Class Components
     Properties(props) --->  ES6 class(State) ---> HTML(JSX)

Functional vs Class components
1. Function
-> 1. Simple function
   2. Use Functional Components as much as possible
   3. Absence of "this" keywords
   4. Solution without using state
   5. Mainly responsible for the UI
   6. Stateless/Dumb/Presentational

2. Class
-> 1. More feature rich
   2. Maintain their own private date state
   3. Complex UI logic
   4. Provide lyfecycle hooks
   5.stateful/Smart/Container

Hook
-> 1. No breaking changes.
   2. Complete opt-in & 100% backwards compatible
   3. What ever we're learned so far in this series still holds good
   4. Components types - Functional components and Class components
   5. Using state, lifcycle methods and "this" binding

JSX
-> 1. JavaScript XML(JSX) - Extension to the JavaSCript language syntax
   2. Write XML - like code for elemnets and Components
   3. JSX tags have a tag name, attributes, anmd children
   4. JSX is not a necessity to write React application
   5. JSX makes your react code simpler and elegant
   5. JSX untimately transpiles to pure JavaScript which is understood by the browsers



JSX difference
-> 1. Class -> className
   2. for -> htmlFor
   3. camelCase property naming convention
   -> 1. onclick -> onclick
      2. tabindex -> tabIndex


Props VS state

props
-> 1. props get passed to the component
   2. Function parameters
   3. props are immutable
   4. props - Functional Components
   5. this.props - Class Components

state
-> 1. state managed within the component
   2. Variables declared in the function body
   3. state can be changed
   4. useState Hook- Functional Components
   5. this.state - Class Components

setState
-> 1. Always make use of setState and never modify the state directly.
   2. Code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method.
   3. When you have to update state based on the previous satte value, pass in a function as an argument instead of the regular object.

Conditional Rendering
-> 1. if/else
   2. Element Variables
   3. Ternary conditional operator
   4. Short circuit operator

Lists and Keys
-> 1. A "key" is a special string attribute you need to include when creating lists of elements.
   2. Keys give the elements a stable identity.
   3. Keys help React identity which items have changed, are added, or are removed.
   4.Help in efficient update of the user interface.

Index as key
Q-> When to use index as a key?
A-> 1. The items in your list do not have a unique id.
    2. The list is a static list and will not change.
    3. The list will never be reordered or filtered,

Styling React Components
-> 1. CSS stylesheets
   2. Inline styling
   3. CSS Modules
   4. CSS in JS Libraries (Styled Components)


form ->
Controlled components


Lifecycle Methods
Mounting -> when an instance of a component is being created and inserted into the DOM.
Updating -> When a component is being re-rendered as a rsult of changes to either its props or state.
Unmounting -> When a component is being removed fom the DOM.
Error Handling -> When there is an error during rendering, in a lifecycle method, or in the constructor of any child compoinent.

Mounting (4) -> constructor, static getDrivedSateFromProps, render and componentDidMount.
Updating (5) -> static getDrivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate.
Unmounting (1) -> componentWillUnmount.
Error Handling (2) -> static getDrivedStateFromError and  componentDidCatch.


component mounting lifecycle (exicuting sequence)
1. constructor
2. static getDerivedStateFromProps(props,state)
3. render
4. componentDidMount

component Updating lifecycle (exicuting sequence)
1. static getDerivedStateFromProps(props,state)
2. shouldComponentUpdate(nextProps,nextState)
3. render()
4. getSnapshotBeforeUpdate(prevProps,prevState)
5. componentDidUpdate(prevProps,prevState,snapshot)

React Fragmentation
1. <React.Fragment></React.Fragment>
2. <></> // its limitation its does not use key attribute

Pure Component
-> 1. we can create a component by extending the PureComponent class.
   2. a PureComponent implements the shouldCopmnentUpdate lifecycle method by performing a shallow camparison on the props and state of the component.
   3. if there is no diffrence, the component is not re-rendered - performance boost.
   4. it is a good idea to ensure that all the childen components are also pure to avoid unexpected behaviour.
   5. never mutate the state. always return a new objct that reflects the new state.

Memo Componet
its same as Pure Component but is use in fucntion component using React.memo()

Error Boundary
-> a class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary.
-> the static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.
-> error boundaries are React components that catch JavaScript error in their child component tree, log thse errors, and display a fall-back UI.
-> a class component becomes an Error Boundary by defining either r both of getDerivedStateFromError and componentDidCatch lifecycle methods.
-> the placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem.
-> provide a way to gracefully handle error in application code.

Higher Order Components - HOC
-> a pattern where a function takes a component as an argument and return a new component.
-> const NewComponent = higherOrderComponent( originalComponent )
-> const EnhancedComponent = higherOrderComponent( originalComponent )
-> const IronMan = withSuit( TonyStark )

Render props
-> the term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function.

Context
-> context provides a way to pass data through the component tree without having to pass props down manually at every level.
 1. create the context
 2. provide a context value
 3. consume the context value
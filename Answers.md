# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a JavaScript library for building user interfaces. It was created by Facebook and it allows you to handle data at much faster response times. It also allows you to break an application down into different components so that one large application becomes a big tree of many smaller applications. 

1. What does it mean to think in react?

    Thinking in ‘react’ means looking at one large application or UI that is needed and being able to break it down into a hierarchy of components which will all run based off data passed between each other. Per the reactjs documents, it is best to build a static version of your application first to get it rendering information, then take a look at the components and decide what needs a state and how the state of each component will change throughout the application.

1. Describe state.

    State is something that will be changing the ’state’ of an object; it holds data and starts at an initial value and every time it re-renders, the state of the object it is attached to changes.

1. Describe props.

    Props are the arguments passed into individual components, and are the actual properties of a piece of data. Props are ‘read-only’ and cannot be changed. They are also a way to pass data from one component to another. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    A side effect is something that happens to an object once an event is triggered and state is changed. If you don’t put something in place to eventually stop this side effect, your data will keep re-rendering and the state will constantly change and a memory leak will eventually happen and crash your browser. In order to prevent these side effects, it is best practice to place a property to remove that effect once you no longer need it.

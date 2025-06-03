import React from "react";
import ReactDOM from "react-dom";
// const heading = React.createElement('h1', {
//     id: "heading"
// }, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


// <div id="parent">
//    <div id="child">Hasrsha
//    </div>
// </div>
//const parent = React.createElement("div", { id: 'parent' }, React.createElement("div", { id: 'child' },'Hasrsha'));


//<div id="parent">
//    <div id="child">
//        <h1>Hasrsha</h1>
//    </div>
//</div>

// const parent = React.createElement("div", { id: 'parent' }, 
//     React.createElement("div", { id: 'child' },
//         React.createElement("h1", { },'Hasrsha')));



//<div id="parent">
//    <div id="child">
//        <h1>Hasrsha</h1>
//        <h2>Hasrsha</h2>
//    </div>
//</div>
// Siblings can be passed as array (h1, h2);

const parent = React.createElement("div", { id: 'parent' }, 'Hasrsha');


// ReactDOM.createRoot(document.getElementById('root')).render(parent);
// ReactDOM.render(<App />, document.getElementById("root"));
import './App.css';
import './Home/index';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }



// function Welcome(props) {
// return <h1>hello, {props.name}</h1>
// }

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function App(){
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled);
  return (
    <div>
         <Welcome name="sar"/>
    </div>
  )
}

export default App;

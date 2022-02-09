import logo from './logo.svg';
import './App.css';
import React from 'react';
import img from './courses-5.jpeg'
class ContentFirst extends React.Component{
  render(){
    console.log(this.props);
    const link= <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>;
    return(<div>{link}
    qewrqwerqerqerq</div>)
  }
}
function Img(props){
  const image=<img src={img} className="img" alt="img" />;
  console.log(props);
  return(
    
   props.visible&&image
  )
}
function Text(props){
  return(
    <div>Hallo
      <div> My name's Jenya</div>
    </div>
  )
}
class NewText extends React.Component{
  render(){
    console.log(this.props);
    return(
      <div>
        <span>I like creating</span>
      </div>
    )
  }
}
class Newlink extends React.Component{
  render(){
    return (
      <a class="App-link" target="_blank" href="https://github.com/Doommez/ReactFirst" rel='GITHUB'>GITHUB</a>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Text/>
       <ContentFirst name="qqweewweqerq" age={32}/>
       <ContentFirst />
       <NewText someText="qwerqwerqwerqwerqwerqw"/>
       <Newlink/>
       <Img visible={false}/>
      </header>
    </div>
  );
}

export default App;

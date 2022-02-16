import logo from './logo.svg';
import './App.css';
import React from 'react';
import img from './courses-5.jpeg';
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
    return(<div> <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>{link}
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
      <p> My name's {props.name}</p>
      <p>I am {props.age} years old</p>
      <p>I study {props.obj.one} and {props.obj.two}</p>
      <button  >{props.function()} Click </button>
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
      <a className="App-link" target="_blank" href="https://github.com/Doommez/ReactFirst" rel='GITHUB'>GITHUB</a>
    )
  }
}
function hi(params) {
  console.log("hi")
}
class User extends React.Component{
  state={
    count:0
  }
  handclick(){
    this.setState(state=>({count: ++state.count}))
  }
  render(){
    const {name,age}=this.props;
    const {count}=this.state;
    return(
      <div>
<p>{name} "13412341234"</p>
<p>{age}qewrqwerqwer</p>
<p>{count}</p>
<button onClick={()=>this.handclick()}>Click Me</button>
</div>
    )
  }
}
class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state={
    date:new Date()
  }
  }
  tick(){
    
    this.setState({
      date: new Date()
    });
    
   
   
  }
  componentDidMount() {
    this.timerId=setInterval(this.tick,1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render(){
    let {date}=this.state
    return(
      <div>
        <p>
          Time Now:
        </p>
        <p>
          {date.toLocaleTimeString()}
        </p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
        <User/>
       <ContentFirst/>
       <Text name="jenya" age={24} obj={{one:"English",two:"React"}} function={function hallo(){console.log(2+2,"Hello")}}/>
      </header>
    </div>
  );
}

export default App;

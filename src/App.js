import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './jsx';
import GreetingCard from './props';
import Counter from './usestate';
import LikeCounter from './likescounter';
var  count=0;
var inputText='';
const isAdmin=false;

const isLoading=false;

const products=[{id:1,item:'Shirt'},{id:2,item:"Pant"},{id:3,item:'shorts'},{id:4,item:'jeans'}]

function App() {


  const onIncrementClick =()=>{
    count=count+1;
    console.log({count});
  }
  const onSearchChange=(event)=>{
    console.log(event.target.value);
    inputText=event.target.value;

  }
  function Loader (){
    return (
      <h3>Loadinggg....Please wait</h3>
    )
  }
  return (
    <>
    <Counter/>
    <LikeCounter/>
    <div>
      <MyFirstComponent/>
    </div>
    <GreetingCard name="Deepss" city="Pokhara"/>
    <h1>JSX</h1>
    <button id="btn" onClick={onIncrementClick}>Increment</button>
    {count}
    <div><input onChange={onSearchChange} placeholder='Search....'/></div>
    {inputText}
      {
      isAdmin ?<h1>This is Admin Portal!</h1>:<h2>This is user portal</h2>
    }
    {
      isLoading?<h1>Page Loaded</h1>:<Loader/>
    }

    {
      products.map(product=><p key={product.id}>{product.item}</p>)
    }
    </>
    

  );
}

export default App;

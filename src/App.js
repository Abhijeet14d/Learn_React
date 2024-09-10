import Card from './components/Card';

function App() {

  

  return (
    <div className="App">
          <h1 className="bg-green-500 text-black p-4 mb-4 rounded-xl ">Hello Abhijeet!!</h1>

          <Card username = "Abhijeet" btnText = "click me"/>
          <Card username = "Pratimesh" btnText = "Fuck me"/>
          
    </div>
  );
}

export default App;

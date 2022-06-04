import './App.css';
import Message from './components/Message';

const App = (props) => {
  return (
    <div className="App">
       <Message message={props.message}/>
    </div>
  );
}

export default App;

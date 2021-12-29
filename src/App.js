import logo from './logo.svg';
import './App.css';
import FirstBlock from './components/pages/FristBlock/FirstBlock';
import SecondBlock from './components/pages/SecondBlock/SecondBlock';
import ThirdBlock from './components/pages/ThirdBlock/ThirdBlock';

function App() {
  return (
    <div className="App">
      <body>
      <FirstBlock/>
      <SecondBlock/>
      <ThirdBlock/>
      </body>
    </div>
  );
}

export default App;

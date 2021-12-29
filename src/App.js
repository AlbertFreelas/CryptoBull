import logo from './logo.svg';
import './App.css';
import FirstBlock from './components/pages/FristBlock/FirstBlock';
import SecondBlock from './components/pages/SecondBlock/SecondBlock';
import ThirdBlock from './components/pages/ThirdBlock/ThirdBlock';
import FourthBlock from './components/pages/FourthBlock/FourthBlock';
import FifthBlock from './components/pages/FifthBlock/FifthBlock';
import SixthBlock from './components/pages/SixthBlock/SixthBlock';

function App() {
  return (
    <div className="App">
      <body>
      <FirstBlock/>
      <SecondBlock/>
      <ThirdBlock/>
      <FourthBlock/>
      <FifthBlock/>
      <SixthBlock/>
      </body>
    </div>
  );
}

export default App;

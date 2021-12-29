import logo from './logo.svg';
import './App.css';
import FirstBlock from './components/pages/FristBlock/FirstBlock';
import SecondBlock from './components/pages/SecondBlock/SecondBlock';
import ThirdBlock from './components/pages/ThirdBlock/ThirdBlock';
import FourthBlock from './components/pages/FourthBlock/FourthBlock';
import FifthBlock from './components/pages/FifthBlock/FifthBlock';
import SixthBlock from './components/pages/SixthBlock/SixthBlock';
import ContactBlock from './components/pages/ContactComponent/ContactBlock';

function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      </head>
      <body>
      <ContactBlock/>
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

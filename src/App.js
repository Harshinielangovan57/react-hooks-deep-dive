
import './App.css';
import UseStateHook from './Components/UseStateHook';
import UseEffectHook from './Components/UseEffectHook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseParamsHook from './Components/UseParamsHook';
import UseRefHook from './Components/UseRefHook';
import LanguageProvider from './Components/UseContext/LanguageProvider';
import LanguageSelector from './Components/UseContext/LanguageSelector';
import Home from './Components/UseContext/Home';
import UseMemoHook from './Components/UseMemoHook';
import Counter from './Components/UseCallback/Counter';
import UseReducerHook from './Components/UseReducerHook';
import UseLayoutEffectHook from './Components/UseLayoutEffectHook';
import UseTransitionHook from './Components/UseTransitionHook';
import UseDefferedvalueHook from './Components/UseDefferedvalueHook';


function App() {
  return (
    <div className="App" >
      <UseStateHook/>
      <UseEffectHook />
      <UseRefHook/>
      <BrowserRouter>
      <Routes>
        <Route path='/:nameId' element={<UseParamsHook/>} />
      </Routes>
      </BrowserRouter>

      

      <LanguageProvider>
        <LanguageSelector/>
        <Home />
      </LanguageProvider>
      <UseMemoHook />
        <Counter />

        <UseReducerHook />
        <UseLayoutEffectHook />
        <UseTransitionHook />

        <UseDefferedvalueHook />

    </div>
  );
}

export default App;

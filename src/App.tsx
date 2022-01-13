import './App.css';
import Home from './components/Home';
import Next from './components/Next';
import TopButton from './components/topButton';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';

const datas = "djkhfgsd"
function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className='navi'>
          <h5 style={{ color: 'white' }}>容器服务</h5>
          <ul>
            <li><Link to='/Home' ><h6 className='side-title'>集群</h6></Link></li>
            <li><Link to='/'><h6 className='side-title'>弹性容器</h6></Link></li>
          </ul>
        </div>
        <div className='right'>
          <div>
            <TopButton date={datas}></TopButton>
          </div>

          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/next' element={<Next/>}/>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

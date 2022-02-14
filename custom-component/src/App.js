import Modal from './component/Modal';
import Tab from './component/Tab'
import Toggle from './component/Toggle'
import './App.css';

function App() {
  return (
    <>
      <div id="container">
        <div id='title'> Wanted Pre Onboarding</div>
        <div className='box'>
          <div className='sub_title'> Modal </div>
            <Modal/>
        </div>
        <div className='box'>
          <div className='sub_title'> Tab </div>
          <Tab/>
        </div>
        <div className='box'>
          <div className='sub_title'> Toggle</div>
          <Toggle/>
        </div>
      </div>
    </>
  );
}

export default App;

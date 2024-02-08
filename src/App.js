import logo from './logo.svg';
import './App.css';
import Random  from './components/Random';
import Tag from './components/Tag'

function App() {
  return (
    <div className='w-full h-screen flex flex-col'>
      <h1 className='bg-slate-900 text-2xl font-bold text-center m-6 p-1 rounded-lg text-white'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;

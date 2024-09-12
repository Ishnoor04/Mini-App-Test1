import React from 'react';
import Breathe from './components/Breathe/Breathe';

const App: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-black text-center flex flex-col gap-4 items-center justify-center'>
        <Breathe/>
    </div>
  );
};

export default App;

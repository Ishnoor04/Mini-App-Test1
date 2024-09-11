import React from 'react';
import Breathe from './components/Breathe/Breathe';

const App: React.FC = () => {
//   const [counter, setCounter] = useState<number>(0);
//   const [tele, setTele] = useState<any>(null); 
  
//   const increment = () => {
//     setCounter(prevCounter => {
//       const newCounter = prevCounter + 1;
//       setItemInCloudStorage('Test_Mini_App_Counter', newCounter.toString(),tele); 
//       return newCounter;
//     });
//   };


//   const decrement = () => {
//     setCounter(prevCounter => {
//       const newCounter = prevCounter - 1;
//       setItemInCloudStorage('Test_Mini_App_Counter', newCounter.toString(),tele); 
//       return newCounter;
//     });
//   };

//   useEffect(() => {
//     const tele1 = (window as any).Telegram.WebApp
//       tele1.ready();
    //   const getItemFromCloudStorage = async (key: string): Promise<string> => {
    //     return new Promise((resolve, reject) => {
    //       tele1.CloudStorage.getItem(key, (error: any, value: string) => {
    //         if (error) {
    //           reject(error);
    //         } else {
    //           resolve(value);
    //         }
    //       });
    //     });
    //   };



    //   const fetchValue = async () => {
    //     try {
    //       const value = await getItemFromCloudStorage('Test_Mini_App_Counter',tele1);
    //       console.log(`Retrieved value for Test_Mini_App_Counter: ${value}`);
    //       if(isNaN(parseInt(value))) setCounter(0)
    //       else setCounter(parseInt(value)); 
    //     } catch (error) {
    //       console.error('Error retrieving item:', error);
    //     }
    //   };
      
    //   setTele((window as any).Telegram.WebApp);
    //   fetchValue();
    
//   }, []);

  return (
    <div className='min-h-screen bg-white text-black text-center flex flex-col gap-4 items-center justify-center'>
        {/* <h1>Name: {tele?.initDataUnsafe?.user?.first_name}</h1>
        <h1>Username: {tele?.initDataUnsafe?.user?.username}</h1>

        <h1>Counter: {counter}</h1>

        <button className='p-[10px] text-[16px] border w-[25%]' onClick={increment}>
          Increment
        </button>
        <button className='p-[10px] text-[16px] border w-[25%]' onClick={decrement}>
          Decrement
        </button> */}
        <Breathe/>
    </div>
  );
};

export default App;

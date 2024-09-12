import { useEffect, useRef, useState } from "react";
import { getItemFromCloudStorage } from "../../utils/getItem";
import { setItemInCloudStorage } from "../../utils/setItem";

const Breathe = () => {
  const tele = (window as any).Telegram.WebApp;
  const startTime = useRef<number | null>(null);
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [rewards, setRewards] = useState<number>(0);

  const startCounter = () => {
    setTimerActive(true);
    setTimeElapsed(0); // Reset time when starting
    startTime.current = Date.now();
    tele.HapticFeedback.notificationOccurred("success")
    if (!holdIntervalRef.current) {
      holdIntervalRef.current = setInterval(() => {
        if (startTime.current && Date.now() - startTime.current >= 15000) {
            tele.HapticFeedback.notificationOccurred("success")
          setRewards((prev: number) => {
            const newRewards = prev + 1;
            setItemInCloudStorage('Test_Mini_App_Rewards', newRewards.toString(), tele); 
            return newRewards;
          });
          stopCounter();
        }
      }, 10); 
    }
  };

  const stopCounter = () => {
    setTimerActive(false);
    setTimeElapsed(0);
    startTime.current = null;
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
      holdIntervalRef.current = null;
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerActive) {
      timer = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerActive]);

  useEffect(() => {
    const fetchReward = async () => {
      try {
        const value = await getItemFromCloudStorage('Test_Mini_App_Rewards', tele);
        if (isNaN(parseInt(value))) {
          setRewards(0);
        } else {
          setRewards(parseInt(value));
        }
      } catch (error) {
        console.error('Error retrieving item:', error);
      }
    };
    fetchReward();
  }, []);

  const handleOnMouseLeave = () => {
    if (timerActive) {
      stopCounter();
    }
  };

  return (
    <div className="px-10 flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-xl text-white mb-8">Name: {tele?.initDataUnsafe?.user?.first_name}</h1>
        <h1 className="text-xl text-white mb-8">Username: {tele?.initDataUnsafe?.user?.username}</h1>
      <h1 className="text-4xl font-bold text-white mb-6">Breathe & Relax</h1>
      <h2 className="text-2xl text-white mb-4">Rewards: {rewards}</h2>
      <h3 className="text-xl text-white mb-8">Timer: {timeElapsed} seconds</h3>
      
      <div className="text-white mb-4">
        {!timerActive && <p className="text-lg">Get Ready</p>}
        {timerActive && timeElapsed <= 5 && <p className="text-lg">Inhale</p>}
        {timerActive && timeElapsed > 5 && timeElapsed <= 10 && <p className="text-lg">Hold</p>}
        {timerActive && timeElapsed > 10 && timeElapsed <= 15 && <p className="text-lg">Exhale</p>}
      </div>

      <button
        onMouseDown={startCounter}
        onMouseUp={stopCounter}
        onMouseLeave={handleOnMouseLeave}
        onTouchStart={startCounter}
        onTouchEnd={stopCounter}
        onTouchCancel={handleOnMouseLeave}
        className="bg-white text-indigo-600 font-bold rounded-full h-32 w-32 flex items-center justify-center transition-all transform hover:scale-110 hover:bg-indigo-600 hover:text-white active:scale-95 active:bg-indigo-700"
      >
        Hold
      </button>
    </div>
  );
};

export default Breathe;

import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card';
import originalAlertsData from "./data";
const Home = () => {
  const [alertsData, setAlertsData] = useState(originalAlertsData);
  const [activeTab, setActiveTab] = useState('All')
  const tabs = ['All', 'Seen', 'Unseen']
  const [selectedType, setSelectedType] = useState("All");
  const types = ["All", "Info", "Warning", "Critical"];


  const sortByTimestamp = (a, b) => new Date(b.timestamp) - new Date(a.timestamp);
  const unseen = alertsData.filter((d) => !d.seen).sort(sortByTimestamp);
  const seen = alertsData.filter((d) => d.seen).sort(sortByTimestamp);

  let filteredAlerts = [];
  if (activeTab === "All") filteredAlerts = [...unseen, ...seen];
  else if (activeTab === "Seen") filteredAlerts = seen;
  else filteredAlerts = unseen;

  if (selectedType !== "All") {
    filteredAlerts = filteredAlerts.filter((alert) => alert.type === selectedType);
  }

  const markAllAsRead = () => {
    const updated = alertsData.map(alert => ({ ...alert, seen: true }));
    console.log("data updated", updated)
    setAlertsData(updated);
  };
  const handleMarkAsSeen = (id) => {
  const updated = alertsData.map(alert =>
    alert.id === id ? { ...alert, seen: true } : alert
  );
  setAlertsData(updated);
};

  useEffect(()=> {
    console.log("Changes Occurs");
  },[alertsData])

  return (
    <>
     <Navbar/>
     <div className='p-8 px-4 sm:px-8'>
        <div className='flex flex-col sm:flex-row gap-2 justify-between '>
            <div>
                <h2 className='text-md sm:text-lg font-semibold text-black  dark:text-white'>Alerts</h2>
                <h3 className='text-sm sm:text-md font-semibold text-[#C0C2C1]'>You've {unseen.length} unread alerts</h3>
            </div>
            <div className='flex sm:gap-4 gap-2 items-center'>
                 <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="bg-green-50 dark:bg-green-600  cursor-pointer appearance-none text-center text-green-600 dark:text-white px-0 sm:px-2 h-8 sm:h-10 rounded-lg   border border-gray-300 outline-none focus:ring-1 focus:ring-green-500 text-sm"
                >
                {types.map((type) => (
                <option key={type} value={type} className='rounded-none bg-white dark:bg-green-600 appearance-none text-center'>
                    {type}
                </option>
                ))}
            </select>
             <button className='bg-green-50 dark:bg-green-600 outline outline-green-200 cursor-pointer h-8 sm:h-10 hover:outline-green-600 text-green-600 dark:text-white font-semibold px-2 sm:px-4  rounded-lg py-0' onClick={()=> markAllAsRead()}>Mark all as read</button>
            </div>
           
        </div>
        <div className='flex gap-0 mt-4 relative'>
            {tabs.map((tab) => (
                <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className='cursor-pointer z-10 flex flex-col items-center'
                >
                <h3
                    className={`px-2 text-sm font-medium ${
                    activeTab === tab ? 'text-green-600' : 'text-gray-500 dark:text-white'
                    }`}
                >
                    {tab}
                </h3>
                <div
                    className={`w-full h-0.5 mt-1 ${
                    activeTab === tab ? 'bg-green-500' : 'bg-transparent'
                    }`}
                ></div>
                </div>
            ))}
      <div className='w-full h-0.5 bg-gray-200 absolute bottom-0 left-0'></div>
        </div>
          <div className="h-[68vh] w-full py-4 px-0 sm:px-2 overflow-y-auto">
          {filteredAlerts.map((alert) => (
            <Card key={alert.id} data={alert}
            onClick={(()=> handleMarkAsSeen(alert.id))} />
          ))}
        </div>
     </div>
     
    </>
     
  )
}

export default Home
import React from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


dayjs.extend(relativeTime);


const Card = ({data, onClick}) => {

  return (
    <div className={`w-full h-20 rounded-xl flex justify-between items-center cursor-pointer ${data.seen ? 'bg-white' : 'bg-green-50 dark:bg-green-400'} mb-2  px-2 outline outline-green-200`} onClick={onClick}>
        <div className='flex items-center gap-1 sm:gap-4'>
            <div className='bg-green-200 h-10 sm:h-14 w-10 sm:w-14 rounded-md flex items-center justify-center text-green-800'>
                {data.icon}
            </div>
            <div>
                <h2 className='text-md sm:text-lg font-semibold text-black'>{data.title}</h2>
                <h3 className='text-xs sm:text-md font-semibold text-gray-600'>{data.description}</h3>
            </div>
        </div>
        <div className='flex flex-col text-right justify-center sm:justify-between py-0 sm:py-2 gap-2  h-20'>
            <p className='text-xs sm:text-sm font-semibold text-gray-600 '> {data.type}</p>
            <div className='text-xs text-gray-600 flex flex-col justify-between gap-1'><p>{ dayjs(data.timestamp).fromNow()}</p> <p>{data.seen ? 'seen' : 'new'}</p></div>
        </div>
    </div>
  )
}

export default Card
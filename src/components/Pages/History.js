import React,{useEffect} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import {getData} from "../../features/userDataSlice"

function History() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData.userData);
  useEffect(() => {
    dispatch(getData());
  }, []);
  // const getRandom =()=>{
  //   console.log(Math.random * (1000-100)*100);
  //   return Math.random * (1000-100) +100;
  // }
  return (
    <div className='p-2'>
      <div className="rounded-md bg-[white] divide-y divide-[#cbd5e1] dark:bg-dark_background dark:text-dark_ternary">
        {userData.map(item=>{
          return <div className='flex justify-between p-2' key={item.phone}>
            <div className="flex">
              <img className='rounded-full mr-2' src={item.picture.thumbnail}  />
              <div>
                <div className='text-lg'>{item.name.first} {item.name.last}</div>
                <div className='text-sm text-[gray]'>{item.phone}</div>
              </div>
            </div>
            <div className='font-semibold'>₹{Math.floor(Math.random() * (1000 - 5) ) + 5}</div>
          </div>
        })}
      </div>
    </div>
  )
}

export default History
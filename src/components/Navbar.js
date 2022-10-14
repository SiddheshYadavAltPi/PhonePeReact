import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  return (
    <nav className='flex sticky top-0 z-10 justify-between align-middle p-2 bg-primary mb-2 text-[color:white]'>
        <div className='flex justify-center align-middle'>
            <div className='mr-4 bg-[white] rounded-lg py-1'>
                <FontAwesomeIcon size='lg' className='text-primary mx-2' icon={["far","user"]} />
            </div>
            <div className='pt-[0.5px] font-medium text-lg'>Add Address▾</div>
        </div>
        <div className='text-2xl font-black font-Ubuntu'>PhonePe</div>
        <div className='flex justify-center align-middle'>
            <FontAwesomeIcon size='lg' className='text-primary mx-2' icon={["far","user"]} />
            <FontAwesomeIcon size='lg' className='text-primary mx-2' icon={["far","user"]} />
            <FontAwesomeIcon size='lg' className='text-primary mx-2' icon={["far","user"]} />
        </div>
            <FontAwesomeIcon size='lg' className='text-primary mx-2' icon={["far","user"]} />
    </nav>
  )
}

export default Navbar
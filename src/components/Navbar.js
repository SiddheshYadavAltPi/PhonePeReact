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
        <div className='text-2xl font-black font-Ubuntu border-box hidden md:block'>PhonePe</div>
        <div className='flex justify-center align-middle text-white box-border pt-[6px] mr-2'>
            <FontAwesomeIcon size='lg' className='mx-3' icon="qrcode" />
            <FontAwesomeIcon size='lg' className='mx-3' icon={["far","bell"]} />
            <FontAwesomeIcon size='lg' className='mx-3' icon={["far","question-circle"]} />
        </div>
    </nav>
  )
}

export default Navbar
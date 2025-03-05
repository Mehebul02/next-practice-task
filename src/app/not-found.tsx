import Link from 'next/link';
import React from 'react';


const NotFound = () => {
 
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <Link href='/'>
            <button  className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" >
                Back To Home
            </button>
            </Link>
        </div>
    );
};

export default NotFound;

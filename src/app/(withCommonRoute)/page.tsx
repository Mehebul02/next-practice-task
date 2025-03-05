import BlogsCard from '@/components/BlogsCard';
import React from 'react';
import { TBlogs } from '../../../types/blog';

const HomePage =async () => {
  const res = await fetch("http://localhost:500/blogs")
  const blogs =await res.json()

  return (
    <div className='max-w-7xl mx-auto' >
      <h1 className='text-xl text-center my-6 text-yellow-400 font-bold'>All This Blogs</h1>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
   {
      blogs?.map((blog:TBlogs)=>(<BlogsCard key={blog.id} blog={blog}/>))

    }
   </div>
    
    </div>
  );
};

export default HomePage;
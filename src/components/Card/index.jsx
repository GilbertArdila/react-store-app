import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = (data) => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                {data.data.category.name}</span>
            <LazyLoadImage className='w-full h-full object-cover rounded-lg'
             src={data.data.url} alt={data.data.name} effect='blur' height={'100%'} width={'100%'} />
            <div className='absolute top-0 right-0 flex justify-centetr items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                +
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{data.data.name}</span>
            <span className='text-lg font-medium'>${data.data.price}</span>
        </p>
    </div>
  )
}

export default Card
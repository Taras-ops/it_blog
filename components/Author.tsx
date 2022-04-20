import React from 'react'
import Image from 'next/image'

interface Author {
    author: {
        name: String;
        photo: {
          url: String;
        }
        bio: String;
    }
}

const Author = ({ author }: Author) => {
  return (
    <div className='text-center mt-20 bg-black bg-opacity-20 relative mb-6 p-12 rounded-lg shadow-lg'>
      <div className='absolute left-0 right-0 -top-14 rounded-full'>
        <Image src={`${author.photo.url}`}
        alt={`${author.name}`}
        height="100px"
        width="100px"
        className=""
        unoptimized/>

      </div>
      <h3 className='text-white font-semibold text-xl my-3'>{author.name}</h3>
      <p className='text-white'>{author.bio}</p>
    </div>
  )
}

export default Author
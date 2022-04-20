import Link from 'next/link'
import React from 'react'
import moment from 'moment'

const FeaturedPostCard = ({ post }: any) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div
        className="bg-cover text-center text-white rounded-lg py-11"
        style={{ backgroundImage: `url("${post.image.url}")` }}
      >
        <p className='mb-4 text-base'>{
            moment(`${post.createdAt}`).format("MMMM Do YYYY")
          }</p>
        <h3 className='text-xl font-semibold mb-12'>{post.title}</h3>
        <div className='flex justify-center items-center'>
          <img src={post.author.photo.url} alt={post.author.name} className="rounded-full" width="30px" height="30px"/>
          <p className='text-base ml-3'>{post.author.name}</p>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedPostCard

import React from 'react'
import moment from 'moment'
import Link from 'next/link'

interface PostCardProp {
  post: {
    title: String;
    createdAt: String;
    excert: String;
    image: {
      url: String
    }
    slug: String
    author: {
      name: String
      photo: {
        url: String
      }
    }
  }
}

const PostCard = ({ post }: PostCardProp) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={`${post.image.url}`}
          alt={`${post.title}`}
          className="absolute h-80 w-full rounded-t-lg object-cover object-top lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 text-center text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block justify-center items-center md:flex mb-7'>
        <div className="flex items-center justify-center mb-3 md:mr-6 md:mb-0">
          <img src={`${post.author.photo.url}`} height="40px" width="40px" />
          <p className="ml-3 text-lg text-zinc-500 font-medium">{post.author.name}</p>
        </div>
        <div className='flex items-center justify-center'>
          <img src="https://icon-library.com/images/calendar-icon-svg/calendar-icon-svg-16.jpg" width="30px" height="30px"/>
          <p className='ml-3 text-base'>{
            moment(`${post.createdAt}`).format("MMMM Do YYYY")
          }</p>
        </div>
      </div>
      <p className='text-center mb-7'>
        {post.excert}
      </p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='cursor-pointer px-5 py-2 bg-red-400 text-white text-lg font-medium rounded-full transition transform duration-500 hover:-translate-y-1 inline-block'>Contine reading</span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard

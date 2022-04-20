import React, {useEffect, useState} from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

interface CardWidgetProps {
  categories: any;
  slug: String;
}

interface PostData {
  title: String;
  createdAt: String;
  slug: String;
  image: {
    url: String;
  }
}

const CardWidget = ({categories, slug}: CardWidgetProps) => {
  const [relatedPosts, setRealatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(slug, categories)
        .then((result) => setRealatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRealatedPosts(result))
    }
  }, [slug])

  return (
    <div className='bg-white rounded-lg mb-8 p-8 shadow-lg'>
        <h2 className='text-xl font-semibold mb-8 pb-4 border-b-2'>
          {slug ? "Related Posts" : "Recent Posts"}
        </h2>
        {
          relatedPosts && relatedPosts.map((post: PostData) => (
            <div key={`${post.title}`} className="flex items-center mb-3 w-full">
              <div className='w-16 flex-none'>
                <img src={`${post.image.url}`} alt={`${post.title}`} width="60px" height="60px" className='rounded-full align-middle'/>
              </div>
              <div className='flex-grow ml-4'>
                <p className='font-md text-gray-600'>
                  {moment(`${post.createdAt}`).format("MMMM Do YYYY")}
                </p>
                <Link href={`/post/${post.slug}`}>
                  {post.title}
                </Link>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default CardWidget
import React, { useEffect, useState } from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Carousel from 'react-material-ui-carousel'

import { FeaturedPostCard } from '../components'
import { getFeaturedPosts } from '../services'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
}

const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getFeaturedPosts().then((result) => setPosts(result))
  }, [])


  return (
    <div className="mb-8 w-full">
      <Carousel>
        {posts.map((post, index): any => (
          <>
                 <FeaturedPostCard key={index} post={post} />
          </>
        ))}
      </Carousel>
    </div>
  )
}

// export async function getPosts() {
//     const posts = await getFeaturedPosts()

//     console.log(posts)

//     return {
//         props: posts
//     }
// }

export default FeaturedPosts

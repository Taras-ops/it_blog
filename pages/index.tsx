import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {FeaturedPosts} from '../sections'
import { Categories, CardWidget, PostCard } from '../components/index'
import { getPosts } from '../services'

interface HomeProps {
  posts: any
}

const Home: NextPage = ({posts}: any) => {
  return (
      <div className="container mx-auto px-10">
        <Head>
          <title>Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FeaturedPosts />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post: any, index: number) => (
              <PostCard post={post?.node} key={index} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <CardWidget slug={''}  categories={''}/>
              <Categories />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: {posts}
  }
}

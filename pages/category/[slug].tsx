import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { CardWidget, Categories, PostCard} from '../../components'

import {getCategoryItems, getCategories } from '../../services'



const CategoryPosts = ({posts}: any) => {

  return (
    <div className='container px-10 mx-auto'>
        <Head>
            <title>Category</title>
        </Head>

        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <div className='col-span-1 lg:col-span-8'>
                {
                   posts.length === 0 ? posts.map((post: any) => <PostCard post={post} key={post.title}/>) : <h1 className='text-3xl font-bold'>
                       There are no posts with such categories yet
                   </h1>
                }
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

export default CategoryPosts

export async function getStaticProps({params}: any) {
  const data = await getCategoryItems(params.slug)

  return {
    props: {posts: data}
  }
}

export async function getStaticPaths() {
    const categories = await getCategories()

    return {
        paths: categories.map(({slug}: any) => ({params: {slug}})),
        fallback: true
    }
}
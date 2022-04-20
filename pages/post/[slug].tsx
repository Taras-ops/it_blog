import React from 'react'

import { getPostDetails, getPosts } from '../../services'
import { Categories, CardWidget, PostDetail, Author, CommentsForm, Comments } from '../../components'
import Head from 'next/head'

const PostDetails = ({post}: any) => {
  return (
    <div className='container mx-auto px-10'>
        <Head>
            <title>Post</title>
        </Head>

        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
            <div className='col-span-1 lg:col-span-8'>
                <PostDetail post={post}/>
                <Author author={post.author}/>
                <CommentsForm />
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative top-8 lg:sticky'>
                    <CardWidget slug={post.slug} categories={post.categories.map((category: any) => category.slug)}/>
                    <Categories />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}: any) {
  const data = await getPostDetails(params.slug) || []

  return {
    props: {post: data}
  }
}

export async function getStaticPaths() {
    const posts = await getPosts()

    return {
        paths: posts.map(({node: {slug}}: any) => ({params: {slug}})),
        fallback: false
    }
}
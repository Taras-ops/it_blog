import React, {useState, useEffect} from 'react'

import Link from 'next/link'
import { getCategories } from '../services'

interface CategoryData {
  slug: string;
  name: String;
}

const Header = () => {
    const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((result) => setCategories(result))
  }, [])

  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer text-white font-bold text-4xl'>
                        It Blog
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-right md:contents'>
                {
                    categories.map((category: CategoryData) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 ml-4 text-white font-semibold cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Header
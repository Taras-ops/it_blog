import React, {useState, useEffect} from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

interface CategoryData {
  slug: any;
  name: String;
}

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((result) => setCategories(result))
  }, [])

  return (
    <div className='bg-white rounded-lg p-8 shadow-lg'>
      <h2 className='text-xl font-semibold mb-8 pb-4 border-b-2'>
        Categories    
      </h2>
      <div>
        {
          categories.map((category: CategoryData) => (
            <div >
              <Link href={`/category/${category.slug}`}>
                <span className='cursor-pointer block pt-3 mb-3'>{category.name}</span>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories
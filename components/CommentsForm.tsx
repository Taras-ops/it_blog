import React, {useState, useEffect, useRef} from 'react'

const CommentsForm = () => {
    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const commentEl = useRef<HTMLTextAreaElement>()
    const nameEl = useRef<HTMLInputElement>()
    const emailEl = useRef<HTMLInputElement>()
    const storeDataEl = useRef()

    const handleCommentSubmit = () => {

        const { value: comment }: any = commentEl.current
        const { value: name }: any = nameEl.current
        const { value: email }: any = emailEl.current
        const { checked: storeData }: any = storeDataEl.current

        if(!comment || !name || !email) {
            setError(true)
            return
        }

        const commentObj = {name, email, comment, slug: ''}

        if(storeData) {
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem('comment', comment)
        } else {
            localStorage.removeItem('name', name)
            localStorage.removeItem('email', email)
            localStorage.removeItem('comment', comment)
        }
    }

  return (
    <div className='bg-white shadow-lg p-8 pb-12 mb-8 rounded-md'>
        <h3 className='text-xl font-semibold border-b mb-6'>CommentsForm</h3>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            <textarea ref={commentEl} className="w-full py-2 px-4 outline-none bg-gray-100 text-gray-700 rounded-lg" 
            placeholder='Comment' name='comment'/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
            <input ref={nameEl} className="w-full py-2 px-4 outline-none bg-gray-100 text-gray-700 rounded-lg"
            placeholder='Name' name='name'/>
            <input ref={emailEl} className="w-full py-2 px-4 outline-none bg-gray-100 text-gray-700 rounded-lg" 
            placeholder='Email' name='email'/>
        </div>
        <div className='grid grid-cols-1  gap-4 mb-4'>
            <div>
                <input ref={storeDataEl} type="checkbox" 
                className='' id='storeData' name='storeData'/>
                <label htmlFor="storeData" className='text-gray-500 ml-2'>Save my e-mail and name for the next time I comment.</label>
            </div>
        </div>
        <div className=''>
            <button type='button' onClick={handleCommentSubmit}
            className="px-6 py-2 bg-fuchsia-500 text-white text-lg block rounded-lg transition ease hover:bg-violet-500 duration-200">
                Submit
            </button>
        </div>
    </div>
  )
}

export default CommentsForm
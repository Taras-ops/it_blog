import React from 'react'
import moment from 'moment'

interface Post {
  post: {
    title: String;
    createdAt: String;
    content: {
      raw: {
        children: []
      }
    }
    image: {
      url: String;
    }
    author: {
        name: String;
        photo: {
            url: String;
        }
    }
  }
}

interface objType {
  bold: String;
  italic: String;
  underline: String;
  title: String;
  width: any;
  height: any;

  src: String;

  type: String
  children: any[];
}



const PostDetail = ({ post }: Post) => {
  const getContentFragment = (index: Number, text: Text, obj: objType, type: String) => {
    let modifiedText: any = text;

    if(obj) {
      if(obj.bold) {
        modifiedText = (<b key={`${index}`}>{text}</b>)
      }

      if(obj.italic) {
        modifiedText = (<em key={`${index}`}>{text}</em>)
      }

      if(obj.underline) {
        modifiedText = (<u key={`${index}`}>{text}</u>)
      }
    }

    switch(type) {
      case 'heading-three':
        return <h3 key={`${index}`} className="text-xl font-semibold mb-4">{modifiedText.map((item, index) => <span key={`${index}`}>{item}</span>)}</h3>
      case 'paragraph':
        return <p key={`${index}`} className="mb-8">{modifiedText.map((item, index) => item)}</p> 
      case 'heading-four':
        return <h4 key={`${index}`} className="text-md mb-4 font-semibold">{modifiedText.map((item, index) => item)}</h4>
      case 'image':
        return <img key={`${index}`} alt={`${obj.title}`} height={obj.height} width={obj.width} src={`${obj.src}`}/>
      default:
        return modifiedText
    }
  }


  return (
    <div className="rounded-lg bg-white pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          src={`${post.image.url}`}
          alt={`${post.title}`}
          className="h-full w-full rounded-t-lg object-top"
        />
      </div>
      <div className="px-4 lg:px-4">
          <div className="mb-7 block items-center justify-center md:flex">
            <div className="mb-3 flex items-center justify-center md:mr-6 md:mb-0">
              <img
                src={`${post.author.photo.url}`}
                height="40px"
                width="40px"
              />
              <p className="ml-3 text-lg font-medium text-zinc-500">
                {post.author.name}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://icon-library.com/images/calendar-icon-svg/calendar-icon-svg-16.jpg"
                width="30px"
                height="30px"
              />
              <p className="ml-3 text-base">
                {moment(`${post.createdAt}`).format('MMMM Do YYYY')}
              </p>
            </div>
          </div>
          <h1 className='text-3xl font-semibold mb-7'>{post.title}</h1>
          {
            post.content.raw.children.map((typeObj: objType, index) => {
              const children: any = typeObj.children.map((item, itemIndex: Number) => getContentFragment(itemIndex, item.text, item, item.type))

              return getContentFragment(index, children, typeObj, typeObj.type)
            })
          }
      </div>
    </div>
  )
}

export default PostDetail

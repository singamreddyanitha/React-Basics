import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import "./index.css"


// const blogData = {
//   title: 'Blog Name',
//   imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png',
//   avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//   author: 'Author Name',
//   content:
//     'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
// }


const BlogItemDetails = () => {
    const [blogData, setBlogData] = useState({});
    const [isLoading, setIslOading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        getBlogData();
    }, [id]);

    const getBlogData =  async () => {
      
        console.log(id)
    //    console.log(match);

        const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
        const data = await response.json()
        // console.log(data)
        const updatedData = {
            title: data.title,
            imageUrl: data.image_url,
            content: data.content,
            avatarUrl: data.avatar_url,
            author: data.author,

        }
        //  console.log(updatedData)
        setBlogData(updatedData)
        setIslOading(false)
    }

    const renderBlogItemDetails = () => {
       

        const {title, imageUrl, avatarUrl, author, content} = blogData
        return (
            <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
        )
    }



  return (
    <div>{isLoading ? (
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ): (
        renderBlogItemDetails()
    )}</div>
  )
}

export default BlogItemDetails
// import { useState, useEffect } from "react"
import { Component } from "react"
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'


import BlogItem from "../BlogItem"
import "./index.css"

// const blogsData = [
//       {
//         id: 1,
//         title: 'Blog 1',
//         imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png',
//         avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//         author: 'Author Name',
//         topic: 'React.js',
//       },
//       {
//         id: 2,
//         title: 'Blog 2',
//         imageUrl: 'https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png',
//         avatarUrl: 'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
//         author: 'Author Name',
//         topic: 'React.js',
//       },
//     ]

//  const BlogsList = () => {
    // const [blogsData, setBlogsData] = useState("")

    class BlogsList extends Component {
        state = {
            blogsData: [],
            isLoading: true,
        }
   

    // useEffect(() => {
    //     getBlogsData()
    // })

componentDidMount() {
    this.getBlogsData()
}

  getBlogsData = async () => {
        const response = await fetch("https://apis.ccbp.in/blogs")
        const data = await response.json()
        // console.log(data)

        const updatedData = data.map(each => ({
            id: each.id,
            author: each.author,
            avatarUrl :  each.avatar_url,
            imageUrl : each.image_url,
            title :  each.title,
            topic: each.topic,  
        }))

        console.log(updatedData)
        this.setState({
            blogsData: updatedData,
            isLoading: false
        })
    }

render () {
    const {blogsData, isLoading} = this.state

    return (
    <div className="blog-list-container">
        {isLoading ? (
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
            blogsData.map(eachItem => <BlogItem details = {eachItem} key = {eachItem.id}/>
        ))}

    </div>
    )
}
}

export default BlogsList
import React from 'react'

// Here we have 3 ways to pass props to the components we can use any way...

// 1. const EachItemList = (props) => {
    // 1.1 const {details} = props;
//2. const EachItemList = ({name, imageUrl, uniqueNo, role}) => { 

const EachItemList = ({details}) => { 
    
    const {name, imageUrl, uniqueNo, role} = details;

  return (
    <li style = {{listStyleType: "none"}}>
        { /*3.1 <h2>UniqueNo: {details.uniqueNo}</h2> if we pass as a props only details word */  }
        <h2>UniqueNo: {uniqueNo}</h2>   
        <img src = {imageUrl} alt = "name" />
        <h1>Name: {name}</h1>
        <h3>Role: {role}</h3>
        <br/>
    </li>
  )
}

export default EachItemList;
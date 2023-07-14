import React  from 'react'

const  EachLists = (props) => {
    const {details, deletePic} = props;
    const {name, role, imageUrl, uniqueNo} = details;

    const onDelete = () => {
        deletePic(uniqueNo);
    }
    return (
      <li style = {{listStyleType: "none"}}>
        <h1>uniqueNo: {uniqueNo}</h1>
        <h1>Name: {name}</h1>
        <img src = {imageUrl} alt = "name" />
        <p>role: {role}</p>
        <button type = "button" onClick = {onDelete}>Delete pic</button>
      </li>
    )
  
}

export default EachLists
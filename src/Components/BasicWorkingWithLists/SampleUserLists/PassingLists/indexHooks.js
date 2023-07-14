import React, {useState} from 'react'
import EachLists from '../EachLists'

const initialUserDetailsList = [
    {
      uniqueNo: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Esther Howard',
      role: 'Software Developer'
    },
    {
      uniqueNo: 2,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name: 'Floyd Miles',
      role: 'Software Developer'
    },
    {
      uniqueNo: 3,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name: 'Jacob Jones',
      role: 'Software Developer'
    },
    {
      uniqueNo: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
      name: 'Devon Lane',
      role: 'Software Developer'
    }
  ]

//   const deletePic = (id) => {
//     console.log("Deleted pic with pic: ", id)
//   }

const PassingLists = () => {
    const [searchInput, setSearchInput] = useState("");
    // console.log('Passing Lists Search Input:', searchInput);
    const [userDetailsList, setUserDetailsList] = useState(initialUserDetailsList);

    const handleInput = (event) => {
        setSearchInput(event.target.value);
        
    }
    const searchResults = userDetailsList.filter((each) =>each.name.toLowerCase().includes(searchInput.toLowerCase()))
    
    

    const deletePic = (id) => {
            // console.log("Deleted pic with pic: ", id)
            let filteredLists = userDetailsList.filter((each) => each.uniqueNo !== id)
            // console.log("Filtered Lists :", filteredLists);
            setUserDetailsList(filteredLists);
        }
    
    return (
    <div>
        <input type = "search" onChange = {handleInput} value = {searchInput}/>
        {/* {searchResults.map((each) => (
            <EachLists deletePic = {deletePic} details = {each} key = {each.uniqueNo} />
        ))} */}
        {searchResults.length > 0 ? (
            searchResults.map((each) => (
                <EachLists deletePic = {deletePic} details = {each} key = {each.uniqueNo}/>
            )) 
            ): (
                
                <p>No such results found.....</p>
            )
        }
    </div>
  )
}

export default PassingLists
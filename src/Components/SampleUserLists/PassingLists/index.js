import React, { Component } from 'react'
import EachLists from "../EachLists/index"

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


class PassingLists extends Component {
    state = {
        searchInput: "",
        userDetailsList: initialUserDetailsList
    }

    onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value
    })
  }


    
  render() {
    const {searchInput, userDetailsList} = this.state
     
    const searchResults = userDetailsList.filter((each) => each.name.toLowerCase().includes(searchInput.toLowerCase()))

    const deletePic = (id) => {
        // console.log("Deleted pic with the id: ", id);
        const filterUserLists = userDetailsList.filter((each) => each.uniqueNo !== id);
        // console.log("filtered Data : ", filterUserLists);
        this.setState({userDetailsList: filterUserLists})
    }

    return (
      <div>
        <input type = "search" value = {searchInput} onChange = {this.onChangeSearchInput}/>
        {searchResults.map((each) => (
          <EachLists deletePic = {deletePic} details = {each} key = {each.uniqueNo} /> )) }
      </div>
    )
  }
}

export default PassingLists
import "./index.css"

const ContactItem = (props) => {
    const {details, toggleFaviourite} = props 
    const {name, mobileNo, isFavorite, id} = details
    const starImgUrl = isFavorite ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png' : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'
    
    const onClickFavouriteIcon = () => {
        toggleFaviourite(id)
    }
 return (
  <li className= "table-row">
    <div className="table-cell name-column">
      <p>{name}</p>
   </div>
   <hr className="separator"/>
   <div className="table-cell mobile-no-column">
  <p className="mobile-no-value">{mobileNo}</p>
  <button type="button" onClick = {onClickFavouriteIcon} className="favorite-icon-container">
    <img src = {starImgUrl} className="favorite-icon" alt = "star"/>
  </button>
  </div>
  </li>
  )
}

export default ContactItem
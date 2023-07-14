import {Component} from "react" 
import ContactItem from "../ContactItem"
import {v4 as uuidv4} from "uuid"
import "./index.css"


const initialContactsList = [
    {
      id: uuidv4(),
      name: 'Ram',
      mobileNo: 9999988888,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      name: 'Pavan',
      mobileNo: 8888866666,
      isFavorite: true,
    },
    {
      id: uuidv4(),
      name: 'Nikhil',
      mobileNo: 9999955555,
      isFavorite: false,
    },
  ]

class AddContactLists extends Component {
     state = {
        contactList: initialContactsList, 
        name: "",
        mobileNo: "",
     }
    

     toggleFaviourite = id => {
        this.setState(prevState => ({
            contactList: prevState.contactList.map(each => {
                if(id === each.id) {
                    return {...each, isFavorite: !each.isFavorite}
                }
                return each
            })
        }))
     }
     onAddContact = (event) => {
        event.preventDefault()

        const {name, mobileNo} = this.state 
        const newContact = {
            id :uuidv4(),
            name,
            mobileNo,
            isFavorite: false
        } 
        this.setState(prevState => ({
            contactList: [...prevState.contactList, newContact],
            name: "",
            mobileNo: "",

        }))
     }

     onChangeName = (event) => {
       
     this.setState({
      name: event.target.value
     })
    }

    onChangeMobileNo = (event) => {
        this.setState({
            mobileNo: event.target.value
        })
  


        // const mobileNo = event.target.value
        // const isDigitsOnly = /^\d+$/.test(mobileNo) 

        // if (!isDigitsOnly) {
        //     alert("Mobile number should consist of digits only")
        // } else {
        //     this.setState({
        //         mobileNo
        //     })
        // }
    }

    render () {
        const {name, mobileNo, contactList} = this.state

        return (
            <div className="app-container">
                <div className="responsive-container">
                    <h1 className="heading">Contacts</h1>
                    <form className="contact-form-container" onSubmit = {this.onAddContact}>
                        <input className="input"  onChange = {this.onChangeName} value = {name} placeholder="Name"/>
                        <input className="input" placeholder="Mobile Number" onChange = {this.onChangeMobileNo} value = {mobileNo}/>
                        <button type = "submit" className="button">Add Contact</button>
                    </form>
                    <ul className="contacts-table">
                        <li className="table-header">
                            <p className="table-header-cell name-column">Name</p>
                            <hr className="separator"/>
                            <p className="table-header-cell">Mobile Number</p>
                        </li>
                        {contactList.map(each => (
                            <ContactItem key = {each.id} toggleFaviourite = {this.toggleFaviourite} details = {each}/>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default AddContactLists
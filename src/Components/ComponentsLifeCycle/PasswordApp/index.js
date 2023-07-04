import {Component} from 'react'
import {v4} from 'uuid'

const colorList = ['yellow', 'green', 'orange', 'brown', 'blue']

class Components extends Component {
  state = {
    isTrue: false,
    website: '',
    userName: '',
    password: '',
    latestList: [],
    isShow: false,
  }

  addContent = event => {
    event.preventDefault()

    const {website, userName, password} = this.state
    const initialLetter = website.slice(0, 1).toUpperCase()
    console.log(initialLetter)
    const classValue = colorList[Math.floor(Math.random() * 0.5)]
    console.log(classValue)

    const newList = {
      id: v4(),
      websiteName: website,
      username: userName,
      Password: password,
      initialValue: initialLetter,

      classAdd: classValue,
    }

    this.setState(prevState => ({
      latestList: [...prevState.latestList, newList],
      website: '',
      userName: '',
      password: '',
      searchInput: '',
      isTrue: true,
    }))
  }

  showPassword = e => {
    if (e.target.checked) {
      this.setState({isShow: true})
    } else {
      this.setState({isShow: false})
    }
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDelete = id => {
    const {latestList} = this.state
    const newList = latestList.filter(each => each.id !== id)
    const caseOf = newList.length !== 0
    this.setState({latestList: newList, isTrue: caseOf})
  }

  render() {
    const {
      website,
      userName,
      password,
      latestList,
      isShow,
      searchInput,
    } = this.state

    let {isTrue} = this.state

    const newList = latestList.filter(each =>
      each.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    // console.log(newList)

    if (newList.length === 0) {
       isTrue = false
    } else {
      isTrue = true
    }

    const handleEmail = event => {
      this.setState({website: event.target.value})
      //   console.log(website)
    }
    const handleUserName = event => {
      this.setState({
        userName: event.target.value,
      })
      //   console.log(userName)
    }

    const handlePassword = event => {
      this.setState({
        password: event.target.value,
      })
    }

    // console.log(password)

    return (
      <div>
        <div>
          <form onSubmit={this.addContent}>
            <div>
              <input
                type="text"
                onChange={handleEmail}
                placeholder="Enter Website"
                value={website}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Username"
                onChange={handleUserName}
                value={userName}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={handlePassword}
                value={password}
              />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>

        <div>
          <h1>Your Passwords</h1>
          <p>{newList.length}</p>
          <input
            type="search"
            placeholder="search"
            onChange={this.onSearchInput}
          />
          <hr />
          <div>
            <input type="checkbox" id="checkBox" />
            <label htmlFor="checkBox" onChange={this.showPassword}>
              Show Password
            </label>
          </div>
          {!isTrue && <p>No Passwords</p>}

          {isTrue && (
            <ul>
              {newList.map(each => (
                <li id={each.id} key={each.id}>
                  <p>{each.initialValue}</p>
                  <div>
                    <h1>{each.websiteName}</h1>
                    <h3>{each.username}</h3>
                    {!isShow && <h1>******</h1>}
                    {isShow && <p>{each.Password}</p>}

                    <button type="button" onClick={this.onDelete}>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                        className="del-image"
                        alt="delete"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Components

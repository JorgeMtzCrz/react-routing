import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import HomeLink from './HomeLink'
import axios from 'axios'

class HomeContainer extends Component {
  state = {
    quote: ''
  }
  componentDidMount = () => {
    axios
      .get('https://api.kanye.rest')
      .then(({ data: { quote } }) => {
        this.setState({ quote })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { quote } = this.state
    return (
      <>
        <h1>{quote}</h1>
        {/* <h1>Home</h1>
        <HomeLink
          rutas={[{ name: 'otro', to: '/otro' }, { name: 'otra', to: '/otra' }, { name: 'privado', to: '/uff' }]}
        /> */}
      </>
    )
  }
}

export default HomeContainer

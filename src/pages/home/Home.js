
import React from 'react'

import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import Posts from '../Posts/Posts'


// import PostSide from '../../components/PostSide/PostSide'
// import ProfileSide from '../../components/profileSide/ProfileSide'
// import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
const Home = () => {
  return (
    <div >
    
     <Header></Header>
     <Form></Form>
    <Posts></Posts>

    </div>
  )
}

export default Home
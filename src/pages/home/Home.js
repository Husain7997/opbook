
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Posts from '../../components/Posts'
// import PostSide from '../../components/PostSide/PostSide'
// import ProfileSide from '../../components/profileSide/ProfileSide'
// import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
const Home = () => {
  return (
    <div >
     <Navbar></Navbar>
     <Header></Header>
     <Form></Form>
     <Posts></Posts>
   <Footer></Footer>
    </div>
  )
}

export default Home
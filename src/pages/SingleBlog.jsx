import Main from "../components/Blog/Main"
import Footer from "../components/Home/Footer"
import Navbar from "../components/Home/Navbar"
import {useParams } from 'react-router-dom';

const SingleBlog = () => {

  const id = useParams();
  return (
    <>
      <Navbar />
      <Main id={id} />
      <Footer />
    </>
  )
}

export default SingleBlog

import React from 'react'
import { Link } from 'react-router-dom'
import prog from '../assets/p.jpg'
import ProjectCard from '../Components/ProjectCard'
function Home() {
  return (
    <div>
        <div className="row">
            <div className="col-6">
                <h1 className='mt-3 text-center'>PROJECT FAIR</h1>
                <p style={{textAlign:'justify'}} className='mx-5'>Welcome to our Project Fair where innovation meets the web! Our event showcases a plethora of unique website creations crafted by talented individuals or teams. From dynamic e-commerce platforms to interactive educational portals, explore a diverse array of digital wonders that redefine online experiences. Engage with creators, discover cutting-edge technologies, and witness the power of imagination translated into pixels. Join us in celebrating the boundless possibilities of web development at our Project Fair.</p>
                <div className='text-center'>
                    <Link to={'/login'}>
                    <button className='btn btn-info'>GET STARTED</button>
                    </Link>
                </div>
            </div>
            <div className="col-6">
                <img src={prog} alt="" srcset="" />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h1 className='text-center mt-5'>Explore Our Project</h1>
                <marquee width="100%" direction="left" height="400px">
<ProjectCard/>
</marquee>
            </div>
        </div>
        <div className="row mx-5">
            <h1 className='text-center mb-5 '>Our Service</h1>
            <div className="col-md-4">
                <h3 className='text-center p-5'>Web Designing</h3>
               <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus optio modi tempore, maiores in repudiandae atque pariatur aspernatur sed ullam, vel placeat voluptates, eaque ea laboriosam nam ratione itaque saepe.
               </p>
               </div>
            <div className="col-md-4">
            <h3 className='text-center p-5'>Single Page Application</h3>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod facilis dicta nihil voluptatum veritatis corrupti tempora similique, repudiandae alias neque ad eligendi nemo doloribus dolorem iusto assumenda placeat reprehenderit consequuntur!
                </p></div>
            <div className="col-md-4">
            <h3 className='text-center p-5'>Backend Service</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, non voluptatibus. Voluptates praesentium accusantium, odit eaque dignissimos quaerat. Enim, vero earum minima reiciendis magni nisi ipsa? Eaque suscipit quibusdam incidunt!
                </p></div>
        </div>
    </div>
  )
}

export default Home
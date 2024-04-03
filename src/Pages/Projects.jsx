import React from 'react'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <div>
      <h2 className='text-center m-5'>All Projects</h2>
      <input type="text" placeholder='Search By Technology' className='form-control w-50 mx-auto' />
      <div className="row">
      <div className='col'>
      <ProjectCard/>
    </div>
      </div>
    </div>
    
  )
}

export default Projects
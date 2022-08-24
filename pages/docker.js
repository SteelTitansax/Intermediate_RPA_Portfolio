import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {electronSkills, websiteExperiences, reactProjects, reactNativeProjects, dockerProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'



const Docker = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-white">
            <div className="row">
                <div className="col-md-2">
                    <img src="docker.jpg" className="mt-1" height="95px" alt="React perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >Docker  </h1>
                    <h3>OS Level Virtualization Software</h3> 
                    <h6 style={{paddingTop:'8px'}}>Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. Because all of the containers share the services of a single operating system kernel, they use fewer resources than virtual machines.</h6>
                   
                </div>
            </div>
        </div>


    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-intermediate text-white">
                    <div className="card-body card-body-skillsElectron">
                          <h3>Skills</h3>
                            {
                                electronSkills.map(({skill,percentage},i) => (
                                    <div className="py-3" key={i}>
                                        <h6>{skill}</h6>
                                        <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                                             role="progressbar"
                                             style={{width:`${percentage}%`}}></div>
                                        </div>
                                    </div>
                                ))
                            }


                          
                    </div>
                </div>
        </div>

        <div className="col-md-8">
                <div className="card bg-intermediate text-white">
                    <div className="card-body card-body-experienceElectron">
                          <h3>Experience</h3>
                           
                          <ul>
                          {
                              websiteExperiences.map (({title,description,from,to,url},i) => ( 
                               <div key={i}>
                                 <li>
                                    <h4>{title}</h4>
                                    <h6>{from}-{to}</h6>
                                    <p>{description}</p>
                                 </li>   
                                    <a className="btn btn-primary border know-more" href={url}>
                                        Know more 
                                    </a> 
                                
                               </div>
                               


                              ))
                           
                          }
                              
                          </ul>
                    </div>
                </div>
        </div>
     </div>
    
    
    

    {/** Portfolio */}
    <div className="row mt-5">

          <div className="col-md-12">
                <div className="card card-body bg-primary">
                    <div className="row">
                        <div className="col-md-12 border-bottom">
                            <h1 className="text-center text-white"> Portfolio</h1>
                        </div>
                            


                        <div className="col-md-12 mt-3">
                            <h3 className="text-center text-white"> Docker</h3>
                            <div className="border-bottom"/>
                        </div>        

                        {
                              dockerProjects.map(({name,description,image,github,url},i) => (
                                
                                    <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center"><strong>{name}</strong></h5>
                                            <p className="text-center">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-danger border button-card" href ={github}>Code</a>
                                            <a className="btn btn-info border button-card" href ={url}>Demo</a>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>

                              ))
                          }                   

                        

                    </div>

                   


                </div>

               


          </div>     
           
    </div>
</Layout>

</>
export default Docker; 


        

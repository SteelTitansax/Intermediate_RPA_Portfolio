import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {bashSkills, pythonExperiences, robocorpProjects, reactNativeProjects, Otherprojects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'



const Robocorp = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-white">
            <div className="row">
                <div className="col-md-2">
                    <img src="robocorp.jpg" className="mt-1" height="95px" alt="React perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >Robocorp </h1>
                    <h3> RPA Python Framework </h3> 
                    <h6 style={{paddingTop:'8px'}}>Robocorp is a python frameworp for RPA automations. Robocorp has reimagined automation and built an open source RPA tech stack, so you can build and deploy robots. Automate your mission-critical routines.</h6>
                   
                </div>
            </div>
        </div>


    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-intermediate text-white">
                    <div className="card-body card-body-skillsFullStack">
                          <h3>Skills</h3>
                            {
                                bashSkills.map(({skill,percentage},i) => (
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
                <div className="card bg-intermediate text-white ">
                    <div className="card-body card-body-experienceFullstack">
                          <h3>Experience</h3>
                           
                          <ul>
                          {
                              pythonExperiences.map (({title,description,from,to,url},i) => ( 
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
                            <h3 className="text-center text-white"> Robocorp</h3>
                            <div className="border-bottom "/>
                        </div>        
                        <div className="col-md-2 p-2" />

                        {
                              robocorpProjects.map(({name,description,image,url},i) => (
                                
                                    <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center"><strong>{name}</strong></h5>
                                            <p className="text-center">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-primary border button-card" href ={url}>Code</a>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>

                              ))
                          }                   

                        
                    <div className="col-md-2 p-2" />

                    </div>

                   


                </div>

               


          </div>     
           
    </div>
</Layout>

</>
export default Robocorp; 


        

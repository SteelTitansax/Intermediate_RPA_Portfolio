import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {electronSkills, powerappsExperiences, reactProjects, reactNativeProjects, powerAutomateProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'



const PowerAutomate = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-white">
            <div className="row">
                <div className="col-md-2">
                    <img src="powerautomate.jpg" className="mt-1" height="95px" alt="React perfil"/>
                </div>
                <div className="col-md-10">
                    <h1>PowerAutomate  </h1>
                    <h3>Automation Tool</h3> 
                    <h6 style={{paddingTop:'8px'}}>Power Automate is a part of Microsoft Power Platform as it is a workflow engine that uses the same connectors as in Power Apps to give you access to content for automated processing</h6>
                   
                </div>
            </div>
        </div>


    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-primary">
                    <div className="card-body card-body-skillsElectron">
                          <h3 className="text-white">Skills</h3>
                            {
                                electronSkills.map(({skill,percentage},i) => (
                                    <div className="py-3" key={i}>
                                        <h6 className="text-white">{skill}</h6>
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
                <div className="card bg-primary">
                    <div className="card-body card-body-experienceElectron">
                          <h3 className="text-white">Experience</h3>
                           
                          <ul>
                          {
                              powerappsExperiences.map (({title,description,from,to,url},i) => ( 
                               <div key={i}>
                                 <li>
                                    <h4 className="text-white">{title}</h4>
                                    <h6 className="text-white">{from}-{to}</h6>
                                    <p className="text-white">{description}</p>
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
                            <h3 className="text-center text-white"> PowerAutomate</h3>
                            <hr className="bg-white "/>
                        </div>        
                        <div className="col-md-3 p-2" />

                        {
                              powerAutomateProjects.map(({name,description,image,url},i) => (
                                
                                    <div className="col-md-3 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center text-white"><strong>{name}</strong></h5>
                                            <p className="text-center text-white">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-info border button-card" href ={url}>Enter</a>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>

                              ))
                          }                   

                        
                    <div className="col-md-3 p-2" />

                    </div>

                   


                </div>

               


          </div>     
           
    </div>
</Layout>

</>
export default PowerAutomate; 


        

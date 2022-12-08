import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {bashSkills, bashExperiences, scriptingProjects, reactNativeProjects, angularProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'



const Scripting = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-white">
            <div className="row">
                <div className="col-md-2">
                    <img src="scripting.jpg" className="mt-1" height="95px" alt="Bash perfil"/>
                </div>
                <div className="col-md-10">
                    <h1>Scripting</h1>
                    <h3>Coding technique </h3> 
                    <h6 style={{paddingTop:'8px'}}>This section gather diferent scripting technologies like python bash or powershell .</h6>
                   
                </div>
            </div>
        </div>


    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-intermediate">
                    <div className="card-body card-body-skillsReact">
                          <h3 className="text-white">Skills</h3>
                            {
                                bashSkills.map(({skill,percentage},i) => (
                                    <div className="py-3" key={i}>
                                        <h6 className="text-white" >{skill}</h6>
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
                <div className="card bg-intermediate">
                    <div className="card-body card-body-experienceReact">
                          <h3 className="text-white" >Experience</h3>
                           
                          <ul>
                          {
                              bashExperiences.map (({title,description,from,to,url},i) => ( 
                               <div key={i}>
                                 <li>
                                    <h4 className="text-white" >{title}</h4>
                                    <h6 className="text-white" >{from}-{to}</h6>
                                    <p className="text-white" >{description}</p>
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
                            <h3 className="text-center text-white"> Scripting </h3>
                            <div className="border-bottom"/>
                        </div>        

                        {
                              scriptingProjects.map(({name,description,image,url,github},i) => (
                                
                                    <div className="col-md-3 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center text-white"><strong>{name}</strong></h5>
                                            <p className="text-center text-white">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-primary border button-card" href ={github}>Code</a>
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
export default Scripting; 


        

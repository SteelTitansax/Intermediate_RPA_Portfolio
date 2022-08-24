import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {PowerShellSkills, powershellExperiences, powerShellProjects, reactNativeProjects, angularProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'



const PowerShell = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-white">
            <div className="row">
                <div className="col-md-2">
                    <img src="powershell.jpg" className="mt-1" height="95px" alt="React perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >PowerShell  </h1>
                    <h3>Task Automation and Configuration Management Framework</h3> 
                    <h6 style={{paddingTop:'8px'}}>PowerShell is a task automation and configuration management framework from Microsoft, consisting of a command-line shell and the associated scripting language. Initially a Windows component only, known as Windows PowerShell, it was made open-source and cross-platform on 18 August 2016 with the introduction of PowerShell Core. The former is built on the .NET Framework, the latter on .NET Core.</h6>
                   
                </div>
            </div>
        </div>


    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-intermediate text-white">
                    <div className="card-body card-body-skillsReact">
                          <h3>Skills</h3>
                            {
                                PowerShellSkills.map(({skill,percentage},i) => (
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
                    <div className="card-body card-body-experienceReact">
                          <h3>Experience</h3>
                           
                          <ul>
                          {
                              powershellExperiences.map (({title,description,from,to,url},i) => ( 
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
                            <h3 className="text-center text-white"> PowerShell</h3>
                            <hr className="bg-white "/>
                        </div>        
                        <div className="col-md-3" />
                        {
                              powerShellProjects.map(({name,description,image,url},i) => (
                                
                                    <div className="col-md-3 p-2" key={i}>
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

                        <div className="col-md-3" />

                        

                        
                        

                    </div>

                   


                </div>

               


          </div>     
           
    </div>
</Layout>

</>
export default PowerShell; 


        

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {bashSkills, bashExperiences, bashProjects, reactNativeProjects, angularProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'



const Bash = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-white">
            <div className="row">
                <div className="col-md-2">
                    <img src="bash.jpg" className="mt-1" height="95px" alt="Bash perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >Bash (Bourne Against Shell)</h1>
                    <h3>Command Processor</h3> 
                    <h6 style={{paddingTop:'8px'}}>Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used as the default login shell for most Linux distributions. A version is also available for Windows 10 via the Windows Subsystem for Linux. It is also the default user shell in Solaris 11. Bash was also the default shell in all versions of Apple macOS prior to the 2019 release of macOS Catalina, which changed the default shell to zsh, although Bash currently remains available as an alternative shell.</h6>
                   
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
                <div className="card bg-intermediate">
                    <div className="card-body card-body-experienceReact">
                          <h3>Experience</h3>
                           
                          <ul>
                          {
                              bashExperiences.map (({title,description,from,to,url},i) => ( 
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
                            <h3 className="text-center text-white"> Bash </h3>
                            <div className="border-bottom"/>
                        </div>        

                        {
                              bashProjects.map(({name,description,image,url,github},i) => (
                                
                                    <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center"><strong>{name}</strong></h5>
                                            <p className="text-center">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-primary border button-card" href ={github}>Code</a>
                                            <a className="btn btn-danger border button-card" href ={url}>Demo</a>
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
export default Bash; 


        

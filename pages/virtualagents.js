import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {electronSkills, experiences, virtualAgentsProjects, devopsProjects, reactNativeProjects, powerAutomateDesktopProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'



const VirtualAgents = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-white">
            <div className="row">
                <div className="col-md-2">
                    <img src="virtualagents.jpg" className="mt-1" height="95px" alt="React perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >Virtual Agents </h1>
                    <h3>Chatbot low code services</h3> 
                    <h6 style={{paddingTop:'8px'}}>Power Virtual Agents (PVA) is one of the five main services within the Power Platform, the other four being Power Apps, Power Automate, Power BI and Power Pages.

With Power Virtual Agents chat bots can be built without using traditional code. Power Virtual Agents bots can be extended with Azure Bot Service.</h6>
                   
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
                              experiences.map (({title,description,from,to,url},i) => ( 
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
                            <h3 className="text-center text-white"> Virtual Agents</h3>
                            <hr className="bg-white "/>
                        </div>        
                        
                        <div className="col-md-3 p-2"/>

                        {
                              virtualAgentsProjects.map(({name,description,image,url,github},i) => (
                                
                                    <div className="col-md-3 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center text-white"><strong>{name}</strong></h5>
                                            <p className="text-center text-white">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-info border button-card ml-2" href ={github}>Demo</a>

                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>

                              ))
                          }                   

                        
                    <div className="col-md-3 p-2"/>

                    </div>

                   


                </div>

               


          </div>     
           
    </div>
</Layout>

</>
export default VirtualAgents; 


        

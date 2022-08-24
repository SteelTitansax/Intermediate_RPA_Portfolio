import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {pythonSkills, pythonExperiences, reactProjects, reactNativeProjects, pythonProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'



const Python = () =>
<>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-white">
            <div className="row">
                <div className="col-md-2">
                    <img src="python.jpg" className="mt-1" height="80px" alt="python perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >Python  </h1>
                    <h3>Wide purpose language code</h3> 
                    <h6 style={{paddingTop:'8px'}}>Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.

Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.</h6>
                   
                </div>
            </div>
        </div>


    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-intermediate text-white">
                    <div className="card-body card-body-skillsPython">
                          <h3>Skills</h3>
                            {
                                pythonSkills.map(({skill,percentage},i) => (
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
                    <div className="card-body card-body-experienceAngular">
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
                            <h3 className="text-center text-white"> Python</h3>
                        <div className="border-bottom"/>
                        </div>        
                        <div className="col-md-3 p-2" />
                        {
                              pythonProjects.map(({name,description,image,url,github},i) => (
                                    
                                    <div className="col-md-3 p-2" key={i}>
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

                        <div className="col-md-3 p-2" />

                    </div>

                   


                </div>

               


          </div>     
           
    </div>
</Layout>

</>
export default Python; 


        

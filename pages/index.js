import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {skills, experiences, projects, angularProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'


console.log(skills);
console.log(experiences);

const Index = () =>
<>
<Layout>

     {/** Header card */}
     <header className="row">
        <div className="col-md-12">
            <div className="card card-body bg-primary text-light">
            <div className="row">
                <div className="col-md-2">
                    <div className="text-center">
                          <img src="perfil.jpeg"  className="img-fluid" alt="Imagen perfil"/> 
                    </div>
                    <div className="text-center">
                          <a className="btn btn-light border" id="hire-button" href="/hireme" >Contact</a>
                    </div>
                </div>
                <div className="col-md-8">
                    <h1 >Manuel Portero </h1>
                    <h3 >RPA Developer</h3> 
                    <h6 style={{paddingTop:'8px',textAlign:'justify'}}> The first phase of my task as IT was working as a Full Stack Developer. 
                    I could code in Html, css , Jquery and React in some professional projects and I performed front end tasks creating Power Pages projects and PowerApps.
                    I used Angular Ionic and Flask in colaborative and personal projects. Please have a look to the different Demos splitted by technology and have an idea 
                    about my Full stack developer skills.</h6>
                   
                </div>

                <div className="col-md-2">
                    <div className="text-center">
                          <img src="RPA.jpg"  className="img-fluid" alt="Imagen perfil"/> 
                    </div>
                    <div className="text-center">
                          <a className="btn btn-light border" id="hire-button" href="https://profesionalwebsite-mpl.vercel.app/">Website</a>
                    </div>
                </div>  
            </div>
        </div>
    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-intermediate">
                    <div className="card-body card-body-skills text-white">
                          <h3>Skills</h3>
                            {
                                skills.map(({skill,percentage},i) => (
                                    <div className="py-3" key={i}>
                                        <h6>{skill}</h6>
                                        <div className="progress bg-white">
                                        <div className="progress-bar progress-bar-striped bg-primary progress-bar-animated"
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
                    <div className="card-body card-body-experience">
                          <h3>Experience</h3>
                           
                          <ul>
                          {
                              experiences.map (({title,description,from,to,url},i) => ( 
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
    <div className="row">
          <div className="col-md-12">
                <div className="card card-body bg-primary">
                    <div className="row">
                        <div className="col-md-12 border-bottom">
                            <h1 className="text-center text-white"> Portfolio</h1>
                        </div>
                        <div className="col-md-12 mt-3 ">
                            <h3 className="text-center text-white"> Technologies</h3>
                            <div className="border-bottom"/>
                        </div>        


                        {
                              projects.map(({name,description,image,url},i) => (
                                
                                    <div className="col-md-4 p-5" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center text-white"><strong>{name}</strong></h5>
                                            <p className="text-center text-white">{description}</p>
                                            <div className="text-center">
                                            <div className="button" id="button-5">
                                                <div id="translate"></div>
                                                <a className="text-white" href ={url}>Enter</a>
                                                </div>
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
export default Index; 


        

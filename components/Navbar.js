import Link from 'next/link'


const Navbar = () => 

<nav className="navbar navbar-expand-lg navbar-primary bg-secondary ">
    <div className="container">
        <Link href="/">
            <a className="navbar-brand text-white" >Portfolio</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
           
            <li className="nav-item">
            <Link href="/github">
                 <a className="nav-link text-white" >Github</a>
            </Link>

            </li>
            <li><Link href="/blog">
                 <a className="nav-link text-white" >Blog</a>
            </Link>
            </li>
            </ul>
        </div>
    </div>
  
</nav>

export default Navbar
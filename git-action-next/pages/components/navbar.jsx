import React from 'react'


let Navbar = () => {
  return (
    <div className="navbar">
        <h3 className='heading'>Navbar</h3>
        <div className='list' style={{display:"flex"}}>
            {/* <Link href='/' style={{marginLeft:"20px"}}>All</Link>
            <Link href="/html"style={{marginLeft:"20px"}}>HTML</Link>
            <Link href='/css'style={{marginLeft:"20px"}}>CSS</Link>
            <Link href='/javascript'style={{marginLeft:"20px"}}>JavaScript</Link>
            <Link href='/react'style={{marginLeft:"20px"}}>React</Link> */}
            <h3 style={{marginLeft:"20px"}}>All</h3>
            <h3 style={{marginLeft:"20px"}}>HTML</h3>
            <h3 style={{marginLeft:"20px"}}>CSS</h3>
            <h3 style={{marginLeft:"20px"}}>JavaScript</h3>
            <h3 style={{marginLeft:"20px"}}>React</h3>
        </div>
    </div>
  )
}
export default Navbar

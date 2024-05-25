
import Link from 'next/link'

const Header = ()=>{
    return(
        <>
            <div className='header-wrapper'>
            <div className="logo">
            
                <img style={{width:100}} src='https://logowik.com/content/uploads/images/free-food-delivery6258.logowik.com.webp'/>
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                
                <li>
                    <Link href="/">Login/Signup</Link>
                </li>
                
                <li>
                    <Link href="/">profile</Link>
                </li>
                
                {/* <li>
                    <Link href="/"></Link>
                </li> */}
            </ul>

            </div>
        </>
    )
}

export default Header;
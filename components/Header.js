import Link from 'next/link'


export default function Header(props){
    return(
        <nav>
            <Link href='/'>
                <h2><a style={{textDecoration:'none', color:"black",margin: "10px"}}>Home</a></h2>
            </Link>
            <Link href='/about'>
                <h2><a style={{textDecoration:'none', color:"black",margin: "10px"}}>About</a></h2>
            </Link>
            
        </nav>
    )
}
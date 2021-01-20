import Link from 'next/link'

export default function Footer(props){
    return(

        <footer>
            <h1>Previous {props.data.length}</h1>
            {props.data.map(data =>{
               return( <Link href ="/comics/[num].js" as ={`/comics/${data.num}`}>
                    <a style={{textDecoration:'none', color:"black",margin: "10px"}}>#{data.num}    </a>
                </Link>)
            })}
            <h3>@copyright Ahmad</h3>
        </footer>
    )
}
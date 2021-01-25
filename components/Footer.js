import Link from 'next/link'
import styles from '../styles.module.css'

export default function Footer(props){
    return(

        <footer>
            <h1>Previous {props.data.length}</h1>
            <div className={styles.comicsDiv}>
            {props.data.map(data =>{
               return( <Link  href ="/comics/[num].js" as ={`/comics/${data.num}`}>
                    <a className={styles.comics} key={data.num}>#{data.num}    </a>
                </Link>)
            })}
            </div>
            <h3 className={styles.copyRight}>@copyright Ahmad</h3>
        </footer>
    )
}
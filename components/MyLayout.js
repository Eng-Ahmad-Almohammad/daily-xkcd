import Header from '../components/Header'
import styles from '../styles.module.css'



export default function MyLayout(props){
    return(
            <div className={styles.mylayout}>
                
                {props.children}

            </div>

    )
}
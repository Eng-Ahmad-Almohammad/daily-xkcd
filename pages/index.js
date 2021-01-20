import styles from '../styles.module.css'
import MyLayout from '../components/MyLayout'
import Footer from '../components/Footer'


export default function Home(props) {
  return (
    <div className={styles.hello}>
      <MyLayout>
        <h1>XKCD</h1>
        <p>{props.data[0].safe_title}</p>
        <img src={props.data[0].img}/>
        <Footer data={props.data} />
      </MyLayout>
    </div>
  )
}

export async function getServerSideProps(){
  let num = 2413;
  let dataArray = []
  for (let i = 0; i < 10; i++){
    const response = await fetch(`https://xkcd.com/${num-i}/info.0.json`);
    const data = await response.json();
    dataArray.push(data)

  };
  
  return {props:{data:dataArray}};
  
}
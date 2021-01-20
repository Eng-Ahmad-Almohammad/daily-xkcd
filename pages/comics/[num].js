import MyLayout from '../../components/MyLayout'


export default function Details(props){
    return(
        <MyLayout>
            <h2>{props.data.safe_title}</h2>
            <img src={props.data.img}/>
            
        </MyLayout>
    )
}


export async function getServerSideProps(context){
    const num = context.query.num
    
    const response = await fetch(`https://xkcd.com/${num}/info.0.json`);
    const data = await response.json();

    return {props:{data:data}};
    
  }
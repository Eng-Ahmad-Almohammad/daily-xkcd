import Header from '../components/Header'

export default function MyLayout(props){
    return(
            <div>
                <Header />
                {props.children}
                <style jsx>{`
                    background: gray;
                    color: goldenrod;
                    padding: 10px;
                    margin: 10px;


                `}

                </style>
            </div>

    )
}
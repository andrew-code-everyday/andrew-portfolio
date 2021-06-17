import Covid from "./Covid/Covid";
import MyInfo from "./MyInfo/MyInfo";
import {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function Home(){
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    return <div>
        <MyInfo/>
        <Covid/>
    </div>
}

export default Home;
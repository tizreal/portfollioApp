import { Routes, Route} from 'react-router-dom';
import Hero from "./Hero";
import Highlight from "./Highlight";
import Testimonial from "./Testimonial";
import About from "./About";


function Main(){
    return(
        <main>
            <Routes>
                <Route path ="/" element ={<Hero />} />
                <Route path ="/highlight" element = {<Highlight />} />
                <Route path ="/testimonial" element = {<Testimonial />} />
                <Route path ="/about" element = {<About />} />
            </Routes>
        </main>
    )
}
export default Main;
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import axios from "axios"
import {useEffect, useState} from "react"

function App() {
  
    useEffect(()=>{
      axios.get('http://notlegit991.pythonanywhere.com/projects/get/').then((res)=> {setProjects(res.data);}).catch((err)=>console.log(err));
    }, [])
    
    const [projects, setProjects] = useState([]);
    console.log(projects);
    return (
        <>
            <Home />
            <About />
            <Projects projects={projects}/>
            <Contact />
        </>
    );
}

export default App;

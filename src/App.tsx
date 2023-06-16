import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import axios from "axios"
import {useEffect, useState} from "react"

function App() {
  const [status, setStatus] = useState(false);
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/get/').then((res)=> {setProjects(res.data);setStatus(true)}).catch((err)=>console.log(err));
    }, [status])
    
    const [projects, setProjects] = useState(Object);
    console.log(projects);
    return (
        <>
            <Home />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;

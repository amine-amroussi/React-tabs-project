import React, { useState, useEffect } from 'react'
// import { FaAngleDoubleRight } from 'react-icons/fa';
import Jobs from "./jobs";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [loading , setLoading] = useState(true);
  const [jobs , setJobs] = useState([]);
  // const [value , setValue] = useState(0);

  const fetchJobes = async ()=> {
    setLoading(true)
    const respons = await fetch(url);
    const jobs = await respons.json();
    setJobs(jobs);
    setLoading(false);
  }

  useEffect(()=> {
    fetchJobes();
  },[])

  if (loading) {
    return (
      <section className="section loading" >
        <h2>Laoding ... </h2>
      </section>
    )
  }

  // const {title , dates , duties , company} = jobs[value];

  return <Jobs jobs = {jobs} />
}

export default App

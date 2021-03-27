import React , {useState} from "react";
import { FaAngleDoubleRight } from 'react-icons/fa';

const Jobs = ({jobs})=> {
    const [value , setValue] = useState(0);
    const {title , dates , duties , company} = jobs[value];
    
    const handleClick = (index)=> {
        setValue(index)
    }

    return <section className="section" >
        <div className="title" >
            <h2>Experience</h2>
            <div className="underline" ></div>
        </div>
        <div className="jobs-center" >
            {/* jobs btn */}
            <div className="btn-container">
                {
                    jobs.map((job , index) => {
                        return <button key={job.id} onClick={()=>handleClick(index)}
                        className={`job-btn ${index === value && "active-btn"}`  } >
                            {job.company}
                        </button>
                    })
                }
            </div>
            {/* jobs info */}
            <article className="job-info" >
                <h3>{title}</h3> 
                <h4>{company}</h4>
                <p className="job-date" >{dates}</p>
                {
                    duties.map((duty , index)=> {
                        return <div className="job-desc" key={index} >
                            <FaAngleDoubleRight className="job-icon" />
                            <p>{duty}</p>
                        </div>
                    })
                }
            </article>
        </div> 
    </section>

}

export default Jobs;
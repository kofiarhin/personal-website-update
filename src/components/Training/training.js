import React from "react";
import Header from "../Header/header";
import "./training.sass";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

const Training = () => {

    return <div className="tranining">

        <div className="header-inner">
            <Header />
        </div>

        <div className="training">



            <div className="content">
                <h1 className="cta"> Full Stack Developer Course </h1>
                <p className="slug">Become a full-stack developer to write different kinds of code that handle frontend and backend tasks.</p>

                <p>
                    Two million computer programming jobs are estimated to be created around the world by 2020 - thanks to unprecedented growth in the tech sector.

                </p>


                <p>
                    I will pinpoint the key skills needed for the most in-demand jobs and develop courses and diplomas to you in those areas. That’s why I have developed this two months full stack web development bootcamp, which will be 90% practical and 10% theory as well as dedicated mentorship.
                </p>

                <h2>What will I do as a full-stack developer? </h2>

                <p>

                    A full-stack developer can handle both backend and frontend tasks, although they may not necessarily be an expert in either. If you're torn between learning multiple technologies, this might be the path for you! Full-stack developers may:



                </p>
                <ul>

                    <li>Build a site backend in programming languages such as Node or PHP</li>

                    <li>Use front-end libraries or frameworks</li>
                    <li> Manage application deployment and put projects on servers</li>
                    <li> Perform sys admin tasks</li>
                    <li>Run SQL queries on databases</li>

                </ul>

                <h2>How much will I earn?</h2>
                <p>Here is a list of selected countries:</p>

                <ul>

                    <li className="head">United States</li>
                    <li>Beginner: $50,000 - $80,000</li>
                    <li> 2-5 years: $70,000 - $90,000</li>
                    <li> 5+ years: $100,000 +</li>

                    <li className="head">United Kingdom</li>
                    <li> Beginner: £30,000 - £40,000</li>
                    <li>  2-5 years: £40,000 - £60,000</li>
                    <li>  5+ years: £60,000 +</li>
                </ul>

                <h2> What are my job prospects?</h2>

                <p>This path can prepare you for the following jobs: </p>

                <ul>


                    <li>Full-stack developer</li>
                    <li>Junior front-end developer</li>
                    <li>Junior back-end developer</li>
                </ul>


                <h2>Who is eligible to enroll?</h2>
                <p>This path is accessible to all, but here are some recommendations:</p>

                <ul>

                    <li> A high school diploma </li>
                    <li> A good level of English </li>
                    <li> Access to a computer (PC or Mac), headphones, a webcam </li>
                    <li>Internet access</li>
                </ul>

                <h2>What will I learn?</h2>

                <p>In this path, you'll learn how to:</p>

                <ul>

                    <li>Web development  Fundamentals HTML/CSS</li>
                    <li>Create web projects with JavaScript</li>
                    <li> Use React, a popular JavaScript library</li>
                    <li> Write backend Nodejs/Php code</li>
                    <li> Create  Nodejs/Php applications</li>
                    <li> Integrate Reactjs with  Nodejs</li>
                    <li> Query a database (mongodb/mysql) that uses and stores information</li>
                    <li>Deploy a website online</li>
                    <li>Write project documentation</li>
                    <li>Optimize performance</li>
                    <li>Analyze a project and choose a technical solution</li>
                    <li> Design technical architecture using UML diagrams</li>
                </ul>

                <h2>How will I learn ?</h2>
                <p>The learning method is unique and revolves around two elements: professional projects and dedicated mentoring sessions</p>

                <h2>Projects</h2>
                <p>The learning is project-driven because that’s the fastest way to become proficient. Projects offer hands-on experience so you can hit the ground running when you start your new job. </p>
                <h2> Mentorship</h2>

                <p>During your path, you will have 2 hours mentoring session a week, offering  one-to-one support in person or  via weekly video conference . This mentoring session will offer guidance on your projects, help define objectives and guide you until you reach them.
</p>

                <div className="btn-wrapper">

                    <a href="https://forms.gle/Xkpz3nP53wRSzhWQ6" className="btn btn-main">Register Here</a>


                </div>

            </div>

        </div>

        <Footer />

    </div>
}


export default Training;
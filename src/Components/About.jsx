import React from 'react'
import style from './Abaut.module.css'

export default function About() {
    return (
        <div className={`${style.container}`}>
            <h1>Lucas Pardieux's first project</h1>
            <div className={`${style.image1}`}>
                <img className={`${style.image}`} src="https://marvel-b1-cdn.bc0a.com/f00000000075552/www.perforce.com/sites/default/files/image/2018-07/image-blog-will-ai-replace-programmers.jpg" alt="Programmer" />
                <img className={`${style.image2}`} src="https://content.techgig.com/photo/msid-77087595/Guide-How-to-build-career-as-a-programmer-without-college-degree.jpg" alt="Programmer" />
            </div>
            <h3 className={`${style.text}`}>This is my first project, applying the knowledge acquired in Henry's bootcamp</h3>
            <ul className={`${style.text2}`}>
                <h4>• React</h4>
                <h4> • Css</h4>
                <h4>  • ES6</h4>
                <h4>   • Modules</h4>
                <h4>  • Routing</h4>
                <h4> • Forms</h4>
                <h4>• Ajax</h4>
            </ul>
            <div>
                <a href="https://github.com/LucasPardieux" target="_blank"><img className={`${style.github}`} src="https://i.ibb.co/bmFG88F/githun-icon.jpg" alt="link Github"/></a>
                <a href="https://www.linkedin.com/in/lucas-pardieux/" target="_blank"><img className={`${style.linkedin}`} src="https://consiguetusmetas.com/wp-content/uploads/2018/08/linkedin-logo.png" alt="link Linkedin"/></a>
            </div>
        </div>
    )
}

import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-collapse-horizontal'></i>
            <h3 className="about__title">Internship</h3>
            <span className="about__subtitle">3 internships</span>
        </div>

        <div className="about__box">
        <i class='bx bxl-product-hunt' ></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">4+ projects</span>
        </div>

        <div className="about__box">
        <i class='bx bx-code-alt' ></i>
            <h3 className="about__title">Codings</h3>
            <span className="about__subtitle">2000+ skillrack problems</span>
        </div>
    </div>
  )
}

export default Info
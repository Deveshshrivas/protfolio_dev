import Style from './HeroStyle.module.css'
import Heroimg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
const Hero = () => {
  return (
    <section id='hero' className='Style.container'>
      <div className='Style.colorModeContainer'>
        <img className='Style.hero' src={Heroimg} alt="devesh profile picture" />
        <img className='Style.colorMode' src={themeIcon} alt="dark mode" />
      </div>
      <div className='Style.info'>
        <h1>Devesh Shrivas</h1>
        <h2>Full-stack Developer</h2>
        <span>
          <a href="https://x.com/DeveshSENinfo" target='_blank' className='Style.btn'><img src={twitterIcon} alt="twitter icon" /></a>
          <a href="https://github.com/Deveshshrivas" target='_blank' className='Style.btn'><img src={githubIcon} alt="GitHub icon" /></a>
          <a href="https://www.linkedin.com/in/devesh-shrivas" target='_blank' className='Style.btn'><img src={linkedinIcon} alt="linkedin icon" /></a>
          <p>Hi, I'm Devesh Shrivas, a Full-stack Developer based in India. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
          <a href="https://www.devesh.live" target="_blank" rel="noopener noreferrer">
            <button className="hover">Resume</button>
          </a>

        </span>
      </div>
    </section>
  )
}

export default Hero
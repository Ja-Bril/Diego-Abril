import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


    return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero}src={heroImg} alt="profile picture of Diego Abril" />
            <img className={styles.colorMode}src={themeIcon} alt="Color mode icon" 
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Diego
                <br />
                Abril
            </h1>
            <h2>FrontEnd Developer</h2>
            <span>
                <a href="https://github.com/Ja-Bril" target='blank'>
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/diego-abril-0a6702243/" target='blank'>
                    <img src={linkedinIcon} alt="linkedin icon" />
                </a>
            </span>
            <p>An itch to create</p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
    );
}

export default Hero
import styles from './ProjectsStyles.module.css'
import wizards from '../../assets/wizards.png'
import ProjectCard from '../../common/ProjectCard';
import bmi from '../../assets/bmi2.png'
import nasa from '../../assets/nasa.png'
import hopsfrog from '../../assets/hopsfrog.png'
import gtlogo from '../../assets/gtlogo3.png'
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          <div className={styles.wizards}>
            <ProjectCard 
            src={wizards} 
            link='https://github.com/Ja-Bril/WashingtonWizardInvaders'
            h3='Wizards Invaders'
            />
          </div>

          <div className={styles.bmi}>
          <ProjectCard 
          src={bmi} 
          link='https://github.com/Ja-Bril/BmiCalc'
          h3='BMI Calculator'
          />
          </div>

          <div className={styles.nasa}>
          <ProjectCard 
          src={nasa} 
          link='https://github.com/Ja-Bril/NasaApi'
          h3='Photo of the Day'
          />
          </div>

          <div className={styles.frog}>
          <ProjectCard 
          src={hopsfrog} 
          link='https://github.com/Ja-Bril/LandingPage'
          h3='Landing Page'
          />
          </div>

          <div className={styles.gt}>
          <ProjectCard 
          src={gtlogo} 
          link='https://github.com/Ja-Bril/ECommercePage'
          h3='Ecommerce Page'
          />
          </div>
          
        </div>
    </section>
  );
}

export default Projects
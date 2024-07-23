import styles from './SkillsStyles.module.css'



function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <h2 className='a'>html</h2>
            <h2 className='b'>css</h2>
            <h2 className='c'>javascript</h2>
            <h2 className='d'>react</h2>
        </div>
    </section>
  )
}

export default Skills
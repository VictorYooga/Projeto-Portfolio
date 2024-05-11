import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpnc from '../../image/projects/lpnc.svg'
import portfolio from '../../image/projects/portfolio.png'

function Projects (){
    return (
        <div className={styles.projects} id="Projects">
            <h1> Projetos </h1>
            <Card
            img={lpnc}
            title="LP - DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
            repo="https://github.com/VictorYooga/Projeto-Landing-Page"
            site="https://projetto-landing-page.netlify.app/"
                />
            <Card
             img={portfolio}
             title="Portfolio"
             tech="HTML, CSS"
             description="Desenvolvimento de uma Portfolio"
             repo="https://github.com/VictorYooga/Portfolio"
             site="https://potfolioh.netlify.app/"
            />
            <ButtonB text='Acesse meu repositório' link='https://github.com/VictorYooga?tab=repositories'/>
        </div>
    )
}

export default Projects
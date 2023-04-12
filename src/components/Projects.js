// Import Assets
import guild from '../assets/diploma-guild.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Diploma Guild DAO</h3>
                    <img src={guild} alt="Diploma Guild Page" />
                    <p>
                        A peer assessment DAO where students submit their project work for review/marking by other students.
                    </p>
                    <a href="https://diploma-guild.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/AlgoBloom/DiplomaDAO" target="_blank" className="button">Code</a>
                </div>
                {/* <div className="projects__card">
                    <h3>Compound</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Aave</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div> */}
            </div>
        </section>
    );
}

export default Projects;
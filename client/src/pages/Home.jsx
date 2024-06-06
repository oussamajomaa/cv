import { Link } from "react-router-dom";
import Contact from '../components/ui/Contact';
import Experience from '../components/ui/Experience';
import Formation from '../components/ui/Formation';
import Langue from '../components/ui/Langue';
import Competence from '../components/ui/Competence';
import Loisir from '../components/ui/Loisir';

const BASE_URL = "http://localhost:5555"

export default function Home() {
    return (
        <div className="container">
            <Link className='link' to={'/admin'}>ADMIN</Link>
            <div className='left-side'>
                <div className='avatar'>
                    <img src="avatar.png" alt="" />
                    <h2>NOM & PRENOM</h2>
                </div>
                <Contact />
                <Competence />
                <Langue />
                <Loisir />
            </div>
            <div className='right-side'>
                <h1>Curriculum Vitae</h1>
                <Experience />
                <Formation />
            </div>
        </div>
    );
}

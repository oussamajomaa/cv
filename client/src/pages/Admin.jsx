
import AdminContact from '../components/admin/AdminContact';
import AdminSkill from '../components/admin/AdminSkill';
import { Link } from 'react-router-dom';
import AdminLangue from '../components/admin/AdminLangue';
import AdminLoisir from '../components/admin/AdminLoisir';
import AdminFormation from '../components/admin/AdminFormation';

export default function Admin() {
    return (
        <div className="admin">
            <Link className='link' to={'/'}>HOME</Link>
            <div className="col">
                {/* <div className='avatar'>
                    <img src="avatar.png" alt="" />
                </div> */}
                <div className='row'>
                    <AdminContact />
                    <AdminSkill />
                    <AdminLangue />
                    <AdminLoisir />
                </div>
            </div>
            <div className="col">
                <div className='row'>
                    <AdminFormation />
                    <AdminFormation />
                </div>
            </div>
        </div>
    )
}

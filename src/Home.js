import { useNavigate } from 'react-router-dom';
const Home=()=>{
    const navigate=useNavigate();

return
    <button className="button" onClick={()=>{navigate('imgList')} }>לתמונות</button>

}
export default Home;
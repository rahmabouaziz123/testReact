import logo from './logo.svg';
import './App.css';
import { Profil } from './Profils/Profil';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  const tabProfil = 
    {
      id: Math.random(),
      bio: `https://www.simplitoo.fr/media/articles/preview_Iqvnb2A.jpeg`,
      fullName: `Rahma Bouaziz`,
      profession: `Etudiante`,
    };
    const wiw="wiwow"
    const test = () => alert(`the First Name  ${tabProfil.fullName} `);

  return (
    <div className="App">
     <Profil data={tabProfil} affiche={test}   />
      
    </div>
  );
}

export default App;

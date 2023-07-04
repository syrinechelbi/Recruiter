
import './App.css';


import Apphome from './home';
import Applogin from './login';
import { Route, Routes } from 'react-router-dom';
import AppregisterC from './registerC';
import AppregisterE from './registerE';
import Appforget from './forget';
import Appnewpwd from './newpwd';
import Appcodepwd from './codepwd';

import WithNav from './withnavbar';
import WithoutNav from './withoutnavbar';
import ApphomeE from './homeE';
import ApphomeC from './homeC';
import AppCreateProfile from './createprofile';
import AppSearchJob from './searchjob';
import AppApplicationC from './applicationsC';

function App() {
  return (
    <div className="App">
     

    <Routes>
        <Route element={<WithoutNav />}>
        <Route path='/' element={<Applogin />} />
        <Route path='/registerC' element={<AppregisterC />} />
        <Route path='/registerE' element={<AppregisterE />} />
        <Route path='/forget' element={<Appforget />} />
        <Route path='/newpwd' element={<Appnewpwd />} />
        <Route path='/codepwd' element={<Appcodepwd />} />
  
        </Route> 

      
        <Route element={<WithNav />}>
        <Route path='/home' exact element={<Apphome />}  />
        <Route  path='/homeE' exact element={<ApphomeE />} />
        <Route  path='/homeC' exact element={<ApphomeC />} />
        <Route path='/createProfile' element={<AppCreateProfile />} />
        <Route path='/SearchJob' element={<AppSearchJob />} />
        <Route path='/AplicationC' element={<AppApplicationC />} />
        </Route>
      </Routes>

    
    </div>



  );
}

export default App;

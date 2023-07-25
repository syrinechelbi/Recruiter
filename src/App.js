
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
import AppApplicationE from './ApplicationE';
import AppCreateoffer from './createoffer';
import AppCandidates from './candidates';
import Employerhome from './employer';

function App() {
  return (
    <div className="App">
     

    <Routes>
        <Route element={<WithoutNav />}>
        <Route path='/login' element={<Applogin />} />
        <Route path='/registerC' element={<AppregisterC />} />
        <Route path='/registerE' element={<AppregisterE />} />
        <Route path='/forget' element={<Appforget />} />
        <Route path='/newpwd' element={<Appnewpwd />} />
        <Route path='/codepwd' element={<Appcodepwd />} />
  
        </Route> 

      
        <Route element={<WithNav />}>
        <Route path='/' exact element={<Apphome />}  />
        <Route  path='/homeE' exact element={<ApphomeE />} />
        <Route  path='/homeC' exact element={<ApphomeC />} />
        <Route path='/createProfile' element={<AppCreateProfile />} />
        <Route path='/SearchJob' element={<AppSearchJob />} />
        <Route path='/ApplicationC' element={<AppApplicationC />} />
        <Route path='/ApplicationE' element={<AppApplicationE />} />
        <Route path='/createoffer' element={<AppCreateoffer />} />
        <Route path='/candidates' element={<AppCandidates />} />
        <Route path='/employerhome' element={<Employerhome />} />
        </Route>
      </Routes>

    
    </div>



  );
}

export default App;

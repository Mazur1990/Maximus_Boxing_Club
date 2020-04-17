//Style import (sass)
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import './styles/main.scss'

//Java Script import (saparate this section to Views and Logics)
//Views
import {renderSampel} from './javascript_pages/view_sampel'
//Logics
import {sampel} from './javascript_logics/sampel';



//Controller -> Structure of Model and View
sampel();
// renderSampel();












// For development use command : npm run dev
// For production (remove dist before it) use comman: npm run prod

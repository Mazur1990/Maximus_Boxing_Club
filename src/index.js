//Style import (sass)
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import './styles/main.scss'

//Java Script import (saparate this section to Views and Logics)
//Views
import {Head} from './javascript_pages/Head'
import {Social} from './javascript_pages/Social'
//Logics
import {sampel} from './javascript_logics/sampel';

//Images


//Controller -> Structure of Model and View


Head();
Social();
// renderSampel();









// For development use command : npm run dev
// For production (remove dist before it) use comman: npm run prod

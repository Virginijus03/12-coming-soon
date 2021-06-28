// IMPORT
import { Clock } from "./components/clock/Clock.js";
import { Progressbar } from "./components/progress-bar/ProgressBar.js";
//import { socials } from "./components/socials/socials.js";
import { clockData } from "./data/clockData.js";
import { progressBarData } from "./data/progressBarData.js";
import { socialsData } from "./data/socialsData.js";
import { SocialsOOP } from "./components/socials/SocialsOOP.js";
import { Form } from "./components/form/Form.js";
import { Toast } from "./components/toast/Toast.js";

// EXECUTION
const toast = new Toast;
// toast.success('Tau pavyko!');
// toast.info('Pranesame apie si bei ta!');
// toast.warning('Tu cia ziurek..!');

// toast.error('Yra klaida!', 'Nauja antraste');
toast.error('Yra klaida!');
// toast.error();

new Clock('#clock_1', clockData);
//socials('footer .socials', socialsData);
new Progressbar('.left-column', progressBarData);
new SocialsOOP('.row-big.socials', socialsData);
new Form('.hero form');
new Form('main form');


/*
import { Clock } from "./components/clock/Clock.js";
import { socials } from "./components/socials/socials.js";
import { socialsData } from "./data/socialsData.js";
// EXECUTION
new Clock('#clock_1', clockData);
socials('footer .socials', socialsData);
/*new Clock('#clock_1');
// new Clock(485545);
socials('footer .socials', socialsData);*/

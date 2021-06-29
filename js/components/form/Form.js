class Form {
    constructor(selector, toastObject) {
        this.selector = selector;
        this.toastObject = toastObject;

        this.formDOM = null;
        this.allInputsDOM = [];
        this.submitButtonDOM = null;


        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selektorius!');
            return false;
        }
        this.formDOM = document.querySelector(this.selector);
        if (!this.formDOM) {
            console.error('ERROR:nerastas formos elementas!')
            return false;
        }
        this.allInputsDOM = this.formDOM.querySelectorAll('input, textarea');
        this.submitButtonDOM = this.formDOM.querySelector('button[type="submit"]');
        //console.log(this.allInputsDOM);
        this.addEvents();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
        }
        return true;
    }


    isValidName(name) {
        if (name === undefined ||
            typeof name !== 'string' ||
            name.length < 2 ||
            !this.isUpperCase(name[0])) {
            return false;
        }
        return true;
    }

    isValidLastName(lastName) {
        if (lastName === undefined ||
            typeof lastName !== 'string' ||
            lastName.length < 2 ||
            !this.isUpperCase(lastName[0])) {
            return false;
        }
        return true;
    }

    isValidEmail(email) {
        if (typeof email !== 'string' ||
            email.length < 6 ||
            email.indexOf('@') === -1 ||
            email[0] === '@' ||
            email.slice(-4).indexOf('@') > -1 ||
            this.countSimbols(email, '@') > 1) {
            return false;
        }
        return true;
    }

    isValidMessage(msg) {
        if (typeof msg !== 'string' ||
            msg === '') {
            return false;
        }
        return true;
    }
    countSimbols(text, letter) {
        let count = 0;

        for (const t of text) {
            if (t === letter) {
                count++;
            }
        }

        return count;
    }
    isUpperCase(letter) {
        return letter === letter.toUpperCase();
    }

    addEvents() {
        this.submitButtonDOM.addEventListener('click', (e) => {
            e.preventDefault();
            let allGood = true;
            for (let element of this.allInputsDOM) {
                const validationRule = element.dataset.validation;

                if (validationRule === 'email') {
                    if (this.isValidEmail(element.value) === false) {
                        allGood = false;
                        this.toastObject.error('ERROR: nera email adreso!');
                        break;
                    }
                }
                if (validationRule === 'name') {
                    if (this.isValidName(element.value) === false) {
                        allGood = false;
                        this.toastObject.error('ERROR: nera vardo!');
                        break;
                    }
                }
                if (validationRule === 'text') {
                    if (this.isValidMessage(element.value) === false) {
                        allGood = false;
                        this.toastObject.error('ERROR: nera zinutes!');
                        break;
                    }
                }
            }
            //console.log('All Good?', allGood)

            if (allGood) {
                this.toastObject.success('Forma isiusta.');
            }

        })

    }
}

export { Form }
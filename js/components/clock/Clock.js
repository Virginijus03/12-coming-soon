class Clock {
    constructor(selector) {
        this.selector = selector;
        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: selector has to be non-empty string');
            return false;
        }

        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: could not find an element by given selector');
            return false;
        }

        return true;
    }

    render() {
        const timeValues = [432, 9, 37, 39];
        const labelValues = ['Days', 'Hours', 'Minutes', 'Seconds'];
        let HTML = '';

        for (let i = 0; i < timeValues.length; i++) {
            HTML += `<div class="time">
                        <div class="value">${timeValues[i]}</div>
                        <div class="label">${labelValues[i]}</div>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
    }
}

// function Clock(selector) {
//     const DOM = document.querySelector(selector);
//     const timeValues = [432, 9, 37, 39];
//     const labelValues = ['Days', 'Hours', 'Minutes', 'Seconds'];
//     let HTML = '';

//     for (let i = 0; i < timeValues.length; i++) {
//         HTML += `<div class="time">
//                     <div class="value">${timeValues[i]}</div>
//                     <div class="label">${labelValues[i]}</div>
//                 </div>`;
//     }

//     DOM.innerHTML = HTML;
// }

export { Clock }
    /*
 issitraukiame "einamieji-metai" (2021)
susikonstruojame einamuju metu gimtadienio (this.targetDate) laika (A)
susikonstruojame einamaji (dabar) laika (B)
palyginame laikus milisekundemis
jeigu A > B, reikia gimtadinis dar tik laukia/ateina
jeigu A < B, reiskia mes jau esame po gimtadienio
    tokiu atveju, gimtadienis bus "einamieji-metai"++ (2022)

kadangi jau nustatem kelintais metais pagal duota this.targetDate bus tas gimtadienis, tai
galim paskaiciuoti laiko skirtuma nuo "dabar"
apskaiciuoti kiek tu milisekundziu skirtumas sudaro:
    dienu, valandu, minuciu, sekundziu

apskaiciuotas laikas (d, v, m, s) grazinamos array formatu

*/

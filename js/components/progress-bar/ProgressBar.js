class Progressbar {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.init();

    }
    init() {
        if (!this.isValidSelector() ||
            !this.isValidData()) {
            console.error('ERROR');
            return false;
        }
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR')
            return false;
        }
        this.render();
    }
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
        }
        return true;
    }
    isValidData() {
        if (!Array.isArray(this.data) ||
            this.data.length === 0) {
            return false;
        }
        return true;

    }
    render() {
        let HTML = '';
        for (const bar of this.data) {
            HTML += `<div class="progress-bar">
                    <div class="top">
                        <div class="title">${bar.title}</div>
                        <div class="value">${bar.value}%</div>
                    </div>
                    <div class="progress">
                        <div class="bar" style="width:${bar.value}%;">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>`
        }
        this.DOM.innerHTML += HTML;
    }
}

export { Progressbar }




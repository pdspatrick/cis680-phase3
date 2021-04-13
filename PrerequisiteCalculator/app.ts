


class Greeter {
    private element: HTMLElement;
    private span: HTMLElement;
    private timerToken: number;
    

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement("span");
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    public start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    public stop() {
        clearTimeout(this.timerToken);
    }
}

class Form1 {
    private formset: HTMLElement;
    private result: HTMLElement;
    public goButton: HTMLElement;
    public formcollection: HTMLFormControlsCollection;

    constructor(formset: HTMLElement, result: HTMLElement) {
        this.formset = formset;
        this.result = result;
        this.result.innerHTML = "";
        this.goButton = document.getElementById("go");
        this.formcollection = document.forms;
        };
    }

window.onload = () => {
    const fl = document.getElementById("classForm");
    const r1 = document.getElementById("result");
    const form = new Form1(fl, r1);
};

function calculate() {
    const data = new FormData(document.forms.item(0));
    const entries = data.entries();
    for (let entry of entries) {
        const key = entry[0]
        const vall = entry[1]
        console.log(key, vall)
    }
 }



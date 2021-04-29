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

function calculate(): void {
    alert("oop here we go")
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var prereqlist = JSON.parse(this.responseText);
        }
    }
    xmlhttp.open("get", "./prerequisites.json");
    xmlhttp.send();
    $.getJSON("./prerequisites.json", function (result) {
        console.log(result)
    });
    const data = new FormData(document.forms.item(0));
    const entries = data.entries();
    for (let entry of entries) {
        const key = entry[0]
        const vall = entry[1]
        console.log(key, vall)
    }
}


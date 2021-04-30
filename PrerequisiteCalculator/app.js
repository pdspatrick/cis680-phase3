class Form1 {
    constructor(formset, result) {
        this.formset = formset;
        this.result = result;
        this.result.innerHTML = "";
        this.goButton = document.getElementById("go");
        this.formcollection = document.forms;
    }
    ;
}
window.onload = () => {
    const fl = document.getElementById("classForm");
    const r1 = document.getElementById("result");
    const form = new Form1(fl, r1);
};
function calculate() {
    alert("oop here we go");
    var allClasses = [];
    var classesToCheck = [];
    $.getJSON("./prerequisites.json", function (data) {
        for (let entry of data) {
            allClasses.push(entry);
        }
    });
    const data = new FormData(document.forms.item(0));
    const entries = data.entries();
    for (let entry of entries) {
        const key = entry[0];
        const vall = entry[1];
        if (vall != "") {
            classesToCheck.push(vall);
        }
    }
    console.log(allClasses);
    classesToCheck.forEach(toCheck => function () {
        allClasses.forEach(course => function () {
            if (toCheck == course.class) {
                classesToCheck.join(course.requirements);
            }
        });
    });
    console.log(classesToCheck);
    console.log(allClasses);
    var output = document.getElementById("result");
    output.textContent = classesToCheck.toString();
}
//# sourceMappingURL=app.js.map
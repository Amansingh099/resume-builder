
function printpdf() {
    var content = document.getElementById("print");

    const allButtons = document.querySelectorAll("#print button");
    allButtons.forEach(button => {
        button.classList.add("none");
    });
    let allInputCheckboxes = document.querySelectorAll(".input-checkbox");
    allInputCheckboxes.forEach(input => {
        input.classList.add("none");
    })

    html2pdf(content, {
        html2canvas: { scale: 1, logging: true, dpi: 500 }
    });

    allButtons.forEach(button => {
        button.classList.remove("none");
    })
    allInputCheckboxes.forEach(input => {
        input.classList.remove("none");
    })
}



function addedu() {
    const head = document.createElement('div');
    document.getElementById("education").appendChild(head);
    head.innerHTML = ('<div class="edublock"><span><input type="checkbox" class="input-checkbox"></span><span class="education-head editable" style="font-weight: 600; font-size: 20px;" contenteditable="true">YOUR DEGREE</span><div><span class="editable" contenteditable="true">Institute Name</span> - <spancontenteditable="true">Passing Year</spancontenteditable=></div></div>');
    additngclass();
    saveresume();
}
function remedu(event) {
    let val = 0;
    let empty = true;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length == -1) {
        alert("No Fields Are Present To Be Deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 0;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === -1) alert("Please Select The Checkboxes To Delete The Required Field!")
    }
    additngclass();
    saveresume();
}


function addskill() {
    const head = document.createElement('div');
    document.getElementById("skills").appendChild(head);
    head.innerHTML = ('<div class="skillblock"><span><input type="checkbox" class="input-checkbox"><span contenteditable="true">SKILL</span></span><form><fieldset class="skill-rating"> <label><input type="radio" name="skill-level" value="1">  </label><label><input type="radio" name="skill-level" value="2"> </label><label><input type="radio" name="skill-level" value="3"> </label><label><input type="radio" name="skill-level" value="4"> </label><label><input type="radio" name="skill-level" value="5"> </label></fieldset></form></div>');
    additngclass();
    saveresume();
}
function remskill(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No Fields Are Present To Be Deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please Select The Checkboxes To Delete The Required Field!")
    }
    additngclass();
    saveresume();
}




function addLang() {
    const head = document.createElement('div');
    document.getElementById("languages").appendChild(head);
    head.innerHTML = ('<div class="language"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true" class="editable">LANGNAME</span>&nbsp-&nbsp<span contenteditable="true" class="editable">level u know</span></div>');
    additngclass();
    saveresume();
}
function remLang(event){
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No Fields Are Present To Be Deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please Select The Checkboxes To Delete The Required Field!")
    }
    additngclass();
    saveresume();
}


function addAch() {
    const head = document.createElement('div');
    document.getElementById("achievement").appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true" class="editable">Write your achievement</span></div>');
    additngclass();
    saveresume();
}
function remAch(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No Fields Are Present To Be Deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please Select The Checkboxes To Delete The Required Field!")
    }
    additngclass();
    saveresume();
}


function addInt() {
    const head = document.createElement('div');
    document.getElementById("interest").appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span class="editable" contenteditable="true">Write interest</span></div>');
    additngclass();
    saveresume();
}
function remInt(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No Fields Are Present To Be Deleted!")
    }
    else {
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please Select The Checkboxes To Delete The Required Field!")
    }
    additngclass();
    saveresume();
}

let maxNewSection = 1;
function addsec() {
    if (maxNewSection < 2) {
        const head = document.createElement('div');
        document.getElementById("newsec").appendChild(head);
        if (maxNewSection === 0) {
            head.innerHTML = ('<div><span><input type="checkbox" class="input-checkbox"></span><span class="title editable" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true" class="editable">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        }
        else {
            head.innerHTML = ('<div><br><br><span><input type="checkbox" class="input-checkbox"></span><span class="title editable" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true" class="editable>This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        }

        maxNewSection = maxNewSection + 1;
    }
    else {
        alert("Atmost 1 NEW SECTION Can Be Added!")

    }
    additngclass();
    saveresume();
}
function remsec(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No Fields Are Present To Be Deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                maxNewSection = maxNewSection - 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please Select The Checkboxes To Delete The Required Field!")
    }
    additngclass();
    saveresume();
}

function saveresume() {
    var sec = document.getElementById("print");
    value1 = sec.innerHTML;
    var info = document.getElementById("custinfo");
    info.value = value1;
}

let editableElements=document.querySelectorAll('.editable');

function additngclass(){
    editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        const defaultText=element.innerHTML;
        element.addEventListener('click', (event) => {
            if (!element.cleared) { 
              element.textContent = ''; 
              element.cleared = true; 
            }
            event.stopPropagation();   
        });
        element.addEventListener('blur', () => {
            if (element.textContent === '') {
                element.textContent = defaultText; 
                element.cleared = false;           
            }
        });
    });
}
additngclass();



let medicationList = [];

function addMedication() {
    const medicationName = document.getElementById('medication-name').value;
    const dosage = document.getElementById('dosage').value;
    const time = document.getElementById('time').value;
    const medication = {
        medicationName: medicationName,
        dosage: dosage,
        time: time
    };
    medicationList.push(medication);
    displayMedicationList();
}

function deleteMedication(index) {
    medicationList.splice(index, 1);
    displayMedicationList();
}
function addMedication() {
    const medicationName = document.getElementById('medication-name').value;
    const dosage = document.getElementById('dosage').value;
    const time = document.getElementById('time').value;
    
    // Check if any input field is empty
    if (medicationName === '' || dosage === '' || time === '') {
        alert('Please fill out all fields before adding a medication.');
        return;
    }
    
    const medication = {
        medicationName: medicationName,
        dosage: dosage,
        time: time
    };
    medicationList.push(medication);
    displayMedicationList();
}

// request a demo button







const demoBtn = document.getElementById('demo-btn');
const demoForm = document.getElementById('demo-form');


demoForm.style.display = 'none'; // hide the form initially
demoBtn.addEventListener('click', () => {
  demoForm.style.display = 'block'; // show the form when button is clicked
});

// popup
const cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click', () => {
  demoForm.style.display = 'none'; // hide the form when cancel button is clicked
});







const submit = document.getElementById('submit');
const popup = document.getElementById('popup');
const buttonk = document.getElementById('buttonk');


popup.style.display = 'none';
submit.addEventListener('click', (event) => {
    event.preventDefault(); // prevent form submission
    popup.style.display='block';
    buttonk.addEventListener('click',(event)=>{
        event.stopImmediatePropagation();
        popup.style.display = 'none';
        demoForm.style.display = 'none';

        
    })
});









function displayMedicationList() {
    const medicationTable = document.getElementById('medication-list');
    medicationTable.innerHTML = '';
    for (let i = 0; i < medicationList.length; i++) {
        const medication = medicationList[i];
        const row = `
            <tr>
                <td>${medication.medicationName}</td>
                <td>${medication.dosage}</td>
                <td>${medication.time}</td>
                <td><button onclick="deleteMedication(${i})">Delete</button></td>
            </tr>
        `;
        medicationTable.innerHTML += row;
    }
}

document.getElementById('add-medication-btn').addEventListener('click', function () {
    addMedication();
});



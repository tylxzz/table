
let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]

const table = document.createElement('table');
const tableheader = document.createElement('thead');
table.appendChild(tableheader);
const tableheaderRow = document.createElement('tr');
tableheader.appendChild(tableheaderRow);

createTableCell('th', 'Vezetéknév', tableheaderRow);
createTableCell('th', 'Keresztnév', tableheaderRow);
createTableCell('th', 'Házas', tableheaderRow);
createTableCell('th', 'Állat', tableheaderRow);

document.body.appendChild(table);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

const form = document.getElementById('form');
form.addEventListener('submit', function(e){
    tbody.innerHTML = '';
    e.preventDefault();
    const lastname = document.getElementById('lastname');
    const firstname1 = document.getElementById('firstname1');
    const firstname2 = document.getElementById('firstname2');
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');

    const lastnamevalue = lastname.value;
    const firstname1value = firstname1.value;
    let firstname2value = firstname2.value;
    const marriedvalue = married.checked;
    const petvalue = pet.value;

    if(firstname2value === ''){
        firstname2value = undefined;
    }

    if (validateFields(lastname, firstname1, pet)){
        array.push({
            lastname: lastnamevalue,
            firstname1: firstname1value,
            firstname2: firstname2value,
            married: marriedvalue,
            pet: petvalue
        });
    }

    renderTable();
    
    console.log(array);
    form.reset();
});

renderTable();

function renderTable() {
    for (const person of array) {
        const row = document.createElement('tr');
        tbody.appendChild(row);
        const fn = document.createElement('td');
        const fn1 = document.createElement('td');
        fn.innerHTML = person.firstname1
        fn1.innerHTML = person.firstname2
        if (person.firstname2){
            fn.innerHTML += " " + person.firstname2;
        }
        const ln = document.createElement('td');
    
        const marriedTableBodyrow = document.createElement('td');
        const petTableBodyRow = document.createElement('td');
    
        ln.innerHTML = person.lastname;
        marriedTableBodyrow.innerHTML = person.married? "Igen":"Nem";
        petTableBodyRow.innerHTML = person.pet;
    
        row.appendChild(ln);
        row.appendChild(fn);
        row.appendChild(marriedTableBodyrow);
        row.appendChild(petTableBodyRow);

    
        row.addEventListener('click', function(e) {
            console.log("clicked" + lastname);
            const selectedrow = tbody.querySelector('.selected');
            if (selectedrow != undefined) {
                selectedrow.classList.remove('selected')
            }
            e.currentTarget.classList.add('selected');
        });
    };
}

/**
 * 
 * @param {'td' | 'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parent 
 * @returns {HTMLTableCellElement}
 */

function createTableCell(tagName, innerHTML, parent){
    const cell = document.createElement(tagName);
    cell.innerHTML = innerHTML;
    parent.appendChild(cell);
}

function validateFields(lastname, firstname, pet){
    const errorMessages = form.querySelectorAll('.error')
    for(const error of errorMessages){
        error.innerHTML = ''
    }
    let result = true;

    if(lastname.value === ''){
        let error = lastname.parentElement.querySelector('.error')
        error.innerHTML = 'Vezetéknév kötelező!'
        result = false
    }

    if(firstname.value === ''){
        let error = firstname1.parentElement.querySelector('.error')
        error.innerHTML = 'Keresztnév kötelező!'
        result = false
    }

    if(pet.value === ''){
        let error = pet.parentElement.querySelector('.error')
        error.innerHTML = 'Állat kötelező!'
        result = false
    }

    return result;
}

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
const lastname = document.createElement('th');
lastname.innerHTML = "Vezetéknév";
const firstname = document.createElement('th');
firstname.innerHTML = "Keresztnév";
const married = document.createElement('th');
married.innerHTML = "Házas";
const pet = document.createElement('th');
pet.innerHTML = "Állat";
tableheaderRow.appendChild(firstname);
tableheaderRow.appendChild(lastname);
tableheaderRow.appendChild(married);
tableheaderRow.appendChild(pet);
document.body.appendChild(table);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const person of array) {
    const row = document.createElement('tr');
    const fn = document.createElement('td');
    fn.innerHTML = person.firstname1
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
    tbody.appendChild(row);
    row.addEventListener('click', function(e) {
        console.log("clicked" + lastname);
        const selectedrow = tbody.querySelector('.selected');
        if (selectedrow != undefined) {
            selectedrow.classList.remove('selected')
        }
        e.currentTarget.classList.add('selected');
    })
}
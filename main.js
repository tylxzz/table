
const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
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
tableheaderRow.appendChild(firstname);
tableheaderRow.appendChild(lastname);
document.body.appendChild(table);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (person of array) {
    const row = document.createElement('tr');
    const fn = document.createElement('td');
    fn.innerHTML = person.firstname1
    if (person.firstname2){
        fn.innerHTML += " " + person.firstname2;
    }
    const ln = document.createElement('td');
    ln.innerHTML = person.lastname;
    row.appendChild(ln);
    row.appendChild(fn);
    tbody.appendChild(row);
}
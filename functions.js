/**
 * 
 * @param {'td' | 'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parent 
 * @returns {HTMLTableCellElement}
 */
function createTableCell(tagName, innerHTML, parent){
    console.log(parent)
    const cell = document.createElement(tagName);
    cell.innerHTML = innerHTML;
    parent.appendChild(cell);
    return cell;
}

/**
 * 
 * @param {string} tag 
 * @param {string} id 
 * @param {HTMLElement} parent
 * @returns {HTMLElement}
 */
function createHTMLElement(tag, id, parent){
    const elem = document.createElement(tag);
    elem.id = id;
    parent.appendChild(elem);
}

/**
 * 
 * @param {string} tag 
 * @param {string} id 
 * @param {string} parentid 
 * @returns {HTMLElement | undefined}
 */
function createHTMLElementWithParentId(tag, id, parentid){
    const parent = document.getElementById(parentid);
    if (parent != undefined){
        createHTMLElement(tag, id, parent);
    }  
}

/**
 * 
 * @param {string} persontr 
 */
function renderTableHeader(persontr){
    const parent = document.getElementById(persontr);
    createTableCell('th', 'Vezetéknév', parent)
    const keresztnev = createTableCell('th', 'Keresztnév', parent);
    keresztnev.colSpan;
    createTableCell('th', 'Házas', parent);
    createTableCell('th', 'Állat', parent);
}

/**
 * 
 * @param {Array} personarray 
 */
function renderTable(personarray) {
    const tbody = document.getElementById('persontbody')
    for (const person of personarray) {
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
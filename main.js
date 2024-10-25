
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

createHTMLElement('table', 'persontable', document.body);
createHTMLElementWithParentId('thead', 'personthead', 'persontable')
createHTMLElementWithParentId('tr', 'persontr', 'personthead')
renderTableHeader('persontr')
createHTMLElementWithParentId('tbody', 'persontbody', 'persontable')


const form = document.getElementById('form');
form.addEventListener('submit', function(e){
    const tbody = document.getElementById('persontbody')
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

    renderTable(array);
    
    console.log(array);
    form.reset();
});

renderTable(array);

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


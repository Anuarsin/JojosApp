const StandContainer = document.querySelector('.stand-container') 
const Spinner = document.querySelector('.spinner-container')
const copyButton = document.querySelector('.copy-button')

Spinner.style.display = "none"

const loading = (FS) =>{
    FS.style.display = "flex"
    StandContainer.appendChild(FS)
}

const fetchStd = (part) => {

    cloneSpinner = Spinner.cloneNode(true)
    let stands = []
    loading(cloneSpinner)
    fetch(`https://apijojos.onrender.com/part/${part}`)
    .then((res) => res.json())
    .then((data) => {
        stands = data.slice()
        clearStands()
        for(let indice in stands){
            createStand(indice, stands)
        }
    })
}

const RatingPage = () =>{
    const a = 1 
}
let copied = ''


const setArticle = () =>{

    const txtcontainer = document.createElement('div')
    txtcontainer.classList.add('txt-container')

    const title = document.createElement('h2')
    title.textContent = 'Api JoJo stands'

    const text = document.createElement('p')
    text.textContent = 'The stands API has all the references as well as its first appearance.'

    const title2 = document.createElement('h3')
    title2.textContent = 'How is it used?'

    const text2 = document.createElement('p')
    text2.textContent = 'To use the API, the first step is to fetch the API link.'
    
    const link = document.createElement('div')
    link.classList.add('link-container')
    const plink = document.createElement('p')
    plink.textContent = 'https://apijojos.onrender.com/'
    
    const copy = ()=>{
        navigator.clipboard.writeText(plink.textContent)
        console.log('Texto copiado con exito')
    }
    const copyButton = document.createElement('button')
    copyButton.classList.add('copy-button')
    copyButton.onclick = copy
    
    link.appendChild(plink)
    link.appendChild(copyButton)

    
    const text3 = document.createElement('p')
    text3.textContent = 'This fetch will return all stands from JoJos Bizarre Adventure (all parts).'

    txtcontainer.appendChild(title)
    txtcontainer.appendChild(text)
    txtcontainer.appendChild(title2)
    txtcontainer.appendChild(text2)
    txtcontainer.appendChild(link)
    txtcontainer.appendChild(text3)
    StandContainer.appendChild(txtcontainer)
}

// setArticle()
fetchStd(0)



function createStand(inx, stands) {
    
    const flipcard = document.createElement('div')
    flipcard.classList.add('flip-card')

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')

    flipcard.appendChild(cardContainer)

    const card = document.createElement('div')
    card.classList.add('stand-block')

    const spriteContainer = document.createElement('div')
    spriteContainer.classList.add('img-container')

    const sprite = document.createElement('img')
    sprite.src = stands[inx].address

    spriteContainer.appendChild(sprite)

    const name = document.createElement('p')
    name.classList.add('name')
    name.textContent = stands[inx].name

    card.appendChild(spriteContainer)
    card.appendChild(name)

    const cardBack = document.createElement('div')
    cardBack.classList.add('stand-block-back')

    const t1 = document.createElement('h3')
    t1.textContent = 'Usuario'
    const User = document.createElement('p')
    User.textContent = stands[inx].user

    const t2 = document.createElement('h3')
    t2.textContent = 'Primera Aparición'
    const firstapparition = document.createElement('p')
    firstapparition.textContent = stands[inx].part

    const t3 = document.createElement('h3')
    t3.textContent = 'Referencia'

    const reference = document.createElement('ul')

    for (let i = 0; i < stands[inx].reference.length; i++) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = stands[inx].reference[i]
        a.href = stands[inx].link[i]
        a.target = "_blank"
        li.appendChild(a)
        reference.appendChild(li)
    }

    cardBack.appendChild(t1);
    cardBack.appendChild(User);
    cardBack.appendChild(t2);
    cardBack.appendChild(firstapparition);
    cardBack.appendChild(t3);
    cardBack.appendChild(reference);

    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    StandContainer.appendChild(flipcard);
}

function clearStands() {
    while (StandContainer.firstChild) {
        StandContainer.removeChild(StandContainer.firstChild);
    }
}

let allS = []

const isRepeat = (value) => {
    for (let indice in allS) {
        if (allS[indice].name === value) {
            return true
        }
    }
    return false
}

const fillout = (partJojo) => {
    for (let indice in partJojo) {
        const value = partJojo[indice].name
        if (!isRepeat(value)) {
            allS.push(partJojo[indice])
        }

    }

}

function allStands() {
    fillout(standspart1)
    fillout(standspart2)
    fillout(standspart3)
    fillout(standspart4)
    fillout(standspart5)
    fillout(standspart6)
}



const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');
const a4 = document.querySelector('#a4');
const a5 = document.querySelector('#a5');
const a6 = document.querySelector('#a6');
const all = document.querySelector('#all');

a1.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(1)
});

a2.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(2)
});

a3.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(3)
});

a4.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(4)
});

a5.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(5)
});

a6.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(6)
});

all.addEventListener('click', () => {
    event.preventDefault()
    clearStands()
    fetchStd(0)
});





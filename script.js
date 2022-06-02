const image = document.getElementById('image')
var add = document.getElementById('add')
var remove = document.getElementById('remove')
var moving = false;
const imageContainer = document.querySelector('.image')
const inputs = document.querySelectorAll('input')
const button = document.getElementById('check')
const level = document.getElementById('level')
const elementText = document.getElementById('element')
const progressContainer = document.querySelector('.progressContainer')
const progressBar = document.querySelector('.progressBar')
const wrong = document.getElementById('wrong')
const layers = document.getElementById('layers')

let order = 0

const elements = [
    {
        symbol: "H",
        name: "Vesinik",
        answer: [1, null, null, null, null, null, null]
        
    },
    {
        symbol: "He",
        name: "Heelium",
        answer: [2, null, null, null, null, null, null]

    },
    {
        symbol: "Li",
        name: "Liitium",
        answer: [2, 1, null, null, null, null, null]

    },
    {
        symbol: "Be",
        name: "Berüllium",
        answer: [2, 2, null, null, null, null, null]

    },
    {
        symbol: "B",
        name: "Boor",
        answer: [2, 3, null, null, null, null, null]

    },
    {
        symbol: "C",
        name: "Süsinik",
        answer: [2, 4, null, null, null, null, null]

    },
    {
        symbol: "N",
        name: "Lämmastik",
        answer: [2, 5, null, null, null, null, null]

    },
    {
        symbol: "O",
        name: "Hapnik",
        answer: [2, 6, null, null, null, null, null]

    },
    {
        symbol: "F",
        name: "Fluor",
        answer: [2, 7, null, null, null, null, null]

    },
    {
        symbol: "Ne",
        name: "Neoon",
        answer: [2, 8, null, null, null, null, null]

    },
    {
        symbol: "Na",
        name: "Naatrium",
        answer: [2, 8, 1, null, null, null, null]

    },
    {
        symbol: "Mg",
        name: "Magneesium",
        answer: [2, 8, 2, null, null, null, null]

    },
    {
        symbol: "Al",
        name: "Alumiinium",
        answer: [2, 8, 3, null, null, null, null]

    },
    {
        symbol: "Si",
        name: "Räni",
        answer: [2, 8, 4, null, null, null, null]

    },
    {
        symbol: "P",
        name: "Fosfor",
        answer: [2, 8, 5, null, null, null, null]

    },
    {
        symbol: "S",
        name: "Väävel",
        answer: [2, 8, 6, null, null, null, null]

    },
    {
        symbol: "Cl",
        name: "Kloor",
        answer: [2, 8, 7, null, null, null, null]

    },
    {
        symbol: "Ar",
        name: "Argoon",
        answer: [2, 8, 2, null, null, null, null]

    },
    {
        symbol: "Ca",
        name: "Kaltsium",
        answer: [2, 8, 8, 2, null, null, null]

    },
    {
        symbol: "Ti",
        name: "Titaan",
        answer: [2, 8, 10, 2, null, null, null]

    },
    {
        symbol: "Fe",
        name: "Raud",
        answer: [2, 8, 14, 2, null, null, null]

    },
    {
        symbol: "Cu",
        name: "Vask",
        answer: [2, 8, 18, 1, null, null, null]

    },
    {
        symbol: "As",
        name: "Arseen",
        answer: [2, 8, 15, 5, null, null, null]

    },
    {
        symbol: "Kr",
        name: "Krüptoon",
        answer: [2, 8, 18, 8, null, null, null]

    },
    {
        symbol: "Ag",
        name: "Hõbe",
        answer: [2, 8, 18, 18, 1, null, null]

    },
    {
        symbol: "Sn",
        name: "Tina",
        answer: [2, 8, 18, 18, 4, null, null]

    },
    {
        symbol: "I",
        name: "Jood",
        answer: [2, 8, 18, 18, 7, null, null]

    },
    {
        symbol: "Pt",
        name: "Plaatina",
        answer: [2, 8, 18, 32, 17, 1, null]

    },
    {
        symbol: "Au",
        name: "Kuld",
        answer: [2, 8, 18, 32, 18, 1, null]

    },
    {
        symbol: "Hg",
        name: "Elavhõbe",
        answer: [2, 8, 18, 32, 18, 2, null]

    }

]

const sum = elements[order].answer.reduce((partialSum, a) => partialSum + a, 0);
layers.innerText = `Elektronid: ${sum}`



// votab input value
// render x amount of electrons kihile
level.innerText = `Level ${order+1}/30`
elementText.innerText = `Element: ${elements[order].name}`
progressBar.setAttribute('style', `width: ${100/30 * order}%`)


function writeSymbol () {
    let width = image.offsetWidth;
    let height = image.offsetHeight;
    let x = width / 2 - 12.5
    let y = height / 2 - 12.5

    let symbol = elements[order].symbol

    const text = document.createElement('h1')
    text.innerHTML = symbol
    text.setAttribute('id', 'symbol')
    text.setAttribute('style', `position: absolute; top: ${y - 5}px; left: ${x}px; color: white`)
    imageContainer.append(text)
}
writeSymbol()

function clearAll() {
    for (let j = 0; j<7; j++) {
        const electrons = document.querySelectorAll(`#electron${j}`)
        electrons.forEach(electron => {
            electron.remove()
        })
        image.setAttribute('src', `1_kiht.png`)
    i = 1
}}

for (let j = 0; j<7; j++) {
    let input = inputs[j]
    input.addEventListener('change', function(e) {

        const electrons = document.querySelectorAll(`#electron${j}`)
        
        let offset

        if (i > 4) {
            offset = 28
        }
        else {
            offset = 30
        }

        electrons.forEach(electron => {
            electron.remove()
        })

        let rot = 360 / input.value
        let layerNumber = j

        for (let i = 0; i<input.value; i++) {
            let rot_temp = rot * i
            createElectron(j, rot_temp, layerNumber, offset)
        }
        
    })
    
}

function createElectron(j, rot, layerNumber, offset) {
    const electron = document.createElement('img')
    electron.setAttribute('src', 'elektron_suur.png')
    imageContainer.appendChild(electron)
    let width = image.offsetWidth;
    let height = image.offsetHeight;
    let x = width / 2 - 12.5
    let y = height / 2 - 12.5
    console.log(width, height)
    electron.setAttribute('id', `electron${j}`)
    electron.setAttribute('style', `position: absolute; top: ${y - (80 + offset * layerNumber)}px; left: ${x}px; width: 25px; transform-origin: 12.5px ${92.5 + layerNumber * offset}px; transform: rotate(${rot}deg)`)
}




let i = 1

inputs.forEach(input => {
    input.setAttribute('disabled', '')
})
inputs[0].removeAttribute('disabled', '')
add.addEventListener('click', function () {
    const inputValue = inputs[0].value
    console.log(inputValue)

    if (i <= 7) {
        if (i != 7) {
            inputs[i].removeAttribute('disabled', '')
            i++
        }
        image.setAttribute('src', `${i}_kiht.png`)

    }



})

remove.addEventListener('click', function () {
    
    if (i >= 1) {
        if (i != 1) {
            inputs[i-1].setAttribute('disabled', '')
            inputs[i-1].value = null
            i--
        }
        image.setAttribute('src', `${i}_kiht.png`)

    }  

    const electrons = document.querySelectorAll(`#electron${i}`)
    electrons.forEach(electron => {
        electron.remove()
    })

})

let answers = []
button.addEventListener('click', () => {
    answers = []
    inputs.forEach(input => {
        if(input.disabled) {
            answers.push(null)
        } else {
            answers.push(Number(input.value))
        }

        
    })
    console.log(answers)
    console.log(elements[1].answer)
    
    let correct = true

    for (let i = 0; i < 7; i++) {
        if (answers[i] != elements[order].answer[i]) {
            correct = false
        }
    }

    if (correct) {
        answers = []
        console.log('correct')
        inputs.forEach(input => {
            input.value = null
            input.setAttribute('disabled', '')
            })
        inputs[0].removeAttribute('disabled', '')
        clearAll()
        order++
        const texts = document.querySelectorAll('h1')
        texts.forEach(text => {
            text.remove()
        })
        writeSymbol()
        const sum = elements[order].answer.reduce((partialSum, a) => partialSum + a, 0);
        layers.innerText = `Elektronid: ${sum}`
        wrong.innerText = ''
        level.innerText = `Level ${order+1}/30`
        elementText.innerText = `Element: ${elements[order].name}`
        progressBar.setAttribute('style', `width: ${100/30 * order}%`)
        



    } else {
        console.log('incorrect')
        wrong.innerHTML = "Vale"
        wrong.setAttribute('style', 'color: red; text-align: center; margin-top: 20px')
    }
})








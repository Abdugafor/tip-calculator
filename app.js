const percents = document.querySelectorAll('.tip-button'),
      peopleTip = document.querySelector('#peopleInput'),
      customPercent = document.querySelector('#customInput'),
      resetBtn = document.querySelector('.reset-button'),
      tip = document.querySelectorAll('.number'),
      billInput = document.querySelector('#billInput'),
      warning = document.querySelectorAll('.error')

let content = 0
const error = /[abcdefghijklmnopqrstuvwxyz?/!@#$$%^&*()_+=|]/

percents.forEach((item) => { item.addEventListener('click', () => calcTip(item))})

peopleTip.addEventListener('input', calcPerson)

resetBtn.addEventListener('click', resetAll)

customPercent.addEventListener('change', () => { 
    tip[2].innerHTML = customCalc()
})

function customCalc() {
    const res = `${billInput.value / customPercent.value}`

    if (res == NaN) {
        return 0
    }

    return res
}

function calcTip(tips) {

    const bill = billInput.value

    percents.forEach(percents => percents.classList.remove("active"))

    if (bill == '' || bill.match(error)) { 
        warning[0].style.display = 'block'
    }else {
        tips.classList.add("active")
        tip[2].innerHTML = `
            ${(parseFloat(bill) * parseFloat(tips.value) / 100).toFixed(2)}
        `
        content = parseFloat(tip[2].innerHTML) 
        warning[0].style.display = 'none'
    }
}  

function calcPerson() {
    const people = peopleTip.value
    
    if (people.match(error)) {
        warning[1].style.display = 'block'
    } else {
        tip[3].innerHTML = `
        $${parseFloat(content / people).toFixed(2)}
        `
        warning[1].style.display = 'none'
    }
}

function resetAll() {
    tip.forEach(number => {
        number.value = ''
    })

    percents.forEach(item => {
        item.classList.remove('active')
    })

    tip[2].innerHTML = '$0'
    tip[3].innerHTML = '$0'
}


let form = document.forms.addForm
let cont = document.querySelector('.cont')

import {fakeArr} from './data.js'
let build = (arr) => {
    cont.innerHTML = ""

    // Cycle by arr
    arr.forEach((item, index) => {

        cont.innerHTML += `
        <div class="item">
        <div class="img">
            <img src='${item.img}' src='./images/teslajpg.jpg'  class="img" alt="tesla">
        </div>
        <p class="number">
            ${index + 1}. ${item.name} <span class='price'><b>${item.price} $</b></span>
        </p>
        <button class="deleteBtn">Delete</button>
    </div>
        `
    })
   
    //Adding class active for items
    let counter = 0
    let items = document.querySelectorAll('.item')

    let itemAddClass = setInterval(() => {
        items[counter].classList.add('active')

        if (counter == items.length - 1) clearInterval(itemAddClass)
        else counter++
    }, 40)


    // Delete items
    let deleteBtns = document.querySelectorAll('.deleteBtn')
    deleteBtns.forEach((item, index) => {
        item.onclick = () => {
            fakeArr.splice(index, 1)
            build(fakeArr)
        }
    })


    // Add items
    form.onsubmit = (event) => {
        event.preventDefault()

        if (form.querySelector('input').value === '') {
            alert('cant send an empty value!')
        } else {
            let userData = {}

            let fm = new FormData(form)

            fm.forEach((value, key) => {
                userData[key] = value
            })
            fakeArr.push(userData)
            console.log(fakeArr);

            form.querySelector('input').value = ''

            console.log(form.img.value);

            build(fakeArr)
        }
    }
}

build(fakeArr)
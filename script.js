const title = document.querySelector('#title')
const box = document.createElement('div')
const body = document.querySelector('body')

body.append(box)

const text1 = document.createElement('h1')

text1.textContent = 'hello'

box.append(text1)



// title.textContent = 'hello'

box.classList.add('wrapper')


box.setAttribute('id', 'bebra')


// box.classList.remove('wrapper')


box.classList.toggle('wrapper')





box.removeAttribute('class')

const card = document.querySelector('.card')
const btn = document.querySelector('.card button')
const img = document.querySelector('.card img')
const name = document.querySelector('.card h1')
const changeBtn = document.querySelector('#change')
const originalSrc = img.src
const originalName = name.innerText
btn.onclick = () => {
    card.classList.toggle('red')
   

    if(name.innerText == originalName) {
        name.innerText = 'black mujic'
    } else {
        name.innerText = originalName
    }

    if(img.src == originalSrc) {

        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrog2FyV6arJVJNaJft-E8dM4ks8LMZ0Vjvw&s'
    } else {
        img.src = originalSrc
    }
 



}


// changeBtn.onclick = () => {
//     img.src = 'https://i1.sndcdn.com/avatars-9znuW5WExydg5Uz9-jk8eWg-t240x240.jpg'
// }



const deleteBtn = document.querySelector('#del')

deleteBtn.onclick = () => {
    card.classList.toggle('none')
}
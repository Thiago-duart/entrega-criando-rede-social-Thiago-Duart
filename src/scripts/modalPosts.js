
import { posts} from './database.js';


export function modalPosts (){
    
    const btnModal = document.querySelectorAll('.button__grey1')
    
    btnModal.forEach(button => {
        
        button.addEventListener('click', e => {
            const body = document.querySelector('body')
            const indiceBtn = Array.prototype.indexOf.call(btnModal, e.target)
            
            const modal = document.createElement('dialog')
            const peopleImg = document.createElement('img')
            const name = document.createElement('p')
            const description = document.createElement('p')
            const titleText = document.createElement('h2')
            const text = document.createElement('p')
            const peopleInfo = document.createElement('div')
            const nameDivision = document.createElement('div')
            const closeModal = document.createElement('div')
            
            modal.setAttribute('class','dialog__container')
            peopleImg.setAttribute('class', 'people__img')
            name.setAttribute('class','people__name')
            description.setAttribute('class','people__description')
            titleText.setAttribute('class', 'people__title')
            text.setAttribute('class','people__text')
            peopleInfo.setAttribute('class', 'suggestion__people-modifier')
            closeModal.setAttribute('id', 'closeModal')
            
            peopleImg.setAttribute('src', posts[indiceBtn].img)
            
            name.innerText = posts[indiceBtn].user
            description.innerText = posts[indiceBtn].stack
            titleText.innerText = posts[indiceBtn].title
            text.innerText = posts[indiceBtn].text
            closeModal.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="close-modal" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            /svg>`

            nameDivision.append(name,description)
            peopleInfo.append(peopleImg, nameDivision)
            
            modal.append(closeModal,peopleInfo,titleText,text)
            body.append(modal)
            modal.showModal()
            
            closeModal.addEventListener('click', e => {
                modal.close()
            })
            
        })
    })
}
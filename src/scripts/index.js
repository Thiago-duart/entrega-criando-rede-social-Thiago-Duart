import { users } from './database.js';
import { suggestUsers } from './database.js';
import { posts} from './database.js';



function addPost (){
    
    const postContainer = document.querySelector('.posts__container')
    
    for (let i = 0; i < posts.length; i++){
        
        const peopleContainer = document.createElement('div')
        const peopleInfo = document.createElement('div')
        const imgUser = document.createElement('img')
        const userName = document.createElement('p')
        const descriptionUser = document.createElement('p')
        
        peopleContainer.setAttribute('class', 'people__info')
        imgUser.setAttribute('class', 'people__img')
        imgUser.setAttribute('src', posts[i].img)
        userName.setAttribute('class', 'people__name')
        descriptionUser.setAttribute('class', 'people__description')
        
        userName.innerText = posts[i].user
        descriptionUser.innerText = posts[i].stack
        peopleInfo.append(userName,descriptionUser)
        peopleContainer.append(imgUser,peopleInfo)
        
        
        const listPosts = document.createElement('li')
        const textContainer = document.createElement('div')
        const titlePost = document.createElement('h2')
        const textPost = document.createElement('p')
        
        listPosts.setAttribute('class','people__post')
        titlePost.setAttribute('class','people__title')
        textPost.setAttribute('class','people__text')
        
        
        const peopleHero = document.createElement('div')
        const btnShowModal = document.createElement('button')
        const likePost = document.createElement('div')
        const numberLikes = document.createElement('p')
        
        peopleHero.setAttribute('class', 'people__hero')
        btnShowModal.setAttribute('class', 'button__grey1')
        likePost.setAttribute('class','people__like')
        
        likePost.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" fill="currentColor"
        class="people__like-config" viewBox="0 0 16 16">
        <path
        d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
        </svg>`
        numberLikes.innerText = posts[i].likes
        btnShowModal.innerHTML = 'Abrir post'
        titlePost.innerText = posts[i].title
        textPost.innerHTML = posts[i].text.substring(0, 250) + '...' 
        
        likePost.append(numberLikes)
        textContainer.append(titlePost, textPost)
        peopleHero.append(btnShowModal, likePost)
        listPosts.append(peopleContainer,textContainer, peopleHero)
        postContainer.append(listPosts)
    } 
  
}

function likePost(){
    const like = document.querySelectorAll('.people__like-config')
    like.forEach(like => {
        like.addEventListener('click', e => {
            like.classList.toggle('people__like-on')
        })
    })
}

function suggestionUser() {
    
    const suggestContainer = document.querySelector('.suggestion__content')
    
    for (let i = 0; i < suggestUsers.length; i++) {
        
        const peopleList = document.createElement('li')
        const peopleInfo = document.createElement('div')
        const nameDivision = document.createElement('div')
        const name = document.createElement('p')
        const description = document.createElement('p')
        const peopleImg = document.createElement('img')
        
        peopleList.setAttribute('class','suggestion__people')
        peopleInfo.setAttribute('class', 'suggestion__people-modifier')
        name.setAttribute('class','people__name')
        description.setAttribute('class','people__description')
        peopleImg.setAttribute('class', 'people__img')
        nameDivision.setAttribute('class','nameDescription')
        peopleImg.setAttribute('src', suggestUsers[i].img)
        
        name.innerText = suggestUsers[i].user
        description.innerText = suggestUsers[i].stack
        
        
        nameDivision.append(name,description)
        peopleInfo.append(peopleImg,nameDivision)
        peopleList.append(peopleInfo)
        suggestContainer.append(peopleList)
        
    }   
}

function followPeople() {
    
    const peopleList = document.querySelectorAll('.suggestion__people')
    
    for (let i = 0; i <= peopleList.length; i++) {
        const people = peopleList[i]
        
        const button = document.createElement('button')
        
        button.innerText = 'Seguir'
        button.setAttribute('class', 'button-white__fixed')
        
        if (people) {
            people.append(button)
        }
    }
    
    const btnFollow = document.querySelectorAll('.button-white__fixed')
    
    btnFollow.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault()
            
            if (button.classList.toggle('button-white__fixed-follow')) {
                console.log('true')
                button.innerHTML = 'Seguindo'
            } else {
                button.innerHTML = 'Seguir'
            }
        })
    })
}

function modalPosts (){
    
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

addPost ()
suggestionUser()
followPeople()
modalPosts()
likePost()


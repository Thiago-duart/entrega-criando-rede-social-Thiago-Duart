
import { posts} from './database.js';


export function addPost (){
    
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
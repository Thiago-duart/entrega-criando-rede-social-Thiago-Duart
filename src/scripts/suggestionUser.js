
import { suggestUsers } from './database.js';

export function suggestionUser() {
    
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
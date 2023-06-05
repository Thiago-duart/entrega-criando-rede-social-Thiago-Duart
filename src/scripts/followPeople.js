
export function followPeople() {
    
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
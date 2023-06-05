
export function likePost(){
    const like = document.querySelectorAll('.people__like-config')
    like.forEach(like => {
        like.addEventListener('click', e => {
            like.classList.toggle('people__like-on')
        })
    })
}

document.addEventListener('DOMContentLoaded',function(){
  let modal =   document.querySelector('.modal')
  let modalBtn =   document.querySelector('.modal-button_reload')

    const cookiesCheck = () =>{
        if(navigator.cookieEnabled === false ){
            modal.classList.add('active')
            document.body.classList.add('active--hiden')
        }
    }

    const handler = (event)=> {
        event.preventDefault()
        document.location.reload()
    }

    modalBtn.addEventListener('click',handler)
    

   



    cookiesCheck()
})


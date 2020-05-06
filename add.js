
(function() {
    "use strict"
    let modal =   document.querySelector('.modal')
    let modalBtn =   document.querySelector('.modal-button_reload')
  
      const cookiesCheck = () =>{
          if(navigator.cookieEnabled === false){
              modal.classList.add('active')
              document.body.classList.add('active--hiden')
          }
      }
      
      window.addEventListener('storage',cookiesCheck)
  
  
      const handler = (event)=> {
          event.preventDefault()
          document.location.reload()
      }
  
      modalBtn.addEventListener('click',handler)
  
  window.addEventListener('onpageshow',function() {
      console.log(1)
  })
     
  
  
  
    cookiesCheck() 

})()
    
      




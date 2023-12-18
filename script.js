const fname = document.getElementById('fname');
const lname = document.getElementById('gmail');
const msg = document.getElementById('msg');
const submit = document.getElementById('submit');


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    // let ebody = `
    // <h1>First Name: </h1>${fname.value}
    // <br>
    // <h1>Last Name: </h1>${lname.value}
    // `;

    Email.send({
        SecureToken : "b205c030-8db6-41d6-97ee-5499036587d7", //add your token here
        To : document.getElementById("gmail").value, 
        From : "javacharcoal.bamni@gmail.com",
        Subject : "javacharcoal website visitors",
        Body : "Name : " + document.getElementById("fname").value
              +"<br/> Email : " + document.getElementById("gmail").value //"im Interested with your product"
              +"<br/> Message : " + document.getElementById("msg").value
    }).then(
      message => alert("Success Sent Messages")
    );
});

const fullscreenImage = document.getElementById('fullscreen-image');


fullscreenImage.addEventListener('click', () => {
  fullscreenImage.classList.toggle('fullscreen');
});

const fullScreenImage = document.getElementById('fullscreen-image2');


fullScreenImage.addEventListener('click', () => {
  fullScreenImage.classList.toggle('fullscreen');
});


popupWhatsApp = () => {
  
  let btnClosePopup = document.querySelector('.closePopup');
  let btnOpenPopup = document.querySelector('.whatsapp-button');
  let popup = document.querySelector('.popup-whatsapp');
  let sendBtn = document.getElementById('send-btn');

  btnClosePopup.addEventListener("click",  () => {
    popup.classList.toggle('is-active-whatsapp-popup')
  })
  
  btnOpenPopup.addEventListener("click",  () => {
    popup.classList.toggle('is-active-whatsapp-popup')
     popup.style.animation = "fadeIn .6s 0.0s both";
  })
  
  sendBtn.addEventListener("click", () => {
  let msg = document.getElementById('whats-in').value;
  let relmsg = msg.replace(/ /g,"%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
   window.open('https://wa.me/6281284448394?text='+relmsg, '_blank'); 
  
  });

  setTimeout(() => {
    popup.classList.toggle('is-active-whatsapp-popup');
  }, 3000);
}

popupWhatsApp();
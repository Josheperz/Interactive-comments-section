/* amyrobson */
const replyIconAmyrobso = document.querySelector('#reply-icon-amyrobso');
const pathAmy = document.querySelector('#path-amy');
const amyrobsoReply = document.querySelector('#amyrobso-reply');
/* maxblagun */
const replyIconmaxblagun = document.querySelector('#reply-icon-maxblagun');
const pathMax = document.querySelector('#path-max');
const maxblagunReply = document.querySelector('#maxblagun-reply');
/* ramsesmiron */
const replyIconRamsesmiron = document.querySelector('#reply-icon-ramsesmiron');
const pathRam = document.querySelector('#path-ram');
const ramsesmironReply = document.querySelector('#ramsesmiron-reply');

/* juliusomo */
const replyYou = document.querySelector('#reply-you-juliusomo');
const editYou = document.querySelector('#you-reply-icon-edit');
const pathEdit = document.querySelector('#path-edit');

const delYou = document.querySelector('#you-reply-icon-del');
const pathDel = document.querySelector('#path-del');
/* edit-you-reply */
const editYouReplyJuliusomo = document.querySelector('#edit-you-reply-juliusomo');
const editYouReplyIconDel = document.querySelector('#edit-you-reply-icon-del');
const pathEditDel = document.querySelector('#path-edit-del');

    /* Edit-you-msg */  

const juliusomoMsg = document.querySelector('#juliusomo-msg');
const updateYouJuliusomo = document.querySelector('#update-you-reply');

      /* delete comment */
const deltCommentBackground = document.querySelector('.delete-comment-background');
const cancelBtn = document.querySelector('.btn-cancel');
const deleteBtn = document.querySelector('.btn-delete');     


/* amyrobson */
replyIconAmyrobso.addEventListener('mouseover', addDarkpathAmy);
replyIconAmyrobso.addEventListener('mouseout', removeDarkpathAmy);
replyIconAmyrobso.addEventListener('click', showReplyAmy);

function addDarkpathAmy(){
pathAmy.classList.add('path-blue');  
};
function removeDarkpathAmy(){
pathAmy.classList.remove('path-blue'); 
}
function showReplyAmy() {
amyrobsoReply.classList.toggle('not-visible');
};

/* maxblagun */
replyIconmaxblagun.addEventListener('mouseover', addDarkpathMax);
replyIconmaxblagun.addEventListener('mouseout', removeDarkpathMax);
replyIconmaxblagun.addEventListener('click', showReplyMax);

function addDarkpathMax(){
  pathMax.classList.add('path-blue');  
};
function removeDarkpathMax(){
  pathMax.classList.remove('path-blue'); 
}
function showReplyMax() {
  maxblagunReply.classList.toggle('not-visible');
};

/* ramsesmiron */
replyIconRamsesmiron.addEventListener('mouseover', addDarkpathRam);
replyIconRamsesmiron.addEventListener('mouseout', removeDarkpathRam);
replyIconRamsesmiron.addEventListener('click', showReplyRam);

function addDarkpathRam(){
  pathRam.classList.add('path-blue');  
};
function removeDarkpathRam(){
  pathRam.classList.remove('path-blue'); 
}
function showReplyRam() {
  editYouReplyJuliusomo.classList.add('not-visible');
  replyYou.classList.remove('not-visible');
  ramsesmironReply.classList.toggle('not-visible');
 };

/* juliusomo */
  // iten-edit
editYou.addEventListener('mouseover', addDarkpathEdit);
editYou.addEventListener('mouseout', removeDarkpathEdit);
editYou.addEventListener('click', openEditReplyYou);

function addDarkpathEdit(){
  pathEdit.classList.add('path-blue');  
};
function removeDarkpathEdit(){
  pathEdit.classList.remove('path-blue'); 
}
function openEditReplyYou() {
  editYouReplyJuliusomo.classList.toggle('not-visible');
  replyYou.classList.add('not-visible');
  ramsesmironReply.classList.add('not-visible');

};

  // iten-delete
delYou.addEventListener('mouseover', addDarkpathDel);
delYou.addEventListener('mouseout', removeDarkpathDel);
delYou.addEventListener('click', deleteReplyYou);

function addDarkpathDel(){
  pathDel.classList.add('path-red');  
};
function removeDarkpathDel(){
  pathDel.classList.remove('path-red'); 
}
function deleteReplyYou() {
  deltCommentBackground.classList.remove('not-visible');
 
};
/* edit-you-reply*/
    /* Edit-you-delete */
editYouReplyIconDel.addEventListener('mouseover', addDarkpathEditYouDel);
editYouReplyIconDel.addEventListener('mouseout', removeDarkpathEditYouDel);
editYouReplyIconDel.addEventListener('click', deleteReplyYouEdit);

function addDarkpathEditYouDel(){
  pathEditDel.classList.add('path-red');  
};
function removeDarkpathEditYouDel(){
  pathEditDel.classList.remove('path-red'); 
}
function deleteReplyYouEdit() {
  editYouReplyJuliusomo.classList.add('not-visible'); 
  replyYou.classList.toggle('not-visible');
 
  
};

      /* Edit-you-msg */
updateYouJuliusomo.addEventListener('click',reescribirYouMsg);

function reescribirYouMsg() {
  editYouReplyJuliusomo.classList.toggle('not-visible');
  replyYou.classList.toggle('not-visible');
  
  let textoIngresadoJuliusomo = document.getElementById('text-edit-you-reply').value;
 
  juliusomoMsg.innerText = textoIngresadoJuliusomo;

 }

     /* delete comment */
cancelBtn.addEventListener('click',noDelete);
deleteBtn.addEventListener('click',yesDelete);

function noDelete(){
  deltCommentBackground.classList.add('not-visible');
}
function yesDelete(){
  deltCommentBackground.classList.add('not-visible');
  replyYou.classList.add('not-visible');
}



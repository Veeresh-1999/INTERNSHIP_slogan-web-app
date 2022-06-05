
function dilogbox(){
    
let dialog = document.getElementById("confirmation-dialog");


// Show the dialog when clicking "Delete everything"
document.getElementById("delete").addEventListener("click", function() {
    dialog.showModal();
});

document.getElementById("cancel-delete").addEventListener("click", function() {
    dialog.close();
   
});
document.getElementById("confirm-delete").addEventListener("click", function() {
    dialog.close();

});

}
const initapp = async =>{
    listenForLikes()
}



const listenForLikes = () => {
    const likes = document.querySelectorAll(".like");
    likes.forEach(like => {
        like.addEventListener("click",(event) => {
            event.target.classList.toggle("like-no");
            event.target.classList.toggle("like-yes");
            if(event.target.classList.contains("like-yes")){
                console.log("saving");
                getFaveData(event.target);
            } else{
                console.log("removing");
                getFaveData(event.target);
            }
        })
    })
}
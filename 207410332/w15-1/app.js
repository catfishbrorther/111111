//init Github
const github = new Github

//console.log(github.getUser('catfishbrother'))

const searchUser = document.getElementById('searchUser')
searchUser.addEventListener('keyup',(e) =>{
    const userText = e.target.value
    //console.log(userText)
    if(userText !==''){
          github.getUser(userText)
          .then(data=>{
              if(data.profile.message === 'Not Found'){
                 //ui.showAlert('User not found','alert-danger')
              }else{
                  ui.showProfile(data.profile)
                  //ui.showRepos(data.repos)
              }
          })
    }else{
        //Clear profile
        ui.clearProfile();
    }
})
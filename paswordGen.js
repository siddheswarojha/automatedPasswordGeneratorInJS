class PasswordGenerator{
    PasswordGenerator(){
        var userName;
        var emailId;
    }

    generatePassword(){

        var random = Math.random()*100;
        
        var newPassword = "@"+this.userName+"_"+random+this.emailId;

        return newPassword;

    }


}

var userName = prompt("enter user name: ");
var emailId = prompt("enter email id: ");
getNewPassword(userName,emailId);

function getNewPassword(userName,emailId){
    var passwordGenerator = new PasswordGenerator();
    passwordGenerator.userName=userName;
    passwordGenerator.emailId=emailId;

    var passsword= passwordGenerator.generatePassword();
    console.log(passsword);

}
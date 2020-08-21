function inputValidator(){
    let passwordElement = document.getElementById('inputPassword');
    let password = passwordElement.value;
    if(password.length < 6){
        // minimum 6 letter password
        alert("Password should contain minimum 6 letters");
        return;
    }

    let digits = /[0-9]/;
    let lowerAlpha = /[a-z]/;
    let upperAlpha = /[A-Z]/;
    let specialChar = /[^0-9a-zA-Z]/;

    let arr = [];
    if(password.search(digits) === -1){
        arr.push(" 1 digit");
    }
    if(password.search(lowerAlpha) === -1){
        arr.push(" 1 lowercase");
    }
    if(password.search(upperAlpha) === -1){
        arr.push(" 1 uppercase");
    }
    if(password.search(specialChar) === -1){
        arr.push(" 1 special Character");
    }

    let myAlert = "Password should contain atleast";
    if(arr.length === 0){
        return ;
    }
    myAlert += arr[0];
    for(let i=1; i<arr.length; i++){
        if(i===(arr.length-1)){
            myAlert += " and" + arr[i];
        }else{
            myAlert += "," + arr[i];
        }
    }
    alert(myAlert);
}




function newElement() {

    //alert('Hello');
    var div = document.createElement("div");
    div.className = 'card';
    div.style = 'width: 60rem;';
   // alert('Here0');
    var image = document.createElement("img");
    image.className = 'card-img-top';

    var img = document.getElementById('pictureAddress').value;   
    var i = img.toString();    
    var address = "./images/".concat(i.substr(i.lastIndexOf("\\")+1));
    alert(address);
    image.src = address;

    

    var div2 = document.createElement("div");
    div2.className = 'card-body';

    var h5 = document.createElement("h5");
    h5.className = 'card-title';
    var articleName = document.getElementById('articleName').value;
    var hText = document.createTextNode(articleName);
    //var hText = document.createTextNode('La liga');
    h5.appendChild(hText);
    
    var p = document.createElement("p");
    p.className = 'card-text';
    var articleInfo = document.getElementById('articleInfo').value;
    var pText = document.createTextNode(articleInfo);
    //var pText = document.createTextNode('The Footbonaut is a football training machine which fires balls at different speeds and trajectories at players, who must control and pass the ball into a highlighted square.');
    p.appendChild(pText);

    div.appendChild(image);
    div.appendChild(div2);
    div.appendChild(h5);
    div.appendChild(p);
    
    document.getElementById("myUL").appendChild(div);

   
}


function printError(element, msg){
  document.getElementById(element).innerHTML = msg;

}

function addContact(){
    var inputName = document.getElementById("name").value;
    var inputEmail = document.getElementById("email").value;
    var inputPhone = document.getElementById("phoneNumber").value;
    var inputMessage = document.getElementById("message").value;

    var nameErr = emailErr = phoneErr = messageErr = true;
    
    if (inputName == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(inputName) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    if (inputEmail == "") {
      printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(inputEmail) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }


    if (inputPhone == "") {
          printError("phoneErr", "Please enter your mobile");
    } 
    else {
        var regex = /^[0-9]*$/;
        if (regex.test(inputPhone) === false) {
            printError("phoneErr", "Please enter a valid mobile");
        } else {
            printError("phoneErr", "");
            phoneErr = false;
        }
    }

    if (inputMessage == "") {
      printError("messageErr", "Please enter a message");
    } else {
        printError("messageErr", "");
        messageErr = false;
    }

    if(nameErr || emailErr ||phoneErr || messageErr == true){
      return false;
    }else {
        alert("You have submitted the form..");
    }

}
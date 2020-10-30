
function newElement() {
    var div = document.createElement("div");
    div.className = 'card mb-3';
    div.style = 'max-width: 50%;';
    var div1 = document.createElement("div");
    div1.className = 'row no-gutters';
    var div2 = document.createElement("div");
    div2.className = 'col-md-4';
    var image = document.createElement("img");
    image.className = 'card-img';
    var div3 = document.createElement("div");
    div3.className = 'col-md-8';
    var div4 = document.createElement("div");
    div4.className = 'center-player-name';
    var h2 = document.createElement("h2");
    h2.className = 'card-title';
    var div5 = document.createElement("div");
    div5.className = 'col-md-12';
    var div6 = document.createElement("div");
    div6.className = 'col-md-12';
    var p = document.createElement("p");
    p.className = 'card-text';

    var img = document.getElementById('pictureAddress').value;   
    var i = img.toString(); 
   
    if (i === '') {
        alert("You must select a picture");
    } else {
        var address = "./images/".concat(i.substr(i.lastIndexOf("\\")+1));
        image.src = address;

        var playerName = document.getElementById('articleName').value;
        if (playerName === '') {
            alert("You must enter a player name");
        }
        else{
            var hText = document.createTextNode(playerName);
            h2.appendChild(hText);

            var playerInfo = document.getElementById('articleInfo').value;
            if (playerInfo === '') {
                alert("You must enter information for the player");
            }
            else{
                var pText = document.createTextNode(playerInfo);
                p.appendChild(pText); 
    
                div.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(image);
                div1.appendChild(div3);
                div3.appendChild(div4);
                div4.appendChild(h2);
                div1.appendChild(div5);
                div5.appendChild(div6);
                div6.appendChild(p);

                document.getElementById('pictureAddress').value = "";
                document.getElementById('articleName').value = "";
                document.getElementById('articleInfo').value = "";
                
                document.getElementById("myUL").appendChild(div);

            }
        }
    }   
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

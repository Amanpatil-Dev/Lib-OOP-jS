console.log("es6 working")

class Book {
    constructor(name, author, type) {
        this.name = name
        this.author = author
        this.type = type
    }
}

class Display {
    add(book) {
        console.log("adding")
        let tablebody = document.getElementById("tablebody");
        let UiString = ` <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
      </tr>`
        tablebody.innerHTML += UiString;


    }
    clear() {
        let libform = document.getElementById("libform")
        libform.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true
        }

    }
    show(type, dispmessage) {
        let message = document.getElementById('msg')
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show role="alert">
                        <strong>${dispmessage}</strong> You should check in on some of those fields below.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
      </div>`
        setTimeout(() => {
            message.innerHTML = ""
    
        }, 2000)
    
    
    }
}

// add submit event listner to libform
let libform = document.getElementById("libform")
libform.addEventListener('submit', libformsubmit);

function libformsubmit(event) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    // let type=document.getElementById('Fiction').value;


    let Fiction = document.getElementById('Fiction')
    let programming = document.getElementById('Computer')
    let cooking = document.getElementById('Cooking')
    let type

    if (Fiction.checked) {
        type = Fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }

    let book = new Book(name, author, type)

    console.log(book)

    let display = new Display()

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', "you book has been successfully added")
        

    }
    else {
        // show error to the user
        display.show('danger', "please check the creds")
        
    }
    event.preventDefault()








}
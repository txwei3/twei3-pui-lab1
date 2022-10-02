const notecard = {
    noteTitle: "title", 
    notebody: "body", 
    noteImageURL: "assets/warhol-frog.png",


}

class Notecard {
    noteTitle; 
    noteBody; 
    noteImageURL; 

    constructor(title, body, imageURL, elementID) {
        this.noteTItle = title; 
        this.noteBody = body; 
        this.noteImageURL = imageURL;
        this.element = document.querySelector(elementID);
        this.updateElement();

        let myElement = this.element;
        const deleteButton = this.element.querySelector(".icon-delete");
        deleteButton.onclick = function() {
            myElement.remove()
        };
    }

    updateElement() {
        const noteTitleElement = this.element.querySelector(".note-title")
        const noteBodyElement = this.element.querySelector(".note-body")
        const noteImageElement = this.element.querySelector(".notecard-thumbnail")

        noteTitleElement.innertext = this.noteTitle
        noteBodyElement.innerText = this.noteBody; 
        noteImageElement.src = this.noteImageURL;
    }

    // deleteNote() {
    //     console.log("Deleting note");
    //     this.element.remove();
    // }
}

const notecardOne = new Notecard(
    "this is the first note", 
    "first note body", 
    "assets/warhol-frog.png",
    "#notecard-one"
)

const notecardTwo = new Notecard(
    "this is the second note", 
    "second note body", 
    "assets/warhol-orangutan.png",
    "#notecard-two"
)


const notecardThree = new Notecard(
    "this is the third note", 
    "third note body", 
    "assets/warhol-eagle.png",
    "#notecard-three"
)
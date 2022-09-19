console.log('Started Application.');

function updateElement() {
    notecard.element = document.querySelector('#notecard-one');
    const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
    const noteTitleElement = notecard.element.querySelector('.note-title');
    const noteBodyElement = notecard.element.querySelector('.note-body');

    // console.log(noteImageElement);
    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;


}



const notecard =
{
  noteTitle: 'This is the Title of the Note!',
  noteBody: 'And here is the body of the note.',
  noteImageURL: 'assets/warhol-frog.png',
};



function submitNote() {
    console.log("This is where we will grab input and then update the notecard.");
  

    const editorTitleElement = document.querySelector('#note-editor-title');
    const editorBodyElement = document.querySelector('#note-editor-body');

    notecard.noteTitle = editorTitleElement.value;
    notecard.noteBody = editorBodyElement.value;

    updateElement();
}


const btnSubmit = document.querySelector('#btn-submit');
btnSubmit.onclick = submitNote;


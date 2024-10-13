const socket = io();

const editor = document.getElementById('editor');
const editorContainer = document.getElementById('editor-container');
const startButton = document.getElementById('start-editing');
const usernameInput = document.getElementById('username');
const editorStatus = document.getElementById('editor-status');
const userCursors = document.getElementById('user-cursors');
let username = "";

startButton.addEventListener('click', () => {
  username = usernameInput.value.trim();
  if (username) {
    socket.emit('set-username', username); 
    editorContainer.classList.remove('hidden'); 
  }
});

socket.on('init-file', (content) => {
  editor.value = content; 
});

editor.addEventListener('input', () => {
  const content = editor.value;
  socket.emit('edit-file', { content, fileId: 'file123' });
});

editor.addEventListener('keyup', () => {
  const cursorPos = editor.selectionStart; 
  socket.emit('cursor-move', { cursorPos }); 
});

socket.on('file-update', (data) => {
  editor.value = data.content;
  editorStatus.textContent = `${data.editor} is editing...`;
});

socket.on('cursor-update', (data) => {
  let userCursor = document.getElementById(`cursor-${data.userId}`);

  if (!userCursor) {
    userCursor = document.createElement('div');
    userCursor.id = `cursor-${data.userId}`; 
    userCursor.classList.add('absolute', 'text-xs', 'bg-blue-200', 'px-2', 'rounded');
    userCursor.textContent = data.username;
    userCursors.appendChild(userCursor);
  }

  const cursorCoords = getCursorCoordinates(data.cursorPos);
  userCursor.style.top = `${cursorCoords.top}px`;
  userCursor.style.left = `${cursorCoords.left}px`;
});

function getCursorCoordinates(cursorPos) {
  const lines = editor.value.substr(0, cursorPos).split('\n');
  const lineHeight = 24; 
  return {
    top: lines.length * lineHeight,
    left: lines[lines.length - 1].length * 8
  };
}

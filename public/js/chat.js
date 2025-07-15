const socket = io();
let username = null;

Swal.fire({
    title: "¡Bienvenido!",
    text: 'Ingresa tu UserName para comenzar a Chatear',
    input: 'text',
    inputPlaceholder: 'Ingrese aca su nombre...',
    confirmButtonText: 'Ingresar',
    allowOutsideClick: false,
    inputValidator: (value) =>{
        if (!value) return 'Debes ingresar tu UserName';
    }
}).then(result => {
    username = result.value;
})

const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');
const diconnectBtn = document.getElementById('diconnectBtn');

chatForm.addEventListener('submit', e => {
    e.preventDefault();

    if(messageInput.value.trim()){
        socket.emit('chat:message', {
            user: username,
            message: messageInput.value
        });
        messageInput.value = '';
    }
});

socket.on('chat:message', data => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${data.user}: </strong> ${data.message}`;
    messages.appendChild(li);
    messages.scrollTop = messages.scrollHeight;
})


diconnectBtn.addEventListener('click', () => {
    socket.disconnect();
    Swal.fire({
        icon: 'info',
        title: 'Desconectado',
        text: 'Te has desconectado del Chat exitosamente.!'
    });
});
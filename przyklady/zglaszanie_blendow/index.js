const $ = document.querySelector.bind(document);
$('#navbar-logout-btn').onclick = (e) => {
    localStorage.setItem('currentUser', '');
}

$('#register-form').onsubmit = (e) => {
    e.preventDefault();
    const login = $('#register-card-login').value;
    const password = $('#register-card-password').value;
    if (isUserExist(login)) {
        alert(`Użytkownik "${login}" jest już zarejestrowany`);
        return;
    }
    addUser(login);
    registerUser(login, password);
    $('#register-form').reset()
    $('#register-card').classList.add('w3-hide');
    alert(`Użytkownik "${login}" został zarejestrowany`);
}
$('#login-form').onsubmit = (e) => {
    const login = $('#login-card-login').value;
    const password = $('#login-card-password').value;
    if (loginUser(login, password)) {
        localStorage.setItem('currentUser', login);
    }
}

function getAllUsers() {
    const usersString = localStorage.getItem('users') || '';
    const usersArray = usersString.split(';');
    return usersArray;
}
function isUserExist(login) {
    const users = getAllUsers();
    return users.includes((login+'').toLocaleLowerCase());
}
function addUser(login) {
    const userArray = getAllUsers();
    userArray.push((login+'').toLocaleLowerCase());
    localStorage.setItem('users', userArray.join(';'));
}
async function registerUser(login, password) {
    const passHash = await hashText(password);
    localStorage.setItem(`user:${(login+'').toLocaleLowerCase()}`, passHash);
}
async function loginUser(login, password) {
    const testPassHash = await hashText(password);
    const realPassHash = localStorage.getItem(`user:${login}`);
    return testPassHash === realPassHash;
}

async function hashText(text) {
    const textEncoder = new TextEncoder();
    const textBuffer = textEncoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', textBuffer)
    const uint8Array = new Uint8Array(hashBuffer);
    return uint8Array.toHex();
}

if (!isUserExist('admin')) {
    addUser('admin')
    registerUser('admin', '123');
}

let currentUser = localStorage.getItem('currentUser');

window.addEventListener('storage', (e) => {
    if (e.key == 'currentUser') {
        currentUser = e.newValue;
    }
    updateUI();
});

function updateUI() {
    console.log(currentUser)
    $('#user-name-wrapper').classList.toggle('w3-hide', currentUser == null || currentUser == '');
    $('#navbar-login-btn').classList.toggle('w3-hide', currentUser != null && currentUser != '');
    $('#navbar-logout-btn').classList.toggle('w3-hide', currentUser == null || currentUser == '');
    $('#user-name').innerText = currentUser;
}
updateUI();
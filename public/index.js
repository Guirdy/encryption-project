let inputFile = document.querySelector('#btnFile');

function getFile() {
    inputFile.click();
}

function showFile(arquivo) {
    let list = document.querySelector('.fileList');

    if(arquivo.files[0].type == 'application/pdf') {
        list.innerHTML = '<p>File: ' + event.target.files[0].name + '</p>';
        list.style.color = '#00e600';

        let buttonsCrypt = document.querySelector('.btn');
        buttonsCrypt.style.display = 'inline-block';

        let file = arquivo.files[0];
        console.log(file);
    } else {
        list.innerHTML = '<p>O arquivo não é um PDF</p>';
        list.style.color = '#ff0000';

        let buttonsCrypt = document.querySelector('.btn');
        buttonsCrypt.style.display = 'none';
    }
    
}

function data() {
    let footer = document.querySelector('#footer');
    let year = new Date().getFullYear();
    footer.innerHTML = '<p>Copyright &copy ' + year + ' - Cryptography | Todos os direitos reservados.</p>';
}


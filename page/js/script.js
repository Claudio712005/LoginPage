const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
/* other variables */
/* Botões */
const btn_create = document.getElementById('button_create');
const btn_login = document.getElementById('button-login');
/* Funções / Functions */
btn_create.addEventListener('click', () => {
    setTimeout(() => {
        form1.style.opacity = '0';
        setTimeout(() => {
            form1.classList.remove('form1');
            form1.classList.add('hidden');
            form2.classList.add('form2');
            setTimeout(() => {
                form2.style.opacity = '1';
            }, 100); // Atraso de 100 milissegundos para aplicar a opacidade após a troca de classes
        }, 500); // Atraso de 500 milissegundos para aplicar a troca de classes após o desvanecimento
    }, 1000); // Atraso de 3 segundos (3000 milissegundos)
});

btn_login.addEventListener('click', () => {
    setTimeout(() => {
        form2.style.opacity = '0';
        setTimeout(() => {
            form1.classList.remove('hidden');
            form1.classList.add('form1');
            form2.classList.remove('form2');
            form2.classList.add('hidden');
            setTimeout(() => {
                form1.style.opacity = '1';
            }, 100); // Atraso de 100 milissegundos para aplicar a opacidade após a troca de classes
        }, 500); // Atraso de 500 milissegundos para aplicar a troca de classes após o desvanecimento
    }, 1000); // Atraso de 3 segundos (3000 milissegundos)
});
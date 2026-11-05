document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const btnOpenLogin = document.getElementById('btn-open-login');
    const btnOpenRegister = document.getElementById('btn-open-register');
    const btnClose = document.getElementById('btn-close');
    
    const tabReg = document.getElementById('tab-reg');
    const tabLogin = document.getElementById('tab-login');
    const formRegister = document.getElementById('form-register');
    const formLogin = document.getElementById('form-login');

    const openModal = (tab = 'register') => {
        modal.classList.add('active');
        switchTab(tab);
    };

    const closeModal = () => {
        modal.classList.remove('active');
    };

    const switchTab = (tab) => {
        if (tab === 'register') {
            tabReg.classList.add('active');
            tabLogin.classList.remove('active');
            formRegister.style.display = 'flex';
            formLogin.style.display = 'none';
        } else {
            tabLogin.classList.add('active');
            tabReg.classList.remove('active');
            formLogin.style.display = 'flex';
            formRegister.style.display = 'none';
        }
    };

    btnOpenLogin.addEventListener('click', (e) => { e.preventDefault(); openModal('login'); });
    btnOpenRegister.addEventListener('click', (e) => { e.preventDefault(); openModal('register'); });
    btnClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    tabReg.addEventListener('click', () => switchTab('register'));
    tabLogin.addEventListener('click', () => switchTab('login'));

    // Отправка формы регистрации
    formRegister.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const agreeCheckbox = document.getElementById('agree-checkbox');
        if (!agreeCheckbox.checked) {
            alert('Необходимо согласие на обработку персональных данных!');
            return;
        }

        // Сбор данных
        const inputs = formRegister.querySelectorAll('input');
        const consoleData = {};
        
        // Проходимся по всем инпутам и записываем их значения
        inputs.forEach(input => {
            if (input.type !== 'checkbox') {
                consoleData[input.placeholder] = input.value;
            }
        });

        console.log('Данные регистрации:', consoleData);
        alert('Регистрация успешна (данные в консоли)');
        closeModal();
    });

    // Отправка формы входа
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = formLogin.querySelectorAll('input');
        const consoleData = {};
        inputs.forEach(input => {
            consoleData[input.placeholder] = input.value;
        });
        console.log('Данные входа:', consoleData);
        alert('Вход выполнен (данные в консоли)');
        closeModal();
    });
});
document.addEventListener('DOMContentLoaded', function () {
  // Botões da index.html
  const btnInscreva = document.getElementById('btn-inscreva');
  const btnDescubra = document.getElementById('btn-descubra');
  const btnJunte = document.getElementById('btn-junte');

  if (btnInscreva) {
    btnInscreva.addEventListener('click', function () {
      window.location.href = 'index1.html';
    });
  }

  if (btnDescubra) {
    btnDescubra.addEventListener('click', function () {
      window.scrollTo({
        top: document.querySelector('#sobre').offsetTop - 60,
        behavior: 'smooth',
      });
    });
  }

  if (btnJunte) {
    btnJunte.addEventListener('click', function () {
      window.scrollTo({
        top: document.querySelector('#servicos').offsetTop - 60,
        behavior: 'smooth',
      });
    });
  }

  // Verifica se estamos na página index1.html e se o formulário existe
  const form = document.getElementById('signupForm');
  const messageDiv = document.getElementById('formMessage');

  if (form && messageDiv) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      messageDiv.textContent = '';
      messageDiv.className = 'message';

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;

      if (!name) {
        messageDiv.textContent = 'Por favor, informe seu nome completo.';
        messageDiv.classList.add('error');
        form.name.focus();
        return;
      }

      if (!validateEmail(email)) {
        messageDiv.textContent = 'Por favor, informe um e-mail válido.';
        messageDiv.classList.add('error');
        form.email.focus();
        return;
      }

      if (password.length < 6) {
        messageDiv.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        messageDiv.classList.add('error');
        form.password.focus();
        return;
      }

      if (password !== confirmPassword) {
        messageDiv.textContent = 'As senhas não conferem. Por favor, tente novamente.';
        messageDiv.classList.add('error');
        form.confirmPassword.focus();
        return;
      }

      messageDiv.textContent = `Obrigado por se inscrever, ${name}!`;
      messageDiv.classList.add('success');

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);

      form.reset();
    });

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }
  }
});

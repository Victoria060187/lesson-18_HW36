function displayData() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const dobInput = document.getElementById('dob');
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
  
    const languages = [];
    const languageCheckboxes = document.querySelectorAll('input[name="languages"]:checked');
    languageCheckboxes.forEach((checkbox) => {
      languages.push(checkbox.value);
    });
  
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const nameRegex = /^[А-Яа-яІіЇїЄє' -]+$/u;
  
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      alert('Ім\'я та прізвище повинні містити лише українські букви та апостроф.');
      return;
    }
  
    const dob = dobInput.value.trim();
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  
    if (!dateRegex.test(dob)) {
      alert('Дата народження повинна бути у форматі ДД/ММ/РРРР.');
      return;
    }
  
    const rowData = `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${dob}</td>
        <td>${gender}</td>
        <td>${city}</td>
        <td>${address}</td>
        <td>${languages.join(', ')}</td>
    </tr>`;

    const dataTable = document.getElementById('data-table');
    const dataBody = document.getElementById('data-body');
    dataBody.innerHTML += rowData;

    const registrationForm = document.getElementById('registration-form');
    registrationForm.style.display = 'none';
    dataTable.style.display = 'block';
  }
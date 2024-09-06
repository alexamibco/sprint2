import { sanitize } from "./sanitize.js";

const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
const contactList = document.getElementById("contactList");
const filterInput = document.getElementById("filter");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const addContactBtn = document.getElementById("addContactBtn");
const contactForm = document.getElementById("contacts");

function displayContact(contact) {
  let li = document.createElement("li");
  li.classList.add("contact-item");
  li.setAttribute("data-id", contact.id);
  li.innerHTML = `<strong>${contact.name}</strong> - ${contact.phone} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
  contactList.appendChild(li);
}

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
  contactList.innerHTML = "";
  contacts.forEach(function (contact) {
    displayContact(contact);
  });
}

function filteredContactsResult(filteredContacts) {
  let li = document.createElement("li");
  li.classList.add("contact-item");
  li.setAttribute("data-id", contact.id);
  li.innerHTML = `<strong>${contact.name}</strong> - ${contact.phone} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
  contactList.appendChild(li);
}

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = sanitize(document.getElementById("name").value.trim());

  let phone = sanitize(document.getElementById("phone").value.trim());

  let terms = document.getElementById("terms").checked;

  function showError(element, message) {
    const error = document.createElement("span");
    error.classList.add("error");
    error.textContent = message;
    element.insertAdjacentElement("afterend", error);
    setTimeout(() => error.remove(), 1500);
  }

  if (!/^[A-Za-z\s]+$/.test(name)) {
    showError(
      document.getElementById("name"),
      "Name should contain only letters."
    );
    return;
  }

  if (!/^[0-9]+$/.test(phone)) {
    showError(
      document.getElementById("phone"),
      "Phone should contain only numbers."
    );
    return;
  }

  if (!name || !phone || !terms) {
    showError(addContactBtn, "Please fill in all fields and accept the terms");
    return;
  }

  let newContact = { id: Date.now(), name: name, phone: phone };
  contacts.push(newContact);
  saveContacts();

  contactForm.reset();
});

contactList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    let contactId = e.target.parentElement.getAttribute("data-id");
    contacts = contacts.filter(function (contact) {
      return contact.id !== Number(contactId);
    });
    saveContacts();
  } else if (e.target.classList.contains("edit-btn")) {
    let contactId = e.target.parentElement.getAttribute("data-id");
    let contactToEdit = contacts.find(function (contact) {
      return contact.id === Number(contactId);
    });
    document.getElementById("name").value = contactToEdit.name;
    document.getElementById("phone").value = contactToEdit.phone;

    addContactBtn.textContent = "Update Contact";
    addContactBtn.onclick = function () {
      let updatedName = document.getElementById("name").value.trim();
      let updatedPhone = document.getElementById("phone").value.trim();

      if (!/^[A-Za-z\s]+$/.test(updatedName)) {
        showError(
          document.getElementById("name"),
          "Name should contain only letters."
        );
        return;
      }

      if (!/^[0-9]+$/.test(updatedPhone)) {
        showError(
          document.getElementById("phone"),
          "Phone should contain only numbers."
        );
        return;
      }

      contacts = contacts.map(function (contact) {
        return contact.id === Number(contactId)
          ? { ...contact, name: updatedName, phone: updatedPhone }
          : contact;
      });

      saveContacts();
      contactForm.reset();
      addContactBtn.textContent = "Add Contact";
    };
  }
});

contacts.forEach(function (contact) {
  displayContact(contact);
});

/*filterInput.addEventListener("input", function () {
  let filterValue = filterInput.value;

  function filterContacts(filterValue) {
    return contacts.filter(
      (contact) =>
        contact.name.includes(filterValue) ||
        contact.phone.includes(filterValue)
    );
  }
  displayContact(filterContacts(filterValue));
});*/

filterInput.addEventListener("input", function () {
  let filterValue = filterInput.value.toLowerCase();

  let filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filterValue) ||
      contact.phone.includes(filterValue)
  );

  console.log(filteredContacts)

  filteredContactsResult(filteredContacts);
});

clearFilterBtn.addEventListener("click", function () {
  filterInput.value = "";
  //contactList.innerHTML = "";
});

/*//Filter
function filterContacts(query) {
  const lowerCaseQuery = query.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCaseQuery) ||
    contact.phone.includes(lowerCaseQuery)
  );
}

filterInput.oninput = function () {
  const filterValue = filterInput.value;
  displayContacts(filterContacts(filterValue));
};

clearFilterBtn.onclick = function () {
  filterInput.value = "";
  displayContacts(contacts);
};

displayContacts(contacts);*/

//Récupération des éléments
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// Evenements
form.addEventListener("submit", (e) => {
  e.preventDefault();

  form_verify();
});

// Fonctions
function form_verify() {
  // Récupération des valeurs des inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // Vérification du username
  if (usernameValue === "") {
    // Affiche erreur
    let message = "Le champ ne peut pas être vide";
    setError(username, message);
  } else if (usernameValue.length < 3) {
    let message = "Le nom d'utilisateur doit contenir au moins 3 caractères";
    setError(username, message);
  } else {
    // Ajoute success
    setSuccess(username);
  }

  // Vérification de l'email
  if (emailValue === "") {
    let message = "Le champ ne peut pas être vide";
    setError(email, message);
  } else if (!email_verify(emailValue)) {
    let message = "Email non valide";
    setError(email, message);
  } else {
    setSuccess(email);
  }

  // Vérification du mot de passe
  if (passwordValue === "") {
    let message = "Le champ ne peut pas être vide";
    setError(password, message);
  } else if (!password_verify(passwordValue)) {
    let message =
      "Le mot de passe doit contenir entre 8 et 12 caractères, au moins un chiffre, un caractère spécial";
    setError(password, message);
  } else {
    setSuccess(password);
  }

  // Vérification de la confirmation du mot de passe
  if (password2Value === "") {
    let message = "Le champ ne peut pas être vide";
    setError(password2, message);
  } else if (passwordValue !== password2Value) {
    setError(password2, "Les mots de passe ne correspondent pas");
  } else {
    setSuccess(password2);
  }
}
function setError(elem, message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");

  //Message d'erreur
  small.innerText = message;
  formControl.className = "form-control error";
}
function setSuccess(elem) {
  const formControl = elem.parentElement;
  formControl.className = "form-control success";
}
function email_verify(email) {
  // Vérification de l'email.
  const re = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+.[a-zA-Z]{2,4}$/;
  // const re = /^[a-z0-9._-]+@[a-z0-0._-]{2,}\.[a-z]]{2,4}$/;
  return re.test(email);
}
function password_verify(password) {
  // Vérification du mot de passe.
  console.log(password);
  const re = /^(?=.*[a-z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  // const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
  const result = re.test(password);
  console.log(result);
  return result;
}

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm") as HTMLFormElement;
  const userManager = new User();

  userForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const inputUsername = document.getElementById(
      "username"
    ) as HTMLInputElement;

    console.log(inputUsername);

    const userData = {
      userName: inputUsername.value,
    };

    const result = userManager.saveUser(userData);

    if (result.sucesss) {
      // return (window.location.href = "/signin.html");
    }
  });
});

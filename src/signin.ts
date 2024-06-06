document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm") as HTMLFormElement;
  const userManager = new User();

  userForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const inputUsername = document.getElementById(
      "username"
    ) as HTMLInputElement;

    console.log(inputUsername.value);
    const result = userManager.signInUser(inputUsername.value);

    if (result.success) {
      localStorage.setItem("usernameLoggedIn", inputUsername.value);
      window.location.href = "/tasks.html";
    } else {
      alert("data tidak ditemukan");
    }
  });
});

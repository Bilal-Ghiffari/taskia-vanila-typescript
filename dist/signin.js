document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm");
    const userManager = new User();
    userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputUsername = document.getElementById("username");
        console.log(inputUsername.value);
        const result = userManager.signInUser(inputUsername.value);
        if (result.success) {
            localStorage.setItem("usernameLoggedIn", inputUsername.value);
            window.location.href = "/tasks.html";
        }
        else {
            alert("data tidak ditemukan");
        }
    });
});
//# sourceMappingURL=signin.js.map
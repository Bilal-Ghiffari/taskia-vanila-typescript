document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.getElementById("userForm");
    const userManager = new User();
    userForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputUsername = document.getElementById("username");
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
//# sourceMappingURL=addUser.js.map
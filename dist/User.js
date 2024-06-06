// file ini digunakan untuk mengurus business logic
// file ini digunakan untuk mengelola data seperti create, read, update, etc
class User {
    constructor() {
        this.users = this.getUsers() || [];
    }
    saveUser(userData) {
        const newUser = {
            id: Date.now(),
            ...userData,
        };
        this.users.push(newUser);
        localStorage.setItem("users", JSON.stringify(this.users));
        return {
            sucesss: true,
        };
    }
    signInUser(usernameByInput) {
        // check valid username on localstrorage
        const userExists = this.users.some((user) => user.userName?.toLowerCase() === usernameByInput?.toLowerCase());
        console.log(usernameByInput);
        if (userExists) {
            return {
                success: true,
                usernameByInput,
            };
        }
        else {
            return {
                success: false,
                messsage: "username not found",
            };
        }
    }
    getUsers() {
        return JSON.parse(localStorage.getItem("users")) || [];
    }
}
//# sourceMappingURL=User.js.map
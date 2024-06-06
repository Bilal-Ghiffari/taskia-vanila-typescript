// file ini digunakan untuk mengurus business logic
// file ini digunakan untuk mengelola data seperti create, read, update, etc

type userDataType = {
  userName: string;
};

class User {
  private users: any;
  constructor() {
    this.users = this.getUsers() || [];
  }

  public saveUser(userData: userDataType) {
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

  public signInUser(usernameByInput) {
    // check valid username on localstrorage
    const userExists = this.users.some(
      (user: userDataType) =>
        user.userName?.toLowerCase() === usernameByInput?.toLowerCase()
    );

    console.log(usernameByInput);
    if (userExists) {
      return {
        success: true,
        usernameByInput,
      };
    } else {
      return {
        success: false,
        messsage: "username not found",
      };
    }
  }

  public getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}

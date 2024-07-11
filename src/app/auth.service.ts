export class AuthService {
    loggedIn: boolean = false

    async IsAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 100);
            }
        );
        return promise;
    }

    LogIn() {
        this.loggedIn = true;
    }
    LogOut() {
        this.loggedIn = false;
    }

}
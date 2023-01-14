export class AuthUser {
    constructor(
    public id: number,
    public username: string,
    public email: string,
    public role: string,
    private token: string,
    private tokenExpirationDate: Date
    ) {}

    public getToken() {
        if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate){
            return null;
        }
        return this.token;
    }
}
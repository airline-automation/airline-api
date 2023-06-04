import { login } from "./src/login.js";
import { register } from "./src/register.js";

const prefix = "/api/user";

export const appendroutes = (router) => {
    router.post(`${prefix}/login`, login);
    router.post(`${prefix}/register`, register);
};

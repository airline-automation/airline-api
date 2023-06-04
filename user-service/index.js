import { services, servicenames } from "./deps.js";

import { addUser, getUser, updUser, delUser } from "./src/user-service.js";

export const register = () => {
    services.set(servicenames.userservice, {
        addUser,
        getUser,
        updUser,
        delUser,
    });
};

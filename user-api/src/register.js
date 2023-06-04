import { services, servicenames } from "../deps.js";

export const register = (req, res) => {
    try {
        const userservice = services.get(servicenames.userservice);

        if (req.body && req.body.username && req.body.password) {
            if (Object.keys(req.body).length > 2) {
                res.status(400).json({
                    message: "Cannot send more than two fields",
                });
            } else {
                const user = userservice.getUser({
                    username: req.body.username,
                    password: req.body.password,
                });

                if (user) {
                    // login başarılı
                    res.status(400).json({
                        message: "Login successful redirects to home page",
                    });
                } else {
                    // login başarısız
                    res.status(400).json({
                        message:
                            "Login failed, username or password is incorrect",
                    });
                }
            }
        } else {
            res.status(400).json({
                message: "Username & Password fields required",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: "Bad Request" });
    }
};

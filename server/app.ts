import groupMembershipsRouter from "./routes/groupMembershipsRouter.js";
import groupsRouter from "./routes/groupsRouter.js";
import recordsRouter from "./routes/recordsRouter.js";
import usersRouter from "./routes/usersRouter.js";

import express, { Application, Request, Response } from "express";
import passport from "passport";
import session from "express-session";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import { getUserByUsername, getUserById } from "./services/usersService.js";

const app: Application = express();

app.use(express.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET ?? (() => { throw new Error("session secret is required"); })(),
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LocalStrategy(async (username: string, password: string, done: Function) => {
        try {
            const user = await getUserByUsername(username);
            if (!user) {
                return done(null, false, { message: "user does not exist" });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: "incorrect password" });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser((user: any, done: Function) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: number, done: Function) => {
    try {
        const user = await getUserById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

app.use("/records", recordsRouter);
app.use("/users", usersRouter);
app.use("/groups", groupsRouter);
app.use("/groupMemberships", groupMembershipsRouter);

app.post("/log-in", passport.authenticate("local"), (req: Request, res: Response) => {
    res.json({
        message: "login successful",
        user: req.user,
    });
});

app.post("/log-out", (req: Request, res: Response) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({
                message: "logout failed"
            });
        }
        res.json({
            message: "logout successful"
        });
    });
});

app.get("/auth-status", (req: Request, res: Response) => {
    if (req.isAuthenticated()) {
        res.json({
            isAuthenticated: true,
            user: req.user,
        });
    } else {
        res.json({
            isAuthenticated: false,
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
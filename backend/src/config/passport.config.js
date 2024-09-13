import passport from "passport";
import local from "passport-local";
import { validateHash } from "../utils.js";
import passportJWT from "passport-jwt";
import config from "./config.js";
import userService from "../services/users.service.js";
import CustomError from "../services/errors/CustomError.js";
import { errorTypes } from "../services/errors/enums.js";

const findToken = (req) => {
  if (!req.headers.authorization) {
    CustomError.createError({
      name: "No se envió un token de acceso",
      cause: "Token inexistente o inválido, por favor logueese nuevamente",
      code: errorTypes.AUTHENTICATION_ERROR,
    });
  }
  return req.headers.authorization.split(" ")[1];
};

export const initPassport = async () => {
  passport.use(
    "jwt",
    new passportJWT.Strategy(
      {
        jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([findToken]),
        secretOrKey: config.PRIVATE_KEY,
        credentials: true,
      },
      (jwtContent, done) => {
        try {
          return done(null, jwtContent.user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    "login",
    new local.Strategy(
      {
        usernameField: "email",
      },
      async (username, password, done) => {
        try {
          if (!username || !password)
            return done(null, false, {
              message: `Campos incompletos, por favor rellene la información`,
            });

          const userExists = await userService.getUserByEmail(username);

          if (!userExists)
            return done(null, false, {
              message: `El correo ${username} no está asociado a ninguna cuenta`,
            });

          if (userExists.suspended)
            return done(null, false, {
              message: `El usuario se encuentra suspendido, contactese con el administrador`,
            });

          let equalPass = validateHash(password, userExists);
          if (!equalPass)
            return done(null, false, {
              message: `La contraseña es incorrecta`,
            });

          let userResponse = {
            name: userExists.name,
            last_name: userExists.last_name,
            enterprise_name: userExists.enterprise_name
              ? userExists.enterprise_name
              : "",
            email: userExists.email,
            area_code: userExists.area_code,
            telephone: userExists.telephone,
            description: userExists.description ? userExists.description : "",
            resume: userExists.resume ? userExists.resume : "",
            profession: userExists.profession ? userExists.profession : "",
            location: userExists.location ? userExists.location : "",
            role: userExists.role,
            membership: userExists.membership,
            job_limit: userExists.job_limit,
            enterprise_image: userExists.enterprise_image
              ? userExists.enterprise_image
              : "",
            _id: userExists._id,
          };

          return done(null, userResponse);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    return done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await userService.getUserById(id);
    return done(null, user);
  });
};

import escape from "validator/lib/escape.js";
import { log } from "../utils/logger.utils.js";
import { isString } from "../utils/string.utils.js";

const sanitizeMiddleware_old = (req, res, next) => {
  // req.body => { email: "dsadsa", password: "392403dasd" }

  const values = Object.values(req.body);

  const stringValues = values.filter((value) => {
    return isString(value);
  });

  const escapedValues = stringValues.map((value) => {
    return escape(value);
  });

  next();
};

const sanitizeMiddleware_simple = (req, res, next) => {
  // req.body => { email: "dsadsa", password: "392403dasd" }

  const keys = Object.keys(req.body);

  const sanitizedBody = {};

  keys.forEach((key) => {
    const value = req.body[key];
    sanitizedBody[key] = isString(value) ? escape(value) : value;
  });

  req.body = { ...sanitizedBody };

  next();
};

const sanitize = (obj) => {
  const keys = Object.keys(obj);
  const sanitized = keys.reduce((toBuild, key) => {
    const value = obj[key];
    const escaped = isString(value) ? escape(value) : value;
    return { ...toBuild, [key]: escaped };
  }, {});
  return { ...sanitized };
};

export const sanitizeMiddleware = (req, res, next) => {
  req.body = sanitize(req.body);
  req.params = sanitize(req.params);
  console.log("-------------------------------------------------");
  log(`url requested =`, req.originalUrl);
  log(`sanitized body =`, req.body);
  next();
};

const sanitizeMiddleware_bg = (req, res, next) => {
  const keys = Object.keys(req.body);

  const sanitizedBody = keys.reduce(
    (tb, k) => ({
      ...tb,
      [k]: isString(req.body[k]) ? escape(req.body[k]) : req.body[k],
    }),
    {}
  );

  log(`sanitized body =`, sanitizedBody);

  req.body = { ...sanitizedBody };
  next();
};

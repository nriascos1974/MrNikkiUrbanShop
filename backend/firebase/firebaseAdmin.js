const admin = require("firebase-admin");
const express = require("express");
const checkUserExists = require("../database/helper/DBcheckUserExists");
const createUser = require("../database/controllers/users/userPost/DBUserCreate");
const firebaseAdminRouter = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
//const credentials = require("C:/Users/gaby_/Desktop/pacto/backend/firebase/firebase-admin-key.json")
const serviceAccount = {
  type: process.env.FIREBASE_ADMIN_TYPE,
  project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
  private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_ADMIN_CLIENT_ID,
  auth_uri: process.env.FIREBASE_ADMIN_AUTH_URI,
  token_uri: process.env.FIREBASE_ADMIN_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_ADMIN_CLIENT_X509_CERT_URL,
  universe_domain: process.env.FIREBASE_ADMIN_UNIVERSE_DOMAIN,
};

const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firebaseAdminAuth = admin.auth();

firebaseAdminRouter.get("/authgoogle", async (req, res) => {
  try {
    const { uid } = req.query;
    // console.log("este es el codigo  ->"+uid);
    const user = await firebaseAdminAuth.getUser(uid);
    // console.log("este es el user  ->"+user);
    // console.log("este es el Correo del usuario  ->"+user.email);
    const userdb = await checkUserExists(null, user.email);
    // console.log("este es el usuario  DB ->"+userdb);
    if (userdb === null) {
      const aux = user.displayName.split(" ");
      const phonenumber = user.phoneNumber ? user.phoneNumber : null;
      const pass = bcrypt.hashSync(uid, 10);
      const newUser = {
        firstname: aux.shift(),
        lastname: aux.pop(),
        email: user.email,
        verified: true,
        phone: phonenumber,
        password: pass,
        address: "None",
      };
      const response = await createUser(newUser, true);
      //console.log("User _id ->"+response);

      const tokenPayload = { userId: response._id };
      //console.log("tokenPayload 1->"+tokenPayload);

      const token = jwt.sign(tokenPayload, process.env.JWT_PRIVATE_KEY);

      res.status(200).json({ user: response, token });
    } else {
      const tokenPayload = { userId: userdb._id };
      //console.log("tokenPayload 2->"+tokenPayload);

      const token = jwt.sign(tokenPayload, process.env.JWT_PRIVATE_KEY);

      res.status(200).json({ user: userdb, token });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { firebaseAdmin, firebaseAdminRouter };

import { init } from "next-firebase-auth";

const initAuth = () => {
  init({
    debug: false,
    appPageURL: "/",
    authPageURL: "/login",
    loginAPIEndpoint: "/api/auth/login", // required
    logoutAPIEndpoint: "/api/auth/logout", // required
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: "qtma-94a76",
        clientEmail:
          "firebase-adminsdk-baq7h@qtma-94a76.iam.gserviceaccount.com",
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
          : "",
      },
      databaseURL: "https://qtma-94a76-default-rtdb.firebaseio.com",
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyDr1eu1rM33xz0Jq3AcO7j-mPOlA7YMuTg", // required
      authDomain: "qtma-94a76.firebaseapp.com",
      databaseURL: "https://qtma-94a76-default-rtdb.firebaseio.com",
      projectId: "qtma-94a76",
    },
    cookies: {
      name: "qtma", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: false, // set this to false in local (non-HTTPS) development
      signed: false,
    },
  });
};

export default initAuth;

import { withAuthUser, AuthAction } from "next-firebase-auth";
import FirebaseAuth from "../components/FirebaseAuth";

const styles = {
  textContainer: {
    display: "flex",
    justifyContent: "center",
    margin: 16,
  },
};

const Login = () => (
  <>
    <div style={styles.textContainer}>
      <p>Please log in or register to access the website:</p>
    </div>
    <div>
      <FirebaseAuth />
    </div>
  </>
);

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Login);

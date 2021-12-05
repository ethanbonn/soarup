import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import Link from "next/link";
import type { FunctionComponent } from "react";
import type { User } from "../types/models";
import getUserData from "../functions/server/getUserData";

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 16,
  },
  button: {
    marginLeft: 16,
    cursor: "pointer",
  },
};

const Index = (props: { email: string; id: string } | User) => {
  const { signOut } = useAuthUser();
  const { email } = props;
  return (
    <div>
      {email ? (
        <>
          <p>
            Signed in as
            {email}
          </p>
          <button
            type="button"
            onClick={() => {
              signOut();
            }}
            style={styles.button}
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <p>You are not signed in.</p>
          <Link href="/login">
            <button type="button" style={styles.button}>
              Sign in
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()(
  async ({ AuthUser }) => {
    const { email, id } = AuthUser;
    const userData = await getUserData(id);

    return {
      props: userData ?? { email, id },
    };
  }
);

export default withAuthUser()(Index as FunctionComponent<unknown>);

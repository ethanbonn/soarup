import type { UnregisteredUser } from "../../types";
import type { User } from "../../types/models";

export const isUser = (user: UnregisteredUser | User): user is User => {
    return (user as User).userName !== undefined;
}

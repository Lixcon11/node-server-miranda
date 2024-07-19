import { createController } from "../utils/createController"
import { UserState } from "../types/DataState";
import usersData from "../data/usersData.json"

const usersController = () => createController<UserState>("users", usersData as UserState[])

export { usersController }
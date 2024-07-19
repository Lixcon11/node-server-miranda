import { createController } from "../utils/createController"
import { ContactState } from "../types/DataState";
import contactsData from "../data/contactsData.json"

const contactsController = () => createController<ContactState>("contacts", contactsData as ContactState[])

export { contactsController }
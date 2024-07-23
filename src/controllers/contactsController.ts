import { createController } from "../utils/createController"
import { Contact } from "../schemas/contactSchema";

const contactsController = () => createController("contacts", Contact)

export { contactsController }
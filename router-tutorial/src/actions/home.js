import { redirect } from 'react-router-dom';
import { getContacts, createContact } from '../contacts';

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

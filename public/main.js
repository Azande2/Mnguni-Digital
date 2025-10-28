import { db, collection, addDoc } from './firebase-init.js';

document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      alert("Message sent successfully!");
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("There was an error. Please try again.");
    }
  }
});

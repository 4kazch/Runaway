import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const style = {
  form: `w-full text-xl absolute bottom-0 flex`,
  input: `flex-grow px-4 py-2 bg-gray-900 text-white outline-none border-none rounded-l-lg`,
  button: `px-6 py-2 bg-green-500 text-white rounded-r-lg`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter a valid message');
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Message'
      />
      <button className={style.button} type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;

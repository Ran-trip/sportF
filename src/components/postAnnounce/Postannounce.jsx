import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './postAnnounce.css';

const PostAnnounce = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    const handleClickPostAnnouncement = async () => {
        await axios.post(`${process.env.REACT_APP_API_URL}/announcement/`, {
          name,
          contact,
          title,
          text,
          idSport: id,
        });
      };
  return (
  <div className="postAnnounce">
    <div className="containerinput">
        <label htmlFor="name">
          <input id="name" name="name" type="name" onChange={(event) => setName(event.target.value)} placeholder="Votre prénom & nom" />
        </label>
    </div>
    <div className="containerinput">
        <label htmlFor="contact">
          <input id="contact" name="contact" type="contact" onChange={(event) => setContact(event.target.value)} placeholder="Vos contact" />
        </label>
    </div>
    <div className="containertextarea">
        <label htmlFor="text" className="containerlabeltext">
          <textarea id="text" name="text" onChange={(event) => setText(event.target.value)} placeholder="Votre message" />
        </label>
    </div>
    <div className="containertitle">
        <label htmlFor="title" className="containerlabeltitle">
          <textarea id="title" name="title" onChange={(event) => setTitle(event.target.value)} placeholder="Votre titre" />
        </label>
    </div>
    <div className="containerbuttonpostannounce">
        <button className="buttonPostAnnouncce" type="submit" onClick={handleClickPostAnnouncement}>Envoyer</button>
    </div>
  </div>
  );
};

export default PostAnnounce;

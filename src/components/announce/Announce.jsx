import { React, useEffect, useState } from 'react';
import axios from 'axios';
import './announce.css';

const ReqAnnounces = () => {
  const [announcement, setAnnounces] = useState([]);

  const getannounces = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/announcement`,
    );
    setAnnounces(data);
  };

  useEffect(() => {
    getannounces();
  }, []);

  const handleClickValidate = async (id) => {
    await axios.put(`${process.env.REACT_APP_API_URL}/announcement/${id}`, { isValidate: 1 });
    getannounces();
  };

  return (
    <>
      <div className="announce">
        <h2 className="titlecomments">Mes annonces de sport</h2>
        {announcement.map((announce) => (
          <div className="containerannounces">
            <p className="announceTitle"> Nom : </p>
            <p className="announceApi">{announce.name}</p>
            <p className="announceTitle">Contact: </p>
            <p className="announceApi">{announce.contact}</p>
            <p className="announceTitle"> Titre : </p>
            <p className="announceApi">{announce.title}</p>
            <p className="announceTitle"> Votre texte : </p>
            <p className="announceApi">{announce.text}</p>
            <p className="announceApi">{announce.isValidate}</p>
            <button type="button" onClick={() => handleClickValidate(announce.id)}>Valider</button>
          </div>
        ))}
      </div>

    </>
  );
};

export default ReqAnnounces;
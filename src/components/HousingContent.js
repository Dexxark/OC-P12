import React from 'react';
import { useParams, Navigate  } from 'react-router-dom';
import data from '../logements.json';
import Host from '../components/Host';
import Collapse from '../components/Collapse';

const HousingContent = () => {
  const { id } = useParams();
  const housingData = data.find((el) => el.id === id);

  if (!housingData) {
    return <Navigate to="/Page404" />;
  }

  return (
    <div className="housing">
      <div className="housing-content">
        <div className="content-title-tag">
          <h1>{housingData.title}</h1>
          <p>{housingData.location}</p>
        </div>

        <div className="content-host-rating">
          <Host hostData={housingData.host} />
        </div>
      </div>

      <div className="collapses">
        <Collapse title="Description" content={housingData.description} housing={true}/>
        <Collapse title="Equipements" content={housingData.equipments} housing={true} listing={true} />
      </div>
    </div>
  );
};

export default HousingContent;
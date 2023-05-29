import React from 'react';

export const FilterTags = () => {


  return (
    <div className="filter-select">
      <select
        className="habilits flex w-11/12 h-6 border-none text-center text-black text-xs font-medium"
        defaultValue="Informe as habilidades que você busca:"
      >
        <option disabled defaultValue="Informe as tags">Informe as tags</option>
        <option value="Php">Php</option>
        <option value="Digitador">Digitador</option>
        <option value="Wordpress">Wordpress</option>
      </select>
    </div>
  );
};

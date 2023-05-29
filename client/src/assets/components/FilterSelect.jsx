import React from 'react';

export const FilterSelect = () => {


  return (
    <div className="filter-select">
      <select
        className="habilits flex w-11/12 h-6 border-none text-center text-black text-xs font-medium"
      >
        <option disabled defaultValue="Informe as linguagens">Informe as linguagens</option>
        <option value="Português">Português</option>
        <option value="Inglês">Inglês</option>
        <option value="Espanhol">Espanhol</option>
      </select>
    </div>
  );
};

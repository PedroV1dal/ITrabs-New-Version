import React from 'react'

export const FilterCategory = () => {
  return (
    <div className="filter-radio flex flex-col gap-3">
      <div className="radio-input flex items-center gap-1 text-black text-xs">
        <input type="checkbox" />
        <label>Serviços Domésticos</label>
      </div>


      <div className="radio-input flex items-center gap-1 text-black text-xs">
        <input type="checkbox" />
        <label>Moda e Beleza</label>
      </div>

      <div className="radio-input flex items-center gap-1 text-black text-xs">
        <input type="checkbox" />
        <label>Reforma e Reparos</label>
      </div>

      <div className="radio-input flex items-center gap-1 text-black text-xs">
        <input type="checkbox" />
        <label>Saúde</label>
      </div>

      <div className="radio-input flex items-center gap-1 text-black text-xs">
        <input type="checkbox" />
        <label>Assistência Técnica</label>
      </div>

      <div className="radio-input flex items-center gap-1 text-black text-xs">
        <input type="checkbox" />
        <label>Tradução e Conteúdo</label>
      </div>

      <div className="radio-input flex items-center gap-1 text-black text-xs">
        <input type="checkbox" />
        <label>Design e Multimedia</label>
      </div>
    </div>
  )
}

import React from 'react'
import { FilterCategory } from './FilterCategory'
import { FilterSelect } from './FilterSelect'
import { FilterTags } from './FilterTags'

export const FilterCard = () => {
  return (
    <div className='filter-card w-full py-9 px-6 flex flex-col justify-center gap-5 rounded-2xl bg-EsmeraldGreen mb-28'>
      <h3 className='font-bold text-white text-xl'>Encontre Profissionais</h3>
      <div className='filter-radio-container flex flex-col gap-3'>
        <span className='font-medium text-white text-sm'>Categorias de Serviços</span>

        <FilterCategory />

        <span className='font-medium text-white text-sm'>TAGS DE HABILIDADE</span>

        <FilterTags />

        <span className='font-medium text-white text-sm'>IDIOMAS</span>

        <FilterSelect />

        <div className="save flex justify-center pt-5">
          <button type="button" className='bg-Gray rounded-3xl w-36 h-7 mr-2 border-none font-normal hover:bg-Purple hover:text-white'>SALVAR</button>
        </div>

      </div>
    </div>
  )
}

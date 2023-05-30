import React from 'react'
import { MainHeader } from '../components/MainHeader'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { FilterCard } from '../components/FilterCard'
import { ProfileCard } from '../components/ProfileCard'

export const EncontrarProfissionais = () => {
  return (
    <>
      <MainHeader />
      <section className='container pt-24 min-h-80 bg-Gray flex justify-center'>

        <div className='left-info flex-1 w-30 pt-10 pr-32 pb-0 pl-32'>
          <FilterCard />
        </div>

        <div className='right-info flex-2 pt-10 pr-32 pb-0 pl-5 flex flex-col gap-8'>
          <div className="search flex flex-row bg-white rounded-3xl h-12">

            <input className='w-full rounded-3xl pl-5 text-EsmeraldGreen font-bold text-base border-none focus:border-none  focus:outline-none focus:shadow-none' type="text" placeholder="Buscar por tags, palavras chaves ou serviço" />
            <div className="flex justify-self: flex-end items-center mr-3 cursor-pointer">
              <MagnifyingGlass size={24} />
            </div>

          </div>

          <ProfileCard />

        </div>
      </section>
    </>
  )
}

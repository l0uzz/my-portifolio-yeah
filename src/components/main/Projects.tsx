import React from 'react'
import ProjectsCards from '../sub/ProjectCards'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
          <ProjectsCards
            src='/MyWebPortifolio.png'
            title='Modern Next.js Portfolio'
            description='Portifolio criado em react para uso Pessoal com o tema Astro em Roxo. Tecnologias Utilizadas : React.Js e TypeScript'
          />
          <ProjectsCards
            src='/projecttwo.png'
            title='ShortLinks'
            description='Simplificar o compartilhamento de URLs. Tecnologias Utilizadas : NODE.JS (TYPESCRIPT), FASTIFY (LIBRARY), ZOD (LIBRARY), POSTGRES & REDIS (SQL), Git e Github'
          />
          <ProjectsCards
            src='/preview.png'
            title='Nlw - Node.js(Back-End)'
            description='O Pass.in é uma aplicação de gestão de participantes em eventos presenciais - Utilizando Node.js e React e suas tecnologias'
          />
        </div>
    </div>
  )
}

export default Projects

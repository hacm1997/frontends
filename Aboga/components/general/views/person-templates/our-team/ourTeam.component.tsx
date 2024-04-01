import React from 'react'

const TeamComponent = (props:any) => {
  const teams =[
    {
      id:1,
      name:'Juan José Castillo Romero',
      profesion:"Abogado",
      image: '/images/experts/juan-jose1.webp',
      description: 'Abogado de la Universidad Libre, especialista en Derecho Constitucional y candidato a Magister en Derecho Administrativo. Con más de 3 años de experiencia.',
      linkedin: 'https://www.linkedin.com/in/juan-jos%C3%A9-castillo-romero-591247156/'
    },
    {
      id:2,
      name:'Keiry Berdugo',
      profesion:"Abogado",
      image: '/images/experts/keiry1.webp',
      description: 'Investigadora judicial con más de 6 años de experiencia en el sector empresarial.',
      linkedin: 'https://www.linkedin.com/in/keiry-berdugo-jimenez-6a9590186/'
    },
    {
      id:3,
      name:'Osman E. Guzmán Medrano',
      profesion:"Abogado",
      image: '/images/experts/osman1.webp',
      description: 'Abogado de la Universidad Libre, con más de 2 años de experiencia profesional.',
      linkedin: 'https://www.linkedin.com/in/osman-enrique-guzman-medrano-43b70026a/'
    }
  ]
  
  return (


<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-32 lg:px-4 lg:py-20">
<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
  
  <h2 className="max-w-lg mb-6 font-sans text-3xl text-center font-bold leading-none tracking-tight text-[#004477] sm:text-4xl md:mx-auto">
    <span className="relative inline-block">
     
      <span className="relative">Nuestro equipo</span>
    </span>
    
  </h2>
  
</div>
<div className="grid gap-10 lg:grid-cols-3">
  {
    teams.map((member) => (
  <div key={member.id}>
    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
      <img
        className="object-cover w-full "
        src={member.image}
        alt="Persona"
      />
      <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-gradient-to-r from-blue-700 to-blue-300 bg-opacity-75 opacity-0 hover:opacity-90">
        <p className="mb-1 text-lg font-bold text-gray-100">
       {member.name}
        </p>
        <p className="mb-4 text-xs text-gray-100">{member.profesion}</p>
        <p className="mb-4 text-base tracking-wide text-white">
        {member.description}
        </p>
        <a href={member.linkedin} target='_blank' title={member.name}>
          <i className='bx bxl-linkedin-square text-[50px] text-white cursor-pointer hover:text-[60px] transition-[1s]'></i>
        </a>
      </div>
    </div>
  </div>
    ))
  }
 </div>
</div>

  )
}

export default TeamComponent
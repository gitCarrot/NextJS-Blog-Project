import React from 'react'
import Link from 'next/link'
import ProjectPreview from '../components/card/ProjectPreview'

const page = () => {
  return (
    <div>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
      <Link href="/articles/spring_boot">
        <ProjectPreview
          name="Spring Boot"
          description="Spring Boot"
          imageUrl="/springboot.png"
          bgColor="#313442"
          dark
        />
      </Link>
      <Link href="/articles/algorithm">
        <ProjectPreview
          name="Algorithm"
          description="알고리즘"
          imageUrl="/project-2.png"
          bgColor="#685cdd"
          dark
        />
      </Link>
        <ProjectPreview
          name="Admin Onboarding"
          description="Increase user engagement"
          imageUrl="/project-3.png"
        />
        <ProjectPreview
          name="Project Dashboard"
          description="Project management app"
          bgColor="#4e4e56"
          dark
        />
        <ProjectPreview
          name="Newsy App"
          description="News aggregator app"
          imageUrl="/project-2.png"
          bgColor="#171717"
          dark
        />
        <ProjectPreview
          name="Krypto"
          description="Analyze crypto currency"
          imageUrl="/project-3.png"
        />
      </section>




        
    </div>
  )
}

export default page
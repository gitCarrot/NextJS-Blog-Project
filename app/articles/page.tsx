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
          imageUrl="/spring_boot.png"
          bgColor="#4e4e56"
          dark
        />
      </Link>
      <Link href="/articles/algorithm">
        <ProjectPreview
          name="Algorithm"
          description="알고리즘"
          imageUrl="/algorithm.png"
        />
      </Link>
      <Link href="/articles/data-engineering">
        <ProjectPreview
          name="Data Engineering"
          description="Large Scale Traffic"
          imageUrl="/data-engineering.png"
          bgColor="#171717"
          dark
        />
      </Link>
        <ProjectPreview
          name="MicroServices"
          description="Docker & kubernetes"
          imageUrl=""
          bgColor="#685cdd"
          dark
        />
        <ProjectPreview
          name="To be Continue"
          description="To be Continue"
          imageUrl="/project-2.png"
          bgColor="#313442"
          dark
        />
        <ProjectPreview
          name="To be Continue"
          description="To be Continue"
          imageUrl="/project-3.png"
        />
      </section>
    </div>
  )
}

export default page
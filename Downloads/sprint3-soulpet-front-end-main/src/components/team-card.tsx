interface TeamCardProps {
  photo: string
  name: string
  rm: string
  github: string
  linkedin: string
}

const TeamCard = ({ photo, name, rm, github, linkedin }: TeamCardProps) => {
  return (
    <article>
      <div>
        <img src={photo} alt={name} />
      </div>
      <h2>{name}</h2>
      <span>RM: {rm}</span>
      <div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </article>
  )
}

export default TeamCard
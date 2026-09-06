interface RoadmapItemProps {
  icon: string
  title: string
  status: string
}

const RoadmapItem = ({ icon, title, status }: RoadmapItemProps) => {
  return (
    <div>
      <div><span>{icon}</span></div>
      <div>{title}</div>
      <div>{status}</div>
    </div>
  )
}

export default RoadmapItem
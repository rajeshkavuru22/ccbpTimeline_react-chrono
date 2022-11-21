import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {ProjectItem} = props
  console.log(ProjectItem)
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = ProjectItem
  return (
    <div>
      <img src={imageUrl} alt="project" className="image" />
      <div className="top-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard

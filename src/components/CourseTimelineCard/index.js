import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {CourseItem} = props
  const {courseTitle, description, tagsList, duration} = CourseItem
  return (
    <div>
      <div className="top-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachTag => (
          <li className="tag-item">
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard

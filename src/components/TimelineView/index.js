import {Chrono} from 'react-chrono'
import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const displayTimelineItems = eachItem => {
    console.log(eachItem.categoryId)
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard key={eachItem.id} CourseItem={eachItem} />
    }
    return <ProjectTimelineCard key={eachItem.id} ProjectItem={eachItem} />
  }

  const items = timelineItemsList.map(each => ({
    title: each.title,
  }))
  console.log(items)
  return (
    <div className="bg-container">
      <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={items}
          theme={{primary: 'blue', secondary: 'white'}}
        >
          {timelineItemsList.map(eachItem => displayTimelineItems(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView

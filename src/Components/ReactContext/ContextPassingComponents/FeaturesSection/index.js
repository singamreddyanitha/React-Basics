import Playtime from '../Playtime'
import NewWaysToConnect from '../NewWaysToConnect'

import './index.css'

const FeaturesSection = () => {
  // const {activeLanguage} = props
  return (
    <div className="features-section-container">
      {/* <Playtime activeLanguage={activeLanguage} /> */}
      {/* <NewWaysToConnect activeLanguage={activeLanguage} /> */}
    
      <Playtime />
      <NewWaysToConnect />
    </div>
  )
}

export default FeaturesSection

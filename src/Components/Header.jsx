import Sidebar from "./Sidebar"
import "./header.css"

export const Header = () => {
  return (
    <div className="header-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
  )
}

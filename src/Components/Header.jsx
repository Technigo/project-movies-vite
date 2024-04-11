import Sidebar from "./Sidebar"

export const Header = () => {
  return (
    <div className="header-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
  )
}

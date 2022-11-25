import "./single.css"
import Sidebar from "../../sidebar/Sidebar"
import SinglePost from "../../singlePost/SinglePost"

export default function Single() {
  return (
    <div class="single">
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

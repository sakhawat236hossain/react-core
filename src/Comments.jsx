import { use } from "react";
import Comment from "./Comment";
export default function Comments({ comments }) {
  const commentsData = use(comments);

  return (
    <div>
      <h1>All comments = {commentsData.length}</h1>
      {
        commentsData.map(commentsData=><Comment commentsData={commentsData}></Comment>)
      }
    </div>
  );
}

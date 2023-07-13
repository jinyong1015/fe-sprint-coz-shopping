import bookmarkAdd from "../img/2Property 1=Add to Bookmark.png";
import bookmarkRemove from "../img/2Property 1=Remove from Bookmark.png";
import '../App.css';
import { useEffect, useState } from "react";

function BookmarkToast({isOnToast, starList}){
const [showToast, setShowToast]= useState(false);

useEffect(()=>{
    setShowToast(true);
    const timer = setTimeout(()=>{
      setShowToast(false);
    },1000);
    return () => clearTimeout(timer);
},[starList]);

  return(
  <>
  {showToast && isOnToast ? <div className="bookmark-toast-add">
  <img src ={bookmarkAdd} alt="bookmark img" width="300rem" height="67rem"></img>
  </div> : null}
  {showToast && !isOnToast ? <div className="bookmark-toast-remove">
  <img src={bookmarkRemove} alt="bookmark img" width="315rem" height="67rem"></img>
  </div>: null}
  </>
)
}

export default BookmarkToast;
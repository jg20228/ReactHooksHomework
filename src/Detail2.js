import React, { useState, useEffect, useRef } from "react";
import logo2 from "./img/logo2.png";
import logo1 from "./img/logo.jpg";
import Comment from "./Comment";

const Detail2 = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [commnetCount, setCommnetCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  let [like, setLike] = useState(true);

  const imgEl = useRef();

  const changeImg = (e) => {
    like ? setLike(() => false) : setLike(() => true);
    like ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1);
  };

  useEffect(() => {
    like ? (imgEl.current.src = logo2) : (imgEl.current.src = logo1);
  }, [like]);

  const onInsert = (e) => {
    const nextComment = comments.concat(comment);
    setComments(nextComment);
    setComment("");
    setCommnetCount(commnetCount + 1);
  };

  const onChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <img src={logo2} onClick={changeImg} ref={imgEl} alt="" />
      <div>좋아요 : {likeCount}</div>
      <div>댓글수 : {commnetCount}</div>
      <input value={comment} onChange={onChange}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {comments.map((value, index) => (
          <li key={index}>{value} </li>
        ))}
      </ul>
    </div>
  );
};

export default Detail2;

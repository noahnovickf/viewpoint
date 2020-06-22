import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "containers/post";
import Profile from "containers/profile";
import Modal from "components/modal";
import Navbar from "containers/navbar";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [displayPosts, setDisplayPosts] = useState([]);
  const [selectDisplayPostOption, setSelectDisplayPostOption] = useState(
    "Newest"
  );
  const [viewByTimeframeTime, setViewByTimeframeTime] = useState(Date.now());
  const [viewByTimeframe, setViewByTimeframe] = useState("All-time");
  const userFromState = useSelector((state) => state.users.user);
  const doesUserHaveUsername = !!userFromState.username;
  const postsFromState = useSelector((state) => state.posts);

  const handleDisplayPostChange = () => {
    const viewOption = document.getElementById("select-view-option").value;
    setSelectDisplayPostOption(viewOption);
    const timeframe = document.getElementById("select-view-option-timeline")
      .value;
    setViewByTimeframe(timeframe);
    if (timeframe === "All-time") {
      setViewByTimeframeTime(Date.now());
    } else if (timeframe === "Today") {
      setViewByTimeframeTime(86400000);
    } else if (timeframe === "This week") {
      setViewByTimeframeTime(604800000);
    }
  };

  useEffect(() => {
    if (props.view === "userPosts") {
      props.fetchPostsThunk({
        sortBy: "newest",
        whereCondition1: "owner_id",
        whereAssertion: "==",
        whereCondition2: userFromState.userId,
      });
    } else {
      if (selectDisplayPostOption === "Newest") {
        props.fetchPostsThunk({
          sortBy: "newest",
          whereCondition1: "created_at",
          whereAssertion: ">",
          whereCondition2: 0,
        });
      } else {
        props.fetchPostsThunk({
          sortBy: "popular",
          whereCondition1: "created_at",
          whereAssertion: ">",
          whereCondition2: Date.now() - viewByTimeframeTime,
        });
      }
    }
    setPosts(postsFromState);
  }, [posts, props, selectDisplayPostOption, viewByTimeframeTime]);

  //Get user's profile picture
  useEffect(() => {
    const username = userFromState.username;
    if (username) {
      props.fetchUserAvatarThunk({ username });
    }
  }, []);

  useEffect(() => {
    if (postsFromState.posts.length > 0) {
      const displayPost = postsFromState.posts.map((post) => {
        const hasUserVotedForA = post.option_a.includes(userFromState.userId);
        const hasUserVotedForB = post.option_b.includes(userFromState.userId);

        return (
          <Post
            body={post.body}
            optionA={post.option_a}
            optionB={post.option_b}
            created_at={post.created_at}
            id={post.id}
            optionAName={post.option_a_name}
            optionBName={post.option_b_name}
            hasUserVotedForA={hasUserVotedForA}
            hasUserVotedForB={hasUserVotedForB}
            totalVotes={post.total_votes}
          />
        );
      });
      if (props.view === "voteHistory") {
        const userVoteHistory = displayPost.filter((post) => {
          return post.props.hasUserVotedForA || post.props.hasUserVotedForB;
        });
        setDisplayPosts(userVoteHistory);
      } else {
        setDisplayPosts(displayPost);
      }
    }
  }, [postsFromState, selectDisplayPostOption, viewByTimeframeTime]);

  if (!doesUserHaveUsername) {
    return (
      <Modal show>
        <Profile />
      </Modal>
    );
  } else {
    return (
      <div className="bg-blueGray">
        <div>
          <Navbar navigation="/create-post" postAdd="post_add" />
        </div>
        <div
          className={`${
            props.view === "userPosts" ? "show" : "hidden"
          } pt-2 text-grayy text-xl text-center`}
        >
          {userFromState.username} posts
        </div>
        <div
          className={`${
            props.view === "voteHistory" ? "show" : "hidden"
          } pt-2 text-grayy text-xl text-center`}
        >
          {userFromState.username} votes
        </div>
        <div
          className={`${
            props.view === "home" ? "show" : "hidden"
          } flex justify-center items-center`}
        >
          <div className="text-grayy p-2">View By</div>
          <form>
            <select
              className="bg-transparent text-grayy p-2"
              id="select-view-option"
              value={selectDisplayPostOption}
              onChange={handleDisplayPostChange}
            >
              <option value="Newest">Newest</option>
              <option value="Most Popular">Most Popular</option>
            </select>
          </form>
          <form
            className={`${
              selectDisplayPostOption === "Most Popular" ? "show" : "hidden"
            } p-2`}
          >
            <select
              className="bg-transparent text-grayy"
              id="select-view-option-timeline"
              value={viewByTimeframe}
              onChange={handleDisplayPostChange}
            >
              <option value="All-time">All-time</option>
              <option value="Today">Today</option>
              <option value="This week">This week</option>
            </select>
          </form>
        </div>
        <ul>{displayPosts}</ul>
      </div>
    );
  }
};

export default Home;

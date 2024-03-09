import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import SideBar from "../components/side-bar/side-bar";
import "./Home.css";
import CreatePost from "../components/create_req/create-post";
import PostLists from "../components/create_req/PostList";
import PostListProvider, { PostList } from "../store/posts-list-store";
import DeletPostConfirm from "../components/create_req/deletPostConfirm";
import { useContext } from "react";
import { ServiceRequest } from "../apis/serviceReq";
import Spinner from "../components/loading/spinner";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
 const {setSpinner,isSpinner} = useContext(PostList);
  const [results, setResult] = useState([]);
  
  const CenterScreen = () => {
    // fetchPost(results);
    switch (selectedTab) {
      case "Home":
        return <PostLists results={results} onDataFetch={onDataFetch} />;
      case "Create Post":
        return <CreatePost />;
      default:
        return null;
    }
  };
  const splitTags = (value) => {
    let hashtags;
    if (value) {
      const hashtagRegex = /\B#[^\s#]+/g;
      // Extract hashtags from the text
      hashtags = value.match(hashtagRegex);
    }
    return hashtags || [];
  };
  const onDataFetch = () => {
    onHomeLoad();
    console.log("posts");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(console.log);
  };
  useEffect(() => {
     const controller = new AbortController();
     const signal = controller.signal;
    onHomeLoad(signal);
    return ()=>{
      console.log("cleaning up useEffect..");
      controller.abort();
    }
  }, []);

  async function onHomeLoad(signal) {
    try {
      setSpinner(true);
      console.log("fetch started");
      const results = await ServiceRequest.callAPI("/allPosts", {signal});
      if (results.length > 0) {
        console.log("fetch came");
        results.forEach((result) => {
          const tags = result.tags;
          result.tags = splitTags(tags);
          setResult((res) => [result, ...res]);
        });
        console.log("fetch middle" + isSpinner);
      } else {
        setResult({});
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setSpinner(false);
      console.log("fetch ended" + isSpinner);
    }
  }
  

  return (
    <>
    
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          <div className="center-content">
          {isSpinner&&<Spinner/>}
            {results.length > 0 && CenterScreen()}
            <Footer />
          </div>
        </div>
      </div>
      </>
  );
};

export default App;

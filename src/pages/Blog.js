import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const navigations = [
  { title: "Rishi", link: "rishi" },
  { title: "Earl", link: "earl" },
  { title: "Mark", link: "mark" },
];

export default function Blog(props) {
  console.log("props: ", props);

  //#region - URL params
  // const param = props.match.params.blogId;
  // console.log("param: ", param);

  const { blogId } = useParams();
  console.log("params: ", blogId);
  //#endregion - URL param

  //#region - Query Params
  // http://localhost:3000/blog/abcdfr?cat=food&type=small

  // const search = props.location.search;
  // console.log("search: ", search);
  // const query = new URLSearchParams(search)

  const query = new URLSearchParams(useLocation().search);
  console.log("query cat: ", query.get("cat"));
  console.log("query type: ", query.get("type"));
  //#endregion - Query Params

  useEffect(() => {
    console.log("Call useEffect: ", blogId);
    // api call
  }, [blogId]);

  return (
    <div>
      Blog Id: {blogId}
      <br />
      <br />
      {navigations.map(({ title, link }) => (
        <>
          <Link key={link} to={`/blog/${link}`}>
            {title}
          </Link>
          <br />
        </>
      ))}
    </div>
  );
}

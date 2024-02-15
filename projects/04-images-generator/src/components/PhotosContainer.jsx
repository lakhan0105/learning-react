import React from "react";
import { useGlobalContext } from "../context/Context";
import { customAuth } from "../utils";
import { useQuery } from "@tanstack/react-query";

export const PhotosContainer = () => {
  const { searchTerm } = useGlobalContext();

  const api = customAuth(searchTerm);
  const result = useQuery({
    queryKey: ["searchResult", searchTerm],
    queryFn: async () => {
      const response = await api.get("search/photos");
      return response;
    },
  });
  const imgsData = result?.data?.data?.results;

  if (result.isLoading) {
    return <h1>Loading....</h1>;
  }

  if (result.isError) {
    return <h1>There was an error</h1>;
  }

  if (result.data.data.results.length < 1) {
    return <h1>No results found for the keyword</h1>;
  }

  return (
    <section className="photos-container">
      {imgsData?.map((imgData) => {
        // console.log(imgData);

        const { id, links, urls, user } = imgData;
        const { self } = links;
        const { regular: imgUrl } = urls;

        // user data
        const { first_name, last_name, links: userLinks } = user;
        const { html: userSelf } = userLinks;

        return (
          <article className="single-photo-card" key={id}>
            <img className="single-photo-img" src={imgUrl} alt="not found" />
            <div className="user-container">
              <span>Photo by: </span>
              <a className="user-name" href={userSelf}>
                {first_name} {last_name}
              </a>
            </div>
          </article>
        );
      })}
    </section>
  );
};

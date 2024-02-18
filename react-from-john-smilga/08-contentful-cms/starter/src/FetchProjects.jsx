import React, { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "kt9adbyigcv5",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const resp = await client.getEntries({ content_type: "page" });

      const data = resp.items.map((item) => {
        const { internalName, url, images } = item.fields;
        const imgUrl = images?.fields?.file?.url;
        const id = item.sys.id;
        return { id, projectName: internalName, projectUrl: url, imgUrl };
      });

      setProjects(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

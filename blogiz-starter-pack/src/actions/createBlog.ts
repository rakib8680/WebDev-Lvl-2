"use server";

import { TBlog } from "@/types";

export const createBlog = async (data: TBlog) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const blogInfo = res.json();

  return blogInfo;
};

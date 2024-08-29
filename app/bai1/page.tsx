import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "danh sach bai viet",
};
const posts = [
  {
    id: 1,
    title: "Post 1",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1724488258906-ce80713e28ce?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Post 2",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1724488258906-ce80713e28ce?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Post 3",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1724488258906-ce80713e28ce?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Post 4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1724488258906-ce80713e28ce?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Post 5",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1724488258906-ce80713e28ce?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Post 6",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1724488258906-ce80713e28ce?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function page() {
  return (
    <div className="flex-wrap flex w-[500px] justify-between ">
      {posts.map((post) => (
        <div key={post.id}>
          <Image
            src={post.thumbnailUrl}
            alt={post.title}
            width={150}
            height={150}
          />
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}

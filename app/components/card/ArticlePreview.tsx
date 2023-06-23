import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PostMetadata } from "@/app/type/PostMetadata";

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  dark?: boolean | undefined;
  category?: string | undefined;
  PostMetaData: PostMetadata;
}

const ArticlePreview: React.FC<Props> = ({
  name = "Block name",
  description = "This is an amazing block",
  imageUrl = "/project-1.png",
  bgColor = "#e4e4e7",
  dark = false,
  category,
  PostMetaData,
}) => {
  return (
    <Link href={`/articles/${category}/${PostMetaData.slug}`}>
        <div className={`mt-8 h-[19rem] md:h-[25rem] lg:h-[25rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
      style={{ background: `${bgColor}` }}>
          <div
            className={`h-full w-full object-scale-down sm:bg-bottom-center px-10 py-6 duration-[500ms] hover:scale-105 bg-cover bg-no-repeat bg-center transition-all ease-in-out`}
            style={{ backgroundImage: `url('${imageUrl}')`}}
          >
            <div className="flex justify-between">
              <div>
                <h2 className="font-medium text-lg dark:text-white">{PostMetaData?.title}</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-300">
                  {PostMetaData?.subtitle}
                </p>
              </div>
          
              <div className="flex items-center">
                <p className="text-gray-600 text-sm">{PostMetaData?.date}</p>
              </div>
            </div>
          </div>
        </div>
    </Link>
  );
};

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
};

export default ArticlePreview;

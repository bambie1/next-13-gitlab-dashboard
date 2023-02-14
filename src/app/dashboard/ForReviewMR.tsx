import { formatDistance } from "date-fns";
import Link from "next/link";
import { FC } from "react";

export interface IReviewMR {
  title: string;
  webUrl: string;
  author: {
    name: string;
  };
  updatedAt: Date;
}

interface Props {
  item: IReviewMR;
}

const ForReviewMR: FC<Props> = ({ item }) => {
  return (
    <Link
      href={item.webUrl}
      target="_blank"
      className="flex flex-col rounded-md border p-2 transition duration-200 hover:border-gray-400 hover:shadow-sm"
    >
      <p className="text-sm text-gray-400">Created by {item.author.name}</p>
      <p>{item.title}</p>
      <p className="mt-2 text-sm text-gray-400">
        Updated{" "}
        <span className="underline">
          {formatDistance(new Date(item.updatedAt), new Date(), {
            addSuffix: true,
          })}
        </span>
      </p>
    </Link>
  );
};

export default ForReviewMR;

import { formatDistance } from "date-fns";
import Link from "next/link";
import { FC } from "react";

export interface IAuthoredMR {
  title: string;
  webUrl: string;
  author: {
    name: string;
  };
  updatedAt: Date;
  iid: string;
}

interface Props {
  item: IAuthoredMR;
}

const AuthoredMR: FC<Props> = ({ item }) => {
  return (
    <Link
      href={item.webUrl}
      target="_blank"
      className="flex flex-col rounded-md border p-2 transition duration-200 hover:border-gray-400 hover:shadow-sm"
    >
      <p className="text-sm text-gray-400">!{item.iid}</p>
      <p>{item.title}</p>
      <p className="mt-2 text-sm text-gray-400">
        Last updated{" "}
        <span className="underline">
          {formatDistance(new Date(item.updatedAt), new Date(), {
            addSuffix: true,
          })}
        </span>
      </p>
    </Link>
  );
};

export default AuthoredMR;

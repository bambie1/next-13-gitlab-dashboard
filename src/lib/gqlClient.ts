import { GraphQLClient } from "graphql-request";

export const gqlClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_GITLAB_URL!}/api/graphql`,
  {
    fetch,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITLAB_ACCESS_TOKEN}`,
    },
  }
);

import { gql } from "graphql-request";

import { gqlClient } from "@/lib/gqlClient";

async function getGitlabUserInfo() {
  try {
    const data = await gqlClient.request(userQuery);

    return data;
  } catch (error) {
    console.log({ error });
    throw new Error("something happened");
  }
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await getGitlabUserInfo();

  return (
    <section>
      <div className="mb-10 text-center">
        <p>Current user</p>
        <div className="flex items-center justify-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_GITLAB_URL}/${user.avatarUrl}`}
            alt={`${user.name}'s avatar`}
            width={20}
            height={20}
            className="border-dark aspect-square w-8 flex-shrink-0 rounded-full border object-cover"
          />

          <div>
            <p className="text-lg font-bold">{user.name}</p>
            <p className="-mt-2 font-light">{user.username}</p>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}

const userQuery = gql`
  query getInfo {
    user(username: "${process.env.NEXT_PUBLIC_GITLAB_USERNAME}") {
      username
      name
      avatarUrl
    }
  }
`;

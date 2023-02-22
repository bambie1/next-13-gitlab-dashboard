import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { gql } from "graphql-request";

import { gqlClient } from "@/lib/gqlClient";
import AuthoredMR, { IAuthoredMR } from "@/app/dashboard/AuthoredMR";
import ForReviewMR, { IReviewMR } from "@/app/dashboard/ForReviewMR";

const SSRDashboard: NextPage = (props: any) => {
  const { user } = props.data;

  const authoredMRs: IAuthoredMR[] = user.authoredMergeRequests.nodes;
  const forReviewMRs: IReviewMR[] = user.reviewRequestedMergeRequests.nodes;

  return (
    <>
      <Head>
        <title>Gitlab Dashboard</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="mb-10 text-center">
          <p>Current user</p>
          <div className="flex items-center justify-center gap-3 text-left">
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

        <div className="mt-20 grid gap-4 lg:grid-cols-2">
          <div>
            <p className="mb-6 inline-flex border-b border-gray-600 pb-1 text-lg font-semibold lg:text-xl">
              Authored MRs
            </p>
            <ul className="grid gap-2">
              {authoredMRs.length &&
                authoredMRs.map((item) => (
                  <li key={item.webUrl}>
                    <AuthoredMR item={item} />
                  </li>
                ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-4">
            <p className="mb-6 inline-flex border-b border-gray-600 pb-1 text-lg font-semibold lg:text-xl">
              For-review MRs
            </p>
            <ul className="grid gap-2">
              {forReviewMRs.length &&
                forReviewMRs.map((item) => (
                  <li key={item.webUrl}>
                    <ForReviewMR item={item} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SSRDashboard;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await gqlClient.request(userQuery);

    await sleep(5000);

    return {
      props: { data },
    };
  } catch (error) {
    console.log({ error });
    throw new Error("something happened");
  }
};

const userQuery = gql`
  query getInfo {
    user(username: "${process.env.NEXT_PUBLIC_GITLAB_USERNAME}") {
      username
      name
      avatarUrl
      authoredMergeRequests(state: opened, updatedAfter: "2023-01-29") {
        nodes {
          title
          approvedBy {
            nodes {
              username
            }
          }
          webUrl
          iid
          updatedAt
        }
      }
      reviewRequestedMergeRequests(state: opened, updatedAfter: "2023-01-29") {
        nodes {
          title
          author {
            name
          }
          approvedBy {
            nodes {
              username
            }
          }
          webUrl
          updatedAt
        }
      }
    }
  }
`;
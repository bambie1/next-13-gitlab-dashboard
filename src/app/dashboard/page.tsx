import { gqlClient } from "@/lib/gqlClient";
import { gql } from "graphql-request";

import AuthoredMR, { IAuthoredMR } from "./AuthoredMR";
import ForReviewMR, { IReviewMR } from "./ForReviewMR";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function getGitlabInfo() {
  try {
    const data = await gqlClient.request(authoredQuery);

    await sleep(5000);
    return data;
  } catch (error) {
    console.log({ error });
    throw new Error("something happened");
  }
}

export default async function Dashboard() {
  const gitlabInfo = await getGitlabInfo();

  const authoredMRs: IAuthoredMR[] =
    gitlabInfo.user.authoredMergeRequests.nodes;
  const forReviewMRs: IReviewMR[] =
    gitlabInfo.user.reviewRequestedMergeRequests.nodes;

  return (
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
  );
}

const authoredQuery = gql`
  query getInfo {
    user(username: "${process.env.NEXT_PUBLIC_GITLAB_USERNAME}") {
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

import { gql } from "graphql-request";
import { h as hygraph } from "../../../../chunks/hygraph.js";
async function load({ params }) {
  const { slug } = params;
  const query = gql`
        query GetPostBySlug($slug: String!) {
            kennisbanks(where: { slug: $slug }) {
                author
                categorie
                createdAt
                date
                image {
                    url
                }
                title
                content {
                    raw
                    html
                    markdown
                    text
                }
                slug
            }
        }
    `;
  const variables = { slug };
  try {
    const data = await hygraph.request(query, variables);
    if (data.kennisbanks.length > 0) {
      return {
        post: data.kennisbanks[0]
        // Assuming you want to return a single project
      };
    } else {
      return {
        status: 404,
        // Not Found
        error: "Post not found"
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      // Internal Server Error
      error: "Internal server error"
    };
  }
}
export {
  load
};

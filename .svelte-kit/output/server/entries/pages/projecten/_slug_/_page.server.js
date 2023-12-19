import { gql } from "graphql-request";
import { h as hygraph } from "../../../../chunks/hygraph.js";
async function load({ params }) {
  const { slug } = params;
  const query = gql`
        query GetProjectBySlug($slug: String!) {
            projectens(where: { slug: $slug }) {
                id
                categorie
                intro
                plaats {
                    latitude
                    longitude
                }
                image {
                    url
                }
                content {
                    html
                }
                publishedAt
                slug
                title
            }
        }
    `;
  const variables = { slug };
  try {
    const data = await hygraph.request(query, variables);
    if (data.projectens.length > 0) {
      return {
        project: data.projectens[0]
        // Assuming you want to return a single project
      };
    } else {
      return {
        status: 404,
        // Not Found
        error: "Project not found"
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

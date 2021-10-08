import axios from "axios"

const AUTH_KEY = "YOUR_API_KEY";

export default {
    async getTopStarredRepositoriesByPage(page, size) {
        let res = await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&per_page=${size}&page=${page}`);
        return res.data;
    },
    async getTopStarredOrganizationsByPage(page, size) {
        let res = await axios.get(`https://api.github.com/search/users?q=type:org&sort=followers&per_page=${size}&page=${page}`);
        return res.data;
    },
    async getTopStarredUsersByPage(page, size) {
        let res = await axios.get(`https://api.github.com/search/users?q=followers:>=0&type=user&&per_page=${size}&page=${page}`);
        return res.data;
    },
    //The User object can be a user or an organization
    async getRepositoriesByUser(size, login, before, after) {
        let next = before ? `before: "${before}"` : after ? `after: "${after}"` : "";
        let queryArg = `   
          avatar_url: avatarUrl createdAt name url
          repositories(first: 10 ${next} isFork: false ownerAffiliations: OWNER orderBy: {field: STARGAZERS, direction: DESC}) {
            items: nodes {
              id name nameWithOwner html_url:url description homepageUrl createdAt star: stargazerCount
            }
            totalCount
            pageInfo {
              startCursor endCursor hasPreviousPage hasNextPage
            }
          }
        `
        let query = `
            {
              user: repositoryOwner(login: "${login}") {
                login type: __typename
                ... on User {
                  bio company ${queryArg}
                }
                ... on Organization {
                  bio: description ${queryArg}
                  }
              }
            }
        `;
        let res = await axios.post(`https://api.github.com/graphql`, {
                query: query,
            },
            {
                headers:
                    {Authorization: `bearer ${AUTH_KEY}`}
            }
        );
        return res.data;
    },
    async getRepositoryDetails(repo) {
        let res = await axios.get(`https://api.github.com/repos${repo}`);
        return res.data;
    }
}

import axios from "axios"

export default {
    async getTopStarredRepositoriesByPage(page, size) {
        let res = await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&per_page=${size}&page=${page}`);
        return res.data;
    },
    async getTopStarredOrganizationsByPage(page, size) {
        let res = await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&per_page=${size}&page=${page}`);
        return res.data;
    },
    async getTopStarredUsersByPage(page, size) {
        let res = await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&per_page=${size}&page=${page}`);
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
              user: repositoryOwner(login: "Microsoft") {
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
                    {Authorization: "bearer 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"}
            }
        );
        return res.data;
    },
    async getRepositoryDetails(repo) {
        let res = await axios.get(`https://api.github.com/repos${repo}`);
        return res.data;
    }
}

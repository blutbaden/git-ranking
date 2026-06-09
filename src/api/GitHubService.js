import axios from "axios"

const AUTH_KEY = import.meta.env.VITE_GITHUB_TOKEN || "";

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: AUTH_KEY ? { Authorization: `bearer ${AUTH_KEY}` } : {}
});

export default {
    async getTopStarredRepositoriesByPage(page, size) {
        let res = await api.get(`/search/repositories?q=stars:%3E1&sort=stars&per_page=${size}&page=${page}`);
        return res.data;
    },
    async getTopStarredOrganizationsByPage(page, size) {
        let res = await api.get(`/search/users?q=type:org&sort=followers&per_page=${size}&page=${page}`);
        return res.data;
    },
    async getTopStarredUsersByPage(page, size) {
        let res = await api.get(`/search/users?q=followers:%3E=0&type=user&per_page=${size}&page=${page}`);
        return res.data;
    },
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
            query($login: String!) {
              user: repositoryOwner(login: $login) {
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
        let res = await api.post(`/graphql`, { query, variables: { login } });
        return res.data;
    },
    async getRepositoryDetails(repo) {
        let res = await api.get(`/repos${repo}`);
        return res.data;
    }
}

class Github{
    constructor(){
        this.client_id = '7f4b884a49beca349d15'
        this.client_secret = '23a7073133229e06e6623c46f93c18639d402432'
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)    
        
        const profile= await profileResponse.json();
        const repos = await repoResponse.json();
        console.log(profile);

        return{
            profile,
            repos
        }
    }
}







// https://api.github.com/users/catfishbrother?client_id=%227f4b884a49beca349d15%22&client_secret%20=%20%2223a7073133229e06e6623c46f93c18639d402432%22
// {
//     "login": "catfishbrother",
//     "id": 43376490,
//     "node_id": "MDQ6VXNlcjQzMzc2NDkw",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/43376490?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/catfishbrother",
//     "html_url": "https://github.com/catfishbrother",
//     "followers_url": "https://api.github.com/users/catfishbrother/followers",
//     "following_url": "https://api.github.com/users/catfishbrother/following{/other_user}",
//     "gists_url": "https://api.github.com/users/catfishbrother/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/catfishbrother/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/catfishbrother/subscriptions",
//     "organizations_url": "https://api.github.com/users/catfishbrother/orgs",
//     "repos_url": "https://api.github.com/users/catfishbrother/repos",
//     "events_url": "https://api.github.com/users/catfishbrother/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/catfishbrother/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "public_repos": 2,
//     "public_gists": 0,
//     "followers": 0,
//     "following": 0,
//     "created_at": "2018-09-18T12:21:58Z",
//     "updated_at": "2018-09-18T12:21:59Z"
//   }
var assert      = require("assert");
var GithubHook  = require("../libs/github");

describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            var input = {
                ref: 'refs/heads/master',
                before: 'fc54e810a3ef8dc162fd0ddfceabcd30e06c3690',
                after: '5be3ce0d715935744762dbebb9ae3f219acca58f',
                created: false,
                deleted: false,
                forced: false,
                base_ref: null,
                compare: 'https://github.com/particle4dev/test-git-hook/compare/fc54e810a3ef...5be3ce0d7159',
                commits: [{
                    id: '5be3ce0d715935744762dbebb9ae3f219acca58f',
                    distinct: true,
                    message: 'Update+README.md',
                    timestamp: '2015-06-24T23:40:09+07:00',
                    url: 'https://github.com/particle4dev/test-git-hook/commit/5be3ce0d715935744762dbebb9ae3f219acca58f',
                    author: [Object],
                    committer: [Object],
                    added: [],
                    removed: [],
                    modified: [Object]
                }],
                head_commit: {
                    id: '5be3ce0d715935744762dbebb9ae3f219acca58f',
                    distinct: true,
                    message: 'Update+README.md',
                    timestamp: '2015-06-24T23:40:09+07:00',
                    url: 'https://github.com/particle4dev/test-git-hook/commit/5be3ce0d715935744762dbebb9ae3f219acca58f',
                    author: {
                        name: 'Le+Hoang',
                        email: 'particle4dev@gmail.com',
                        username: 'particle4dev'
                    },
                    committer: {
                        name: 'Le+Hoang',
                        email: 'particle4dev@gmail.com',
                        username: 'particle4dev'
                    },
                    added: [],
                    removed: [],
                    modified: ['README.md']
                },
                repository: {
                    id: 32218919,
                    name: 'test-git-hook',
                    full_name: 'particle4dev/test-git-hook',
                    owner: {
                        name: 'particle4dev',
                        email: 'particle4dev@gmail.com'
                    },
                    private: false,
                    html_url: 'https://github.com/particle4dev/test-git-hook',
                    description: '',
                    fork: false,
                    url: 'https://github.com/particle4dev/test-git-hook',
                    forks_url: 'https://api.github.com/repos/particle4dev/test-git-hook/forks',
                    keys_url: 'https://api.github.com/repos/particle4dev/test-git-hook/keys{/key_id}',
                    collaborators_url: 'https://api.github.com/repos/particle4dev/test-git-hook/collaborators{/collaborator}',
                    teams_url: 'https://api.github.com/repos/particle4dev/test-git-hook/teams',
                    hooks_url: 'https://api.github.com/repos/particle4dev/test-git-hook/hooks',
                    issue_events_url: 'https://api.github.com/repos/particle4dev/test-git-hook/issues/events{/number}',
                    events_url: 'https://api.github.com/repos/particle4dev/test-git-hook/events',
                    assignees_url: 'https://api.github.com/repos/particle4dev/test-git-hook/assignees{/user}',
                    branches_url: 'https://api.github.com/repos/particle4dev/test-git-hook/branches{/branch}',
                    tags_url: 'https://api.github.com/repos/particle4dev/test-git-hook/tags',
                    blobs_url: 'https://api.github.com/repos/particle4dev/test-git-hook/git/blobs{/sha}',
                    git_tags_url: 'https://api.github.com/repos/particle4dev/test-git-hook/git/tags{/sha}',
                    git_refs_url: 'https://api.github.com/repos/particle4dev/test-git-hook/git/refs{/sha}',
                    trees_url: 'https://api.github.com/repos/particle4dev/test-git-hook/git/trees{/sha}',
                    statuses_url: 'https://api.github.com/repos/particle4dev/test-git-hook/statuses/{sha}',
                    languages_url: 'https://api.github.com/repos/particle4dev/test-git-hook/languages',
                    stargazers_url: 'https://api.github.com/repos/particle4dev/test-git-hook/stargazers',
                    contributors_url: 'https://api.github.com/repos/particle4dev/test-git-hook/contributors',
                    subscribers_url: 'https://api.github.com/repos/particle4dev/test-git-hook/subscribers',
                    subscription_url: 'https://api.github.com/repos/particle4dev/test-git-hook/subscription',
                    commits_url: 'https://api.github.com/repos/particle4dev/test-git-hook/commits{/sha}',
                    git_commits_url: 'https://api.github.com/repos/particle4dev/test-git-hook/git/commits{/sha}',
                    comments_url: 'https://api.github.com/repos/particle4dev/test-git-hook/comments{/number}',
                    issue_comment_url: 'https://api.github.com/repos/particle4dev/test-git-hook/issues/comments{/number}',
                    contents_url: 'https://api.github.com/repos/particle4dev/test-git-hook/contents/{+path}',
                    compare_url: 'https://api.github.com/repos/particle4dev/test-git-hook/compare/{base}...{head}',
                    merges_url: 'https://api.github.com/repos/particle4dev/test-git-hook/merges',
                    archive_url: 'https://api.github.com/repos/particle4dev/test-git-hook/{archive_format}{/ref}',
                    downloads_url: 'https://api.github.com/repos/particle4dev/test-git-hook/downloads',
                    issues_url: 'https://api.github.com/repos/particle4dev/test-git-hook/issues{/number}',
                    pulls_url: 'https://api.github.com/repos/particle4dev/test-git-hook/pulls{/number}',
                    milestones_url: 'https://api.github.com/repos/particle4dev/test-git-hook/milestones{/number}',
                    notifications_url: 'https://api.github.com/repos/particle4dev/test-git-hook/notifications{?since,all,participating}',
                    labels_url: 'https://api.github.com/repos/particle4dev/test-git-hook/labels{/name}',
                    releases_url: 'https://api.github.com/repos/particle4dev/test-git-hook/releases{/id}',
                    created_at: 1426347656,
                    updated_at: '2015-03-14T15:40:56Z',
                    pushed_at: 1435164009,
                    git_url: 'git://github.com/particle4dev/test-git-hook.git',
                    ssh_url: 'git@github.com:particle4dev/test-git-hook.git',
                    clone_url: 'https://github.com/particle4dev/test-git-hook.git',
                    svn_url: 'https://github.com/particle4dev/test-git-hook',
                    homepage: null,
                    size: 120,
                    stargazers_count: 0,
                    watchers_count: 0,
                    language: null,
                    has_issues: true,
                    has_downloads: true,
                    has_wiki: true,
                    has_pages: false,
                    forks_count: 0,
                    mirror_url: null,
                    open_issues_count: 0,
                    forks: 0,
                    open_issues: 0,
                    watchers: 0,
                    default_branch: 'master',
                    stargazers: 0,
                    master_branch: 'master'
                },
                pusher: {
                    name: 'particle4dev',
                    email: 'particle4dev@gmail.com'
                },
                sender: {
                    login: 'particle4dev',
                    id: 3245868,
                    avatar_url: 'https://avatars.githubusercontent.com/u/3245868?v=3',
                    gravatar_id: '',
                    url: 'https://api.github.com/users/particle4dev',
                    html_url: 'https://github.com/particle4dev',
                    followers_url: 'https://api.github.com/users/particle4dev/followers',
                    following_url: 'https://api.github.com/users/particle4dev/following{/other_user}',
                    gists_url: 'https://api.github.com/users/particle4dev/gists{/gist_id}',
                    starred_url: 'https://api.github.com/users/particle4dev/starred{/owner}{/repo}',
                    subscriptions_url: 'https://api.github.com/users/particle4dev/subscriptions',
                    organizations_url: 'https://api.github.com/users/particle4dev/orgs',
                    repos_url: 'https://api.github.com/users/particle4dev/repos',
                    events_url: 'https://api.github.com/users/particle4dev/events{/privacy}',
                    received_events_url: 'https://api.github.com/users/particle4dev/received_events',
                    type: 'User',
                    site_admin: false
                }
            };
            var expect = {
                files: {
                    all: ['README.md'],
                    added: [],
                    deleted: [],
                    modified: ['README.md']
                },
                tag: '',
                branch: 'master',
                repo: 'particle4dev/test-git-hook',
                sha: '5be3ce0d715935744762dbebb9ae3f219acca58f',
                time: 1435164009,
                urls: {
                    head: 'https://github.com/particle4dev/test-git-hook/commit/5be3ce0d715935744762dbebb9ae3f219acca58f',
                    branch: '/tree/master',
                    tag: '',
                    repo: 'https://github.com/particle4dev/test-git-hook',
                    compare: 'https://github.com/particle4dev/test-git-hook/compare/fc54e810a3ef...5be3ce0d7159'
                },
                reset: false,
                pusher: 'particle4dev',
                owner: 'particle4dev'
            };
            var githubHook = new GithubHook();
            var output = githubHook.simplifyPayload(input);

            assert.equal(expect.owner, output.owner);
            assert.equal(expect.pusher, output.pusher);
        })
    })
});
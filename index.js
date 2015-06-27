// Listen on port 9001
var gith 	= require('./libs/gith').create( 8082 );
var sites 	= require('./sites');

gith({
    repo: 'iojs/iojs-vi'
})
.on( 'all', sites.iojsvi);

gith({
    repo: 'particle4dev/test-git-hook'
})
.on( 'all', sites.test);

gith({
    repo: 'particle4devs-team/particle4dev-sites'
})
.on( 'all', sites.particle4devteam);

gith({
    repo: '*'
})
.on( 'all', sites.particle4devteam);

/* Simple Hello World in Node.js */
var querystring         = require("querystring");
var a = 'payload=%7B%22ref%22%3A%22refs%2Fheads%2Fmaster%22%2C%22before%22%3A%22fc54e810a3ef8dc162fd0ddfceabcd30e06c3690%22%2C%22after%22%3A%225be3ce0d715935744762dbebb9ae3f219acca58f%22%2C%22created%22%3Afalse%2C%22deleted%22%3Afalse%2C%22forced%22%3Afalse%2C%22base_ref%22%3Anull%2C%22compare%22%3A%22https%3A%2F%2Fgithub.com%2Fparticle4dev%2Ftest-git-hook%2Fcompare%2Ffc54e810a3ef...5be3ce0d7159%22%2C%22commits%22%3A%5B%7B%22id%22%3A%225be3ce0d715935744762dbebb9ae3f219acca58f%22%2C%22distinct%22%3Atrue%2C%22message%22%3A%22Update+README.md%22%2C%22timestamp%22%3A%222015-06-24T23%3A40%3A09%2B07%3A00%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Fparticle4dev%2Ftest-git-hook%2Fcommit%2F5be3ce0d715935744762dbebb9ae3f219acca58f%22%2C%22author%22%3A%7B%22name%22%3A%22Le+Hoang%22%2C%22email%22%3A%22particle4dev%40gmail.com%22%2C%22username%22%3A%22particle4dev%22%7D%2C%22committer%22%3A%7B%22name%22%3A%22Le+Hoang%22%2C%22email%22%3A%22particle4dev%40gmail.com%22%2C%22username%22%3A%22particle4dev%22%7D%2C%22added%22%3A%5B%5D%2C%22removed%22%3A%5B%5D%2C%22modified%22%3A%5B%22README.md%22%5D%7D%5D%2C%22head_commit%22%3A%7B%22id%22%3A%225be3ce0d715935744762dbebb9ae3f219acca58f%22%2C%22distinct%22%3Atrue%2C%22message%22%3A%22Update+README.md%22%2C%22timestamp%22%3A%222015-06-24T23%3A40%3A09%2B07%3A00%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Fparticle4dev%2Ftest-git-hook%2Fcommit%2F5be3ce0d715935744762dbebb9ae3f219acca58f%22%2C%22author%22%3A%7B%22name%22%3A%22Le+Hoang%22%2C%22email%22%3A%22particle4dev%40gmail.com%22%2C%22username%22%3A%22particle4dev%22%7D%2C%22committer%22%3A%7B%22name%22%3A%22Le+Hoang%22%2C%22email%22%3A%22particle4dev%40gmail.com%22%2C%22username%22%3A%22particle4dev%22%7D%2C%22added%22%3A%5B%5D%2C%22removed%22%3A%5B%5D%2C%22modified%22%3A%5B%22README.md%22%5D%7D%2C%22repository%22%3A%7B%22id%22%3A32218919%2C%22name%22%3A%22test-git-hook%22%2C%22full_name%22%3A%22particle4dev%2Ftest-git-hook%22%2C%22owner%22%3A%7B%22name%22%3A%22particle4dev%22%2C%22email%22%3A%22particle4dev%40gmail.com%22%7D%2C%22private%22%3Afalse%2C%22html_url%22%3A%22https%3A%2F%2Fgithub.com%2Fparticle4dev%2Ftest-git-hook%22%2C%22description%22%3A%22%22%2C%22fork%22%3Afalse%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2Fparticle4dev%2Ftest-git-hook%22%2C%22forks_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fforks%22%2C%22keys_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fkeys%7B%2Fkey_id%7D%22%2C%22collaborators_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fcollaborators%7B%2Fcollaborator%7D%22%2C%22teams_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fteams%22%2C%22hooks_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fhooks%22%2C%22issue_events_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fissues%2Fevents%7B%2Fnumber%7D%22%2C%22events_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fevents%22%2C%22assignees_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fassignees%7B%2Fuser%7D%22%2C%22branches_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fbranches%7B%2Fbranch%7D%22%2C%22tags_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Ftags%22%2C%22blobs_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fgit%2Fblobs%7B%2Fsha%7D%22%2C%22git_tags_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fgit%2Ftags%7B%2Fsha%7D%22%2C%22git_refs_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fgit%2Frefs%7B%2Fsha%7D%22%2C%22trees_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fgit%2Ftrees%7B%2Fsha%7D%22%2C%22statuses_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fstatuses%2F%7Bsha%7D%22%2C%22languages_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Flanguages%22%2C%22stargazers_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fstargazers%22%2C%22contributors_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fcontributors%22%2C%22subscribers_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fsubscribers%22%2C%22subscription_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fsubscription%22%2C%22commits_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fcommits%7B%2Fsha%7D%22%2C%22git_commits_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fgit%2Fcommits%7B%2Fsha%7D%22%2C%22comments_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fcomments%7B%2Fnumber%7D%22%2C%22issue_comment_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fissues%2Fcomments%7B%2Fnumber%7D%22%2C%22contents_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fcontents%2F%7B%2Bpath%7D%22%2C%22compare_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fcompare%2F%7Bbase%7D...%7Bhead%7D%22%2C%22merges_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fmerges%22%2C%22archive_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2F%7Barchive_format%7D%7B%2Fref%7D%22%2C%22downloads_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fdownloads%22%2C%22issues_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fissues%7B%2Fnumber%7D%22%2C%22pulls_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fpulls%7B%2Fnumber%7D%22%2C%22milestones_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fmilestones%7B%2Fnumber%7D%22%2C%22notifications_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Fnotifications%7B%3Fsince%2Call%2Cparticipating%7D%22%2C%22labels_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Flabels%7B%2Fname%7D%22%2C%22releases_url%22%3A%22https%3A%2F%2Fapi.github.com%2Frepos%2Fparticle4dev%2Ftest-git-hook%2Freleases%7B%2Fid%7D%22%2C%22created_at%22%3A1426347656%2C%22updated_at%22%3A%222015-03-14T15%3A40%3A56Z%22%2C%22pushed_at%22%3A1435164009%2C%22git_url%22%3A%22git%3A%2F%2Fgithub.com%2Fparticle4dev%2Ftest-git-hook.git%22%2C%22ssh_url%22%3A%22git%40github.com%3Aparticle4dev%2Ftest-git-hook.git%22%2C%22clone_url%22%3A%22https%3A%2F%2Fgithub.com%2Fparticle4dev%2Ftest-git-hook.git%22%2C%22svn_url%22%3A%22https%3A%2F%2Fgithub.com%2Fparticle4dev%2Ftest-git-hook%22%2C%22homepage%22%3Anull%2C%22size%22%3A120%2C%22stargazers_count%22%3A0%2C%22watchers_count%22%3A0%2C%22language%22%3Anull%2C%22has_issues%22%3Atrue%2C%22has_downloads%22%3Atrue%2C%22has_wiki%22%3Atrue%2C%22has_pages%22%3Afalse%2C%22forks_count%22%3A0%2C%22mirror_url%22%3Anull%2C%22open_issues_count%22%3A0%2C%22forks%22%3A0%2C%22open_issues%22%3A0%2C%22watchers%22%3A0%2C%22default_branch%22%3A%22master%22%2C%22stargazers%22%3A0%2C%22master_branch%22%3A%22master%22%7D%2C%22pusher%22%3A%7B%22name%22%3A%22particle4dev%22%2C%22email%22%3A%22particle4dev%40gmail.com%22%7D%2C%22sender%22%3A%7B%22login%22%3A%22particle4dev%22%2C%22id%22%3A3245868%2C%22avatar_url%22%3A%22https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3245868%3Fv%3D3%22%2C%22gravatar_id%22%3A%22%22%2C%22url%22%3A%22https%3A%2F%2Fapi.github.com%2Fusers%2Fparticle4dev%22%2C%22html_url%22%3A%22https%3A%2F%2Fgithub.com%2Fparticle4dev%22%2C%22followers_url%22%3A%22https%3A%2F%2Fapi.github.com%2Fusers%2Fparticle4dev%2Ffollowers%22%2C%22following_url%22%3A%22https%3A%2F%2Fapi.github.com%2Fusers%2Fparticle4dev%2Ffollowing%7B%2Fother_user%7D%22%2C%22gists_url%22%3A%22https%3A%2F%2Fapi.github.com%2Fusers%2Fparticle4dev%2Fgists%7B%2Fgist_id%7D%22%2C%22starred_url%22%3A%22https%3A%2F%2Fapi.github.com%2Fusers%2Fparticle4dev%2Fstarred%7B%2Fowner%7D%7B%2Frepo%7D%22%2C%22subscriptions_url%22%3A%22https%3A%2F%2Fapi.github.com%2Fusers%2Fparticle4dev%2Fsubscriptions%22%2C%22organizations_url%22%3A%22https%3A%2F%2Fapi.github.com%2Fusers%2Fparticle4dev%2Forgs%22%2C%22repos_url%22%3A%22https%3A%2F%2Fapi.github.com%2Fusers%2Fparticle4dev%2Frepos%22%2C%22events_url%22%3A%22https%3A%2F%2Fapi.github.com%2Fusers%2Fparticle4dev%2Fevents%7B%2Fprivacy%7D%22%2C%22received_events_url%22%3A%22https%3A%2F%2Fapi.github.com%2Fusers%2Fparticle4dev%2Freceived_events%22%2C%22type%22%3A%22User%22%2C%22site_admin%22%3Afalse%7D%7D';
var payload = JSON.parse( querystring.unescape(a.slice(8)) );

var github = require('./libs/github');
console.log(github(payload));

'use strict';

{
  const selectMenu = document.querySelector('select');
  const contributorsContainer = document.querySelector('.contributors-container');

  function fetchJSON(url, cb) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `Error: ${response.status} - ${response.statusText}.`
          );
        }
        return response.json();

      })
      .then((data) => {
        cb(null, data)
      })
      .catch((error) => cb(error, null));
  }

  function createAndAppend(name, parent, options = {}) {
    const elem = document.createElement(name);
    parent.appendChild(elem);
    Object.entries(options).forEach(([key, value]) => {
      if (key === 'text') {
        elem.textContent = value;
      } else {
        elem.setAttribute(key, value);
      }
    });
    return elem;
  }

  function renderRepoDetails(repo, ul) {
    const li = createAndAppend('li', ul);
    repoCreator(repo, li)
  }

   function main(url) {
    fetchJSON(url, (err, repos) => {
      const root = document.getElementById('root');
      if (err) {
        createAndAppend('div', root, {
          text: err.message,
          class: 'alert-error',
        });
        return;
      }
      selectMenuCreator(repos);
    });
  }

  //CREATES REPO
  function repoCreator(repo, li) {
    const repoInfos = [repo.name, repo.description, repo.forks, new Date(repo.updated_at).toDateString()];
    const names = ['Repository', 'Description', 'Forks', 'Updated'];

    repoInfos.forEach((repoInfo, index) => {
      const p = createAndAppend('p', li);
      const span1 = createAndAppend('span', p, {
        text: names[index],
        class: 'repo-span bold'
      })
      const span2 = createAndAppend('span', p, {
        text: `: ${repoInfo}`,
        class: 'repo-span'
      });
    })
  }

  //SELECT MENU CREATOR
  function selectMenuCreator(repos) {
    const repoContainer = document.querySelector('.repo-container');
    const repoUl = createAndAppend('ul', repoContainer);
    renderRepoDetails(repos[0], repoUl);
    getContributor(repos[0]);
    repos
      .sort((a, b) => a.name.localeCompare(b.name, 'en', {
        numeric: true,
        ignorePunctuation: true
      }, {
        sensitivity: 'base'
      }))
      .forEach((repo, index) => {
        createAndAppend('option', selectMenu, {
          text: `${repo.name}`,
          value: index
        })
        selectMenu.addEventListener('change', (e) => {
          if (e.target.value == index) {
            repoUl.innerText= '';
            contributorsContainer.innerText= '';
            renderRepoDetails(repo, repoUl);
            getContributor(repo);
          }
        });
      })
  }

  //CONTRIBUTOR SECTION
  function getContributor(repo) {
    const contributorURL = repo.contributors_url;
    fetchJSON(contributorURL, (errorContributor, contributorInfos) => {
      if (errorContributor) {
        createAndAppend('div', root, {
          text: err.message,
          class: 'alert-error',
        });
        return;
      }
      console.log(contributorInfos)
     
      const contributorUl = createAndAppend('ul', contributorsContainer);
      contributorInfos.forEach(personObj => {
        const li = createAndAppend('li', contributorUl, {
          class: 'contributors'
        });
        createAndAppend('img', li, {
          src: `${personObj.avatar_url}`
          
        });
        createAndAppend('a', li, {
          text: `${personObj.login}`,
          href: `${personObj.html_url}`
        });
        createAndAppend('span', li, {
          text: `${personObj.contributions}`,
          class: 'forks'
        })
      })


    })
  }
  const HYF_REPOS_URL =
    'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  window.onload = () => main(HYF_REPOS_URL);
}

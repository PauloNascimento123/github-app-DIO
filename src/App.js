import React from 'react';
import Layout from './components/layout';
import Profile from './components/Profile';
import { ResetCSS } from './global/resetCSS';
import Repositories from './components/repositores';
import GithubProvider from './providers/github-provider';
import useGithub from './hooks/github-hooks';
import NoSearch from './components/no-search';

function App() {
  const { githubState } = useGithub();
  return (
  <main>
      <Layout>
        {githubState.hasUser ? (
          <>
            {githubState.loading ? (
              <p>Loading</p>
            ) : (
              <>
                <Profile />
                <Repositories />
              </>
            )}
          </>
        ) : (
          <NoSearch />
        )}
      </Layout>
  </main>
  )

}

export default App;
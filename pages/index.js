import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import Image from 'next/image'
import Team from '../src/components/team';
import PageHeader from '../src/components/pageHeader';
import PageFooter from '../src/components/customFooter';
import { useState } from 'react';



export default function Home() {

  const [teams, setTeams] = useState([]);

  const readTeams = () => {
    console.debug('Descargando equipos');
    axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish%20La%20Liga')
    .then(response => {
      if(response.status === 200) {
        const equipos = response.data.teams.map(team => {
          return {
            id: team.idTeam,
            name: team.strTeam,
            logo: team.strTeamBadge,
            stadium: team.strStadium
          };
        });
        setTeams(equipos);
      }
    })
    .catch(error => {
    });
  };


  return (
    <div>
      <Head>
        <title>Diego Cevallos Erazo' Sports App</title>
        <meta name="description" content="Generated by Diego Cevallos Erazo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="container">
          <PageHeader title={'New Search'}/>
          <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                    Here goes my app:

                    <button className="button is-primary is-rounded" onClick={readTeams}>
                        La Liga
                    </button>
              </div>
          </div>
        </main>


        <div className="container">
          <h2><strong>Teams:</strong></h2>
          <div className="columns is-multiline">
            { teams.map((team, index) => <Team team={team} key={'team-${index}'} />) }
          </div>
        </div>


      <footer className={styles.header}>
        <br></br>
        <PageFooter />
      </footer>
    </div>
  )
}

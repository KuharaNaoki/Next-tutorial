import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';
// import axios from 'axios';

export default function Home({ allPostsData }) {
  // axios
  //   .get('https://jsonplaceholder.typicode.com/posts')
  //   .then((response) => {
  //     console.log('response', response.json());
  //     console.log('response', response.data);
  //     console.log('allPostsData', allPostsData);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const data = await res.json();
  // console.log(data);
  return {
    props: {
      allPostsData,
    },
  };
}

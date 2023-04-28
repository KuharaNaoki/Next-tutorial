import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home({ allPostsData }) {
  const router = useRouter();

  const routerPost = (id) => {
    router.push({
      pathname: `/posts/${id}`,
    });
  };

  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <div>
                <a className={utilStyles.cursor} onClick={() => routerPost(id)}>
                  {title}
                </a>
              </div>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

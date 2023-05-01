import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSortedPostsData } from '../lib/posts';
import { getAllUserData } from '../lib/users';
import Date from '../components/date';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home({ allPostsData, allUsersData }) {
  const router = useRouter();

  const routerPost = (id) => {
    router.push({
      pathname: `/posts/${id}`,
    });
  };

  const routerUser = (id) => {
    router.push({
      pathname: `/users/${id}`,
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

        <h2 className={utilStyles.headingLg}>User List</h2>
        <div className={utilStyles.list}>
          {allUsersData.map((user) => {
            return (
              <div key={user.id}>
                <a
                  onClick={() => routerUser(user.id)}
                  className={utilStyles.cursor}
                >
                  {user.name}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allUsersData = await getAllUserData();
  console.log('allUsersData', allUsersData);
  return {
    props: {
      allPostsData,
      allUsersData,
    },
  };
}

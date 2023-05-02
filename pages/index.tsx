import { useRouter } from 'next/router';
import { getSortedPostsData } from '../lib/posts';
import { getAllUserData } from '../lib/users';
import { UserArrayType } from '../types/userType';
import { PostArrayType } from '../types/postType';
import Date from '../components/date';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

type Props = {
  allPostsData: PostArrayType;
  allUsersData: UserArrayType;
};

export default function Home({ allPostsData, allUsersData }: Props) {
  const router = useRouter();

  const routerPost = (id: string) => {
    router.push({
      pathname: `/posts/${id}`,
    });
  };

  const routerUser = (id: string) => {
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

        <br />
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
  return {
    props: {
      allPostsData,
      allUsersData,
    },
  };
}

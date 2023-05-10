import { useRouter } from 'next/router';
import { useState } from 'react';
// import axios from 'axios';
import {
  fetchAwsKuharaStudyBackend,
  postAwsKuharaStudyBackend,
} from '../lib/api';
import { getSortedPostsData } from '../lib/posts';
import { getAllUserData } from '../lib/users';
import { UserArrayType } from '../types/userType';
import { PostArrayType } from '../types/postType';
import { Date } from '../components/date';
import { Layout } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

type Props = {
  allPostsData: PostArrayType;
  allUsersData: UserArrayType;
  awsKuharaStudyBackend: { statusCode: string; body: string };
  postKuharaStudyBackend: { statusCode: string; body: string };
};

export default function Home({
  allPostsData,
  allUsersData,
  awsKuharaStudyBackend,
  postKuharaStudyBackend,
}: Props) {
  const [name, setName] = useState('aaaaa');
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

  // const postName = async (name: string) => {
  //   console.log(await postAwsKuharaStudyBackend());
  // };

  // // const getName = async () => {
  // //   console.log(await fetchAwsKuharaStudyBackend());
  // // };
  // const getName = async () => {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //   };

  //   try {
  //     const response = await axios.get(
  //       'https://ahtwt332h2.execute-api.ap-northeast-1.amazonaws.com/kuhara-study-backend',
  //       config
  //     );
  //     setName(JSON.parse(response.data.name));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog List</h2>
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

        <br />
        <h2 className={utilStyles.headingLg}>
          APIゲートウェイからの呼び出し(GET)
        </h2>
        <div>
          <div>StatusCode : {awsKuharaStudyBackend.statusCode}</div>
          <div>Message : {awsKuharaStudyBackend.body}</div>
        </div>

        <br />
        <h2 className={utilStyles.headingLg}>
          APIゲートウェイからの呼び出し(POST)
        </h2>
        <div>
          <div>StatusCode : {postKuharaStudyBackend.statusCode}</div>
          <div>Message : {postKuharaStudyBackend.body}</div>
        </div>

        {/* <div onClick={() => postName('kuhara')}>POSTクリックして！</div>
        <div onClick={() => getName()}>GETクリックして！</div> */}
        <div>{name}</div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const allUsersData = await getAllUserData();
  const awsKuharaStudyBackend = await fetchAwsKuharaStudyBackend();
  const postKuharaStudyBackend = await postAwsKuharaStudyBackend();
  return {
    props: {
      allPostsData,
      allUsersData,
      awsKuharaStudyBackend,
      postKuharaStudyBackend,
    },
  };
};

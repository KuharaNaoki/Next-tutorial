import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
// import { getUserData } from '../../lib/users';
import Date from '../../components/date';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData, userData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div>----------------------------------------------------APIを使用</div>
      {/* <div>
        {userData.map((user) => (
          <div>
            {user.id} : {user.name}
          </div>
        ))}
      </div> */}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  // const userData = await getUserData();
  return {
    props: {
      postData,
      // userData,
    },
  };
}

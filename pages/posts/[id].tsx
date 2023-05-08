import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { PathType, PostType } from '../../types/postType';
import { Date } from '../../components/date';
import { Layout } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

type Props = {
  postData: PostType;
};

export default function Post({ postData }: Props) {
  return (
    <Layout home={false}>
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
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: PathType) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

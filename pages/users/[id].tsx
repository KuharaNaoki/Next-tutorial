import { pathType, userType } from '../../types/user';
import { getUserData, getUserIds } from '../../lib/users';
import Layout from '../../components/layout';

export default function PostUser({ userData }) {
  const usersData = userData.map((user: userType) => {
    return (
      <div key={user.id}>
        <div>full name : {user.name}</div>
        <div>email : {user.email}</div>
      </div>
    );
  });

  return (
    <Layout home={false}>
      <div>
        ------------------------ APIよりユーザーデータを取得
        ------------------------
      </div>
      <div>{usersData}</div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths: pathType[] = await getUserIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const userData: userType = await getUserData(params.id);
  return {
    props: {
      userData,
    },
  };
}

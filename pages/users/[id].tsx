import { getUserData, getUserIds } from '../../lib/users';
import { PathType, UserArrayType } from '../../types/user';
import Layout from '../../components/layout';

type Props = {
  userData: UserArrayType;
};

export default function PostUser({ userData }: Props) {
  const usersData = userData.map((user) => {
    return (
      <div key={user.id}>
        <div>full name : {user.name}</div>
        <div>email : {user.email}</div>
        <div>phone : {user.phone}</div>
        <div>company : {user.company.name}</div>
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
  const paths: PathType = await getUserIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const userData = await getUserData(params.id);
  return {
    props: {
      userData,
    },
  };
}

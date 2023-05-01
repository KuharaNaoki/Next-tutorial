import { getUserData, getUserIds } from '../../lib/users';
import { pathType, userType } from '../../types/user';

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
    <>
      <div>------------------------ APIを使用 ----------------------------</div>
      <div>{usersData}</div>
    </>
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

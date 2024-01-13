import UserList from "./UserList";
import useUsersData from "./useUsersData";

const UsersContainer = () => {
  // Ekhane Array Hisebe Na Niye Object Akare Destructure Korle Valo.
  const { data, isLoading, error } = useUsersData();

  return <UserList data={data} error={error} isLoading={isLoading} />;
};

export default UsersContainer;

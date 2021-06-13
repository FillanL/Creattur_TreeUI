import styled from "styled-components";
import Layout from "../../components/mainlayout";
const register = () => {
  return (
    <Layout>
      <div>
        <form action="">
          <label htmlFor="username"></label>
          <input type="text" />
          <label htmlFor="password"></label>
          <input type="password" />
          <label htmlFor="matchingPassword"></label>
          <input type="password" />

          <label htmlFor="email"></label>
          <input type="email" />

          <label htmlFor="submit"></label>
        </form>
      </div>
    </Layout>
  );
};
export default register;
const Form = styled.form`

`

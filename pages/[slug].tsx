import Link from "next/link";
import styled from "styled-components";
import LinkComponent from "../components/linkcomponent";
import ProfileHero from "../components/profileHero";
import ApiCaller from "../Services";

export const getServerSideProps = async (context) => {
  const userProfile: string = context.query.slug;
  const req = {
    query: `query {\n  getProfileInfo(userName: \"${userProfile}\") {\n    profile {\n      username\n    }\n    links {\n      ref_name\n      https_link\n      image_url\n    }\n  }\n}\n`,
  };

  const profile = await ApiCaller.fetcher(req);
  return {
    props: {
      profile,
    },
  };
};

const slugg = ({ profile }) => {
  console.log(profile);
  if (profile)
    return (
      <ProfileComponents>
        <ProfileHero />
        <div></div>
        {profile.links.map((link, index) => (
          <a href={link.https_link} key={link.ref_name + index}>
            <LinkComponent link={link.https_link} title={link.ref_name} />
          </a>
        ))}

        <footer>
          <Link href={"/"}>return home</Link>
        </footer>
      </ProfileComponents>
    );
  return (
    <ProfileComponents>
      no account
      <Link href={"/"}>home</Link>
    </ProfileComponents>
  );
};
export default slugg;
const ProfileComponents = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  footer {
    bottom: 0;
  }
`;

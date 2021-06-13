import { ishttps } from "../validations";
const createLink = () => {
  
  return (
    <div>
      <input type="text" placeholder="what is this link for" />
      <input type="text" placeholder="enter https link to site" />
      <input
        type="text"
        placeholder="would you like to update a different imgage"
      />
    </div>
  );
};
export default createLink;

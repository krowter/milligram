import { Navbar } from "../Navbar/Navbar";

export const Layout: React.FC = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

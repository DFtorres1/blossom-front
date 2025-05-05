import { FC, ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

const CharacterList: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div>ola</div>
      <div>{children}</div>
    </div>
  );
};

export default CharacterList;

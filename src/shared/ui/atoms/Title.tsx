interface PropsText {
  children: React.ReactNode;
}

export const Title: React.FC<PropsText> = ({ children }) => {
  return <h2>{children}</h2>;
};

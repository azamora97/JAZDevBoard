interface PropsText {
  children: React.ReactNode;
}

export const Text: React.FC<PropsText> = ({ children }) => {
  return <p>{children}</p>;
};

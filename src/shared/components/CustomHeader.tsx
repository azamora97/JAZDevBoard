interface PropsHeader {
  title: string;
  description?: string;
}

export const CustomHeader: React.FC<PropsHeader> = ({ title, description }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};

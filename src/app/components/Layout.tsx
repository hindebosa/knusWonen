const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-6xl mx-auto px-4">{children}</div>;
};

export default Layout;

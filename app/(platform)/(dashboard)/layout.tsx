import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 to-cyan-400">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;

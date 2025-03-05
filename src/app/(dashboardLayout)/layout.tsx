import Sidebar from "@/components/shared/Sidebar";

interface LayoutProps {
  children:React.ReactNode
}
const layout = ({children}:LayoutProps) => {
  return (
    <div>
      <Sidebar/>
      {children}
    </div>
  );
};

export default layout;
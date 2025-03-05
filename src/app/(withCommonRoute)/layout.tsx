import NavBar from "@/components/shared/NavBar";

interface LayoutProps {
    children:React.ReactNode
}
const layout = ({children}:LayoutProps) => {
    return (
        <div>
           <NavBar/>
            {children}
        </div>
    );
};

export default layout;
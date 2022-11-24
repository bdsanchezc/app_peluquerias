import { RightBar, Sidebar } from "../components/general";

export const DashboardLayout = ({children}) => {
    return (
        <section className="w-full h-full flex justify-between">
            <Sidebar />
            <div className="flex-1 py-16 px-20">
                {children}
            </div>
            <RightBar />
        </section>
    )
}

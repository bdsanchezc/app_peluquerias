import { Sidebar } from "../components/general/Sidebar"

export const DashboardLayout = ({children}) => {
    return (
        <section className="w-full h-full bg-gray-200 flex">
            <Sidebar />
            {children}
        </section>
    )
}

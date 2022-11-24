import { useSelector } from "react-redux"

export const RightBar = () => {

    const { user } = useSelector( state => state.auth );
    const slice = user.name.slice(0, 1);

    return (
        <div className="w-1/3 max-w-xs h-full bg-white py-5 shadow-lg px-10">
            <div className="w-full bg-slate-100 border border-slate-200 py-8 px-5 rounded-md">
                
                <div className="flex items-center">
                    <span className="p-3 rounded-full w-12 h-12 text-center bg-blue-500 text-white font-bold">{slice}</span>
                    <div className="ml-3">
                        <h4 className="font-bold text-xl">{user.name}</h4>
                        <h5 className="text-xs">{user.type}</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}

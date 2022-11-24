
export const ItemListEmployee = ({user}) => {
    return (
        <>
            <div className="w-full border border-gray-300 p-5 flex items-center justify-between rounded-lg">
                
                <div className="flex items-center">
                    <span className="p-3 rounded-full text-center bg-blue-500 text-white font-bold">PD</span>
                    <div className="ml-6">
                        <h4 className="font-bold text-xl">Pedro Doe</h4>
                        <h6 className="text-sm">Barbero principal</h6>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center">
                        <i className="fa-regular fa-envelope color-primary"></i>
                        <span className="ml-2">pedrodoe@spapp.com</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fa-regular fa-comments color-primary"></i>
                        <span className="ml-2">542 548 2165</span>
                    </div>
                </div>

                <div>
                    <button className="text-blue-500">
                        <i className="fa-regular fa-eye"></i>
                        <span className="ml-2 font-bold">Ver datos</span>
                    </button>
                </div>
            </div>
        </>
    )
}

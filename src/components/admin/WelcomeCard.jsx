
export const WelcomeCard = ({name}) => {
    return (
        <div className="w-full bg-primary rounded-xl shadow-lg-primary h-40 flex justify-between px-16 relative items-center bg-card-welcome">
            <div className="">
                <h1 className="font-bold text-4xl">¡Bienvenido!</h1>
                <h2>{name}</h2>
            </div>

            <div className="h-48">
                <img src="/Young_woman_in_headset_using_computer.png" alt="Bienvenida" className="w-full h-full"/>
            </div>
        </div>
    )
}

import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"

export const PeluApp = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}
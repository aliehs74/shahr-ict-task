import { ReactNode } from "react"
import { ToastContainer } from "react-toastify";
import { ReduxProvider } from "./ReduxProvider";
import ThemeProvider from "./ThemeProvider";

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <ReduxProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    limit={5}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />

                {children}

            </ThemeProvider>
        </ReduxProvider>
    )
}

export default Provider
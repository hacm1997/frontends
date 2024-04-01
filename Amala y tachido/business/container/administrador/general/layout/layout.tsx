import MenuLeft from "../menuLeft/menuLeft";
export default function Layout({children}: any) {
    return(
        <>
            <MenuLeft/>
            {children}
        </>
    )
}
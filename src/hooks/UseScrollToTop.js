import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function UseScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        setTimeout(() => {
            // eslint-disable-next-line
            window.scrollTo(0,0);
        }, 0)

    }, [pathname])
    return null;
}
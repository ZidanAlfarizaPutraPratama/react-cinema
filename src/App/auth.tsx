import { useEffect, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { selectUser } from "../Features/Auth/userSlice";
import { PublicRoutesConstant } from "../Constant/PublicRoutesConstant";
import { toast } from "react-toastify";

const Authentication = ({ children }: PropsWithChildren) => {
    const TOKEN = useAppSelector(selectUser).access_token
    const history = useNavigate();

    useEffect(() => {
        const currentRoute = window.location.pathname;
        const isPublicPage = PublicRoutesConstant.includes(currentRoute);

        if(!TOKEN && !isPublicPage){
            toast.warning('Silahkan Login Terlebih Dahulu')
            history('/');
        }
    }, [TOKEN, history])

    return <>{children}</>
}

export default Authentication;
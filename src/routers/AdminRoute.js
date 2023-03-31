import React, { useEffect, useState } from "react";
import axios from "axios";
import {useAuth} from "../context/AuthProvider";
import Loading from "../components/Loading";

const AdminRoute = ({children}) => {

    const {token} = useAuth();

    const [ok, setOk] = useState(false);
    useEffect(() => {
        const authCheck = async () => {
            const { data } = await axios.get(`/auth/admin-check`);
            if (data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        };

        if (token) authCheck();
    }, [token]);


    return ok ? children : <Loading path='' />;

}

export default AdminRoute;
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext"


const baseUrl = "http://localhost:8000/api";

const useAxios = () => {
    const {authTokens, setUser, setAuthTokens} = useContext(AuthContext)
}

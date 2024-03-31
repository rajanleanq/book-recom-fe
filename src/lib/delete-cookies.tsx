import { deleteCookie } from "cookies-next";

export const deleteAllCookies = () => {
    deleteCookie("accessToken");
    deleteCookie("user");
    deleteCookie("adminToken");
    deleteCookie("adminUser");
}
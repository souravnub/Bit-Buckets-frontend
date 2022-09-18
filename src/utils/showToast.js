import { toast } from "react-toastify";

const toastConfig = {
    style: {
        bottom: ".4rem",
        margin: 0,
    },
};

const showToast = (type, msg) => {
    switch (type) {
        case "error":
            return toast.error(msg, toastConfig);
        case "warning":
            return toast.warn(msg, toastConfig);
        case "success":
            return toast.success(msg, toastConfig);
        case "info":
            return toast.info(msg, toastConfig);

        default:
            break;
    }
};

export default showToast;

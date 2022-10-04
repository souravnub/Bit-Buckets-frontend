export const getDate = (isoDateStr) => {
    return isoDateStr?.split("T")[0].split("-").reverse().join(".");
};

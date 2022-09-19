import React from "react";
import { SelectAvatarBtnStyled } from "./styled/avatarUtils.styled";
import { MdCheck } from "react-icons/md";

const SelectAvatarBtn = ({ avatarImgSrc, isSelected, ...rest }) => {
    return (
        <SelectAvatarBtnStyled {...rest}>
            <img src={avatarImgSrc} alt="avatar" />

            {isSelected && <MdCheck size={25} />}
        </SelectAvatarBtnStyled>
    );
};

export default SelectAvatarBtn;

import React from "react";
import { Dropdown, Avatar } from "antd";
import { useDispatch } from "react-redux";
import {
  EditOutlined,
  SettingOutlined,
  ShopOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import NavItem from "./NavItem";
import Flex from "components/shared-components/Flex";
import { signOut } from "store/slices/authSlice";
import styled from "@emotion/styled";
import {
  FONT_WEIGHT,
  MEDIA_QUERIES,
  SPACER,
  FONT_SIZES,
} from "constants/ThemeConstant";
import { useParams } from "react-router-dom";
import { useGetAuthUserData } from "queries/auth.query";
import { useAuthStore } from "configs/auth.store";
const Icon = styled.div(() => ({
  fontSize: FONT_SIZES.LG,
}));

const Profile = styled.div(() => ({
  display: "flex",
  alignItems: "center",
}));

const UserInfo = styled("div")`
  padding-left: ${SPACER[2]};

  @media ${MEDIA_QUERIES.MOBILE} {
    display: none;
  }
`;

const Name = styled.div(() => ({
  fontWeight: FONT_WEIGHT.SEMIBOLD,
}));

const Title = styled.span(() => ({
  opacity: 0.8,
}));

// const MenuItem = (props) => (
// 	<Flex as="a" href={props.path} alignItems="center" gap={SPACER[2]}>
// 		<Icon>{props.icon}</Icon>
// 		<span>{props.label}</span>
// 	</Flex>
// )

const MenuItemSignOut = (props) => {
	const {logout} = useAuthStore();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
	logout();
  };

  return (
    <div onClick={handleSignOut}>
		
      <Flex alignItems="center" gap={SPACER[2]}>
        <Icon>
          <LogoutOutlined />
        </Icon>
        <span>{props.label}</span>
      </Flex>
    </div>
  );
};

const items = [
  {
    key: "Sign Out",
    label: <MenuItemSignOut label="Sign Out" />,
  },
];

export const NavProfile = ({ mode }) => {
  const { data, isLoading, isError } = useGetAuthUserData();
  console.log("auth user data", data?.user);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading auth user</div>;
  }
  return (
    <Dropdown placement="bottomRight" menu={{ items }} trigger={["click"]}>
      <NavItem mode={mode}>
        <Profile>
          {data?.user.image ? (
            <Avatar src={`http://localhost:8000/${data.user.image}`} />
          ) : (
            <Avatar>{data?.user.name.charAt(0)}</Avatar>
          )}
          <UserInfo className="profile-text" style={{marginRight:20}} key={data?.user.id}>
            <Name >{data?.user.name}</Name>
            <Title>{data?.user.email}</Title>
          </UserInfo>
        </Profile>
      </NavItem>
    </Dropdown>
  );
};

export default NavProfile;

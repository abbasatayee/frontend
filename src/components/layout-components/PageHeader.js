/** @jsxImportSource @emotion/react */
import AppBreadcrumb from "components/layout-components/AppBreadcrumb";
import IntlMessage from "../util-components/IntlMessage";
import { css } from "@emotion/react";
import { MEDIA_QUERIES } from "constants/ThemeConstant";
import { useSelector } from "react-redux";
import { Card, Row } from "antd";

export const PageHeader = ({ title, display }) => {
  const navCollapsed = useSelector((state) => state.theme.navCollapsed);
  const isMobile = window.innerWidth <= 576;
  const marginRight = isMobile ? 0 : navCollapsed ? "75px" : "250px";
  const colStyle = {
    marginRight,
    paddingLeft: 0,
  };

  const responsiveColStyle = {
    width: "100%",
    height: "auto",
    paddingLeft: 0,
  };

  return display ? (
    <div
      css={css`
        margin-bottom: 1rem;

        @media ${MEDIA_QUERIES.LAPTOP_ABOVE} {
        }
      `}
      flex={!navCollapsed ? "auto" : "1 1 auto"}
      style={colStyle}
      xs={responsiveColStyle}
    >
      <Card>
        <Row justify="space-between" align="bottom">
          <h3 className="mb-2 mr-3 font-weight-semibold">
            <IntlMessage id={title ? title : "home"} />
          </h3>
          <h6>
            <AppBreadcrumb />
          </h6>
        </Row>
      </Card>
    </div>
  ) : null;
};

export default PageHeader;

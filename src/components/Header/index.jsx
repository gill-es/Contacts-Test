import React from "react";
import { Box, Link } from "@mui/material";

import Logo from "../Logo";
import config from "../../config";

const Links = ({ items }) => {
  return items.map((item) => (
    <Link
      sx={{ display: "flex", cursor: "pointer" }}
      color="primary.text"
      fontWeight={600}
      fontFamily="allVariants.fontFamily"
      fontSize={14}
      key={item.key}
      underline="none"
      mr={3}
      href={item.path}
    >
      {item.label}
    </Link>
  ));
};

Links.defaultProps = {
  items: [],
};

export const Header = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#FFF",
        height: 80,
        alignItems: "center",
        paddingLeft: 12,
        paddingRight: 12,
      }}
    >
      <Box mr={10} sx={{ display: "flex", alignItems: "center" }}>
        {props.logo}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Links items={config.routes.header} />
      </Box>
    </Box>
  );
};

Header.defaultProps = {
  logo: <Logo />,
};

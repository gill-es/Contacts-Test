import React from "react";
import { Link } from "@mui/material";

import Image from "../Image";
import images from "../../assets/images";

const Logo = () => {
  return (
    <Link href="#">
      <Image
        source={images.common.KeepSpaceLogo}
        alt="KeepSpaceLogo"
        height={50}
      />
    </Link>
  );
};

export default Logo;

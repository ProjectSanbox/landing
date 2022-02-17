import React from "react";
import BottomBannerWrapper from "./bottombanner";
import Box from "reusecore/Box";
import Text from "reusecore/Text";
import Button from "reusecore/Button";

const BottomBanner = () => {
  return (
    <BottomBannerWrapper>
      <Box className="bottomBanner"></Box>
      <Box className="bottomBanner-content">
        <Text className="bottomBanner-heading">JOIN OUR COMMUNITY</Text>
        <Text>
          Be part of our amazing community and stay tuned for the news.
        </Text>
        <Button>JOIN US</Button>
      </Box>
    </BottomBannerWrapper>
  );
};

export default BottomBanner;

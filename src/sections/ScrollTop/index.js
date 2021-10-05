import Button from "reusecore/Button";
import ScrollTopWrapper from "./scrolltop.style";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    const btnScroll = document.querySelector(".scrollTopBtn");

    if (
      document.body.scrollTop > 2200 ||
      document.documentElement.scrollTop > 2200
    ) {
      btnScroll.style.display = "block";
    } else {
      btnScroll.style.display = "none";
    }

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 2200 ||
        document.documentElement.scrollTop > 2200
      ) {
        btnScroll.style.display = "block";
      } else {
        btnScroll.style.display = "none";
      }
    };

    btnScroll.addEventListener("click", () => {
      topFunction();
    });

    window.addEventListener("scroll", () => {
      scrollFunction();
    });

    const topFunction = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  }, []);
  return (
    <ScrollTopWrapper>
      <Button className="scrollTopBtn">
        <IoIosArrowUp />
      </Button>
    </ScrollTopWrapper>
  );
};

export default ScrollTop;

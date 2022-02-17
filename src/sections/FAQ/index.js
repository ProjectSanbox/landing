import FAQWrapper from "./faq.style";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Button from "reusecore/Button";
import { List, ListItem } from "reusecore/List";
import Text from "reusecore/Text";
import { Container, Row, Col } from "reusecore/Layout";
import { AiFillCaretDown } from "react-icons/ai";
import { useEffect, useState } from "react";
import data from "assets/data/FAQ";

const FAQ = () => {
  const hasClass = (element, className) => {
    return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
  };

  useEffect(() => {
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
      }

      if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));
  }, []);

  return (
    <FAQWrapper className="section" id="FAQs">
      <Container>
        <Box className="FAQ-heading">
          <Heading>FAQs</Heading>
          <Text>
            This section includes answers to frequently asked questions about
            PlanetSandbox
          </Text>
        </Box>

        <Box className="FAQ-content">
          <Box className="accordion">
            {data.faq.map((faq, i) => (
              <Box key={i} className="accordion-item">
                <Button id="accordion-Button-1" aria-expanded="false">
                  <Text as="span" className="accordion-title">
                    {faq.question}
                  </Text>
                  <Text as="span" className="icon" aria-hidden="true">
                    &nbsp;
                  </Text>
                </Button>
                <Box className="accordion-content">
                  {faq.answer.map((answer, i) => (
                    <Text key={i}>
                      {answer.answerDetails}{" "}
                      {answer.link && (
                        <a target={answer.target} href={answer.link}>
                          ({answer.linkContent})
                        </a>
                      )}{" "}
                      {answer.connect}
                      {answer.list && (
                        <List>
                          {answer.list.map((list, i) => (
                            <ListItem key={i}>{list.listChild}</ListItem>
                          ))}
                        </List>
                      )}
                    </Text>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </FAQWrapper>
  );
};

export default FAQ;

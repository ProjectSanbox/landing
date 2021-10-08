import React, { useEffect } from "react";
import AuditsWrapper from "./audits.style";
import Heading from "reusecore/Heading";
import Box from "reusecore/Box";
import Image from "reusecore/Image";
import {Container} from "reusecore/Layout";
import Link from 'next/link';
import AOS from "aos";
import data from 'assets/data/audits';

const Audits = () => {
    useEffect(() => {
        AOS.init({
          throttleDelay: 99,
          debounceDelay: 50,
          disable: false,
          duration: 500,
          once: false,
          mirror: true,
        });
      }, []);
  return (
    <AuditsWrapper>
      <Container>
        <Box className="audit-heading">
          <Heading>Security Audits</Heading>
        </Box>
        <Box data-aos="fade-down" className="audit-content">
          {data.audit.map((audit, index) => (
            <Link key={index} href={audit.link}>
              <a target="_blank">
                <Box className="item-border">
                  <Box className="audit-item">
                    <Box className="box">
                      <Image id={audit.id} src={audit.img} />
                    </Box>
                  </Box>
                </Box>
              </a>
            </Link>
          ))}
        </Box>
      </Container>
    </AuditsWrapper>
  );
};

export default Audits;

import FAQWrapper from './faq.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import {List, ListItem} from 'reusecore/List';
import Text from 'reusecore/Text';
import { Container, Row, Col } from 'reusecore/Layout';
import {AiFillCaretDown} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import data from 'assets/data/FAQ';

const FAQ = () =>{

    const hasClass = (element, className) => {
        return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
    }

    useEffect(() =>{
        const btnToggle = document.querySelectorAll('.btn-toggle');
        const ans = document.querySelectorAll('.FAQ-ans');
        const classes = ['show'];
        btnToggle.forEach((e, i) =>{
            e.addEventListener('click', () =>{
                if(!hasClass(ans[i], classes[0])){
                    ans[i].classList.add('show');
                    e.style.transform = 'rotate(180deg)';
                }
                else{
                    ans[i].classList.remove('show');
                    e.style.transform = 'rotate(0deg)';
                }
            })
        })
    }, [])

   return(
    <FAQWrapper>
       <Container>
        <Box className="FAQ-heading">
            <Heading>FAQs</Heading>
            <Text>This section includes answers to frequently asked questions concerning my PlanetSandbox</Text>
        </Box>
        <Box className="FAQ-row">
            <Box className="FAQ-content">
                {data.faq1.map((faq, i) =>
                <Box key={i} className="FAQ-ques">
                    <Box className="FAQ-box">
                        <Text className="ques-heading">
                        {faq.question}
                        </Text>
                        <AiFillCaretDown className="btn-toggle"/>
                    </Box>
                    <Box className="FAQ-ans">
                        {faq.answer.map((answer, i) =>
                            <Text key={i}>
                                {answer.answerDetails}
                                {answer.list && 
                                    <List>
                                        {
                                            answer.list.map((list, map) =>
                                                <ListItem key={i}>{list.listChild}</ListItem>
                                            )
                                        }
                                    </List>
                                }
                            </Text>
                        )}
                    </Box>
                </Box>
                )}
            </Box>

            <Box className="FAQ-content">
                {data.faq2.map((faq, i) =>
                <Box key={i} className="FAQ-ques">
                    <Box className="FAQ-box">
                        <Text className="ques-heading">
                        {faq.question}
                        </Text>
                        <AiFillCaretDown className="btn-toggle"/>
                    </Box>
                    <Box className="FAQ-ans">
                        {faq.answer.map((answer, i) =>
                            <Text key={i}>
                                {answer.answerDetails}
                                {answer.list && 
                                    <List>
                                        {
                                            answer.list.map((list, i) =>
                                                <ListItem key={i}>{list.listChild}</ListItem>
                                            )
                                        }
                                    </List>
                                }
                            </Text>
                        )}
                    </Box>
                </Box>
                )}
            </Box>
            </Box>
       </Container>
    </FAQWrapper>
   );
}

export default FAQ;
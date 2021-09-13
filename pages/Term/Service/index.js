import ServiceWarpper from './service.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import {Container} from 'reusecore/Layout';
import Link from 'next/link';

const Service = () =>{
    return(
        <ServiceWarpper id="service">
            <Container>
                <Box className="service">
                    <Box className="service-heading">
                        <Heading>THE PLANETSANDBOX TERMS OF USE</Heading>
                        <Text>Last Updated: [Sep 13, 2021]</Text>
                    </Box>
                    <Box className="service-content">
                        <Text>
                        This end-user agreement (the "Agreement") should be read by you 
                        (the "User" or "you") in its entirety prior to your use of PlanetSandbox service or products.
                        Be aware that this Agreement constitutes a legally binding agreement between you and PlanetSandbox
                        (referred to herein as "PlanetSandbox", "us" or "we") which owns and operates the website on the Internet and 
                        the Service at <Link href="https://black-cliff-048399d00.azurestaticapps.net/"><a target="_bank">https://black-cliff-048399d00.azurestaticapps.net/</a></Link> (the "Service"). By accessing or using the site or Wanaka Farm Services,
                        you agree that you have read, understood, and agree to be bound by this agreement.
                        </Text>
                        
                        <Text className="content-heading">1. General Conditions of use</Text>

                        <Text>1.1 After registering an account through the website provided by Planetsandbox. 
                            If you do not agree to comply with any of the terms outlined in this agreement or any 
                            term that we have updated in the agreement, you may not access or use any of the 
                            PlanetSandbox Services. and must cancel your PlanetSandbox Account immediately.
                        </Text>
                        <Text>
                            1.2. We may amend or modify this Agreement by posting such amended or modified Agreement
                            (“Revised Agreement”) on the Planet Sandbox Platform or by notifying you about the changes via email.
                            By continuing to access or use the Planet Sandbox Services once the Revised Agreement is effective,
                            you agree to be bound by its terms.
                        </Text>
                        <Text>
                            1.3  PlanetSandbox disclaims any and all warranties, expressed or implied, in connection with the service which is provided to you "as is" and we provide you with no warranty or representation whatsoever regarding its quality, fitness for purpose, completeness, or accuracy.
                        </Text>
                        <Text>
                            1.4 The term "Planet Sandbox", its domain names and any other trademarks, or service marks used by Planet Sandbox as part of the Service (the "Trademarks"), are solely owned by Planet Sandbox. In addition, all content on the website, including, but not limited to, the images, pictures, graphics, photographs, animations, videos, music, audio, and text (the "Site Content") belongs to Planet Sandbox and is protected by copyright and/or other intellectual property or other rights. You hereby acknowledge that by using the Service, you obtain no rights in the Site Content and/or the Trademarks, or any part thereof. Under no circumstances may you use the Site Content and/or the Trade Marks without Wanaka Farm’s prior written consent. Additionally, you agree not to do anything that will harm or potentially harm the rights, including the intellectual property rights of Planet Sandbox.
                        </Text>

                        <Text className="content-heading">2. Authority/Terms of Service</Text>

                        <Text>
                        You agree to the rules of the Service provided and described on the <Link href="https://black-cliff-048399d00.azurestaticapps.net/"><a target="_blank">https://black-cliff-048399d00.azurestaticapps.net/</a></Link> website. Planet Sandbox retains all authority over the issuing, maintenance, and closing of the Service. The decision of Planet Sandbox management, concerning any use of the Service, or dispute resolution, is final and shall not be open to review or appeal.
                        </Text>

                        <Text className="content-heading">3. SALE OF ASSETS GAMES AND PAYMENT</Text>

                        <Text>
                            3.1. All in-game assets are purchased on the marketplace and you have to pay a fee to be able to own the item
                        </Text>
                        <Text>
                            3.2. We always has the right, in its sole discretion, to accept or reject any Assets and/or Games.
                        </Text>
                        <Text>
                            3.3. If you elect to purchase Assets Games on PlanetSandbox, any financial transactions that you engage in will be conducted solely through the Ethereum network via MetaMask (or other Ethereum-compatible wallets and browsers). We has no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions. With that in mind, we will have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage in on Planet Sandbox.
                        </Text>
                        <Text>3.4. Each sales transaction that occurs in The Sandbox will be subject to a fee payable by the purchaser to us. Such fee will be automatically applied as part of the sales transaction.
                        </Text>
                        <Text>
                            3.4. You are solely responsible for any applicable taxes which may be payable on cryptocurrency traded or transacted by you through your using the Service;
                        </Text>
                        <Text>
                            3.5. Any cryptographic tokens, blockchain technology, or distributed ledger technology-related projects are new and relatively untested, and outside of both our and our Clients’ exclusive control. Any adverse changes in market forces, technology, and regulatory environment impacting our performance under this Agreement shall absolve us from responsibility in this regard, including but not limited to hacking attacks, possible theft, unfavorable regulatory action, or unclear legal/tax status of cryptographic tokens.
                        </Text>

                        <Text className="content-heading">LANDS</Text>
                        <Text>
                            You can buy your land on a marketplace pland and can build it into the battlespace you want
                        </Text>

                        <Text className="content-heading">4. Prohibited Uses & Termination</Text>
                        <Text>4.1. We reserve the right to (a) modify or discontinue any portion of the Planet Sandbox Services, and (b) suspend or terminate your access to the Planet Sandbox Services, at any time, and from time to time, without notice to you in certain, limited circumstances described herein. You agree that we shall not be liable to you or any third party for any modification or termination of the Planet Sandbox Services, or suspension or termination of your access to the Planet Sandbox Services, except to the extent otherwise expressly set forth herein.</Text>
                        <Text>4.1.2 We reserve the right (but have no obligation) to review any User Content, and to investigate and/or take appropriate action against you in our sole discretion if you violate the Acceptable Use Policy or any other provision of these Terms or otherwise create liability for us or any other person. Such action may include removing or modifying your User Content, terminating your Account in accordance with Section Error! Reference source not found., and/or reporting you to law enforcement authorities.</Text>
                        <Text>4.1.3 If you provide Company with any feedback or suggestions regarding the Site (“Feedback”), you hereby assign to Company all rights in such Feedback and agree that Company shall have the right to use and fully exploit such Feedback and related information in any manner it deems appropriate. Company will treat any Feedback you provide to Company as non-confidential and non-proprietary. You agree that you will not submit to Company any information or ideas that you consider to be confidential or proprietary.</Text>

                        <Text className="content-heading">5. Breach</Text>
                        <Text>5.1. Without prejudice to any other rights, if a User breaches in whole or in part any provision contained herein, Wanaka Farm reserves the right to take such action as it sees fit, including terminating this Agreement or any other agreement in place with the User and/or taking legal action against such User.</Text>
                    </Box>
                </Box>
            </Container>
        </ServiceWarpper>
    );
}

export default Service;
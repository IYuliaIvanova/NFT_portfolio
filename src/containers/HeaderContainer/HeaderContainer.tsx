import React, { useState } from "react";
import { Container } from "../../components/common-components/Container";
import { Divide } from "../../components/common-components/Divide";
import { Header } from "../../components/common-components/Header";
import { Link } from "../../components/common-components/Link";
import { Image } from "../../components/common-components/Image"
import { NavigationBar } from "../../components/common-components/NavigationBar";
import { UnorderedList } from "../../components/common-components/UnorderedList";
import { ListItem } from "../../components/common-components/ListItem";
import { Button } from "../../components/common-components/Button";

export const HeaderContainer = () => {
    const [isActive, setIsActive] = useState(false);

    const scrollToAnchor = () => {
        const { hash } = window.location;
        if (hash !== '') {
          let retries = 0;
          const id = hash.replace('#', '');
          const scroll = () => {
            retries += 0;
            if (retries > 50) return;
            const element = document.getElementById(id);
            if (element) {
              setTimeout(() => element.scrollIntoView({block: 'start', behavior: 'smooth'}), 1000);
              setIsActive(true)
            } else {
              setTimeout(scroll, 100);
              setIsActive(false)
            }
          };
          scroll();
        }
      }
    return (
        <Header padding="14px 28px">
            <Container
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                columnGap="46"
            >
                <Divide 
                    display="flex" 
                    justifyContent="space-between" 
                    alignItems="center" 
                    columnGap="46"
                > 
                    <Link href="" display="block">
                        <Image src={require("../../assets/logo.svg").default} width={"94"}/>
                    </Link>
                    <NavigationBar>
                        <UnorderedList display="flex" justifyContent="space-between" columnGap="48">
                            <ListItem onClick={scrollToAnchor} hoverNavBar>
                                <Link href={"/#aboutUs"}>About us</Link>
                            </ListItem>
                            <ListItem onClick={scrollToAnchor} hoverNavBar>
                                <Link href="/#nfts">NFTs</Link>
                            </ListItem>
                            <ListItem onClick={scrollToAnchor} hoverNavBar>
                                <Link href="/#contacts">Contact</Link>
                            </ListItem>
                        </UnorderedList>
                    </NavigationBar>
                </Divide>
                <Divide display="flex" justifyContent="space-between" alignItems="center" columnGap="47">
                    <Divide display="flex" justifyContent="space-around" columnGap="19">
                        <Link href="https://twitter.com/" target={"_blank"} social>
                            <Image src={require("../../assets/twitter.svg").default} width={"18"}/>
                        </Link>
                        <Link href="https://www.instagram.com/" target={"_blank"} social>
                            <Image src={require("../../assets/instagram.svg").default} width={"18"}/>
                        </Link>
                        <Link href="https://www.facebook.com/" target={"_blank"} social>
                            <Image src={require("../../assets/facebook.svg").default} width={"18"}/>
                        </Link>
                    </Divide>
                    <Button 
                        padding="0 15px" 
                        fontWeight="400" 
                        fontSize="13" 
                        lineHeight="14" 
                        borderRadius="30"
                        onClick={() => document.location='https://opensea.io/'}
                    >
                        View on OpenSea
                    </Button>
                </Divide>
            </Container>
        </Header>
    )
}
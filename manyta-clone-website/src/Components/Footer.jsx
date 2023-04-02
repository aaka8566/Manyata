import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Safety Center</Link>
            <Link href={"#"}>Community Guidelines</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Law Enforcement</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Install App</ListHeader>
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>©MANYATA . All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"https://twitter.com/myntra"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"https://www.youtube.com/user/myntradotcom"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"https://www.instagram.com/myntra/"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
      <Divider />
      <Box>
        <Text
          fontWeight={"bold"}
          fontSize="small"
          textAlign={"left"}
          color="gray"
          ml="4rem"
        >
          ONLINE SHOPPING MADE EASY AT MANYATA
        </Text>
        <Text fontSize="small" textAlign={"left"} w="90%" m="auto" color="gray">
          If you would like to experience the best of online shopping for men,
          women and kids in India, you are at the right place. Myntra is the
          ultimate destination for fashion and lifestyle, being host to a wide
          array of merchandise including clothing, footwear, accessories,
          jewellery, personal care products and more. It is time to redefine
          your style statement with our treasure-trove of trendy items. Our
          online store brings you the latest in designer products straight out
          of fashion houses. You can shop online at Myntra from the comfort of
          your home and get your favourites delivered right to your doorstep.
        </Text>
      </Box>
      <br />
      <Box>
        <Text
          fontWeight={"bold"}
          fontSize="small"
          textAlign={"left"}
          color="gray"
          ml="4rem"
        >
          BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
        </Text>
        <Text fontSize="small" textAlign={"left"} w="90%" m="auto" color="gray">
          Be it clothing, footwear or accessories, Myntra offers you the ideal
          combination of fashion and functionality for men, women and kids. You
          will realise that the sky is the limit when it comes to the types of
          outfits that you can purchase for different occasions.
        </Text>
        <br />

        <Text fontSize="small" textAlign={"left"} w="80%" m="auto" color="gray">
          1.
          <Text
            as="span"
            fontWeight={"bold"}
            fontSize="small"
            textAlign={"left"}
            color="gray"
          >
            Smart men’s clothing -
          </Text>
          At Myntra you will find myriad options in smart formal shirts and
          trousers, cool T-shirts and jeans, or kurta and pyjama combinations
          for men. Wear your attitude with printed T-shirts. Create the
          back-to-campus vibe with varsity T-shirts and distressed jeans. Be it
          gingham, buffalo, or window-pane style, checked shirts are unbeatably
          smart. Team them up with chinos, cuffed jeans or cropped trousers for
          a smart casual look. Opt for a stylish layered look with biker
          jackets. Head out in cloudy weather with courage in water-resistant
          jackets. Browse through our innerwear section to find supportive
          garments which would keep you confident in any outfit.
        </Text>
        <br />
        <Text fontSize="small" textAlign={"left"} w="80%" m="auto" color="gray">
          2.
          <Text
            as="span"
            fontWeight={"bold"}
            fontSize="small"
            textAlign={"left"}
            color="gray"
          >
            Trendy women’s clothing -
          </Text>
          Online shopping for women at Myntra is a mood-elevating experience.
          Look hip and stay comfortable with chinos and printed shorts this
          summer. Look hot on your date dressed in a little black dress, or opt
          for red dresses for a sassy vibe. Striped dresses and T-shirts
          represent the classic spirit of nautical fashion. Choose your
          favourites from among Bardot, off-shoulder, shirt-style, blouson,
          embroidered and peplum tops, to name a few. Team them up with
          skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the
          perfect fusion-wear combination for the cool urbanite. Our grand
          sarees and lehenga-choli selections are perfect to make an impression
          at big social events such as weddings. Our salwar-kameez sets, kurtas
          and Patiala suits make comfortable options for regular wear.
        </Text>
        <br />
        <Text fontSize="small" textAlign={"left"} w="80%" m="auto" color="gray">
          3.
          <Text
            as="span"
            fontWeight={"bold"}
            fontSize="small"
            textAlign={"left"}
            color="gray"
          >
            Fashionable footwear -
          </Text>
          While clothes maketh the man, the type of footwear you wear reflects
          your personality. We bring you an exhaustive lineup of options in
          casual shoes for men, such as sneakers and loafers. Make a power
          statement at work dressed in brogues and oxfords. Practice for your
          marathon with running shoes for men and women. Choose shoes for
          individual games such as tennis, football, basketball, and the like.
          Or step into the casual style and comfort offered by sandals, sliders,
          and flip-flops. Explore our lineup of fashionable footwear for ladies,
          including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy
          the best of comfort and style with embellished and metallic flats.
        </Text>
        <br />
        <Text fontSize="small" textAlign={"left"} w="80%" m="auto" color="gray">
          4.
          <Text
            as="span"
            fontWeight={"bold"}
            fontSize="small"
            textAlign={"left"}
            color="gray"
          >
            Stylish accessories -
          </Text>
          Manyata is one of the best online shopping sites for classy
          accessories that perfectly complement your outfits. You can select
          smart analogue or digital watches and match them up with belts and
          ties. Pick up spacious bags, backpacks, and wallets to store your
          essentials in style. Whether you prefer minimal jewellery or grand and
          sparkling pieces, our online jewellery collection offers you many
          impressive options..
        </Text>
      </Box>
      <br />
      <br />
      <Box>
        <Text
          fontWeight={"bold"}
          fontSize="small"
          textAlign={"left"}
          color="gray"
          ml="4rem"
        >
          MANYATA APP
        </Text>
        <Text fontSize="small" textAlign={"left"} w="90%" m="auto" color="gray">
          speed, yet the Myntra shopping app has managed to keep up without any
          hiccups. In addition, Myntra has vowed to serve customers to the best
          of its ability by introducing its first-ever loyalty program, The
          Myntra Insider. Gain access to priority delivery, early sales,
          lucrative deals and other special perks on all your shopping with the
          Myntra app. Download the Myntra app on your Android or IOS device
          today and experience shopping like never before!
        </Text>
        <br />
        <Text
          fontWeight={"bold"}
          fontSize="small"
          textAlign={"left"}
          color="gray"
          ml="4rem"
        >
          HISTORY OF MANYATA
        </Text>
        <Text fontSize="small" textAlign={"left"} w="90%" m="auto" color="gray">
          Becoming India’s no. 1 fashion destination is not an easy feat.
          Sincere efforts, digital enhancements and a team of dedicated
          personnel with an equally loyal customer base have made Myntra the
          online platform that it is today. The original B2B venture for
          personalized gifts was conceived in 2007 but transitioned into a
          full-fledged ecommerce giant within a span of just a few years. By
          2012, Myntra had introduced 350 Indian and international brands to its
          platform, and this has only grown in number each passing year. Today
          Myntra sits on top of the online fashion game with an astounding
          social media following, a loyalty program dedicated to its customers,
          and tempting, hard-to-say-no-to deals.
        </Text>
        <Text fontSize="small" textAlign={"left"} w="90%" m="auto" color="gray">
          The Myntra shopping app came into existence in the year 2015 to
          further encourage customers’ shopping sprees. Download the app on your
          Android or IOS device this very minute to experience fashion like
          never before
        </Text>
        <br />
        <Text
          fontWeight={"bold"}
          fontSize="small"
          textAlign={"left"}
          color="gray"
          ml="4rem"
        >
          SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
        </Text>
        <Text fontSize="small" textAlign={"left"} w="90%" m="auto" color="gray">
        Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 30-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.
        </Text>
        <Text fontSize="small" textAlign={"left"} w="90%" m="auto" color="gray">
        Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.
        </Text>
      </Box>
      <br />
      <br />
    </Box>
  );
}

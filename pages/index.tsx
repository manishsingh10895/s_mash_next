import { Box, Button, chakra, Container, Heading, Link, List, ListItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Paragraph from '../components/Paragraph'
import Layout from '../components/layouts/Article';
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/Section'
import NextLink from 'next/link';
import { BioSection, BioYear } from '../components/Bio'
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Home: NextPage = () => {
  return (
    <Layout>
      <Box marginTop={10}>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a full-stack developer from India!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Manish Singh
            </Heading>
            <p>Digital Wanderer, ( Web / App ) Developer  </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow='hidden'
            >
              <ProfileImage
                src="/images/profile.jpg"
                alt="Profile image"
                borderRadius='full'
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Manish is currently working as a full-stack developer at <b>F&K Solutions</b>.
          </Paragraph>
          <Box alignItems="center" my={4}>
            <NextLink href="/works" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in New Delhi, India.
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Completed the B.Tech in Computer Science from Delhi University.
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Interned at Zillion.io
          </BioSection>
          <BioSection>
            <BioYear>2017 - 2018</BioYear>
            Worked at Trihund Solutions as a full-stack developer.
          </BioSection>
          <BioSection>
            <BioYear>2018 - 2020</BioYear>
            Worked at Almora.io as a full-stack developer.
          </BioSection>
          <BioSection>
            <BioYear>2020 - Present</BioYear>
            Working at F&K Solutions as a full-stack developer.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music, Cycling, Blender and a bit of Gaming
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/manishsingh10895" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @manishsingh10895
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/S_mash011" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  Manish Singh
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>

          </SimpleGrid>

          <Box alignItems="center" my={4}>
            <NextLink href="/posts" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Box>
    </Layout>
  )
}


export default Home

export { getServerSideProps } from '../components/chakra'; 
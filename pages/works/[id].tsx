import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../components/layouts/Article';

type Props = {

}

export default function Work(props: Props) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout>
            <Heading as="h2" textAlign={'center'} variant={'section-title'}>{id}</Heading>
        </Layout>
    )
}

export { getServerSideProps } from '../../components/chakra';
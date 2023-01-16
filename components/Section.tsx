import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react'


const StyledDiv = chakra(motion.div, {
    shouldForwardProp: props => {
        return shouldForwardProp(props) || props == 'transition'
    }
});

type Props = {
    children: React.ReactNode,
    delay: number
}
export default function Section(props: Props) {
    const { children, delay } = props;

    return (
        <StyledDiv initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            //@ts-ignore
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </StyledDiv>
    )
}

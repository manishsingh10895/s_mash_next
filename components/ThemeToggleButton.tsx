import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import React from 'react'

export default function ThemeToggleButton() {
    const { toggleColorMode } = useColorMode();
    const colorvalue = useColorModeValue('light', 'dark');

    console.log('[COLOR VALUE]');
    console.log(colorvalue);
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{
                    display: 'inline-block'
                }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton aria-label='Toggle theme'
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                >
                </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

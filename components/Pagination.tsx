import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/libs/locale'
import { Flex } from '@chakra-ui/react'

const Pagination = ({ page, showNext }) => {
    const locale = useLocale()
    const currentPage = +page
    let additionalClassName = 'justify-between'
    if (currentPage === 1 && showNext) additionalClassName = 'justify-end'
    if (currentPage !== 1 && !showNext) additionalClassName = 'justify-start'
    return (
        <Flex justify={'space-between'} p={'0.5rem 0'}>
            {currentPage !== 1 && (
                <Link
                    href={
                        currentPage - 1 === 1
                            ? `${BLOG.path || '/'}`
                            : `/posts/page/${currentPage - 1}`
                    }
                >
                    <a>
                        <button
                            className="block cursor-pointer"
                        >
                            ← {locale.PAGINATION.PREV}
                        </button>
                    </a>
                </Link>
            )}
            {showNext && (
                <Link href={`/posts/page/${currentPage + 1}`}>
                    <a>
                        <button className="block cursor-pointer">
                            {locale.PAGINATION.NEXT} →
                        </button>
                    </a>
                </Link>
            )}
        </Flex>
    )
}

export default Pagination

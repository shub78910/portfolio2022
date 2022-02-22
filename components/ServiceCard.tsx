import { FunctionComponent } from 'react'
import { Service } from '../types'
// import { motion } from 'framer-motion'

const ServiceCard: FunctionComponent<{ service: Service }> = ({
    service: { Icon, title, about, link },
}) => {
    function createMarkup() {
        return {
            __html: about,
        }
    }

    return (
        <div className='flex items-center p-2 space-x-4 '>
            <Icon className='w-12 h-12 text-green' />
            <div className=''>
                <h6 className='font-bold'>{title}</h6>
                <p dangerouslySetInnerHTML={createMarkup()} />
                {link && <a style={{ color: "olive" }} href={link} >Click for more</a>}
            </div>
        </div>
    )
}

export default ServiceCard
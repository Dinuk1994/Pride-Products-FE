
import ComponentCard from '../atoms/Card'

const CardCollection = () => {
    return (
        <div className='grid grid-cols-4 gap-4 ml-3 mr-3 mt-10 mb-10 mobile:grid-cols-1 tablet:grid-cols-2'>
            <ComponentCard />
            <ComponentCard />
            <ComponentCard />
            <ComponentCard />
            <ComponentCard />
            <ComponentCard />
            <ComponentCard />
            <ComponentCard />
        </div>
    )
}

export default CardCollection
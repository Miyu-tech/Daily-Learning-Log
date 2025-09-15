import Property from './Property';
import Property from './Property.css';

export default function PropertyList({ properties }) {
    return (
        <div className='PropertyList'>
            {properties.map(p => {
                return <property {...p} key={p.id} />
            })}
        </div>
    )
}
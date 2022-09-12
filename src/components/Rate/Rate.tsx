import './rate.css';
import { Rate } from "antd";
import "antd/dist/antd.css";


const RateM = (props: any) => {
    return (
        <div className='rate-movie-cart'>
            <Rate
                count={10}
                allowHalf
                onChange={(e) => props.changeRateMovies(props.id)}
            ></Rate>
        </div>
    )
}
export default RateM
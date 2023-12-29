import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({index}) => {
  const navigate = useNavigate();
  return (
    <div className="container flex justify-center items-center mx-4 my-4">
      <div className="lg:w-[80%] border">
        <img
          src="https://via.placeholder.com/150"
          className="w-full"
          alt="..."
        />
        <div className="p-4">
          <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
            Hello World
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, rem.
          </p>
          <button
            onClick={() => navigate(`/blog/${index}`)}
            className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Card;
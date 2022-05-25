import { FaRegPlayCircle, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContainerInfo, MiniAvatar, ButtonBuy } from '../styled.components';
import BlackWidow from '../../assets/black-widow.png';
import { Context } from '../../context/AppContext';

const Info = () => {
  const history = useNavigate();
  const { state } = useContext(Context);
  const goToDetails = (): void => {
    history('/detail/2');
  }
  return(<>
    <ContainerInfo height={50}>
      <section className='icon-info'>
        <FaRegPlayCircle size={25} color={'red'}/>
      </section>
      <section className='title-info'>
        { state.name }
      </section>
      <section className='details-info'>
        <section className='list-info'>
          <div>2021</div>
          <div>Fantastic</div>
          <div>2h 35min</div>
        </section>
      </section>

      <section className='star'>
        <FaStar color='orange'/>
        <FaStar color='orange'/>
        <FaStar color='orange'/>
        <FaStar color='orange'/>
        <FaStar color='orange'/>
      </section>

      <section className='description'>
        <div className='description-title'>Plot Summary</div>
        <div className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil, assumenda quasi adipisci voluptates nesciunt iste aliquam reiciendis commodi amet, autem architecto nisi dolore vitae maiores! Perferendis excepturi officia dolores!</div>
      </section>

      <section className='description'>
        <div className='description-title'>Cast</div>
        <div className='images'>
          { [1, 2, 3, 4].map(item => <MiniAvatar key={item} src={BlackWidow}/>)}
        </div>
      </section>

      <section className='button-buy'>
        <ButtonBuy onClick={goToDetails}>Comprar</ButtonBuy>
      </section>
    </ContainerInfo>
  </>)
};

export default Info;
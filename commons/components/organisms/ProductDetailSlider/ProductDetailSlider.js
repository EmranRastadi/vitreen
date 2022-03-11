import { makeStyles } from '@material-ui/core/styles';
import SliderSlide from '@molecules/SliderSlide/SliderSlide';

import {Swiper ,  SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import { useContext } from 'react';
import { Store } from '@utils/Store';
import _ from 'lodash';
import { colors } from '@molecules/ColorPicker/ColorPicker';

export default function ProductDetailSlider(props) {
  const {state} = useContext(Store);
  let colorSelected = _.find(colors , c => parseInt(c.id) === parseInt(state.color))

  const useStyled = makeStyles( {
    container: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: `${colorSelected?.color}`,
      borderRadius : '10px 0 0px 10px',
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius : '10px 0 0px 10px',
        top: 0,
        left: 0,
        background: 'linear-gradient(to bottom, rgba(255 255 255 / 50%), transparent)',
      },
    },
  } );
  const classes = useStyled();

  const params = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination.swiper-pagination-h',
      clickable: true
    }

  };


  return (
    <div className={classes.container}>
      <Swiper {...params} style={{left : -15, height: '100%' }}>
        <SwiperSlide style={{ width: 'fit-content' }}>
          <SliderSlide>
            {props.image ? <Image src={props.image} height={200} width={200}  /> : null}
          </SliderSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
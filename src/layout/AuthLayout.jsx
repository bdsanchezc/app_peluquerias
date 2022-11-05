import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper"

import { SlideInfo } from '../components/general';

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

export const AuthLayout = ({children}) => {
    return (
        <section className="w-full h-full flex">
            <div className="w-1/4 shadow-x relative z-10">
                {children}
            </div>
            
            <div className="w-3/4 h-full bg-gradient-primary bg-pattern">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper h-full"
                >
                    <SwiperSlide className='flex items-center'> 
                        <SlideInfo 
                            title="Administra tus empleados"
                            info="Tendrás control de las personas que ayudan en tu establecimiento, podrás agregar o inhabilitar a tus empleados."
                            pathImage="/admin-empleados.png"
                            alt="Administración de empleados"
                            width={600}
                        />
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col justify-center items-center'>
                        <SlideInfo 
                            title="Suscribete y disfruta"
                            info="Accede a grandes beneficios al suscribirte como cliente preferencial del establecimiento que tu elijas."
                            pathImage="/collage1.png"
                            alt="Suscripción"
                            width={600}
                        />
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col justify-center items-center'>
                        <SlideInfo 
                            title="Agenda tu cita desde cualquier lugar"
                            info="Agenda tu cita desde tu celular, tu computador portatil estando en cualquier lugar del pais. Siempre tendrás un centro de belleza cerca para atenderte."
                            pathImage="/collage2.png"
                            alt="Administración de empleados"
                            width={350}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

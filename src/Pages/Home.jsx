import Card from 'react-bootstrap/Card';
import Maqrquee from './Marquee'
import { Container, Row, Col } from 'react-bootstrap'
import { FaUsers, FaBoxOpen, FaStar, FaTruck } from 'react-icons/fa';
import React, { useState } from 'react';
import { Carousel, Card as BootstrapCard } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
const Home = () => {
  const data = [
    { icon: <FaUsers size={40} />, title: '3K+', subtitle: 'Customers' },
    { icon: <FaBoxOpen size={40} />, title: '400+', subtitle: 'Products' },
    { icon: <FaStar size={40} />, title: '10+', subtitle: 'Brands' },
    { icon: <FaTruck size={40} />, title: 'Home', subtitle: 'Delivery' },
  ];

  const Cracker = [
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
  ];

  const Cracker2 = [
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
  ];
  const Cracker3 = [
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
  ];
  const Cracker4 = [
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
  ];

  const Cracker5 = [
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
    {
      img: 'https://anilcelebrationsapp.com/img/products/Mini/DIL%20KHUSH%20-%2050%20SHOTS2.png',
      name: 'Samantha Lee',
      title: 'RS:50',
      text: 'RS:120'
    },
  ];



  return (
    <div>
      <Maqrquee />

      <section className='main'>
        <div className='banner-section'>
          <Container className='py-5'><Row className='py-5 my-5'>
            <Col md={6} className="">
              <div className='banner'>
                <h1>LEO CRACKERS</h1>
                <h3>SPARK. SHINE. SMILE</h3>
                <p className='text-center'>Premier provider of Sivakasi's finest fireworks at unbeatable prices, sourced directly from reputable manufacturers. Enjoy factory prices with guaranteed quality.</p>
              </div></Col>
            <Col md={6} className="">
              <Row className='py-5 my-5'>
                {data.map((item, index) => (
                  <Col md={6} className="mb-4" key={index}>
                    <Card className="text-center text-white bg-none custom-card h-100">
                      <Card.Body>
                        <div className="mb-3">{item.icon}</div>
                        <Card.Title className="fw-bold fs-3">{item.title}</Card.Title>
                        <Card.Text>{item.subtitle}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          </Container></div>
      </section>





      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width={200} height={200} className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  <button className="cta-button">Add to Cart</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker2.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width={200} height={200} className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  <button className="cta-button">Add to Cart</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker2.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width={200} height={200} className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  <button className="cta-button">Add to Cart</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker3.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width={200} height={200} className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  <button className="cta-button">Add to Cart</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker4.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width={200} height={200} className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  <button className="cta-button">Add to Cart</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section style={{ background: '#fff', fontFamily: 'sans-serif', padding: '2rem 0' }}>
        <Container>
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#222' }}>Trusted By Teams Around The World.</h2>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            navigation
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: '2rem' }}
          >
            {Cracker5.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white border border-secondary rounded-3 shadow-sm p-3 p-md-4 text-start h-100 d-flex flex-column">
                  <div className="align-items-center mb-3">
                    <Image src={t.img} alt={t.name} width={200} height={200} className="me-3 rounded-1" />
                    <p className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>{t.name}</p>
                    <div className='d-flex justify-content-center'>
                      <p className="mb-0 text-muted text-center" style={{ fontSize: '1rem' }}>{t.title}</p>
                      <p className="mt-1 text-decoration-line-through mx-1" style={{ fontSize: '0.7rem', color: '#555' }}>{t.text}</p>
                    </div>
                  </div>
                  <button className="cta-button">Add to Cart</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

    </div>
  )
}

export default Home

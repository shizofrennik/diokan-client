import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import  Slider from 'react-slick';
import SliderImg from 'styles/images/resources.png';

class SliderSimple extends React.Component {
  render() {
  	var settings = {
    	arrows:false,
        dots:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="diokan-news-inner diokan-slider diokan-slider-news">
            <Slider {...settings}>
                <div>
                    <div className="diokan-news__item">
                        <div className="diokan-news__item-image">
                             <div><img src={SliderImg} /></div>
                        </div>
                        <div className="diokan-news-list">
                            <div className="diokan-news-list__item">
                                <div className="diokan-news-list__item-description">
                                    <p>
                                        10 awesome photo enhancement plugins for
                                        Photoshop you need to try
                                    </p>
                                </div>
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                            <div className="diokan-news-list__item">
                                <div className="diokan-news-list__item-description">
                                    <p>
                                        RAW vs. JPEG – the real story
                                    </p>
                                </div>
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                            <div className="diokan-news-list__item">
                                <div className="diokan-news-list__item-description">
                                    <p>
                                        Understanding White Balance
                                    </p>
                                </div>
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
               <div>
                    <div className="diokan-news__item">
                        <div className="diokan-news__item-image">
                             <div><img src={SliderImg} /></div>
                        </div>
                        <div className="diokan-news-list">
                            <div className="diokan-news-list__item">
                                <div className="diokan-news-list__item-description">
                                    <p>
                                        10 awesome photo enhancement plugins for
                                        Photoshop you need to try
                                    </p>
                                </div>
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                            <div className="diokan-news-list__item">
                                <div className="diokan-news-list__item-description">
                                    <p>
                                        RAW vs. JPEG – the real story
                                    </p>
                                </div>
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                            <div className="diokan-news-list__item">
                                <div className="diokan-news-list__item-description">
                                    <p>
                                        Understanding White Balance
                                    </p>
                                </div>
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="diokan-news__item">
                        <div className="diokan-news__item-image">
                             <div><img src={SliderImg} /></div>
                        </div>
                        <div className="diokan-news-list">
                            <div className="diokan-news-list__item">
                                <div className="diokan-news-list__item-description">
                                    <p>
                                        10 awesome photo enhancement plugins for
                                        Photoshop you need to try
                                    </p>
                                </div>
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                            <div className="diokan-news-list__item">
                                <div className="diokan-news-list__item-description">
                                    <p>
                                        RAW vs. JPEG – the real story
                                    </p>
                                </div>
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                            <div className="diokan-news-list__item">
                                <div className="diokan-news-list__item-description">
                                    <p>
                                        Understanding White Balance
                                    </p>
                                </div>
                                <a href="" className="diokan-link diokan-link__small">Find out more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
  }
}

export default  SliderSimple
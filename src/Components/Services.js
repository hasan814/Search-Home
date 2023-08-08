import React, { Component } from 'react'
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'


class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>, 
                title: 'free cocktiles', 
                info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, odit tempore aspernatur sapiente quibusdam temporibus dignissimos '
            },
            {
                icon:<FaHiking/>, 
                title: 'endless hicking', 
                info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, odit tempore aspernatur sapiente quibusdam temporibus dignissimos '
            },
            {
                icon:<FaShuttleVan/>, 
                title: 'free shuttle', 
                info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, odit tempore aspernatur sapiente quibusdam temporibus dignissimos '
            },
            {
                icon:<FaBeer />, 
                title: 'strongest beer', 
                info:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, odit tempore aspernatur sapiente quibusdam temporibus dignissimos '
            },
        ]
    }
  render() {
    const {services} = this.state
    const newServices = services.map((service, index) =>{
        return(
            <article key={index} className='service'>
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
            </article>
        )
    })
    return (
      <section className='services'>
        <Title title='services'/>
        <div className="services-center">
            {newServices}
        </div>
      </section>
    )
  }
}

export default Services;
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  private programs = [
    {
      institution: 'European Institute of Inno...',
      country: 'SPAIN',
      counticon:'/spain.svg',
      langicon:'/england.svg',
      title: 'Illustration Design',
      mode: 'E-learning',
      startDate: new Date('2023-06-18'),
      languages: ['ENG'],
      type:'Full time',
      level: 'Undergraduate',
      duration: 4,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },

    {
      institution: 'European Institute of Inno...',
      country: 'SPAIN',
      counticon:'/spain.svg',
      langicon:'/england.svg',
      title: 'Illustration Design',
      mode: 'E-learning',
      startDate: new Date('2023-06-18'),
      languages: ['ENG','ESP'],
      type:'Full time',
      level: 'Undergraduate',
      duration: 4,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },

    {
      institution: 'University of Ibadan',
      country: 'NIGERIA',
      counticon:'/nigeria.svg',
      langicon:'/spain.svg',
      title: 'Designing for Accessibility',
      mode: 'Hybrid',
      startDate: new Date('2022-12-28'),
      languages: ['ESP'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 5000,
      image: '/hero.jpeg'
    },

    {
      institution: 'European Institute of Inno...',
      country: 'SPAIN',
      counticon:'/spain.svg',
      langicon:'/england.svg',
      title: 'Illustration Design',
      mode: 'E-learning',
      startDate: new Date('2023-06-18'),
      languages: ['ENG'],
      type:'Full time',
      level: 'Undergraduate',
      duration: 4,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },

    {
      institution: 'Harvard University',
      country: 'UNITED STATES',
      counticon:'/united-states.svg',
      langicon:'/england.svg',
      title: 'Experiencing Design: Deepening Your Design Thi...',
      mode: 'E-learning',
      startDate: new Date('2022-12-28'),
      languages: ['ENG','ESP', 'CHN'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },

    {
      institution: 'University of Ibadan',
      country: 'NIGERIA',
      counticon:'/nigeria.svg',
      langicon:'/spain.svg',
      title: 'Designing for Accessibility',
      mode: 'Hybrid',
      startDate: new Date('2022-12-28'),
      languages: ['ESP'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 5000,
      image: '/hero.jpeg'
    },

    {
      institution: 'European Institute of Inno...',
      country: 'SPAIN',
      counticon:'/spain.svg',
      langicon:'/england.svg',
      title: 'Illustration Design',
      mode: 'E-learning',
      startDate: new Date('2023-06-18'),
      languages: ['ENG'],
      type:'Full time',
      level: 'Undergraduate',
      duration: 4,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },

    {
      institution: 'Harvard University',
      country: 'UNITED STATES',
      counticon:'/united-states.svg',
      langicon:'/england.svg',
      title: 'Experiencing Design: Deepening Your Design Thi...',
      mode: 'E-learning',
      startDate: new Date('2022-12-28'),
      languages: ['ENG','ESP', 'CHN'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },

    {
      institution: 'European Institute of Inno...',
      country: 'SPAIN',
      counticon:'/spain.svg',
      langicon:'/england.svg',
      title: 'Illustration Design',
      mode: 'E-learning',
      startDate: new Date('2023-06-18'),
      languages: ['ENG','ESP'],
      type:'Full time',
      level: 'Undergraduate',
      duration: 4,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },

    {
      institution: 'European Institute of Inno...',
      country: 'SPAIN',
      counticon:'/spain.svg',
      langicon:'/england.svg',
      title: 'Illustration Design',
      mode: 'E-learning',
      startDate: new Date('2023-06-18'),
      languages: ['ENG'],
      type:'Full time',
      level: 'Undergraduate',
      duration: 4,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },

    {
      institution: 'Harvard University',
      country: 'UNITED STATES',
      counticon:'/united-states.svg',
      langicon:'/england.svg',
      title: 'Experiencing Design: Deepening Your Design Thi...',
      mode: 'E-learning',
      startDate: new Date('2022-12-28'),
      languages: ['ENG','ESP', 'CHN'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },

    {
      institution: 'European Institute of Inno...',
      country: 'SPAIN',
      counticon:'/spain.svg',
      langicon:'/england.svg',
      title: 'Illustration Design',
      mode: 'E-learning',
      startDate: new Date('2023-06-18'),
      languages: ['ENG','ESP'],
      type:'Full time',
      level: 'Undergraduate',
      duration: 4,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },

    {
      institution: 'European Institute of Inno...',
      country: 'SPAIN',
      counticon:'/spain.svg',
      langicon:'/england.svg',
      title: 'Illustration Design',
      mode: 'E-learning',
      startDate: new Date('2023-06-18'),
      languages: ['ENG'],
      type:'Full time',
      level: 'Undergraduate',
      duration: 4,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },
    {
      institution: 'European Institute of Inno...',
      country: 'SPAIN',
      counticon:'/spain.svg',
      langicon:'/england.svg',
      title: 'Illustration Design',
      mode: 'E-learning',
      startDate: new Date('2023-06-18'),
      languages: ['ENG'],
      type:'Full time',
      level: 'Undergraduate',
      duration: 4,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },
    {
      institution: 'University of Ibadan',
      country: 'NIGERIA',
      counticon:'/nigeria.svg',
      langicon:'/spain.svg',
      title: 'Designing for Accessibility',
      mode: 'Hybrid',
      startDate: new Date('2022-12-28'),
      languages: ['ENG','ESP'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 5000,
      image: '/hero.jpeg'
    }, {
      institution: 'University of Ibadan',
      country: 'NIGERIA',
      counticon:'/nigeria.svg',
      langicon:'/spain.svg',
      title: 'Designing for Accessibility',
      mode: 'Hybrid',
      startDate: new Date('2022-12-28'),
      languages: ['ENG','ESP'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 5000,
      image: '/hero.jpeg'
    }, {
      institution: 'University of Ibadan',
      country: 'NIGERIA',
      counticon:'/nigeria.svg',
      langicon:'/spain.svg',
      title: 'Designing for Accessibility',
      mode: 'Hybrid',
      startDate: new Date('2022-12-28'),
      languages: ['ENG','ESP'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 5000,
      image: '/hero.jpeg'
    },
    {
      institution: 'Harvard University',
      country: 'UNITED STATES',
      counticon:'/united-states.svg',
      langicon:'/england.svg',
      title: 'Experiencing Design: Deepening Your Design Thi...',
      mode: 'E-learning',
      startDate: new Date('2022-12-28'),
      languages: ['ENG'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },
    {
      institution: 'Harvard University',
      country: 'UNITED STATES',
      counticon:'/united-states.svg',
      langicon:'/england.svg',
      title: 'Experiencing Design: Deepening Your Design Thi...',
      mode: 'E-learning',
      startDate: new Date('2022-12-28'),
      languages: ['ENG'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },
    {
      institution: 'Harvard University',
      country: 'UNITED STATES',
      counticon:'/united-states.svg',
      langicon:'/england.svg',
      title: 'Experiencing Design: Deepening Your Design Thi...',
      mode: 'E-learning',
      startDate: new Date('2022-12-28'),
      languages: ['ENG'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },
    {
      institution: 'Harvard University',
      country: 'UNITED STATES',
      counticon:'/united-states.svg',
      langicon:'/england.svg',
      title: 'Experiencing Design: Deepening Your Design Thi...',
      mode: 'E-learning',
      startDate: new Date('2022-12-28'),
      languages: ['ENG'],
      type:'Part time',
      level: 'Masters',
      duration: 2,
      tuitionFee: 45000,
      image: '/search.jpeg'
    },


  ];

  getPrograms() {
    return this.programs;
  }
}

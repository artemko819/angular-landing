import About from '../interfaces/about.inteface';
import ImageBlock from '../interfaces/image-block.interface';
import Info from '../interfaces/infos.interface';
import Link from '../interfaces/link.interface';
import Service from '../interfaces/service.interface';
import Work from '../interfaces/work.intefrace';

export const SERVICES: Service[] = [
  {
    header: 'Safeguarding our clients',
    text: 'Discretion is key, therefore we have converted all our case studies without mentioning our clients names.',
    link: '#home',
    textLink: 'See Case Studies',
  },
  {
    header: 'Let`s meet & explore options together',
    text: 'We`re here to help and answer any question you might have. We look forward to hearing from you.',
    link: '#contact',
    textLink: 'Contact Us',
  },
  {
    header: 'Discover where we came from',
    text: 'We`re here to help and answer any question you might have. We look forward to hearing from you.',
    link: '#about-work',
    textLink: 'Our Timeline',
  },
];

export const INFOS: Info[] = [
  {
    count: '25+',
    header: 'years of experience',
    text: 'In handling legal issues.',
  },
  {
    count: '230+',
    header: 'signature strategies',
    text: 'Developed for our clients.',
  },
  {
    count: '145',
    header: 'corporate clients',
    text: 'We helped thus far.',
  },
  {
    count: '30',
    header: 'employees working',
    text: 'For your legal security.',
  },
];

export const LINKS: Link[] = [
  { id: 0, text: 'Home', path: '#home' },
  { id: 1, text: 'About Us', path: '#about' },
  { id: 2, text: 'What We Do', path: '#work' },
  { id: 3, text: 'Contact Us', path: '#contact' },
];

export const MOBILELINKS: Link[] = [
  { id: 0, text: 'Home', path: '#home' },
  { id: 1, text: 'What we do', path: '#services' },
  { id: 2, text: 'About us', path: '#about' },
  { id: 3, text: 'Our history', path: '#who-me' },
  { id: 4, text: 'Contact us', path: '#contact' },
];

export const MOBILELINKSSERVICE: Link[] = [
  { id: 0, text: 'Training and Implementation', path: '#' },
  { id: 1, text: 'Cyber Consultants', path: '#' },
  { id: 2, text: 'Consultancy and brand protection', path: '#' },
  { id: 3, text: 'Software', path: '#' },
];

export const WORKS: Work[] = [
  { id: 1, text: ' Training and Implementation' },
  { id: 2, text: 'Cyber Consultants' },
  { id: 3, text: 'Consultancy and  brand protection' },
  { id: 4, text: 'Software' },
];

export const IMAGEBLOCK: ImageBlock[] = [
  { id: 0, imageSrc: ' ../../assets/images/block-1.png' },
  { id: 1, imageSrc: '../../assets/images/block-2.png' },
  { id: 2, imageSrc: '../../assets/images/block-3.png' },
  { id: 3, imageSrc: '../../assets/images/block-4.png' },
];

export const TEXT: About[] = [
  {
    textNum: '3.5',
    textHeader: 'Billions',
    text: 'Preventive measurements implemented(cost reduction, loss of investment).',
  },
  {
    textNum: '25+',
    textHeader: 'Years',
    text: 'Of experience in minimizing risk and protecting assets.',
  },
  {
    textNum: '1.5',
    textHeader: 'Billions',
    text: 'Of experience in minimizing risk and protecting assets.',
  },
];

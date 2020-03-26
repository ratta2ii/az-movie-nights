import { v4 } from 'uuid';
import screensImage from './../assets/images/screens.jpg';
import soundImage from './../assets/images/sound.jpg';
import giantScreenImage from './../assets/images/giant-screen.jpg';
import popcornCart from './../assets/images/product-popcorn5.jpg';
import cottonCandy from './../assets/images/product-cotton-candy.jpg';
import tableChairs from './../assets/images/productTable.jpg';
import hotdogCart from './../assets/images/product-hotdog.png';

import completePackage from './../assets/images/package.png';

export const masterProductList = [
  {
    title: 'Complete Package',
    id: v4(),
    productId: '0',
    price: '499',
    mainImage: completePackage,
    key: 3,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga? Illo, a! Error minima odit sit totam iusto eveniet consequuntur corporis laboriosam nobis aperiam nostrum, ad voluptatibus nihil.'
  },
  {
    title: 'Giant Screen Package',
    id: v4(),
    productId: '1',
    key: 0,
    price: '695',
    mainImage: giantScreenImage,
    size: 'Actual Size: 23\'W X 16\'H X 15"L',
    description: 'Bring the BIG screen to your backyard or outdoor party! Entertain your guests at your next outdoor party with a movie or presentation. Our huge outdoor inflatable movie screens will be the "WOW" factor at any event!',
    ideas: 'Outdoor Movie Screen Party Ideas: Backyard Movie, Super Bowl Party, Video Game Tournament, Dance Party, PowerPoint presentations, Outdoor Fundraisers, Poolside Movie, Block Party, Drive In Movie, Corporate Events, Holiday Events, Premiere Events, Outdoor Grad Nights, Movie in the Park, Dive In Movie.',
    included: ['Inflatable Screen', 'Concert Grade Mackie or QSC 12\' High Powered Speakers', '3600-4600 lumen Projector', 'Blu Ray DVD Player', 'Set up and Tear Down of all rented equipment', 'Viewable Screen Dimensions 16\'W X 9\'H  (actual dimensions 23\'W X 16\'H X 15"L)', 'Professional Staff for your event']
  },
  {
    title: 'Sound Equipment',
    id: v4(),
    productId: '2',
    price: '149',
    mainImage: soundImage,
    key: 1,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga? Illo, a! Error minima odit sit totam iusto eveniet consequuntur corporis.'
  },
  {
    title: 'Screens',
    id: v4(),
    productId: '3',
    price: '499',
    mainImage: screensImage,
    key: 2,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga? Illo, a! Error minima odit sit totam iusto eveniet consequuntur corporis laboriosam nobis aperiam nostrum, ad voluptatibus nihil. Nam, asperiores voluptas ab accusamus reiciendis quidem earum dolorum. '
  },
  {
    title: 'Table and Chairs',
    id: v4(),
    productId: '4',
    price: '499',
    mainImage: tableChairs,
    key: 5,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga? Illo, a! Error minima odit sit totam iusto eveniet consequuntur corporis laboriosam nobis aperiam nostrum, ad voluptatibus nihil. Nam, asperiores voluptas ab accusamus reiciendis quidem earum dolorum. Ipsum nam ut magni sequi qui. Explicabo, neque nihil ea nesciunt repudiandae ducimus. '
  },
  {
    title: 'Popcorn Machine',
    id: v4(),
    productId: '5',
    price: '49',
    mainImage: popcornCart,
    key: 4,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga? Illo, a! Error minima odit sit totam iusto eveniet consequuntur corporis laboriosam nobis aperiam nostrum, ad voluptatibus nihil. '
  },
  {
    title: 'Hotdog Cart',
    id: v4(),
    productId: '6',
    price: '499',
    mainImage: hotdogCart,
    key: 6,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga? Illo, a! Error minima odit sit totam iusto eveniet consequuntur corporis laboriosam nobis aperiam nostrum, ad voluptatibus nihil.'
  },
  {
    title: 'Cotton Candy Machine',
    id: v4(),
    productId: '7',
    price: '149',
    mainImage: cottonCandy,
    key: 7,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quia neque quidem voluptatum, quaerat fuga? Illo, a! Error minima odit sit totam iusto eveniet consequuntur corporis laboriosam nobis aperiam nostrum, ad voluptatibus nihil. Nam, asperiores voluptas ab accusamus reiciendis quidem earum dolorum. '
  }];


// // Define the product type
// export interface Product {
//     _id: number;
//     title: string;
//     isNew: boolean;
//     oldPrice: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: number;
//     quantity: number;
//   }
  
//   // Array of products with proper type
//   export const products: Product[]  = [
//     {
//       _id: 1,
//       title: "art",
//       isNew: true,
//       oldPrice: "2400",
//       price: 2100,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j5.png",
//       rating: 4,
//       quantity: 1,
//     },
//     {
//       _id: 2,
//       title: "Jacket with wollen hat",
//       isNew: true,
//       oldPrice: "70",
//       price: 65,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j6.png",
//       rating: 3,
//       quantity: 1,
//     },
//     {
//       _id: 3,
//       title: "Compact fashion t-shirt",
//       isNew: true,
//       oldPrice: "70",
//       price: 55.99,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j6.png",
//       rating: 3,
//       quantity: 1,
//     },
//     {
//       _id: 4,
//       title: "Blue jins",
//       isNew: true,
//       oldPrice: "70",
//       price: 50,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j5.png",
//       rating: 3,
//       quantity: 1,
//     },
//     {
//       _id: 5,
//       title: "Skirts with full setup",
//       isNew: true,
//       oldPrice: "800",
//       price: 695,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j6.png",
//       rating: 5,
//       quantity: 1,
//     },
//     {
//       _id: 6,
//       title: "Yellow Hoody",
//       isNew: false,
//       oldPrice: "200",
//       price: 180,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "men",
//       image:
//         "/j1.png",
//       rating: 4,
//       quantity: 1,
//     },
//     {
//       _id: 7,
//       title: "Black t-shirt for women",
//       isNew: false,
//       oldPrice: "60",
//       price: 20,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j2.png",
//       rating: 2,
//       quantity: 1,
//     },
//     {
//       _id: 8,
//       title: "Gouwn with Red velvet",
//       isNew: false,
//       oldPrice: "500",
//       price: 350,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j6.png",
//       rating: 3,
//       quantity: 1,
//     },
//     {
//       _id: 9,
//       title: "Pink beauty",
//       isNew: false,
//       oldPrice: "150",
//       price: 100,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j5.png",
//       rating: 3,
//       quantity: 1,
//     },
//     {
//       _id: 10,
//       title: "Jean's stylish Jacket",
//       isNew: false,
//       oldPrice: "250",
//       price: 245,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "men",
//       image:
//         "/j6.png",
//       rating: 5,
//       quantity: 1,
//     },
//     {
//       _id: 11,
//       title: "Round neck t-shirt",
//       isNew: false,
//       oldPrice: "1000",
//       price: 800,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j4.png",
//       rating: 4,
//       quantity: 1,
//     },
//     {
//       _id: 12,
//       title: "Black Jacket",
//       isNew: false,
//       oldPrice: "200",
//       price: 140,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "men",
//       image:
//         "/j6.png",
//       rating: 3,
//       quantity: 1,
//     },
//     {
//       _id: 13,
//       title: "Black top with jeans",
//       isNew: false,
//       oldPrice: "130",
//       price: 120,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j6.png",
//       rating: 4,
//       quantity: 1,
//     },
//     {
//       _id: 14,
//       title: "Kids choice",
//       isNew: false,
//       oldPrice: "80",
//       price: 50,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "kids",
//       image:
//         "/j1.png",
//       rating: 2,
//       quantity: 1,
//     },
//     {
//       _id: 15,
//       title: "Stylish jeans in lightblue",
//       isNew: false,
//       oldPrice: "120",
//       price: 100,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j6.png",
//       rating: 4,
//       quantity: 1,
//     },
//     {
//       _id: 16,
//       title: "Unknown horizon",
//       isNew: false,
//       oldPrice: "400",
//       price: 350,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "men",
//       image:
//         "/j4.png",
//       rating: 4,
//       quantity: 1,
//     },
//     {
//       _id: 17,
//       title: "Light tops",
//       isNew: false,
//       oldPrice: "140",
//       price: 120,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j6.png",
//       rating: 3,
//       quantity: 1,
//     },
//     {
//       _id: 18,
//       title: "Khakhi jeans",
//       isNew: false,
//       oldPrice: "250",
//       price: 190,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "/j2.png ",
//       rating: 4,
//       quantity: 1,
//     },
//     {
//       _id: 19,
//       title: "Black full sleeve",
//       isNew: false,
//       oldPrice: "180",
//       price: 170,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "https://images.pexels.com/photos/2693849/pexels-photo-2693849.jpeg?auto=compress&cs=tinysrgb&w=600",
//       rating: 3,
//       quantity: 1,
//     },
//     {
//       _id: 20,
//       title: "Formal for Men",
//       isNew: false,
//       oldPrice: "500",
//       price: 490,
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//       category: "women",
//       image:
//         "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
//       rating: 5,
//       quantity: 1,
//     },
//   ];
  

export interface Product {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number;
    quantity: number;
  }
  
  export const products: Product[] = [
    {
      _id: 1,
      title: "Abstract Art Sketch",
      isNew: true,
      oldPrice: "2400",
      price: 2100,
      description:
        "A stunning abstract sketch with vibrant hues and delicate linework. Perfect for modern spaces.",
      category: "art",
      image: "/j1.png",
      rating: 4,
      quantity: 1,
    },
    {
      _id: 2,
      title: "Watercolor Portrait",
      isNew: true,
      oldPrice: "3000",
      price: 2800,
      description:
        "A detailed watercolor portrait capturing the essence of human emotion in subtle tones.",
      category: "art",
      image: "/j2.png",
      rating: 5,
      quantity: 1,
    },
    {
      _id: 3,
      title: "Geometric Design Sketch",
      isNew: true,
      oldPrice: "1500",
      price: 1350,
      description:
        "A minimalist geometric sketch, perfect for lovers of abstract and modern art.",
      category: "art",
      image: "/j17.png",
      rating: 3,
      quantity: 1,
    },
    {
      _id: 4,
      title: "Floral Watercolor Painting",
      isNew: false,
      oldPrice: "1800",
      price: 1600,
      description:
        "A beautiful floral watercolor painting with delicate petals and vibrant colors.",
      category: "art",
      image: "/j19.png",
      rating: 4,
      quantity: 1,
    },
    {
      _id: 5,
      title: "Surrealist Dreamscape",
      isNew: true,
      oldPrice: "4000",
      price: 3500,
      description:
        "A surrealist dreamscape with intricate details and a vibrant color palette. A true masterpiece.",
      category: "art",
      image: "/j5.png",
      rating: 5,
      quantity: 1,
    },
    {
      _id: 6,
      title: "Charcoal Life Drawing",
      isNew: false,
      oldPrice: "1200",
      price: 1100,
      description:
        "An exquisite charcoal drawing depicting the human form with deep shadows and light contrasts.",
      category: "art",
      image: "/j6.png",
      rating: 4,
      quantity: 1,
    },
    {
      _id: 7,
      title: "Ink Sketch of Cityscape",
      isNew: false,
      oldPrice: "1000",
      price: 900,
      description:
        "A detailed ink sketch of a bustling cityscape, capturing the energy of urban life.",
      category: "art",
      image: "/j7.png",
      rating: 3,
      quantity: 1,
    },
    {
      _id: 8,
      title: "Modern Art Painting",
      isNew: false,
      oldPrice: "2500",
      price: 2300,
      description:
        "A contemporary art piece with bold colors and dynamic brush strokes, perfect for modern homes.",
      category: "art",
      image: "/j8.png",
      rating: 5,
      quantity: 1,
    },
    {
      _id: 9,
      title: "Pastel Landscape",
      isNew: true,
      oldPrice: "1500",
      price: 1300,
      description:
        "A calming landscape created with soft pastels, depicting a serene countryside.",
      category: "art",
      image: "/j9.png",
      rating: 4,
      quantity: 1,
    },
    {
      _id: 10,
      title: "Cubist Portrait",
      isNew: false,
      oldPrice: "3200",
      price: 3000,
      description:
        "A striking cubist portrait with abstract shapes and contrasting colors, inspired by early 20th-century art.",
      category: "art",
      image: "/j10.png",
      rating: 5,
      quantity: 1,
    },
    {
      _id: 11,
      title: "Still Life with Fruit",
      isNew: true,
      oldPrice: "2200",
      price: 2000,
      description:
        "A traditional still life painting with rich textures and vibrant colors. Perfect for a classic home decor.",
      category: "art",
      image: "/j11.png",
      rating: 4,
      quantity: 1,
    },
    {
      _id: 12,
      title: "Monochrome Ink Sketch",
      isNew: false,
      oldPrice: "800",
      price: 700,
      description:
        "A minimalist monochrome ink sketch featuring clean lines and elegant composition.",
      category: "art",
      image: "/j12.png",
      rating: 3,
      quantity: 1,
    },
    {
      _id: 13,
      title: "Expressionist Painting",
      isNew: true,
      oldPrice: "5000",
      price: 4500,
      description:
        "An emotionally charged expressionist painting with bold strokes and vibrant hues, conveying raw emotion.",
      category: "art",
      image: "/j13.png",
      rating: 5,
      quantity: 1,
    },
    {
      _id: 14,
      title: "Pen and Ink Architectural Drawing",
      isNew: false,
      oldPrice: "1400",
      price: 1200,
      description:
        "A highly detailed pen and ink drawing of an architectural marvel, highlighting intricate designs.",
      category: "art",
      image: "/j14.png",
      rating: 4,
      quantity: 1,
    },
    {
      _id: 15,
      title: "Realistic Pencil Portrait",
      isNew: false,
      oldPrice: "1800",
      price: 1600,
      description:
        "A finely crafted pencil portrait with lifelike details and masterful shading techniques.",
      category: "art",
      image: "/j15.png",
      rating: 4,
      quantity: 1,
    },
    {
      _id: 16,
      title: "Abstract Colorfield Painting",
      isNew: false,
      oldPrice: "6000",
      price: 5500,
      description:
        "A large-scale abstract colorfield painting with vibrant blocks of color, perfect for a modern gallery space.",
      category: "art",
      image: "/j16.png",
      rating: 5,
      quantity: 1,
    },
    {
      _id: 17,
      title: "Line Art Illustration",
      isNew: true,
      oldPrice: "900",
      price: 800,
      description:
        "A delicate line art illustration with minimal yet intricate design, highlighting the beauty of simplicity.",
      category: "art",
      image: "/j17.png",
      rating: 3,
      quantity: 1,
    },
    {
      _id: 18,
      title: "Nature-Inspired Acrylic Painting",
      isNew: false,
      oldPrice: "2800",
      price: 2600,
      description:
        "An acrylic painting inspired by nature, with lush greens and vibrant blues that evoke a sense of peace.",
      category: "art",
      image: "/j18.png",
      rating: 4,
      quantity: 1,
    },
    {
      _id: 19,
      title: "Vintage Poster Art",
      isNew: false,
      oldPrice: "1200",
      price: 1100,
      description:
        "A retro-style poster art piece with bold typography and vibrant colors, reminiscent of mid-century design.",
      category: "art",
      image: "/j19.png",
      rating: 4,
      quantity: 1,
    },
    {
      _id: 20,
      title: "Impressionist Landscape Painting",
      isNew: false,
      oldPrice: "4500",
      price: 4200,
      description:
        "A breathtaking impressionist landscape painting, capturing the beauty of nature with soft brushstrokes and a harmonious palette.",
      category: "art",
      image: "/j20.png",
      rating: 5,
      quantity: 1,
    }
  ];

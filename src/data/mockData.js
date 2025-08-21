// Mock data for the website
export const categories = [
  {
    id: "1",
    name: "Men's Watches",
    slug: "mens-watches",
    description: "Luxury timepieces for men",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "2",
    name: "Women's Watches",
    slug: "womens-watches",
    description: "Elegant watches for women",
    image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "3",
    name: "Pre-Owned Watches",
    slug: "pre-owned-watches",
    description: "Certified pre-owned luxury watches",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "4",
    name: "Pocket Watches",
    slug: "pocket-watches",
    description: "Classic vintage pocket watches",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
  }
];

export const products = [
  {
    id: "1",
    name: "Vintage Gold Wristwatch",
    slug: "vintage-gold-wristwatch",
    brand: "RADIANT",
    description: "Classic vintage design with gold accents",
    price: 19900,
    originalPrice: 22000,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    categoryId: "1",
    isNew: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Heritage Automatic Watch",
    slug: "heritage-automatic-watch",
    brand: "LIGNESS",
    description: "Premium automatic movement timepiece",
    price: 8600,
    image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    categoryId: "1",
    isNew: true
  },
  {
    id: "3",
    name: "Patek Philippe Nautilus",
    slug: "patek-philippe-nautilus",
    brand: "ARINETE",
    description: "Luxury sport watch with blue dial",
    price: 7500,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    categoryId: "1",
    isNew: true
  },
  {
    id: "4",
    name: "Audemars Piguet Royal",
    slug: "audemars-piguet-royal",
    brand: "COSTA",
    description: "Iconic luxury sports watch",
    price: 8900,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    categoryId: "1",
    isNew: true
  },
  {
    id: "5",
    name: "Luxury Heritage Automatic Steel",
    slug: "luxury-heritage-automatic-steel",
    brand: "COSTA",
    description: "Premium steel automatic chronograph",
    price: 17800,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    categoryId: "1",
    isPopular: true
  },
  {
    id: "6",
    name: "Eternal Classic Timepiece",
    slug: "eternal-classic-timepiece",
    brand: "JAMIROQUAI",
    description: "Timeless design with leather strap",
    price: 7800,
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    categoryId: "1",
    isPopular: true
  },
  {
    id: "7",
    name: "Precision Elite Chronograph",
    slug: "precision-elite-chronograph",
    brand: "ARINETE",
    description: "High-precision chronograph movement",
    price: 16800,
    originalPrice: 19200,
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    categoryId: "1",
    isPopular: true
  },
  {
    id: "8",
    name: "Tag Heuer Carrera Chrono",
    slug: "tag-heuer-carrera-chrono",
    brand: "LIGNESS",
    description: "Racing-inspired chronograph watch",
    price: 18900,
    originalPrice: 19600,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    categoryId: "1",
    isPopular: true
  }
];

export const blogPosts = [
  {
    id: "1",
    title: "The Best Watches for Every Occasion",
    slug: "best-watches-every-occasion",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    content: "Detailed guide on choosing the perfect watch for different occasions...",
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "Watches",
    publishedAt: new Date('2024-08-08'),
    isFeatured: true
  },
  {
    id: "2",
    title: "Eye on Style: Glasses and Fashion",
    slug: "eye-on-style-glasses-fashion",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    content: "Exploring the intersection of eyewear and fashion trends...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
    category: "News Watches",
    publishedAt: new Date('2023-07-31')
  },
  {
    id: "3",
    title: "Top Luxury Watch Brands You Should Know",
    slug: "top-luxury-watch-brands",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    content: "Comprehensive guide to the most prestigious watch manufacturers...",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200",
    category: "Watches",
    publishedAt: new Date('2024-08-08')
  }
];

export const reviews = [
  {
    id: "1",
    customerName: "Kristin Watson",
    customerTitle: "Teacher",
    content: "I've been a customer at Zenny for over five years, and they never disappoint! The selection of frames is fantastic, catering to all ages and preferences. The staff is always friendly and knowledgeable, helping me choose the perfect pair of glasses every time.",
    rating: 5
  },
  {
    id: "2",
    customerName: "David B.",
    customerTitle: "Civil Engineer",
    content: "I had an excellent experience with Zenny. The in-store eye exam was thorough and the optometrist provided helpful recommendations for my new glasses. I chose a pair of high-quality frames that absolutely love.",
    rating: 5
  },
  {
    id: "3",
    customerName: "Mary Jane",
    customerTitle: "Marketing Manager",
    content: "As someone who prefers online shopping, Zenny made the process seamless and enjoyable. Their website is easy to navigate and the virtual try-on tool helped me find the perfect frames without leaving my home.",
    rating: 5
  }
];
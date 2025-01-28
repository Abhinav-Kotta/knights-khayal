export interface Member {
    id: string;
    name: string;
    role: string;
    image: string;
    bio?: string;
  }
  
  export interface Performance {
    id: string;
    title: string;
    date: string;
    venue: string;
    time?: string;
    thumbnail?: string;
    description?: string;
    videoUrl?: string;
  }
  
  export interface ContactForm {
    name: string;
    email: string;
    message: string;
  }
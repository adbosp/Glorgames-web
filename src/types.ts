export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'action' | 'strategy' | 'puzzle' | 'adventure';
  rating: number;
  releaseDate: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}
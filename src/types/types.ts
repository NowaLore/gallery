export interface AttrTypes {
  [key: string]: string;
}

export interface ParamsTypes {
  tagName: string;
  classList?: string;
  attr?: AttrTypes;
  text?: string;
}

export interface User {
  accepted_tos: boolean;
  bio: null | string;
  first_name: string | null;
  for_hire: boolean;
  id: string | null;
  instagram_username: string | null;
  last_name: string | null;
  links: Record<string, string>;
  location: null | string;
  name: string | null;
  portfolio_url: string | null;
  profile_image: Record<string, string>;
  social: Record<string, string>;
  total_collections: number;
  total_illustrations: number;
  total_likes: number;
  total_photos: number;
  total_promoted_illustrations: number;
  total_promoted_photos: number;
  twitter_username: string | null;
  updated_at: string | null;
  username: string | null;
}

export interface PhotoDescription {
  alt_description: string;
  alternative_slugs: Record<string, string>;
  asset_type: string;
  blur_hash: string;
  breadcrumbs: string[];
  color: string;
  created_at: string;
  current_user_collections: string[];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Record<string, string>;
  promoted_at: string;
  slug: string;
  sponsorship: null | string;
  topic_submissions: string;
  updated_at: string;
  urls: Record<string, string>;
  width: number;
  user: User;
}

export interface Data {
  results: PhotoDescription[];
  total: number;
  total_pages: number;
}

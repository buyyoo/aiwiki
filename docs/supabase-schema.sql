-- AIWikiClaw Database Schema for Supabase

-- 1. Users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  nickname TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'creator', 'admin')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Articles table
CREATE TABLE public.articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT,
  summary TEXT,
  category TEXT NOT NULL CHECK (category IN ('ai', 'wiki', 'claw')),
  tags TEXT[],
  author_id UUID REFERENCES public.profiles(id),
  cover_image TEXT,
  views INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Products table (智能体/技能)
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) DEFAULT 0,
  category TEXT NOT NULL CHECK (category IN ('agent', 'skill', 'template', 'project')),
  owner_id UUID REFERENCES public.profiles(id),
  cover_image TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  sales INTEGER DEFAULT 0,
  rating DECIMAL(2,1) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id UUID REFERENCES public.profiles(id),
  product_id UUID REFERENCES public.products(id),
  amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Reviews table
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES public.products(id),
  user_id UUID REFERENCES public.profiles(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  content TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Profiles: users can read all, update own
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Articles: anyone can read published
CREATE POLICY "Anyone can view published articles" ON public.articles FOR SELECT USING (status = 'published');
CREATE POLICY "Creators can insert articles" ON public.articles FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Owners can update articles" ON public.articles FOR UPDATE USING (auth.uid() = author_id);

-- Products: anyone can read published
CREATE POLICY "Anyone can view published products" ON public.products FOR SELECT USING (status = 'published');
CREATE POLICY "Creators can insert products" ON public.products FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Owners can update products" ON public.products FOR UPDATE USING (auth.uid() = owner_id);

-- Trigger to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, nickname)
  VALUES (new.id, new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'nickname');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
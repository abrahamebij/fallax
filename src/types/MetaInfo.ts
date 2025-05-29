export default interface MetaInfo {
  title: string | null;
  ogTitle?: string | null;
  description: string | null;
  ogDescription?: string | null;
  keywords?: string[] | null;
  image: string | null;
  favicon?: string | null;
  url?: string;
}

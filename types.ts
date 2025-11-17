
export interface DownloadResult {
  thumbnailUrl: string;
  videoUrl: string;
  hdVideoUrl: string;
  mp3Url: string;
  author: string;
  title: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
    imageUrl: string;
    content: string;
}

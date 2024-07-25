export interface Blog {
    id: number | string;
    content: string;
    author: string;
    date: Date;
}

export const blogList: Blog[] = [
    {
        id: 'blog-1',
        content: "This is a Test Blog",
        author: 'novani',
        date: new Date()
    }
]
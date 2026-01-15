import { Search } from "lucide-react";
import BlogCard, { type Blog } from "~/components/blog-card";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { Input } from "~/components/ui/input";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const mockBlogs: Blog[] = [
  {
    objectId: "A1B2C3D4-E5F6-7890-ABCD-EF1234567890",
    thumbnail:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    author: "Sarah Chen",
    created: 1766027438158,
    ___class: "Blogs",
    description:
      "Learn how to prepare a delicious and healthy meal in under 30 minutes with simple ingredients.",
    title: "Quick & Healthy Recipes for Busy People",
    ownerId: null,
    category: "Food",
    updated: 1766027438158,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    objectId: "B2C3D4E5-F6A7-8901-BCDE-F23456789012",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    author: "John Doe",
    created: 1765941038158,
    ___class: "Blogs",
    description:
      "Explore the latest trends in technology and how they are shaping our future workplace.",
    title: "The Future of Remote Work Technology",
    ownerId: null,
    category: "Technology",
    updated: 1765941038158,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    objectId: "C3D4E5F6-A7B8-9012-CDEF-345678901234",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    author: "Emma Wilson",
    created: 1765854638158,
    ___class: "Blogs",
    description:
      "A complete guide to planning your next adventure trip to the mountains with essential tips.",
    title: "Mountain Hiking: A Beginner's Guide",
    ownerId: null,
    category: "Travel",
    updated: 1765854638158,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    objectId: "D4E5F6A7-B8C9-0123-DEFA-456789012345",
    thumbnail:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    author: "Michael Brown",
    created: 1765768238158,
    ___class: "Blogs",
    description:
      "Simple yoga exercises you can do at home to improve your flexibility and mental health.",
    title: "Yoga for Beginners: Start Your Journey",
    ownerId: null,
    category: "Health",
    updated: 1765768238158,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    objectId: "E5F6A7B8-C9D0-1234-EFAB-567890123456",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    author: "Lisa Anderson",
    created: 1765681838158,
    ___class: "Blogs",
    description:
      "Essential tips for managing your personal finances and building wealth over time.",
    title: "Smart Money Management Tips",
    ownerId: null,
    category: "Finance",
    updated: 1765681838158,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    objectId: "F6A7B8C9-D0E1-2345-FABC-678901234567",
    thumbnail:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    author: "David Kim",
    created: 1765595438158,
    ___class: "Blogs",
    description:
      "A deep dive into modern web development frameworks and best practices for 2024.",
    title: "Modern Web Development in 2024",
    ownerId: null,
    category: "Technology",
    updated: 1765595438158,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    objectId: "A7B8C9D0-E1F2-3456-ABCD-789012345678",
    thumbnail:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    author: "Maria Garcia",
    created: 1765509038158,
    ___class: "Blogs",
    description:
      "Discover authentic Italian pasta recipes passed down through generations.",
    title: "Traditional Italian Pasta Recipes",
    ownerId: null,
    category: "Food",
    updated: 1765509038158,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    objectId: "B8C9D0E1-F2A3-4567-BCDE-890123456789",
    thumbnail:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    author: "James Wilson",
    created: 1765422638158,
    ___class: "Blogs",
    description:
      "Build muscle and improve your strength with these proven workout routines.",
    title: "Strength Training Fundamentals",
    ownerId: null,
    category: "Sport",
    updated: 1765422638158,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to BlogApp
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing stories, insights, and ideas from writers around
            the world.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search blogs..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockBlogs.map((blog) => (
            <BlogCard key={blog.objectId} blog={blog} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
# Pro Black Belt Academy Website - Editing Guide

## 🚀 Quick Start Guide

Your website is built with **Next.js** and **React**, using modern web technologies. Here's everything you need to know to edit it yourself.

## 📁 Project Structure

```
pro-black-belt-academy/
├── app/                    # Main pages and routing
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   ├── classes/           # Class schedules
│   ├── events/            # Events page
│   ├── instructors/       # Instructor profiles
│   ├── member-portal/     # Member login/dashboard
│   ├── payment/           # Payment processing
│   └── book-trial/        # Trial booking
├── components/            # Reusable components
│   ├── navigation.tsx     # Top navigation bar
│   ├── footer.tsx         # Footer section
│   └── ui/               # UI components
├── public/               # Images and static files
└── package.json          # Project dependencies
```

## 🛠️ How to Set Up for Editing

### Option 1: Local Development (Recommended)
1. **Install Node.js**: Download from [nodejs.org](https://nodejs.org)
2. **Install pnpm**: Run `npm install -g pnpm`
3. **Download your website files** (I'll provide instructions below)
4. **Install dependencies**: Run `pnpm install`
5. **Start development server**: Run `pnpm dev`
6. **Open in browser**: Go to `http://localhost:3000`

### Option 2: Online Editors
- **CodeSandbox**: Upload your project for online editing
- **Replit**: Create a new Next.js project and copy your files
- **GitHub Codespaces**: Edit directly in the browser

## 📝 Common Editing Tasks

### 1. Changing Text Content

**Homepage Hero Section** (`app/page.tsx`):
```tsx
// Find this section around line 50-80
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  Building{" "}
  <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent italic">
    Leaders
  </span>
  <br />
  One Black Belt at a Time
</h1>
```

**Contact Information** (`components/navigation.tsx`):
```tsx
// Find around line 20-30
<div className="flex items-center space-x-6 text-sm">
  <div className="flex items-center">
    <Phone className="h-4 w-4 mr-2" />
    (469) 481-2782
  </div>
  <div className="flex items-center">
    <Mail className="h-4 w-4 mr-2" />
    info@problackbeltacademy.com
  </div>
</div>
```

### 2. Updating Prices

**Membership Prices** (`app/payment/page.tsx`):
```tsx
// Find around line 30-60
const membershipPlans = [
  {
    id: "unlimited",
    name: "Unlimited Monthly",
    price: 99,              // Change this number
    originalPrice: 120,     // Change this number
    description: "Unlimited classes, all programs included",
    // ... rest of plan details
  }
]
```

### 3. Adding New Blog Posts

**Blog Posts** (`app/blog/page.tsx`):
```tsx
// Find around line 20-50
const blogPosts = [
  {
    id: 1,
    title: "Your New Blog Post Title",
    excerpt: "Brief description of your post...",
    content: "Full content of your blog post...",
    author: "Instructor Name",
    date: "2025-01-20",
    category: "Training Tips",
    image: "/blog-image.jpg",
    readTime: "5 min read"
  },
  // Add more posts here
]
```

### 4. Updating Class Schedules

**Class Times** (`app/classes/page.tsx`):
```tsx
// Find around line 30-100
const weeklySchedule = {
  Monday: [
    {
      time: "4:00 PM - 4:45 PM",
      program: "Little Dragons (Ages 3-4)",
      instructor: "Ms. Sarah",
      capacity: 12,
      enrolled: 8
    },
    // Add or modify classes here
  ]
}
```

### 5. Adding New Instructors

**Instructor Profiles** (`app/instructors/page.tsx`):
```tsx
// Find around line 20-80
const instructors = [
  {
    id: 1,
    name: "New Instructor Name",
    title: "Head Instructor",
    belt: "5th Degree Black Belt",
    experience: "15+ years",
    specialties: ["Kids Programs", "Self Defense"],
    bio: "Instructor biography...",
    image: "/instructor-photo.jpg",
    rating: 4.9,
    students: 150
  },
  // Add more instructors here
]
```

## 🎨 Customizing Colors and Styling

### Brand Colors
Your website uses these main colors:
- **Red**: `#DC2626` (Primary red)
- **Blue**: `#2563EB` (Primary blue)  
- **Gold**: `#EAB308` (Accent gold)

### Changing Colors
Look for these CSS classes throughout the files:
- `text-red-600` - Red text
- `bg-blue-600` - Blue background
- `from-red-600 to-blue-600` - Red to blue gradient

### Custom Styling
The website uses **Tailwind CSS**. Common classes:
- `text-xl` - Large text
- `font-bold` - Bold text
- `mb-4` - Margin bottom
- `p-6` - Padding
- `rounded-lg` - Rounded corners

## 📸 Adding Images

1. **Add images** to the `public/` folder
2. **Reference them** in your code like this:
```tsx
<img src="/your-image.jpg" alt="Description" />
```

### Recommended Image Sizes:
- **Hero images**: 1920x1080px
- **Instructor photos**: 400x400px
- **Blog images**: 800x600px
- **Logo**: 200x200px

## 🔧 Advanced Customizations

### Adding New Pages
1. Create a new folder in `app/` (e.g., `app/new-page/`)
2. Add a `page.tsx` file inside
3. Copy structure from existing pages

### Modifying Navigation
Edit `components/navigation.tsx` to add/remove menu items:
```tsx
const navItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Your New Page", href: "/new-page" }, // Add here
]
```

## 🚀 Publishing Changes

### Option 1: Deploy to Vercel (Recommended)
1. Create account at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Automatic deployments on every change

### Option 2: Deploy to Netlify
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your build folder
3. Connect to GitHub for automatic updates

## 📱 Mobile Responsiveness

Your website is already mobile-responsive! The design automatically adapts to different screen sizes using:
- `md:text-xl` - Different sizes on mobile vs desktop
- `grid-cols-1 md:grid-cols-2` - 1 column on mobile, 2 on desktop
- `hidden md:block` - Hide on mobile, show on desktop

## 🆘 Getting Help

### Common Issues:
1. **Site won't start**: Run `pnpm install` then `pnpm dev`
2. **Changes not showing**: Hard refresh browser (Ctrl+F5)
3. **Styling broken**: Check for typos in class names

### Resources:
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **React Tutorial**: [react.dev/learn](https://react.dev/learn)

## 📋 Quick Reference Checklist

### Before Making Changes:
- [ ] Backup your current website
- [ ] Test changes locally first
- [ ] Check mobile responsiveness
- [ ] Verify all links work

### After Making Changes:
- [ ] Test on different browsers
- [ ] Check loading speed
- [ ] Verify contact forms work
- [ ] Update any hardcoded dates

## 💡 Pro Tips

1. **Start Small**: Make one change at a time
2. **Use Browser DevTools**: Right-click → Inspect to see live changes
3. **Keep Backups**: Always save working versions
4. **Test Everything**: Check all pages after major changes
5. **Mobile First**: Always check how changes look on phones

---

## 📞 Need Help?

If you get stuck, you can:
1. **Google the error message** - Usually finds solutions quickly
2. **Ask on Stack Overflow** - Developer community
3. **Hire a developer** - For complex changes
4. **Use AI assistants** - ChatGPT, Claude, etc. can help with code

Remember: Your website is built with modern, maintainable code. Small changes are easy, and the structure is designed to be beginner-friendly!

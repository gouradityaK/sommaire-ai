import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Rss, FileText } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
export default function ComprehensiveFooter() {
    return (
        // <footer className="bg-gray-50 dark:bg-gray-900 border-t">
        //     <div className="container mx-auto px-4 py-16 max-w-7xl">
        //         {/* Main Footer Content */}
        //         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        //             {/* Personal Branding Column */}
        //             <div className="md:col-span-4 flex flex-col items-center md:items-start">
        //                 <div className="relative h-44 w-40 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg mb-6">
        //                     <Image
        //                         src="/my-ghibli.png"
        //                         alt="Aditya Gaur"
        //                         fill
        //                         className="object-cover"
        //                         priority
        //                     />
        //                 </div>

        //                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Aditya Gaur</h3>
        //                 <p className="text-gray-600 dark:text-gray-300 mb-6 text-center md:text-left">Full Stack Developer & AI Enthusiast</p>

        //                 <div className="flex space-x-4 mb-8">
        //                     {[
        //                         { icon: <Github className="h-5 w-5" />, href: "https://github.com/gouradityaK" },
        //                         { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/adityagour06/                                                                                  " },
        //                         { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/AdityaG48638889" },
        //                         { icon: <Mail className="h-5 w-5" />, href: "mailto:gouraditya2002@gmail.com" }
        //                     ].map((item, index) => (
        //                         <Link
        //                             key={index}
        //                             href={item.href}
        //                             target="_blank"
        //                             rel="noopener noreferrer"
        //                             className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        //                         >
        //                             {item.icon}
        //                         </Link>
        //                     ))}
        //                 </div>

        //                 <Button asChild className="w-full md:w-auto">
        //                     <Link href="/contact" className="flex items-center justify-center gap-2">
        //                         <Mail className="h-4 w-4" />
        //                         Contact Me
        //                     </Link>
        //                 </Button>
        //             </div>

        //             {/* Quick Links Column */}
        //             <div className="md:col-span-2">
        //                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Explore</h4>
        //                 <ul className="space-y-3">
        //                     {[
        //                         { name: "About Me", href: "/about" },
        //                         { name: "Projects", href: "/projects" },
        //                         { name: "Blog", href: "/blog" },
        //                         { name: "Tech Stack", href: "/tech" },
        //                         // { name: "Testimonials", href: "/testimonials" }
        //                     ].map((item, index) => (
        //                         <li key={index}>
        //                             <Link
        //                                 href={item.href}
        //                                 className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        //                             >
        //                                 {item.name}
        //                             </Link>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>

        //             {/* Resources Column */}
        //             <div className="md:col-span-3">
        //                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
        //                 <ul className="space-y-3">
        //                     {[
        //                         { name: "Documentation", href: "/docs", icon: <FileText className="h-4 w-4 mr-2" /> },
        //                         { name: "GitHub Repos", href: "/github", icon: <Github className="h-4 w-4 mr-2" /> },
        //                         { name: "Blog RSS Feed", href: "/rss", icon: <Rss className="h-4 w-4 mr-2" /> },
        //                         { name: "Coding Tutorials", href: "/tutorials" },
        //                         { name: "Dev Tools", href: "/tools" }
        //                     ].map((item, index) => (
        //                         <li key={index}>
        //                             <Link
        //                                 href={item.href}
        //                                 className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        //                             >
        //                                 {item.icon || <span className="w-6" />}
        //                                 {item.name}
        //                             </Link>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>

        //             {/* Newsletter Column */}
        //             <div className="md:col-span-3">
        //                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Stay Updated</h4>
        //                 <p className="text-gray-600 dark:text-gray-400 mb-4">
        //                     Subscribe to my newsletter for tech insights, project updates, and coding tips.
        //                 </p>

        //                 <form className="space-y-3">
        //                     <input
        //                         type="email"
        //                         placeholder="Your email address"
        //                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
        //                         required
        //                     />
        //                     <Button type="submit" className="w-full">
        //                         Subscribe
        //                     </Button>
        //                 </form>

        //                 <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        //                     I respect your privacy. Unsubscribe at any time.
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Footer Bottom */}
        //         <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        //             <p className="text-gray-500 dark:text-gray-400 text-sm">
        //                 © {new Date().getFullYear()} Aditya Gaur. All rights reserved.
        //             </p>

        //             <div className="flex space-x-6">
        //                 <Link href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm">
        //                     Privacy Policy
        //                 </Link>
        //                 <Link href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm">
        //                     Terms of Service
        //                 </Link>
        //                 <Link href="/sitemap" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 text-sm">
        //                     Sitemap
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
        // Uncomment karna h last mai isse and only landing page par show ho aaiase banana h mujjhe
        <footer>
            <div className="">Foooterrr</div>
        </footer>
    );
}
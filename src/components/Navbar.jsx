export default function Navbar() {
return (
<nav className="flex items-center justify-between px-10 py-5 shadow-sm">
<h1 className="text-2xl font-bold text-indigo-600">Edunity</h1>
<ul className="hidden md:flex gap-8 text-sm font-medium">
<li>Home</li>
<li>About Us</li>
<li>Courses</li>
<li>Pages</li>
<li>Blog</li>
<li>Contact</li>
</ul>
<button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm">
Create Account
</button>
</nav>
);
}
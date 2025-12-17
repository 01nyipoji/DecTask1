export default function Hero() {
return (
<section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">
<div>
<p className="text-indigo-600 font-semibold mb-2">
Welcome to Edunity Online Courses
</p>
<h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
Achieving Your Dreams <br /> Through Education
</h2>
<p className="text-gray-600 mb-8">
We are passionate about education and committed to delivering
world‑class learning experiences.
</p>
<button className="bg-indigo-600 text-white px-8 py-3 rounded-full">
Find Courses
</button>
</div>


<div className="relative">
<img
src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
alt="students"
className="rounded-3xl shadow-lg"
/>
<div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-xl shadow">
<p className="text-sm font-semibold">200+ Instructor</p>
</div>
</div>
</section>
);
}
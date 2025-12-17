const categories = [
"Business Management",
"Arts & Design",
"Personal Development",
"UI/UX Design",
"Graphic Design",
"Digital Marketing",
"Product Design",
"Video & Photography",
];


export default function Categories() {
return (
<section className="px-10 py-16 bg-gray-50">
<h3 className="text-2xl font-bold mb-10">Browse By Categories</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
{categories.map((cat, index) => (
<div
key={index}
className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
>
<p className="font-medium">{cat}</p>
</div>
))}
</div>
</section>
);
}